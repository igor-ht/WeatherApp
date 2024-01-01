import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/redux/state/store';
import { CurrentCityType } from '../currentCity/currentCitySlice';
import { accuweatherApi } from '@/redux/service/accuweatherApi';

const updateFavoritesLocalStorage = (city: CurrentCityType, action: 'add' | 'remove') => {
	const localStorageFavs = JSON.parse(window.localStorage.getItem('favorites') || '[]') || [];
	if (action === 'add') {
		localStorageFavs.push(city);
		window.localStorage.setItem('favorites', JSON.stringify(localStorageFavs));
	} else {
		window.localStorage.setItem(
			'favorites',
			JSON.stringify(localStorageFavs.filter((favorite: CurrentCityType) => favorite.city?.key !== city.city?.key))
		);
	}
};

export const fetchCurrentWeatherForFavorites = createAsyncThunk(
	'favorites/fetchCurrentWeatherForFavorites',
	async (favorites: { favorites: CurrentCityType[] }, { dispatch }) => {
		return {
			favorites: await Promise.all(
				favorites.favorites.map(async (favorite) => {
					const { city } = favorite;
					if (city) {
						try {
							if (Math.abs(Math.floor(new Date().getTime() / 1000) - favorite?.currentWeather.EpochTime) >= 6 * 60 * 60 * 1000) {
								const res = await dispatch(accuweatherApi.endpoints.getCurrentWeather.initiate(city.key));
								console.log('updated');
								return { ...favorite, currentWeather: res.data[0] };
							} else return favorite;
						} catch (error) {
							console.error(`Error fetching current weather for city ${city?.key}:`, error);
							return favorite;
						}
					}
				})
			),
		};
	}
);

interface FavoritesI {
	favorites: CurrentCityType[];
}

const initialState: FavoritesI = {
	favorites: JSON.parse(window.localStorage.getItem('favorites') || '[]') || [],
};

const favoritesSlice = createSlice({
	name: 'favorites',
	initialState,
	reducers: {
		addFavorite: (state, action) => {
			for (const fav of state.favorites) {
				if (fav.city?.key === action.payload.city.key) return state;
			}
			updateFavoritesLocalStorage(action.payload, 'add');
			state.favorites.push(action.payload);
		},
		removeFavorite: (state, action) => {
			updateFavoritesLocalStorage(action.payload, 'remove');
			return { favorites: state.favorites.filter((favorite) => favorite.city?.key !== action.payload.city.key) };
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchCurrentWeatherForFavorites.fulfilled, (state, action) => {
			state.favorites.map((favorite, i) => {
				if (favorite.city?.key === action.payload.favorites[i]?.city?.key)
					favorite.currentWeather = action.payload.favorites[i]?.currentWeather;
			});
			window.localStorage.setItem('favorites', JSON.stringify(action.payload.favorites));
		});
	},
});

export const allFavorites = (state: RootState) => state.favorites;

export const { addFavorite, removeFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;

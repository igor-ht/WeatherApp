import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/redux/state/store';
import { CurrentCityType } from '../currentCity/currentCitySlice';

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
			const cityKeys = state.favorites.map((favorite) => favorite.city?.key);
			if (cityKeys.includes(action.payload.city.key)) return state;
			updateFavoritesLocalStorage(action.payload, 'add');
			return { favorites: [...state.favorites, action.payload] };
		},
		removeFavorite: (state, action) => {
			updateFavoritesLocalStorage(action.payload, 'remove');
			return { favorites: state.favorites.filter((favorite) => favorite.city?.key !== action.payload.city.key) };
		},
		updateFavorites: (_, action) => {
			window.localStorage.setItem('favorites', JSON.stringify(action.payload.favorites));
			return { favorites: action.payload.favorites };
		},
	},
});

export const allFavorites = (state: RootState) => state.favorites;

export const { addFavorite, removeFavorite, updateFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;

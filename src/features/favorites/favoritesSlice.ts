import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../state/store';
import { CurrentCityType } from '../currentCity/currentCitySlice';

interface FavoritesI {
	favorites: CurrentCityType[];
}

const initialState: FavoritesI = {
	favorites: [
		{
			city: {
				key: 215854,
				name: 'Netanya',
			},
			currentWeather: {
				WeatherText: 'Partly Cloud',
				HasPrecipitation: false,
				Temperature: {
					Metric: { Value: 19.4, Unit: 'C', UnitType: 17 },
					Imperial: { Value: 67, Unit: 'F', UnitType: 18 },
				},
			},
			fiveDaysForecast: [],
		},
		{
			city: {
				key: 215834,
				name: 'Tel Aviv',
			},
			currentWeather: {
				WeatherText: 'Partly Cloud',
				HasPrecipitation: false,
				Temperature: {
					Metric: { Value: 19.4, Unit: 'C', UnitType: 17 },
					Imperial: { Value: 67, Unit: 'F', UnitType: 18 },
				},
			},
			fiveDaysForecast: [],
		},
	],
};

const favoritesSlice = createSlice({
	name: 'favorites',
	initialState,
	reducers: {
		addFavorite: (state, action) => {
			for (const fav of state.favorites) {
				if (fav.city.key === action.payload.city.key) return;
			}
			state.favorites.push(action.payload);
		},
		removeFavorite: (state, action) => {
			return { favorites: state.favorites.filter((favorite) => favorite.city.key !== action.payload.city.key) };
		},
	},
});

export const allFavorites = (state: RootState) => state.favorites;

export const { addFavorite, removeFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;

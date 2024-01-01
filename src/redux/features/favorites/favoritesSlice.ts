import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../state/store';
import { CurrentCityType } from '../currentCity/currentCitySlice';

interface FavoritesI {
	favorites: CurrentCityType[];
}

const initialState: FavoritesI = {
	favorites: [],
};

const favoritesSlice = createSlice({
	name: 'favorites',
	initialState,
	reducers: {
		addFavorite: (state, action) => {
			for (const fav of state.favorites) {
				if (fav.city?.key === action.payload.city.key) return state;
			}
			state.favorites.push(action.payload);
		},
		removeFavorite: (state, action) => {
			return { favorites: state.favorites.filter((favorite) => favorite.city?.key !== action.payload.city.key) };
		},
	},
});

export const allFavorites = (state: RootState) => state.favorites;

export const { addFavorite, removeFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;

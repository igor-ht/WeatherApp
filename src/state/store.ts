import { configureStore } from '@reduxjs/toolkit';
import { accuweatherApi } from '../features/api/accuweatherApi';
import currentCityReducer from '../features/currentCity/currentCitySlice';
import favoritesReducer from '../features/favorites/favoritesSlice';

export const store = configureStore({
	reducer: {
		currentCity: currentCityReducer,
		favorites: favoritesReducer,
		[accuweatherApi.reducerPath]: accuweatherApi.reducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(accuweatherApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

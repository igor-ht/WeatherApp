import { configureStore } from '@reduxjs/toolkit';
import { accuweatherApi } from '../service/accuweatherApi';
import currentCityReducer from '../features/currentCity/currentCitySlice';
import favoritesReducer from '../features/favorites/favoritesSlice';
import themeReducer from '../features/theme/themeSlice';
import temperatureUnitReducer from '../features/temperatureUnit/temperatureUnit';

export const store = configureStore({
	reducer: {
		theme: themeReducer,
		temperatureUnit: temperatureUnitReducer,
		currentCity: currentCityReducer,
		favorites: favoritesReducer,
		[accuweatherApi.reducerPath]: accuweatherApi.reducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(accuweatherApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

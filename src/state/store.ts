import { configureStore } from '@reduxjs/toolkit';
import currentCityReducer from './currentCity/currentCitySlice';
import { accuweatherApi } from '../services/accuweather';

export const store = configureStore({
	reducer: {
		currentCity: currentCityReducer,
		[accuweatherApi.reducerPath]: accuweatherApi.reducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

import { configureStore } from '@reduxjs/toolkit';
import currentCityReducer from './currentCitySlice';
import currentWeatherReducer from './currentWeatherSlice';
import { accuweatherApi } from '../services/accuweather';

export const store = configureStore({
	reducer: {
		currentCity: currentCityReducer,
		currentWeather: currentWeatherReducer,
		[accuweatherApi.reducerPath]: accuweatherApi.reducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

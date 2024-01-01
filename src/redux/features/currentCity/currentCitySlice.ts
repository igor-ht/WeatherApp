import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/redux/state/store';

interface CityI {
	key: number;
	name: string;
}

interface CurrentWeatherI {
	WeatherText: string;
	Temperature: {
		Metric: {
			Value: number;
			Unit: 'C';
		};
	};
}

export interface DailyForecastI {
	Date: string;
	Temperature: {
		Minimum: {
			Value: number;
			Unit: 'C';
		};
		Maximum: {
			Value: number;
			Unit: 'C';
		};
	};
}

export type CurrentCityType = {
	city: CityI | null;
	currentWeather: CurrentWeatherI;
	fiveDaysForecast: DailyForecastI[];
};

const initialState: CurrentCityType = {
	city: null,
	currentWeather: {
		WeatherText: '',
		Temperature: {
			Metric: { Value: 0, Unit: 'C' },
		},
	},
	fiveDaysForecast: [],
};

const currentCitySlice = createSlice({
	name: 'currentCity',
	initialState,
	reducers: {
		setCurrentCity: (state, action: PayloadAction<CityI>) => {
			state.city = action.payload;
		},
		setCurrentWeather: (state, action: PayloadAction<CurrentWeatherI>) => {
			state.currentWeather = action.payload;
		},
		setFiveDaysForecast: (state, action) => {
			state.fiveDaysForecast = action.payload;
		},
	},
});

export const currentCity = (state: RootState) => state.currentCity;

export const { setCurrentCity, setCurrentWeather, setFiveDaysForecast } = currentCitySlice.actions;

export default currentCitySlice.reducer;

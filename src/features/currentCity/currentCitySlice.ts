import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../state/store';

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
	city: CityI;
	currentWeather: CurrentWeatherI;
	fiveDaysForecast: DailyForecastI[];
};

const initialState: CurrentCityType = {
	city: {
		key: 215854,
		name: 'Netanya',
	},
	currentWeather: {
		WeatherText: 'Partly Cloud',
		Temperature: {
			Metric: { Value: 19.4, Unit: 'C' },
		},
	},
	fiveDaysForecast: [
		{
			Date: '2023-12-29T07:00:00+02:00',
			Temperature: {
				Minimum: {
					Value: 12.7,
					Unit: 'C',
				},
				Maximum: {
					Value: 22,
					Unit: 'C',
				},
			},
		},
		{
			Date: '2023-12-30T07:00:00+02:00',
			Temperature: {
				Minimum: {
					Value: 11.8,
					Unit: 'C',
				},
				Maximum: {
					Value: 21.9,
					Unit: 'C',
				},
			},
		},
		{
			Date: '2023-12-31T07:00:00+02:00',
			Temperature: {
				Minimum: {
					Value: 12.5,
					Unit: 'C',
				},
				Maximum: {
					Value: 21.1,
					Unit: 'C',
				},
			},
		},
		{
			Date: '2024-01-01T07:00:00+02:00',
			Temperature: {
				Minimum: {
					Value: 13.5,
					Unit: 'C',
				},
				Maximum: {
					Value: 20.5,
					Unit: 'C',
				},
			},
		},
		{
			Date: '2024-01-02T07:00:00+02:00',
			Temperature: {
				Minimum: {
					Value: 12.4,
					Unit: 'C',
				},
				Maximum: {
					Value: 20.5,
					Unit: 'C',
				},
			},
		},
	],
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

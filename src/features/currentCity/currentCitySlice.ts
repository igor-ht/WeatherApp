import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../state/store';

interface CityI {
	key: number;
	name: string;
}

interface CurrentWeatherI {
	WeatherText: string;
	HasPrecipitation: boolean;
	Temperature: {
		Metric: {
			Value: number;
			Unit: 'C';
			UnitType: number;
		};
		Imperial: {
			Value: number;
			Unit: 'F';
			UnitType: number;
		};
	};
}

export interface DailyForecastI {
	Date: string;
	Temperature: {
		Minimum: {
			Value: number;
			Unit: 'C';
			UnitType: number;
		};
		Maximum: {
			Value: number;
			Unit: 'C';
			UnitType: number;
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
		HasPrecipitation: false,
		Temperature: {
			Metric: { Value: 19.4, Unit: 'C', UnitType: 17 },
			Imperial: { Value: 67, Unit: 'F', UnitType: 18 },
		},
	},
	fiveDaysForecast: [
		{
			Date: '2023-12-29T07:00:00+02:00',
			Temperature: {
				Minimum: {
					Value: 12.7,
					Unit: 'C',
					UnitType: 17,
				},
				Maximum: {
					Value: 22,
					Unit: 'C',
					UnitType: 17,
				},
			},
		},
		{
			Date: '2023-12-30T07:00:00+02:00',
			Temperature: {
				Minimum: {
					Value: 11.8,
					Unit: 'C',
					UnitType: 17,
				},
				Maximum: {
					Value: 21.9,
					Unit: 'C',
					UnitType: 17,
				},
			},
		},
		{
			Date: '2023-12-31T07:00:00+02:00',
			Temperature: {
				Minimum: {
					Value: 12.5,
					Unit: 'C',
					UnitType: 17,
				},
				Maximum: {
					Value: 21.1,
					Unit: 'C',
					UnitType: 17,
				},
			},
		},
		{
			Date: '2024-01-01T07:00:00+02:00',
			Temperature: {
				Minimum: {
					Value: 13.5,
					Unit: 'C',
					UnitType: 17,
				},
				Maximum: {
					Value: 20.5,
					Unit: 'C',
					UnitType: 17,
				},
			},
		},
		{
			Date: '2024-01-02T07:00:00+02:00',
			Temperature: {
				Minimum: {
					Value: 12.4,
					Unit: 'C',
					UnitType: 17,
				},
				Maximum: {
					Value: 20.5,
					Unit: 'C',
					UnitType: 17,
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
			state.fiveDaysForecast.concat(action.payload);
		},
	},
});

export const currentCity = (state: RootState) => state.currentCity;

export const { setCurrentCity, setCurrentWeather, setFiveDaysForecast } = currentCitySlice.actions;

export default currentCitySlice.reducer;

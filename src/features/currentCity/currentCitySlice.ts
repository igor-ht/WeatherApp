import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../state/store';

interface CityI {
	key: number;
	name: string;
}
interface ForecastI {
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

export type CurrentCityType = {
	city: CityI;
	forecast: ForecastI;
};

const initialState: CurrentCityType = {
	city: {
		key: 215854,
		name: 'Netanya',
	},
	forecast: {
		WeatherText: 'Partly Cloud',
		HasPrecipitation: false,
		Temperature: {
			Metric: { Value: 19.4, Unit: 'C', UnitType: 17 },
			Imperial: { Value: 67, Unit: 'F', UnitType: 18 },
		},
	},
};

const currentCitySlice = createSlice({
	name: 'currentCity',
	initialState,
	reducers: {
		setCurrentCity: (state, action: PayloadAction<CityI>) => {
			state.city = action.payload;
		},
		setCurrentWeather: (state, action: PayloadAction<ForecastI>) => {
			state.forecast = action.payload;
		},
	},
});

export const currentCity = (state: RootState) => state.currentCity;

export const { setCurrentCity, setCurrentWeather } = currentCitySlice.actions;

export default currentCitySlice.reducer;

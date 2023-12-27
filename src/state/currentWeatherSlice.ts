import { PayloadAction, createSlice } from '@reduxjs/toolkit';

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

const initialState: CurrentWeatherI = {
	WeatherText: 'Partly Cloud',
	HasPrecipitation: false,
	Temperature: {
		Metric: { Value: 19.4, Unit: 'C', UnitType: 17 },
		Imperial: { Value: 67, Unit: 'F', UnitType: 18 },
	},
};

const currentWeatherSlice = createSlice({
	name: 'currentWeather',
	initialState,
	reducers: {
		setCurrentWeather: (_state, action: PayloadAction<CurrentWeatherI>) => {
			_state = action.payload;
		},
	},
});

export const { setCurrentWeather } = currentWeatherSlice.actions;

export default currentWeatherSlice.reducer;

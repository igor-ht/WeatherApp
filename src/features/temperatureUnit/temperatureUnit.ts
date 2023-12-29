import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../state/store';

const initialState: { unit: 'C' | 'F' } = {
	unit: (window.localStorage.getItem('unit') as 'C' | 'F') || 'C',
};

const temperatureUnitSlice = createSlice({
	name: 'temperatureUnit',
	initialState,
	reducers: {
		setTemperatureUnit: (state) => {
			const newState = state.unit === 'C' ? 'F' : 'C';
			state.unit = newState;
			window.localStorage.setItem('unit', newState);
		},
	},
});

export const temperatureUnit = (state: RootState) => state.temperatureUnit;

export const { setTemperatureUnit } = temperatureUnitSlice.actions;

export default temperatureUnitSlice.reducer;

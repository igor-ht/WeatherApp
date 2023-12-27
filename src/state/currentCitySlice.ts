import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface CurrentCityI {
	key: number;
	name: string;
}

const initialState: CurrentCityI = {
	key: 215854,
	name: 'Tel Aviv',
};

const currentCitySlice = createSlice({
	name: 'currentCity',
	initialState,
	reducers: {
		setCurrentCity: (_state, action: PayloadAction<CurrentCityI>) => {
			_state = action.payload;
		},
	},
});

export const { setCurrentCity } = currentCitySlice.actions;

export default currentCitySlice.reducer;

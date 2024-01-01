import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../state/store';

const initialState = { theme: window.localStorage.getItem('theme') || 'light' };

const themeSlice = createSlice({
	name: 'theme',
	initialState,
	reducers: {
		setTheme: (state) => {
			const newTheme = state.theme === 'light' ? 'dark' : 'light';
			state.theme = newTheme;
			window.localStorage.setItem('theme', newTheme);
		},
	},
});

export const theme = (state: RootState) => state.theme;

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;

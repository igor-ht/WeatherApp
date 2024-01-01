import './App.scss';
import Header from './layout/Header/Header';
import MainContainer from './layout/MainContainer/MainContainer';
import { theme } from './redux/features/theme/themeSlice';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { setCurrentCity } from './redux/features/currentCity/currentCitySlice';

function App() {
	const dispatch = useAppDispatch();
	const currentTheme = useAppSelector(theme);
	const [geolocation, setGeolocation] = useState<{ lat: string; lon: string } | null>(null);

	useEffect(() => {
		if (navigator.geolocation)
			navigator.geolocation.getCurrentPosition(
				(position) => {
					setGeolocation({ lat: String(position.coords.latitude), lon: String(position.coords.longitude) });
				},
				() => dispatch(setCurrentCity({ key: 215854, name: 'Tel Aviv' }))
			);
	}, []);

	return (
		<div
			className="app-container"
			data-theme={currentTheme.theme}>
			<Header />
			<MainContainer geolocation={geolocation} />
		</div>
	);
}

export default App;

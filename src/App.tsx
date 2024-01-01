import './App.scss';
import Header from './layout/Header/Header';
import MainContainer from './layout/MainContainer/MainContainer';
import { theme } from './redux/features/theme/themeSlice';
import { useEffect, useState } from 'react';
import { useAppSelector } from './redux/hooks';

function App() {
	const currentTheme = useAppSelector(theme);
	const [geolocation, setGeolocation] = useState<{ lat: string; lon: string } | null>(null);

	useEffect(() => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition((position) => {
				setGeolocation({ lat: String(position.coords.latitude), lon: String(position.coords.longitude) });
			});
		}
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

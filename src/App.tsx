import './App.scss';
import Header from './layout/Header/Header';
import MainContainer from './layout/MainContainer/MainContainer';
import { theme } from './redux/features/theme/themeSlice';
import { useAppSelector } from './redux/hooks';

function App() {
	const currentTheme = useAppSelector(theme);

	return (
		<div
			className="app-container"
			data-theme={currentTheme.theme}>
			<Header />
			<MainContainer />
		</div>
	);
}

export default App;

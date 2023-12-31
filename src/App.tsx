import { useSelector } from 'react-redux';
import './App.scss';
import Header from './layout/Header/Header';
import MainContainer from './layout/MainContainer/MainContainer';
import { theme } from './features/theme/themeSlice';

function App() {
	const currentTheme = useSelector(theme);

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

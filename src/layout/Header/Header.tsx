import './Header.scss';
import { Link } from 'react-router-dom';
import Settings from './components/Settings/Settings';
import { useSelector } from 'react-redux';
import { theme } from '../../redux/features/theme/themeSlice';

export default function Header() {
	const currentTheme = useSelector(theme);
	return (
		<header data-theme={currentTheme.theme}>
			<div className="header-icon">WEATHER</div>
			<nav>
				<Link to="/">Home</Link>
				<Link to="/favorites">Favorites</Link>
			</nav>
			<Settings />
		</header>
	);
}

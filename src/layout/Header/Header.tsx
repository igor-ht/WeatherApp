import './Header.scss';
import HeaderIcon from './components/HeaderIcon/HeaderIcon';
import Nav from './components/Nav/Nav';
import Settings from './components/Settings/Settings';
import { useSelector } from 'react-redux';
import { theme } from '@/redux/features/theme/themeSlice';

export default function Header() {
	const currentTheme = useSelector(theme);
	return (
		<header data-theme={currentTheme.theme}>
			<HeaderIcon />
			<Nav />
			<Settings />
		</header>
	);
}

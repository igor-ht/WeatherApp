import './Settings.scss';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { theme } from '@/redux/features/theme/themeSlice';
import ThemeToggleButton from './ThemeToggleButton/ThemeToggleButton';
import TemperatureUnitToggleButton from './TemperatureUnitToggleButton/TemperatureUnitToggleButton';

export default function Settings() {
	const currentTheme = useSelector(theme);
	const [openSettings, setOpenSettings] = useState(false);

	return (
		<div className="settings">
			<button
				type="button"
				onClick={() => setOpenSettings((prev) => !prev)}>
				<img
					src="./settings.svg"
					alt="settings"
				/>
			</button>
			<dialog
				open={openSettings}
				data-theme={currentTheme.theme}>
				<ThemeToggleButton />
				<TemperatureUnitToggleButton />
			</dialog>
		</div>
	);
}

import './Settings.scss';
import ThemeToggleButton from './ThemeToggleButton/ThemeToggleButton';
import TemperatureUnitToggleButton from './TemperatureUnitToggleButton/TemperatureUnitToggleButton';
import { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { theme } from '@/redux/features/theme/themeSlice';
import { useClickOutsideModal } from '@/utils/useClickOutsideModal';

export default function Settings() {
	const currentTheme = useSelector(theme);
	const [openSettings, setOpenSettings] = useState(false);

	const modal = useRef<HTMLDivElement | null>(null);
	useClickOutsideModal(modal, () => setOpenSettings(false));

	return (
		<div
			ref={modal}
			className="settings">
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

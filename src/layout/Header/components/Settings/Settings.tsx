import './Settings.scss';
import { useState } from 'react';
import ThemeToggleButton from './ThemeToggleButton/ThemeToggleButton';
import TemperatureUnitToggleButton from './TemperatureUnitToggleButton/TemperatureUnitToggleButton';

export default function Settings() {
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
			<dialog open={openSettings}>
				<ThemeToggleButton />
				<TemperatureUnitToggleButton />
			</dialog>
		</div>
	);
}

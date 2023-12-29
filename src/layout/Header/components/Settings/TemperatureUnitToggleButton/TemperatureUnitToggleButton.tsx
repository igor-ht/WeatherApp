import './TemperatureUnitToggleButton.scss';
import { ChangeEvent } from 'react';

export default function TemperatureUnitToggleButton() {
	const handleToggleBtn = (event: ChangeEvent<HTMLInputElement>) => {
		console.log(event.target.checked);
	};
	return (
		<div className="temp-unit-toggle-btn">
			<input
				type="checkbox"
				id="temp-unit-toggle"
				onChange={handleToggleBtn}
			/>
			<label htmlFor="temp-unit-toggle">
				<div className="celsius">°C</div>
				<div className="fahrenheit">°F</div>
			</label>
		</div>
	);
}

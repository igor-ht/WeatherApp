import './TemperatureUnitToggleButton.scss';
import { useDispatch, useSelector } from 'react-redux';
import { temperatureUnit, setTemperatureUnit } from '@/redux/features/temperatureUnit/temperatureUnit';

export default function TemperatureUnitToggleButton() {
	const unit = useSelector(temperatureUnit);
	const dispatch = useDispatch();

	const handleToggleBtn = () => {
		dispatch(setTemperatureUnit());
	};
	return (
		<div className="temp-unit-toggle-btn">
			<input
				type="checkbox"
				id="temp-unit-toggle"
				onChange={handleToggleBtn}
				checked={unit.unit === 'F'}
			/>
			<label htmlFor="temp-unit-toggle">
				<div className="celsius">°C</div>
				<div className="fahrenheit">°F</div>
			</label>
		</div>
	);
}

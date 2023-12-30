import './ForecastDayCard.scss';
import { useSelector } from 'react-redux';
import { DailyForecastI, currentCity } from '../../../../../../../features/currentCity/currentCitySlice';
import { temperatureUnit } from '../../../../../../../features/temperatureUnit/temperatureUnit';

export default function ForecastDayCard(forecast: DailyForecastI) {
	const city = useSelector(currentCity);
	const unit = useSelector(temperatureUnit);

	const dateObject = new Date(forecast.Date);
	const weekDay = dateObject.toLocaleString('en-US', { weekday: 'long' });

	return (
		<div className="forecast-card">
			<h1>{city.city.name}</h1>
			<h1>
				Min
				{unit.unit === 'F' ? (forecast?.Temperature?.Minimum?.Value * 1.8 + 32).toFixed() : forecast.Temperature?.Minimum?.Value?.toFixed()}
				°{unit.unit}
			</h1>
			<h1>
				Max{' '}
				{unit.unit === 'F' ? (forecast?.Temperature?.Maximum?.Value * 1.8 + 32).toFixed() : forecast.Temperature?.Maximum?.Value?.toFixed()}
				°{unit.unit}
			</h1>
			<h1>{weekDay}</h1>
		</div>
	);
}

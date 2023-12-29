import './ForecastDayCard.scss';
import { useSelector } from 'react-redux';
import { DailyForecastI, currentCity } from '../../../../../../../features/currentCity/currentCitySlice';

export default function ForecastDayCard(forecast: DailyForecastI) {
	const city = useSelector(currentCity);

	const dateObject = new Date(forecast.Date);
	// const monthDay = dateObject.getDate();
	const weekDay = dateObject.toLocaleString('en-US', { weekday: 'long' });

	return (
		<div className="forecast-card">
			<h1>{city.city.name}</h1>
			<h1>Min {forecast.Temperature.Minimum.Value.toFixed()}°C</h1>
			<h1>Max {forecast.Temperature.Maximum.Value.toFixed()}°C</h1>
			<h1>{weekDay}</h1>
		</div>
	);
}

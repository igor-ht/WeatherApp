import { useSelector } from 'react-redux';
import './FiveDaysForecast.scss';
import ForecastDayCard from './ForecastDayCard/ForecastDayCard';
import { currentCity } from '../../../../../../features/currentCity/currentCitySlice';

export default function FiveDaysForecast() {
	const city = useSelector(currentCity);
	return (
		<div className="five-days-forecast-container">
			{city.fiveDaysForecast.map((day, i) => {
				return (
					<ForecastDayCard
						key={i}
						{...day}
					/>
				);
			})}
		</div>
	);
}

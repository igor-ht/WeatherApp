import { useSelector, useDispatch } from 'react-redux';
import './FiveDaysForecast.scss';
import ForecastDayCard from './ForecastDayCard/ForecastDayCard';
import { currentCity, setFiveDaysForecast } from '../../../../../../features/currentCity/currentCitySlice';
import { useGetFiveDaysForecastQuery } from '../../../../../../features/api/accuweatherApi';

export default function FiveDaysForecast() {
	const city = useSelector(currentCity);
	const dispatch = useDispatch();
	// const { data } = useGetFiveDaysForecastQuery(city.city.key);
	// if (data) dispatch(setFiveDaysForecast(data.DailyForecasts));

	return (
		<div className="five-days-forecast-container">
			{city?.fiveDaysForecast?.map((day, i) => {
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

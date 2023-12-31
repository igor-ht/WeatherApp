import { useSelector, useDispatch } from 'react-redux';
import './FiveDaysForecast.scss';
import ForecastDayCard from './ForecastDayCard/ForecastDayCard';
import { currentCity, setFiveDaysForecast } from '../../../../../../features/currentCity/currentCitySlice';
import { useGetFiveDaysForecastQuery } from '../../../../../../features/api/accuweatherApi';
import { useEffect } from 'react';

export default function FiveDaysForecast() {
	const city = useSelector(currentCity);
	const dispatch = useDispatch();
	const { data } = useGetFiveDaysForecastQuery(city.city.key);

	useEffect(() => {
		if (data) dispatch(setFiveDaysForecast(data.DailyForecasts));
	}, [data]);

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

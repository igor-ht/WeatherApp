import './FiveDaysForecast.scss';
import ForecastDayCard from './ForecastDayCard/ForecastDayCard';
import { currentCity, setFiveDaysForecast } from '../../../../../../redux/features/currentCity/currentCitySlice';
import { useGetFiveDaysForecastQuery } from '../../../../../../redux/service/accuweatherApi';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../../../redux/hooks';
import { skipToken } from '@reduxjs/toolkit/query';

export default function FiveDaysForecast() {
	const city = useAppSelector(currentCity);
	const dispatch = useAppDispatch();
	const { data } = useGetFiveDaysForecastQuery(city.city?.key ?? skipToken);

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

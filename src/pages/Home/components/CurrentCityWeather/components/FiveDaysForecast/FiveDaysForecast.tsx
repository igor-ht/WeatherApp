import './FiveDaysForecast.scss';
import ForecastDayCard from './ForecastDayCard/ForecastDayCard';
import { useEffect } from 'react';
import { skipToken } from '@reduxjs/toolkit/query';
import { currentCity, setFiveDaysForecast } from '@/redux/features/currentCity/currentCitySlice';
import { useGetFiveDaysForecastQuery } from '@/redux/service/accuweatherApi';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';

export default function FiveDaysForecast() {
	const city = useAppSelector(currentCity);
	const dispatch = useAppDispatch();
	const { data, isLoading, isError } = useGetFiveDaysForecastQuery(city.city?.key ?? skipToken);

	useEffect(() => {
		if (data) dispatch(setFiveDaysForecast(data.DailyForecasts));
	}, [data, dispatch]);

	if (isLoading) return <div className="five-days-forecast-container" />;

	if (isError && city.currentWeather.EpochTime !== 0)
		return (
			<div className="five-days-forecast-container">
				<section className="error">
					<h1>We got an error.</h1>
					<h2>Try again later.</h2>
				</section>
			</div>
		);

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

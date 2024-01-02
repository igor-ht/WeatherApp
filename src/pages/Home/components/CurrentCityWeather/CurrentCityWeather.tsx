import './CurrentCityWather.scss';
import CurrentWeather from './components/CurrentWeather/CurrentWeather';
import FiveDaysForecast from './components/FiveDaysForecast/FiveDaysForecast';
import { useEffect, useState } from 'react';
import { useGetCityByCoordinatesQuery } from '@/redux/service/accuweatherApi';
import { setCurrentCity } from '@/redux/features/currentCity/currentCitySlice';
import { useAppDispatch } from '@/redux/hooks';
import { skipToken } from '@reduxjs/toolkit/query';

export default function CurrentCityWeather() {
	const [geolocation, setGeolocation] = useState<{ lat: string; lon: string } | null>(null);
	const dispatch = useAppDispatch();
	const { data } = useGetCityByCoordinatesQuery(geolocation ?? skipToken);

	useEffect(() => {
		if (navigator.geolocation)
			navigator.geolocation.getCurrentPosition(
				(position) => {
					setGeolocation({ lat: String(position.coords.latitude), lon: String(position.coords.longitude) });
				},
				() => dispatch(setCurrentCity({ key: 215854, name: 'Tel Aviv' }))
			);
		else dispatch(setCurrentCity({ key: 215854, name: 'Tel Aviv' }));
	}, [dispatch]);

	useEffect(() => {
		if (data) dispatch(setCurrentCity({ key: data.Key, name: data.LocalizedName }));
	}, [data, dispatch]);

	return (
		<div className="current-city-container">
			<CurrentWeather />
			<FiveDaysForecast />
		</div>
	);
}

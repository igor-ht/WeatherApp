import './MainContainer.scss';
import { setCurrentCity } from '@/redux/features/currentCity/currentCitySlice';
import { useAppDispatch } from '@/redux/hooks';
import { accuweatherApi } from '@/redux/service/accuweatherApi';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

export default function MainContainer() {
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (navigator.geolocation) {
			const handleGeolocationWeather = async (coords: { lat: string; lon: string }) => {
				const ans = await dispatch(accuweatherApi.endpoints.getCityByCoordinates.initiate(coords));
				dispatch(setCurrentCity({ key: ans?.data.Key, name: ans?.data.LocalizedName }));
			};
			navigator.geolocation.getCurrentPosition(
				async (position) => {
					await handleGeolocationWeather({ lat: String(position.coords.latitude), lon: String(position.coords.longitude) });
				},
				() => dispatch(setCurrentCity({ key: 215854, name: 'Tel Aviv' }))
			);
		} else dispatch(setCurrentCity({ key: 215854, name: 'Tel Aviv' }));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	
	return (
		<main className="main-container">
			<Outlet />
		</main>
	);
}

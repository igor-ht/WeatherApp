import './MainContainer.scss';
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { skipToken } from '@reduxjs/toolkit/query';
import { useGetCityByCoordinatesQuery } from '@/redux/service/accuweatherApi';
import { useAppDispatch } from '@/redux/hooks';
import { setCurrentCity } from '@/redux/features/currentCity/currentCitySlice';

export default function MainContainer({ geolocation }: { geolocation: { lat: string; lon: string } | null }) {
	const dispatch = useAppDispatch();
	const { data } = useGetCityByCoordinatesQuery(geolocation ?? skipToken);

	useEffect(() => {
		if (data) dispatch(setCurrentCity({ key: data.Key, name: data.LocalizedName }));
	}, [data, dispatch]);

	return (
		<main className="main-container">
			<Outlet />
		</main>
	);
}

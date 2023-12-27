import { useEffect } from 'react';
import { setCurrentCity } from '../state/currentCity/currentCitySlice';

export default function useGeolocationApi() {
	useEffect(() => {
		if (!navigator.geolocation) {
			setCurrentCity({
				key: 215854,
				name: 'Tel Aviv',
			});
		} else {
			const showPosition = (position: any) => {
				const latitude = position.coords.latitude;
				const longitude = position.coords.longitude;
				console.log(latitude, longitude);
				// set state of currentCity to the city key after fetching from api using coords
			};

			navigator.geolocation.getCurrentPosition(showPosition);
		}
	}, []);
}

import { Outlet } from 'react-router-dom';
// import { useGetCityByCoordinatesQuery } from '../../services/accuweather';

export default function MainContainer() {
	// let coords = { lat: '32.0853', lon: '34.7818' };
	// if (navigator.geolocation)
	// 	navigator.geolocation.getCurrentPosition((position) => {
	// 		coords = {
	// 			lat: '' + position.coords.latitude,
	// 			lon: '' + position.coords.longitude,
	// 		};
	// 	});
	// const { data } = useGetCityByCoordinatesQuery(coords);
	// console.log(data);

	return (
		<main>
			<Outlet />
		</main>
	);
}

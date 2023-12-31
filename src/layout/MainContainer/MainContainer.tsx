import { Outlet } from 'react-router-dom';
// import { useGetCityByCoordinatesQuery } from '../../features/api/accuweatherApi';
// import { useDispatch } from 'react-redux';
// import { setCurrentCity } from '../../features/currentCity/currentCitySlice';

export default function MainContainer() {
	// const dispatch = useDispatch();

	// let coords = { lat: '32.111767', lon: '34.801361' };
	// if (navigator.geolocation)
	// 	navigator.geolocation.getCurrentPosition((position) => {
	// 		coords = {
	// 			lat: '' + position.coords.latitude,
	// 			lon: '' + position.coords.longitude,
	// 		};
	// 	});
	// const { data } = useGetCityByCoordinatesQuery(coords);
	// if (data) dispatch(setCurrentCity({ key: data?.Key, name: data?.LocalizedName }));

	return (
		<main style={{ flex: '1' }}>
			<Outlet />
		</main>
	);
}

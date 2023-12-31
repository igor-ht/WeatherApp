import './Home.scss';
import CurrentCityWeather from './components/CurrentCityWeather/CurrentCityWeather';
import SearchCityByName from './components/SearchCityByName/SearchCityByName';
// import { useDispatch } from 'react-redux';
// import { accuweatherApi, useGetCityByCoordinatesQuery } from '../../features/api/accuweatherApi';

export default function Home() {
	// const dispatch = useDispatch();
	// const { data: geolocation } = useGetCityByCoordinatesQuery(null);

	return (
		<div className="home-container">
			<SearchCityByName />
			<CurrentCityWeather />
		</div>
	);
}

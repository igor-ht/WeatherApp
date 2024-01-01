import './Home.scss';
import CurrentCityWeather from './components/CurrentCityWeather/CurrentCityWeather';
import SearchCityByName from './components/SearchCityByName/SearchCityByName';

export default function Home() {
	return (
		<div className="home-container">
			<SearchCityByName />
			<CurrentCityWeather />
		</div>
	);
}

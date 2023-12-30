import CurrentWeather from './components/CurrentWeather/CurrentWeather';
import FiveDaysForecast from './components/FiveDaysForecast/FiveDaysForecast';

export default function CurrentCityWeather() {
	return (
		<div className="current-city-container">
			<CurrentWeather />
			<FiveDaysForecast />
		</div>
	);
}

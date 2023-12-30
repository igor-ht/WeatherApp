import './CurrentWeather.scss';
import { currentCity, setCurrentWeather } from '../../../../../../features/currentCity/currentCitySlice';
import { addFavorite } from '../../../../../../features/favorites/favoritesSlice';
import { useDispatch, useSelector } from 'react-redux';
import { temperatureUnit } from '../../../../../../features/temperatureUnit/temperatureUnit';
import { useGetCurrentWeatherQuery } from '../../../../../../features/api/accuweatherApi';

export default function CurrentWeather() {
	const city = useSelector(currentCity);
	const dispatch = useDispatch();
	const { data } = useGetCurrentWeatherQuery(city.city.key);
	if (data) dispatch(setCurrentWeather(data));
	const unit = useSelector(temperatureUnit);

	const addCityToFavorites = () => {
		dispatch(addFavorite(city));
	};

	return (
		<div className="current-weather-container">
			<div className="top-section">
				<div className="add-to-favorites">
					<button onClick={addCityToFavorites}>Favorites</button>
				</div>
				<div className="base-info">
					<h1>{city.city?.name}</h1>
					<h1>
						{unit.unit === 'F'
							? (city.currentWeather?.Temperature?.Metric?.Value * 1.8 + 32).toFixed()
							: city.currentWeather?.Temperature?.Metric?.Value.toFixed()}
						°{unit.unit}
					</h1>
				</div>
			</div>
			<div className="bottom-section">
				<h1>{city.currentWeather?.WeatherText}</h1>
			</div>
		</div>
	);
}

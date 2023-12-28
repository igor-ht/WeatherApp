import './CurrentWeather.scss';
import { CurrentCityType } from '../../../../../../features/currentCity/currentCitySlice';
import { addFavorite } from '../../../../../../features/favorites/favoritesSlice';
import { useDispatch } from 'react-redux';

export default function CurrentWeather(props: CurrentCityType) {
	const dispatch = useDispatch();

	const addCityToFavorites = () => {
		dispatch(addFavorite(props));
	};
	
	return (
		<div className="current-weather-container">
			<div className="top-section">
				<div className="add-to-favorites">
					<button onClick={addCityToFavorites}>Favorites</button>
				</div>
				<div className="base-info">
					<h1>{props.city.name}</h1>
					<h1>{props.forecast.Temperature.Metric.Value.toFixed()}°C</h1>
				</div>
			</div>
			<div className="bottom-section">
				<h1>{props.forecast.WeatherText}</h1>
			</div>
		</div>
	);
}

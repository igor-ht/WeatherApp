import './CurrentWeather.scss';
import { CurrentCityType } from '../../../../../../features/currentCity/currentCitySlice';
import { addFavorite } from '../../../../../../features/favorites/favoritesSlice';
import { useDispatch, useSelector } from 'react-redux';
import { temperatureUnit } from '../../../../../../features/temperatureUnit/temperatureUnit';

export default function CurrentWeather(props: CurrentCityType) {
	const dispatch = useDispatch();
	const unit = useSelector(temperatureUnit);

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
					<h1>
						{unit.unit === 'F'
							? (props.currentWeather.Temperature.Metric.Value * 1.8 + 32).toFixed()
							: props.currentWeather.Temperature.Metric.Value.toFixed()}
						°{unit.unit}
					</h1>
				</div>
			</div>
			<div className="bottom-section">
				<h1>{props.currentWeather.WeatherText}</h1>
			</div>
		</div>
	);
}

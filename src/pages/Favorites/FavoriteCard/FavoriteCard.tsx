import './FavoriteCard.scss';
import { CurrentCityType, setCurrentCity, setCurrentWeather } from '../../../features/currentCity/currentCitySlice';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeFavorite } from '../../../features/favorites/favoritesSlice';
import { temperatureUnit } from '../../../features/temperatureUnit/temperatureUnit';

export default function FavoriteCard(props: CurrentCityType) {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const unit = useSelector(temperatureUnit);

	const handleUpdateCurrentCity = () => {
		dispatch(setCurrentCity(props.city));
		dispatch(setCurrentWeather(props.currentWeather));
		navigate('/');
	};

	const removeCityFromFavorites = () => {
		dispatch(removeFavorite(props));
	};

	return (
		<div className="favorite-card">
			<button
				type="button"
				onClick={removeCityFromFavorites}>
				Remove
			</button>
			<div onClick={handleUpdateCurrentCity}>
				<h1>{props.city.name}</h1>
				<h1>
					{unit.unit === 'F'
						? (props.currentWeather?.Temperature?.Metric?.Value * 1.8 + 32).toFixed()
						: props.currentWeather?.Temperature?.Metric?.Value?.toFixed()}
					°{unit.unit}
				</h1>
				<h1>{props.currentWeather?.WeatherText}</h1>
			</div>
		</div>
	);
}

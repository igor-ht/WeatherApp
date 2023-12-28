import './FavoriteCard.scss';
import { CurrentCityType, setCurrentCity, setCurrentWeather } from '../../../features/currentCity/currentCitySlice';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeFavorite } from '../../../features/favorites/favoritesSlice';

export default function FavoriteCard(props: CurrentCityType) {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleUpdateCurrentCity = () => {
		dispatch(setCurrentCity(props.city));
		dispatch(setCurrentWeather(props.forecast));
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
				<h1>{props.forecast.Temperature.Metric.Value}</h1>
				<h1>{props.forecast.WeatherText}</h1>
			</div>
		</div>
	);
}

import './FavoriteCard.scss';
import { CurrentCityType, setCurrentCity, setCurrentWeather } from '../../../features/currentCity/currentCitySlice';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, allFavorites, removeFavorite } from '../../../features/favorites/favoritesSlice';
import { temperatureUnit } from '../../../features/temperatureUnit/temperatureUnit';
import { useState, useEffect } from 'react';
import { theme } from '../../../features/theme/themeSlice';

export default function FavoriteCard(props: CurrentCityType) {
	const favorites = useSelector(allFavorites);
	const unit = useSelector(temperatureUnit);
	const currentTheme = useSelector(theme);
	const dispatch = useDispatch();
	const [isFavorite, setIsFavorite] = useState(false);
	const navigate = useNavigate();

	const handleFavoriteStatus = () => {
		if (!isFavorite) dispatch(addFavorite(props));
		else dispatch(removeFavorite(props));
		setIsFavorite((prev) => !prev);
	};

	useEffect(() => {
		for (const favorite of favorites.favorites) {
			if (favorite.city.key === props.city.key) setIsFavorite(true);
		}
	}, [favorites, props]);

	const handleUpdateCurrentCity = () => {
		dispatch(setCurrentCity(props.city));
		dispatch(setCurrentWeather(props.currentWeather));
		navigate('/');
	};

	return (
		<div
			className="favorite-card"
			data-theme={currentTheme.theme}>
			<button
				type="button"
				onClick={handleFavoriteStatus}>
				<img
					src={isFavorite ? './heart-filled.svg' : './heart-empty.svg'}
					alt="favorite"
					title="favorite"
				/>
			</button>
			<div
				className="favorite-info"
				onClick={handleUpdateCurrentCity}>
				<h1>{props.city.name}</h1>
				<section>
					<h1>
						{unit.unit === 'F'
							? (props.currentWeather?.Temperature?.Metric?.Value * 1.8 + 32).toFixed()
							: props.currentWeather?.Temperature?.Metric?.Value?.toFixed()}
						&deg;{unit.unit}
					</h1>
					<h1>{props.currentWeather?.WeatherText}</h1>
				</section>
			</div>
		</div>
	);
}

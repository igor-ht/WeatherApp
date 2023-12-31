import './CurrentWeather.scss';
import { currentCity, setCurrentWeather } from '../../../../../../features/currentCity/currentCitySlice';
import { addFavorite, removeFavorite, allFavorites } from '../../../../../../features/favorites/favoritesSlice';
import { useDispatch, useSelector } from 'react-redux';
import { temperatureUnit } from '../../../../../../features/temperatureUnit/temperatureUnit';
import { useGetCurrentWeatherQuery } from '../../../../../../features/api/accuweatherApi';
import { useState, useEffect } from 'react';
import { theme } from '../../../../../../features/theme/themeSlice';

export default function CurrentWeather() {
	const city = useSelector(currentCity);
	const favorites = useSelector(allFavorites);
	const currentTheme = useSelector(theme);
	const dispatch = useDispatch();
	const unit = useSelector(temperatureUnit);
	const [isFavorite, setIsFavorite] = useState(false);
	const { data } = useGetCurrentWeatherQuery(city.city.key);

	const handleFavoriteStatus = () => {
		if (!isFavorite) dispatch(addFavorite(city));
		else dispatch(removeFavorite(city));
		setIsFavorite((prev) => !prev);
	};

	useEffect(() => {
		if (data) dispatch(setCurrentWeather(data[0]));
	}, [data]);

	useEffect(() => {
		for (const favorite of favorites.favorites) {
			if (favorite.city.key === city.city.key) setIsFavorite(true);
			console.log(favorite.city, city.city);
		}
	}, [favorites, city]);

	return (
		<div className="current-weather-container">
			<div className="base-info">
				<h1>{city.city?.name}</h1>
			</div>
			<div className="add-to-favorites">
				<button onClick={handleFavoriteStatus}>
					<img
						src={isFavorite ? './heart-filled.svg' : './heart-empty.svg'}
						alt="favorite"
						title="favorite"
						data-theme={isFavorite ? 'light' : currentTheme.theme}
					/>
				</button>
			</div>
			<div className="temperature">
				<h2>
					{unit.unit === 'F'
						? (city.currentWeather?.Temperature?.Metric?.Value * 1.8 + 32).toFixed()
						: city.currentWeather?.Temperature?.Metric?.Value.toFixed()}
					&deg;{unit.unit}
				</h2>
			</div>
			<div className="weatherText">
				<h1>{city.currentWeather?.WeatherText}</h1>
			</div>
			<div className="top-section"></div>
			<div className="bottom-section"></div>
		</div>
	);
}

import './CurrentWeather.scss';
import { currentCity, setCurrentWeather } from '@/redux/features/currentCity/currentCitySlice';
import { addFavorite, removeFavorite, allFavorites } from '@/redux/features/favorites/favoritesSlice';
import { temperatureUnit } from '@/redux/features/temperatureUnit/temperatureUnit';
import { useGetCurrentWeatherQuery } from '@/redux/service/accuweatherApi';
import { useState, useEffect } from 'react';
import { theme } from '@/redux/features/theme/themeSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { skipToken } from '@reduxjs/toolkit/query';

export default function CurrentWeather() {
	const currentTheme = useAppSelector(theme);
	const city = useAppSelector(currentCity);
	const favorites = useAppSelector(allFavorites);
	const unit = useAppSelector(temperatureUnit);
	const dispatch = useAppDispatch();
	const { data, isLoading, isError } = useGetCurrentWeatherQuery(city.city?.key ?? skipToken);
	const [isFavorite, setIsFavorite] = useState(false);

	const handleFavoriteStatus = () => {
		if (!isFavorite) dispatch(addFavorite(city));
		else dispatch(removeFavorite(city));

		setIsFavorite((prev) => !prev);
	};

	useEffect(() => {
		if (data) dispatch(setCurrentWeather(data[0]));
	}, [data, dispatch]);

	useEffect(() => {
		const isFavorite = favorites.favorites.find((favorite) => favorite.city?.key === city.city?.key);
		if (isFavorite) setIsFavorite(true);

		return () => setIsFavorite(false);
	}, [favorites, city]);

	if (isLoading || (!data && !isError && city.city))
		return (
			<div className="current-weather-container">
				<section className="loading">
					<h1>Loading...</h1>
				</section>
			</div>
		);

	if (isError || !data || !city.city)
		return (
			<div className="current-weather-container">
				<section className="error">
					<h1>We got an error.</h1>
					<h2>Try again later.</h2>
				</section>
			</div>
		);

	return (
		<div className="current-weather-container">
			<div className="first-row">
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
			</div>
			<div className="second-row">
				<div className="temperature">
					<h2>
						{unit.unit === 'F'
							? (city.currentWeather?.Temperature?.Metric?.Value * 1.8 + 32).toFixed()
							: city.currentWeather?.Temperature?.Metric?.Value.toFixed()}
						&deg;{unit.unit}
					</h2>
				</div>
				<div className="weatherText">
					<h2>{city.currentWeather?.WeatherText}</h2>
				</div>
			</div>
		</div>
	);
}

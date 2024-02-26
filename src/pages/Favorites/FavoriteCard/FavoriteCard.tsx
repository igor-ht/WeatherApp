import './FavoriteCard.scss';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { CurrentCityType, setCurrentCity } from '@/redux/features/currentCity/currentCitySlice';
import { removeFavorite } from '@/redux/features/favorites/favoritesSlice';
import { temperatureUnit } from '@/redux/features/temperatureUnit/temperatureUnit';
import { theme } from '@/redux/features/theme/themeSlice';

export default function FavoriteCard(props: CurrentCityType) {
	const currentTheme = useAppSelector(theme);
	const unit = useAppSelector(temperatureUnit);
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const handleUpdateCurrentCity = () => {
		if (props.city) dispatch(setCurrentCity(props.city));
		navigate('/');
	};

	return (
		<div
			className="favorite-card"
			data-theme={currentTheme.theme}>
			<button
				type="button"
				onClick={() => dispatch(removeFavorite(props))}>
				<img
					src={'./heart-filled.svg'}
					alt="favorite"
					title="favorite"
				/>
			</button>
			<div
				className="favorite-info"
				onClick={handleUpdateCurrentCity}>
				<h1>{props.city?.name}</h1>
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

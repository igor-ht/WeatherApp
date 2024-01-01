import './ForecastDayCard.scss';
import { useSelector } from 'react-redux';
import { DailyForecastI } from '../../../../../../../redux/features/currentCity/currentCitySlice';
import { temperatureUnit } from '../../../../../../../redux/features/temperatureUnit/temperatureUnit';
import { theme } from '../../../../../../../redux/features/theme/themeSlice';

export default function ForecastDayCard(forecast: DailyForecastI) {
	const unit = useSelector(temperatureUnit);
	const currentTheme = useSelector(theme);

	const dateObject = new Date(forecast.Date);
	const weekDay = dateObject.toLocaleString('en-US', { weekday: 'long' });

	return (
		<div
			className="forecast-card"
			data-theme={currentTheme.theme}>
			<h1>{weekDay}</h1>
			<div className="temperature">
				<section>
					<span>Min&nbsp;</span>
					<span>
						{unit.unit === 'F'
							? (forecast?.Temperature?.Minimum?.Value * 1.8 + 32).toFixed()
							: forecast.Temperature?.Minimum?.Value?.toFixed()}
						&deg;{unit.unit}
					</span>
				</section>
				<section>
					<span>Max&nbsp;</span>
					<span>
						{unit.unit === 'F'
							? (forecast?.Temperature?.Maximum?.Value * 1.8 + 32).toFixed()
							: forecast.Temperature?.Maximum?.Value?.toFixed()}
						&deg;{unit.unit}
					</span>
				</section>
			</div>
		</div>
	);
}

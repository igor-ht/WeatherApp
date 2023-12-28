import './CurrentWeather.scss';
import { CurrentCityType } from '../../../../../../features/currentCity/currentCitySlice';

export default function CurrentWeather(props: CurrentCityType) {
	return (
		<div className="current-weather-container">
			<div className="top-section">
				<div className="add-to-favorites">
					<button>Favorites</button>
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

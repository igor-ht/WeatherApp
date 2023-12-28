import './FavoriteCard.scss';
import { CurrentCityType } from '../../../features/currentCity/currentCitySlice';

export default function FavoriteCard(props: CurrentCityType) {
	return (
		<div className="favorite-card">
			<h1>{props.city.name}</h1>
			<h1>{props.forecast.Temperature.Metric.Value}</h1>
			<h1>{props.forecast.WeatherText}</h1>
		</div>
	);
}

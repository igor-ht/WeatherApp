import { useSelector } from 'react-redux';
import { currentCity } from '../../../../features/currentCity/currentCitySlice';
import CurrentWeather from './components/CurrentWeather/CurrentWeather';

// const mockApiResponse = [
// 	{
// 		LocalObservationDateTime: '2023-12-27T21:48:00+02:00',
// 		EpochTime: 1703706480,
// 		WeatherText: 'Partly cloudy',
// 		WeatherIcon: 35,
// 		HasPrecipitation: false,
// 		PrecipitationType: null,
// 		IsDayTime: false,
// 		Temperature: {
// 			Metric: {
// 				Value: 19.4,
// 				Unit: 'C',
// 				UnitType: 17,
// 			},
// 			Imperial: {
// 				Value: 67,
// 				Unit: 'F',
// 				UnitType: 18,
// 			},
// 		},
// 		MobileLink: 'http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us',
// 		Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us',
// 	},
// ];

export default function CurrentCityWeather() {
	const city = useSelector(currentCity);
	return (
		<div className="current-city-container">
			<CurrentWeather {...city} />
		</div>
	);
}

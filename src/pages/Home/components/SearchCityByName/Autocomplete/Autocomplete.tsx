import { useSelector, useDispatch } from 'react-redux';
import { searchCity } from '../../../../../features/searchCity/searchCity';
import { setCurrentCity } from '../../../../../features/currentCity/currentCitySlice';

export default function Autocomplete() {
	const cities = useSelector(searchCity);
	const dispatch = useDispatch();

	const handleNewCurrentCity = (key: string, name: string) => {
		dispatch(setCurrentCity({ key: Number(key), name: name }));
	};

	return (
		<dialog
			open
			className="autocomplete-container">
			{cities.cities.map((city, i) => {
				return (
					<div
						key={i}
						className="autocomplete-card"
						onClick={() => handleNewCurrentCity(city.Key, city.LocalizedName)}>
						<h1>{city.LocalizedName}</h1>
					</div>
				);
			})}
		</dialog>
	);
}

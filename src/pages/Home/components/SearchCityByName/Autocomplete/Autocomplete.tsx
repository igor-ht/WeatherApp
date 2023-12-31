import './Autocomplete.scss';
import { useDispatch } from 'react-redux';
import { setCurrentCity } from '../../../../../features/currentCity/currentCitySlice';
import { useGetCitySearchAutocompleteQuery } from '../../../../../features/api/accuweatherApi';

export default function Autocomplete({ city }: { city: string }) {
	const { data, isSuccess } = useGetCitySearchAutocompleteQuery(city);

	const dispatch = useDispatch();

	const handleNewCurrentCity = (key: string, name: string) => {
		dispatch(setCurrentCity({ key: Number(key), name: name }));
	};

	return (
		<dialog
			open={isSuccess}
			className="autocomplete-container">
			{data?.map((city: { Key: string; LocalizedName: string }, i: number) => {
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

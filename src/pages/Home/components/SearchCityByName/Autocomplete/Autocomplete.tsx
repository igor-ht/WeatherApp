import './Autocomplete.scss';
import { setCurrentCity } from '@/redux/features/currentCity/currentCitySlice';
import { useGetCitySearchAutocompleteQuery } from '@/redux/service/accuweatherApi';
import { useAppDispatch } from '@/redux/hooks';

export default function Autocomplete({ city, setCity }: { city: string; setCity: React.Dispatch<React.SetStateAction<string>> }) {
	const { data, isSuccess } = useGetCitySearchAutocompleteQuery(city);

	const dispatch = useAppDispatch();

	const handleNewCurrentCity = (key: string, name: string) => {
		dispatch(setCurrentCity({ key: Number(key), name: name }));
		setCity('');
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

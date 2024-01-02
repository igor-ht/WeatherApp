import './Autocomplete.scss';
import { setCurrentCity } from '@/redux/features/currentCity/currentCitySlice';
import { useGetCitySearchAutocompleteQuery } from '@/redux/service/accuweatherApi';
import { useAppDispatch } from '@/redux/hooks';
import { skipToken } from '@reduxjs/toolkit/query';

export default function Autocomplete({
	city,
	setCity,
}: {
	city: string | null;
	setCity: React.Dispatch<React.SetStateAction<string | null>>;
}) {
	const { data, isSuccess } = useGetCitySearchAutocompleteQuery(city ?? skipToken);

	const dispatch = useAppDispatch();

	const handleNewCurrentCity = (key: string, name: string) => {
		dispatch(setCurrentCity({ key: Number(key), name: name }));
		setCity('');
	};

	return (
		<dialog
			open={isSuccess && !!data}
			className="autocomplete-container">
			{data?.map((city: { Key: string; LocalizedName: string; Country: { LocalizedName: string } }, i: number) => {
				return (
					<div
						key={i}
						className="autocomplete-card"
						title={`${city.LocalizedName} - ${city.Country.LocalizedName}`}
						onClick={() => handleNewCurrentCity(city.Key, city.LocalizedName)}>
						<h1>{city.LocalizedName}</h1>
						<p>{city.Country.LocalizedName}</p>
					</div>
				);
			})}
		</dialog>
	);
}

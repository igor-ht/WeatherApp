import './SearchCityByName.scss';
import Autocomplete from './Autocomplete/Autocomplete';
import { ChangeEvent, useState } from 'react';
import { useDebounce } from '@/utils/useDebounce';

export default function SearchCityByName() {
	const [city, setCity] = useState('');
	const debouncedCity = useDebounce(city, 500);

	const handleOnChangeAutocomplete = async (event: ChangeEvent<HTMLInputElement>) => {
		const input = event.currentTarget.value;
		if (/^[a-zA-Z\u00C0-\u00ff\s\b]$/.test(input.slice(-1)) || input === '') setCity(input);
	};

	return (
		<div className="search-container">
			<input
				type="text"
				name="city"
				onChange={handleOnChangeAutocomplete}
				placeholder="Search any city by name"
				value={city || ''}
			/>
			{city ? (
				<Autocomplete
					setCity={setCity}
					city={debouncedCity}
				/>
			) : null}
		</div>
	);
}

import './SearchCityByName.scss';
import Autocomplete from './Autocomplete/Autocomplete';
import { ChangeEvent, useState } from 'react';

export default function SearchCityByName() {
	const [city, setCity] = useState('');

	const handleOnChangeAutocomplete = async (event: ChangeEvent<HTMLInputElement>) => {
		const input = event.currentTarget.value;
		if (!/^[a-zA-Z\s\b]$/.test(input.slice(-1))) return;
		setCity(input);
	};

	return (
		<div className="search-container">
			<input
				type="text"
				onChange={handleOnChangeAutocomplete}
				placeholder="Search any city by name"
				value={city}
			/>
			{city ? (
				<Autocomplete
					setCity={setCity}
					city={city}
				/>
			) : null}
		</div>
	);
}

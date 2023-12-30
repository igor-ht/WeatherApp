import './SearchCityByName.scss';
import Autocomplete from './Autocomplete/Autocomplete';
import { ChangeEvent, useState } from 'react';

export default function SearchCityByName() {
	const [city, setCity] = useState('');

	const handleOnChangeAutocomplete = async (event: ChangeEvent<HTMLInputElement>) => {
		setCity(event.currentTarget.value);
	};

	return (
		<div className="search-container">
			<input
				type="text"
				onChange={handleOnChangeAutocomplete}
				placeholder="Search any city by name"
			/>
			{city ? <Autocomplete city={city} /> : null}
		</div>
	);
}

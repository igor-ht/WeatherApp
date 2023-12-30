import Autocomplete from './Autocomplete/Autocomplete';
import './SearchCityByName.scss';
import { ChangeEvent } from 'react';

export default function SearchCityByName() {
	const handleOnChangeAutocomplete = (event: ChangeEvent<HTMLInputElement>) => {
		console.log(event.currentTarget.value);
		// handle the autocomplete update for every change **not make a get request for every change necessarily
	};
	return (
		<div className="search-container">
			<input
				type="text"
				onChange={handleOnChangeAutocomplete}
				placeholder="Search any city by name"
			/>
			<Autocomplete />
		</div>
	);
}

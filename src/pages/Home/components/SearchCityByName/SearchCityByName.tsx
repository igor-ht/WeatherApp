import './SearchCityByName.scss';
import Autocomplete from './Autocomplete/Autocomplete';
import { KeyboardEvent, useRef, useState } from 'react';

export default function SearchCityByName() {
	const [city, setCity] = useState('');
	const searchElement = useRef<HTMLInputElement | null>(null);

	const handleOnChangeAutocomplete = async (event: KeyboardEvent) => {
		const input = event.key;

		if (input === 'Backspace') return setCity((prev) => prev.slice(0, -1));
		if (!/^[a-zA-Z\s\b]$/.test(input)) return;
		setCity((prev) => (prev += input));
	};

	return (
		<div className="search-container">
			<input
				type="text"
				ref={searchElement}
				onKeyUp={handleOnChangeAutocomplete}
				placeholder="Search any city by name"
				value={city}
				readOnly
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

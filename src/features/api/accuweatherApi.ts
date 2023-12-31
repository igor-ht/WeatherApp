import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_KEY = import.meta.env.VITE_APP_API_KEY;

export const accuweatherApi = createApi({
	reducerPath: 'accuweatherApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://dataservice.accuweather.com/',
		method: 'get',
		mode: 'cors',
		credentials: 'same-origin',
	}),
	endpoints: (builder) => ({
		getCurrentWeather: builder.query({ query: (cityKey) => `currentconditions/v1/${cityKey}?apikey=${API_KEY}` }),
		getFiveDaysForecast: builder.query({ query: (cityKey) => `forecasts/v1/daily/5day/${cityKey}?apikey=${API_KEY}&metric=true` }),
		getCityByCoordinates: builder.query({
			query: () => {
				const coords = { lat: '', lon: '' };
				if (navigator.geolocation) {
					navigator.geolocation.getCurrentPosition((position) => {
						coords.lat = String(position.coords.latitude);
						coords.lon = String(position.coords.longitude);
					});
					if (coords.lat && coords.lon)
						return `locations/v1/cities/geoposition/search?apikey=${API_KEY}&q=${coords.lat}%2C%20${coords.lon}`;
					return '/';
				} else {
					return '/';
				}
			},
		}),
		getCitySearchAutocomplete: builder.query({ query: (cityName) => `locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${cityName}` }),
	}),
});

export const { useGetCityByCoordinatesQuery, useGetCitySearchAutocompleteQuery, useGetCurrentWeatherQuery, useGetFiveDaysForecastQuery } =
	accuweatherApi;

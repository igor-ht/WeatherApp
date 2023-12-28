import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_KEY = 'ioHZAANhaaQYHq49IZ20uVZmc6IjPB1j';

export const accuweatherApi = createApi({
	reducerPath: 'accuweatherApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://dataservice.accuweather.com/' }),
	endpoints: (builder) => ({
		getCurrentCondition: builder.query({ query: (cityKey) => `currentconditions/v1/${cityKey}?apikey=${API_KEY}` }),
		getFiveDaysForecast: builder.query({ query: (cityKey) => `forecasts/v1/daily/5day/${cityKey}?apikey=${API_KEY}` }),
		getCityByCoordinates: builder.query({
			query: (coords) => {
				console.log(coords);
				return `locations/v1/cities/geoposition/search?apikey=${API_KEY}&q=${coords.lat}%2C%20${coords.lon}`;
			},
		}),
		getCitySearchAutocomplete: builder.query({ query: (cityName) => `locations/v1/cities/autocomplete?apikey=${API_KEY}/&q=${cityName}` }),
	}),
});

export const { useGetCityByCoordinatesQuery, useGetCitySearchAutocompleteQuery, useGetCurrentConditionQuery, useGetFiveDaysForecastQuery } =
	accuweatherApi;

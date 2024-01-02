import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_KEY = import.meta.env.VITE_APP_API_KEY || '';

export const accuweatherApi = createApi({
	reducerPath: 'accuweatherApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://dataservice.accuweather.com/',
		method: 'get',
		mode: 'cors',
		credentials: 'same-origin',
	}),
	keepUnusedDataFor: 60 * 10,
	endpoints: (builder) => ({
		getCurrentWeather: builder.query({
			query: (cityKey) => `currentconditions/v1/${cityKey}?apikey=${API_KEY}`,
		}),
		getFiveDaysForecast: builder.query({ query: (cityKey) => `forecasts/v1/daily/5day/${cityKey}?apikey=${API_KEY}&metric=true` }),
		getCityByCoordinates: builder.query({
			query: (coords) => `locations/v1/cities/geoposition/search?apikey=${API_KEY}&q=${coords.lat}%2C%20${coords.lon}`,
			keepUnusedDataFor: 60 * 30,
		}),
		getCitySearchAutocomplete: builder.query({
			query: (cityName) => `locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${cityName}`,
			keepUnusedDataFor: 60 * 3,
		}),
	}),
});

export const { useGetCityByCoordinatesQuery, useGetCitySearchAutocompleteQuery, useGetCurrentWeatherQuery, useGetFiveDaysForecastQuery } =
	accuweatherApi;

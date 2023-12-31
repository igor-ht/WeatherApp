import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_KEY = import.meta.env.VITE_APP_API_KEY;

export const accuweatherApi = createApi({
	reducerPath: 'accuweatherApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://dataservice.accuweather.com/',
		method: 'get',
		mode: 'cors',
		credentials: 'same-origin',
	}),
	endpoints: (builder) => ({
		getCurrentWeather: builder.query({ query: (cityKey) => `currentconditions/v1/${cityKey}?apikey=${API_KEY}` }),
		getFiveDaysForecast: builder.query({ query: (cityKey) => `forecasts/v1/daily/5day/${cityKey}?apikey=${API_KEY}&metric=true` }),
		getCityByCoordinates: builder.query({
			query: (coords) => `locations/v1/cities/geoposition/search?apikey=${API_KEY}&q=${coords.lat}%2C%20${coords.lon}`,
		}),
		getCitySearchAutocomplete: builder.query({ query: (cityName) => `locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${cityName}` }),
	}),
});

export const { useGetCityByCoordinatesQuery, useGetCitySearchAutocompleteQuery, useGetCurrentWeatherQuery, useGetFiveDaysForecastQuery } =
	accuweatherApi;

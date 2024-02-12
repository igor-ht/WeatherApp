# My Weather App

MyWeatherApp is a web app built with **TypeScript**, **React**, **Redux**, and **SCSS**. It also uses the [AccuWeather API](https://developer.accuweather.com/apis) to fetch all its data.

[![My Skills](https://skillicons.dev/icons?i=vite,ts,react,redux,scss&perline=5)](https://skillicons.dev)

## Development Goals

- Build a React application and use Redux and Redux-Toolkit as a state management library.
- Implement a simple, intuitive, and responsive UI.

## Features

- Dark and light mode.
- Autocomplete for city search.
- Display current weather and 5-day forecast.
- Favorite cities list.
- Update current weather for favorite cities if the last weather is older than 3 hours.
- Celsius and Fahrenheit temperature units.

## App Live

Try the app live [here](https://abra-weather.netlify.app/).

## Start locally

1. Clone the repository.
2. Run `npm install` to install the dependencies.
3. Run `npm run dev` to start the development server.
4. You need a `.env` file with the `VITE_APP_API_KEY` variable to run the app. This key is provided by the AccuWeather API by creating a free account.

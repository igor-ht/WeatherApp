import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Favorites from './pages/Favorites/Favorites';
import Home from './pages/Home/Home';

export const appRouter = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/favorites',
				element: <Favorites />,
			},
		],
	},
]);

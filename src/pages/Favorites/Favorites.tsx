import './Favorites.scss';
import FavoriteCard from './FavoriteCard/FavoriteCard';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { allFavorites, updateFavorites } from '@/redux/features/favorites/favoritesSlice';
import { accuweatherApi } from '@/redux/service/accuweatherApi';

export default function Favorites() {
	const dispatch = useAppDispatch();
	const favoritesList = useAppSelector(allFavorites);

	useEffect(() => {
		const updateFavoritesCurrentWeather = async () => {
			return {
				favorites: await Promise.all(
					favoritesList?.favorites.map(async (favorite) => {
						if (favorite.city) {
							try {
								const epochTimeDif = Math.floor(Math.floor(Date.now() / 1000) - favorite?.currentWeather.EpochTime);
								if (epochTimeDif < 3 * 60 * 60) return favorite;
								const weather = await dispatch(accuweatherApi.endpoints.getCurrentWeather.initiate(favorite.city.key));
								return { ...favorite, currentWeather: weather.data[0] };
							} catch {
								return favorite;
							}
						}
					})
				),
			};
		};

		updateFavoritesCurrentWeather().then((res) => dispatch(updateFavorites(res)));
	}, []);

	return (
		<div className="favorites-container">
			{favoritesList.favorites.map((favorite, i) => {
				return (
					<FavoriteCard
						key={i}
						{...favorite}
					/>
				);
			})}
		</div>
	);
}

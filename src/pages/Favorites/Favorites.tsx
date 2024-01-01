import './Favorites.scss';
import FavoriteCard from './FavoriteCard/FavoriteCard';
import { allFavorites, fetchCurrentWeatherForFavorites } from '@/redux/features/favorites/favoritesSlice';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';

export default function Favorites() {
	const dispatch = useAppDispatch();
	const favoritesList = useAppSelector(allFavorites);

	useEffect(() => {
		dispatch(fetchCurrentWeatherForFavorites(favoritesList));
		// eslint-disable-next-line react-hooks/exhaustive-deps
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

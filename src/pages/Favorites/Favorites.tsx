import './Favorites.scss';
import { useSelector } from 'react-redux';
import { allFavorites } from '@/redux/features/favorites/favoritesSlice';
import FavoriteCard from './FavoriteCard/FavoriteCard';

export default function Favorites() {
	const favoritesList = useSelector(allFavorites);

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

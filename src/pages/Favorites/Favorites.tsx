import { useSelector } from 'react-redux';
import { allFavorites } from '../../features/favorites/favoritesSlice';

export default function Favorites() {
	const favoritesList = useSelector(allFavorites);
	
	return <div>{JSON.stringify(favoritesList)}</div>;
}

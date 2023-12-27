import { Outlet } from 'react-router-dom';
import useGeolocationApi from '../../hooks/useGeolocationApi';

export default function MainContainer() {
	useGeolocationApi();

	return (
		<main>
			<Outlet />
		</main>
	);
}

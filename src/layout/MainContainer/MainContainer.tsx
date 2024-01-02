import './MainContainer.scss';
import { Outlet } from 'react-router-dom';

export default function MainContainer() {
	return (
		<main className="main-container">
			<Outlet />
		</main>
	);
}

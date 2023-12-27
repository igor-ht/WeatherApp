import './Header.scss';

export default function Header() {
	return (
		<header>
			<div className="header-icon">WEATHER</div>
			<nav>
				<a href="/">Home</a>
				<a href="/favorites">Favorites</a>
			</nav>
		</header>
	);
}

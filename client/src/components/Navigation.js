import { Link, useLocation } from 'react-router-dom';

function Navigation() {
	const location = useLocation();
    return (
        <nav className="navigation shadow">

		  <Link className="navbar-brand" to={'/'}>RunNation</Link>

			 <ul className="navbar-nav">
				<li className="nav-item">
					<Link className={location.pathname === '/' ? 'nav-link active' : 'nav-link'} to="/">Strona Główna</Link>
				</li>
				<li className="nav-item">
					<Link className={location.pathname === '/o-nas' ? 'nav-link active' : 'nav-link'} to="/o-nas">O nas</Link>
				</li>
				<li className="nav-item">
					<Link className={location.pathname === '/wydarzenia' ? 'nav-link active' : 'nav-link'} to="/wydarzenia">Wydarzenia</Link>
				</li>
				<li className="nav-item">
					<Link className={location.pathname === '/kursy' ? 'nav-link active' : 'nav-link'} to={'/kursy'}>Kursy</Link>
				</li>
				<li className="nav-item">
					<Link className={location.pathname === '/galeria' ? 'nav-link active' : 'nav-link'} to={'/galeria'}>Galeria</Link>
				</li>
				<li className="nav-item">
					<Link className={location.pathname === '/kontakt' ? 'nav-link active' : 'nav-link'} to={'/kontakt'} >Kontakt</Link>
				</li>
				<li className="nav-item">
					<Link className={location.pathname === '/logowanie' ? 'nav-link active' : 'nav-link'} to={'/logowanie'}>Logowanie</Link>
				</li>
			 </ul>

		  <div className="hamburger">
			<span className="bar"></span>
			<span className="bar"></span>
			<span className="bar"></span>
		  </div>

	    </nav>
    )
}

export default Navigation;
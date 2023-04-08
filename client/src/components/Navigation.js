import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <nav className="navigation shadow">

		  <Link className="navbar-brand" to={'/'}>RunNation</Link>

			 <ul className="navbar-nav">
				<li className="nav-item">
				  <Link className="nav-link active" to={'/'}>Strona Główna</Link>
				</li>
				<li className="nav-item">
				  <Link className="nav-link" to={'/o-nas'}>O nas</Link>
				</li>
				<li className="nav-item">
				  <Link className="nav-link" to={'/wydarzenia'}>Wydarzenia</Link>
				</li>
				<li className="nav-item">
				  <Link className="nav-link" to={'/kursy'}>Kursy</Link>
				</li>
				<li className="nav-item">
					<Link className="nav-link" to={'/galeria'}>Galeria</Link>
				</li>
				<li className="nav-item">
					<Link className="nav-link" to={'/kontakt'} >Kontakt</Link>
				</li>
				<li className="nav-item">
					<Link className="nav-link" to={'/rejestracja'}>Rejestracja</Link>
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
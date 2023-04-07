import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <nav className="navigation">

		  <Link className="navbar-brand link" to={'/'}>RunNation</Link>

			 <ul className="navbar-nav">
				<li className="nav-item">
				  <Link className="nav-link active link" to={'/'}>Strona Główna</Link>
				</li>
				<li className="nav-item">
				  <Link className="nav-link link" to={'/o-nas'}>O nas</Link>
				</li>
				<li className="nav-item">
				  <Link className="nav-link link" to={'/wydarzenia'}>Wydarzenia</Link>
				</li>
				<li className="nav-item">
				  <Link className="nav-link link" to={'/kursy'}>Kursy</Link>
				</li>
				<li className="nav-item">
					<Link className="nav-link link" to={'/galeria'}>Galeria</Link>
				</li>
				<li className="nav-item">
					<Link className="nav-link link" to={'/kontakt'} >Kontakt</Link>
				</li>
				<li className="nav-item">
					<Link className="nav-link link" to={'/rejestracja'}>Rejestracja</Link>
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
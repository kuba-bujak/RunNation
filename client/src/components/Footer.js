import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer>
		<div className="row footer-row">
			<div className="footer-brand">
				<Link to={{}}>
					<h2 className="footer-brand__title">RunNation</h2>
				</Link>
			</div>
			<ul className="footer-menu">
				<li className="footer-menu__item"><Link to={{}}>STRONA GŁÓWNA</Link></li>
				<li className="footer-menu__item"><Link to={{}}>O NAS</Link></li>
				<li className="footer-menu__item"><Link to={{}}>WYDARZENIA</Link></li>
				<li className="footer-menu__item"><Link to={{}}>KURSY</Link></li>
				<li className="footer-menu__item"><Link to={{}}>GALERIA</Link></li>
				<li className="footer-menu__item"><Link to={{}}>KONTAKT</Link></li>
			</ul>
			<div className="footer-contact">
				<div className="social-container">
					<Link to={{}}><i className="fa-brands fa-facebook-f"></i></Link>
					<Link to={{}}><i className="fa-brands fa-instagram"></i></Link>
					<Link to={{}}><i className="fa-brands fa-github"></i></Link>
					<Link to={{}}><i className="fa-brands fa-linkedin-in"></i></Link>
				</div>
				<div className="contact-container">
					<Link to={{}}><i className="fa-solid fa-phone"></i>+48 511 179 660</Link>
					<Link to={{}}><i className="fa-solid fa-envelope"></i>kuba.bujak0@wp.pl</Link>
					<Link to={{}}><i className="fa-solid fa-location-dot"></i>Wrocław, Polska</Link>
				</div>
			</div>
		</div>
		<div className="copyright">
			&copy; Copyright 2023 <Link to={{}}>Jakub Bujak</Link>
        </div>
	 </footer>
    )
}

export default Footer;
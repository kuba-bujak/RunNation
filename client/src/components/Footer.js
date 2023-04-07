import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer>
		<div className="row footer-row">
			<div className="footer-brand">
				<Link to={{}} className="link">
					<h2 className="footer-brand__title">RunNation</h2>
				</Link>
			</div>
			<ul className="footer-menu">
				<li className="footer-menu__item"><Link to={{}} className="link">STRONA GŁÓWNA</Link></li>
				<li className="footer-menu__item"><Link to={{}} className="link">O MNIE</Link></li>
				<li className="footer-menu__item"><Link to={{}} className="link">UMIEJĘTNOŚCI</Link></li>
				<li className="footer-menu__item"><Link to={{}} className="link">PORTFOLIO</Link></li>
				<li className="footer-menu__item"><Link to={{}} className="link">RESUME</Link></li>
				<li className="footer-menu__item"><Link to={{}} className="link">KONTAKT</Link></li>
			</ul>
			<div className="footer-contact">
				<div className="social-container">
					<Link to={{}} className="link"><i className="fa-brands fa-facebook-f"></i></Link>
					<Link to={{}} className="link"><i className="fa-brands fa-instagram"></i></Link>
					<Link to={{}} className="link"><i className="fa-brands fa-github"></i></Link>
					<Link to={{}} className="link"><i className="fa-brands fa-linkedin-in"></i></Link>
				</div>
				<div className="contact-container">
					<Link to={{}} className="link"><i className="fa-solid fa-phone"></i>+48 511 179 660</Link>
					<Link to={{}} className="link"><i className="fa-solid fa-envelope"></i>kuba.bujak0@wp.pl</Link>
					<Link to={{}} className="link"><i className="fa-solid fa-location-dot"></i>Wrocław, Polska</Link>
					<Link to={{}} className="link"><i className="fa-solid fa-house"></i>Fiverr</Link>
				</div>
			</div>
		</div>
		<div className="copyright">
			&copy; Copyright 2023 <Link to={{}} className="link">Jakub Bujak</Link>
        </div>
	 </footer>
    )
}

export default Footer;
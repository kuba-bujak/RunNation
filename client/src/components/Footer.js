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
				<li className="footer-menu__item"><Link to={'/'}>STRONA GŁÓWNA</Link></li>
				<li className="footer-menu__item"><Link to={'/o-nas'}>O NAS</Link></li>
				<li className="footer-menu__item"><Link to={'/wydarzenia'}>WYDARZENIA</Link></li>
				<li className="footer-menu__item"><Link to={'/kursy'}>KURSY</Link></li>
				<li className="footer-menu__item"><Link to={'/galeria'}>GALERIA</Link></li>
				<li className="footer-menu__item"><Link to={'/kontakt'}>KONTAKT</Link></li>
			</ul>
			<div className="footer-contact">
				<div className="social-container">
					<Link to={'https://www.facebook.com/kuba.bujak.182'}><i className="fa-brands fa-facebook-f"></i></Link>
					<Link to={'https://www.instagram.com/k_bujak.208/'}><i className="fa-brands fa-instagram"></i></Link>
					<Link to={'https://github.com/kuba-bujak'}><i className="fa-brands fa-github"></i></Link>
					<Link to={'https://www.linkedin.com/in/jakub-bujak-5a5b60194/'}><i className="fa-brands fa-linkedin-in"></i></Link>
				</div>
				<div className="contact-container">
					<Link to={"tel: +48 511 179 660"}><i className="fa-solid fa-phone"></i>+48 511 179 660</Link>
					<Link to={'mailto: kuba.bujak0@wp.pl'}><i className="fa-solid fa-envelope"></i>kuba.bujak0@wp.pl</Link>
					<Link to={'https://www.google.com/maps/place/Wrocław,+Polska/@51.1270779,16.9918639,11z/data=!3m1!4b1!4m6!3m5!1s0x470fe9c2d4b58abf:0xb70956aec205e0f5!8m2!3d51.1078852!4d17.0385376!16zL20vMDg0NWI'} target="_blank"><i className="fa-solid fa-location-dot"></i>Wrocław, Polska</Link>
				</div>
			</div>
		</div>
		<div className="copyright">
			&copy; Copyright 2023 <Link to={'https://www.facebook.com/kuba.bujak.182'}>Jakub Bujak</Link>
        </div>
	 </footer>
    )
}

export default Footer;
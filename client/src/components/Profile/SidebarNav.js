function sidebarNav({ changeOption }) {

	const handleClick = (event) => {
		const target = event.target;
		changeOption(target.getAttribute('data-title'));
		changeSidebar(target);
	}

	const changeSidebar = (target) => {
		const options = document.getElementsByClassName('sidebar-element');
		for (let element of options) {
			element.classList.remove('sidebar-active');
		}
		target.classList.add('sidebar-active');
	}

	return (
		<nav className="sidebar-nav">
				<div className="sidebar-image">
				</div>
				<ul className="sidebar-nav__list">
					<li className="sidebar-active sidebar-element" onClick={handleClick} data-title="profile">
						<i className="fa-solid fa-user"></i>
						Profil
					</li>
					<li onClick={handleClick} className="sidebar-element" data-title="courses">
						<i className="fa-solid fa-person-running"></i>
						Kursy
					</li>
					<li onClick={handleClick} className="sidebar-element" data-title="image">
						<i className="fa-solid fa-image"></i>
						Zdjęcie
					</li>
					<li onClick={handleClick} className="sidebar-element" data-title="password">
						<i className="fa-solid fa-lock"></i>
						Hasło
					</li>
					<li onClick={handleClick} className="sidebar-element" data-title="agreements">
						<i className="fa-solid fa-file-contract"></i>
						Zgody
					</li>
				</ul>
			</nav>
	)
}

export default sidebarNav;
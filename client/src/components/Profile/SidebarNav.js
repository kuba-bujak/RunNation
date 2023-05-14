function sidebarNav({ changeOption, username, avatar }) {

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
				{avatar ?
					<div className="sidebar-image" style={{ background: `url(${avatar})  no-repeat center / cover` }}></div>
						:
					<div className="sidebar-image" style={{ background: `url(https://www.shutterstock.com/image-vector/blank-avatar-photo-place-holder-600w-1095249842.jpg)  no-repeat center / cover` }}></div>}
				
				<p className="nickname-header">@{username}</p>
				<ul className="sidebar-nav__list">
					<li className="sidebar-active sidebar-element" onClick={handleClick} data-title="profile">
						<i className="fa-solid fa-user"></i>
						Profil
					</li>
					<li onClick={handleClick} className="sidebar-element" data-title="courses">
						<i className="fa-solid fa-person-running"></i>
						Kursy
					</li>
					<li onClick={handleClick} className="sidebar-element" data-title="password">
						<i className="fa-solid fa-lock"></i>
						Hasło
					</li>
				</ul>
			</nav>
	)
}

export default sidebarNav;
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SidebarNav from "../components/Profile/SidebarNav";
import ProfileInput from "../components/Profile/ProfileInput";
const authToken = localStorage.getItem('AuthToken');

function Profile() {
	const [profileValues, setProfileValues] = useState({
		firstName: "",
		surname: "",
		email: ""
	});
	const navigate = useNavigate();

	const profileInputs = [
		{
			id: 'firstName',
			label: 'Imię',
			value: profileValues.firstName,
			placeholder: 'Jan'
		},
		{
			id: 'surname',
			label: 'Nazwisko',
			value: profileValues.surname,
			placeholder: 'Kowalski'
		},
		{
			id: 'email',
			label: 'Email',
			value: profileValues.email,
			placeholder: 'jan.kowalski@gmail.com'
		}
	]

	const getProfile = async () => {
		const response = await axios.get('/api/users/profile', {
			headers: {
				'Authorization': `Bearer ${authToken}`,
				'Content-Type': 'application/json'
		  }
		});
		setProfile(response.data);
	} 

	const setProfile = (user) => {
		setProfileValues({
			firstName: user.firstName,
			surname: user.surname,
			email: user.email,
		})
	}

	useEffect(() => {
		if (authToken) {
			getProfile();
	  } else {
			navigate(`/logowanie`, { replace: true });
	  }
	}, []);

	const changeOption = (target) => {
		let profiles = document.getElementsByClassName('profile-content');
		for (let element of profiles) {
			element.classList.remove('profile-shown');
			element.classList.add('profile-hidden');
			const attr = element.getAttribute('data-title');
			if (attr === target) {
				element.classList.add('profile-shown');
			}
		}
	}

	const changeProfile = (e) => {
		setProfileValues({ ...profileValues, [e.target.name]: e.target.value })
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		editProfile(profileValues);
	}

	const editProfile = async (values) => {
		const response = await axios.put('/api/users/edit', values, {
			headers: {
				 'Authorization': `Bearer ${authToken}`,
				 'Content-Type': 'application/json'
			}
	  })
	}
	

	return (
		<div className="profile-container">
			<SidebarNav changeOption={changeOption}/>

			<div className="profile-content profile-shown" data-title="profile">
				<header>
					<h1 className='profile-header'>Profil</h1>
				</header>
				<form className="profile-info">

					{profileInputs.map((input) => (
						<ProfileInput onChange={changeProfile} key={input.id} placeholder={input.placeholder} label={input.label} value={input.value} id={input.id} />
					))}
					
					<div className="profile-btns-box">
						<button className="profile-btn" onClick={handleSubmit}>Zatwierdź</button>
					</div>
				</form>
			</div>

			<div className="profile-content profile-hidden" data-title="courses">
				<header>
					<h1 className='profile-header'>Kursy</h1>
				</header>
				<div className="profile-info">
					
				</div>
			</div>

			<div className="profile-content profile-hidden" data-title="image">
				<header>
					<h1 className='profile-header'>Zdjęcie</h1>
				</header>
				<div className="profile-info">
					
				</div>
			</div>

			<div className="profile-content profile-hidden" data-title="password">
				<header>
					<h1 className='profile-header'>Hasło</h1>
				</header>
				<div className="profile-info">
					
				</div>
			</div>

			<div className="profile-content profile-hidden" data-title="agreements">
				<header>
					<h1 className='profile-header'>Zgody</h1>
				</header>
				<div className="profile-info">
					
				</div>
			</div>
		</div>
	)
}

export default Profile;
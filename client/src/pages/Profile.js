import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SidebarNav from "../components/Profile/SidebarNav";
import ProfileOption from "../components/Profile/ProfileOption";
import CoursesOption from "../components/Profile/CoursesOption";
import ChangePassword from "../components/Profile/ChangePassword";
const authToken = localStorage.getItem('AuthToken');

function Profile() {
	const [profileValues, setProfileValues] = useState({
		firstName: "",
		surname: "",
		email: "",
		username: "",
		courses: [],
		avatar: "",
		rodo: false,
		newsletter: false,
	});

	const [passwordInputs, setPasswordInputs] = useState({
		password: "",
		newPassword: "",
		repeatedPassword: ""
	})

	const navigate = useNavigate();

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
			username: user.username,
			courses: user.courses,
			avatar: user.avatar,
			rodo: user.rodo,
			newsletter: user.newsletter,
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

	const setAgreements = (key, value) => {
		setProfileValues({ ...profileValues, [key]: value })
	}

	const handleChangePassword = (e) => {
		setPasswordInputs({ ...passwordInputs, [e.target.name]: e.target.value })
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		editProfile(profileValues);
		window.location = '/profil';
	}

	const editProfile = async (values) => {
		const response = await axios.put('/api/users/edit', values, {
			headers: {
				 'Authorization': `Bearer ${authToken}`,
				 'Content-Type': 'application/json'
			}
	  })
	}

	const handlePasswordSubmit = (event) => {
		event.preventDefault();
		changePassword(passwordInputs);
		setPasswordInputs({
			password: "",
			newPassword: "",
			repeatedPassword: ""
		})
	}

	const changePassword = async (values) => {
		const response = await axios.put('/api/users/password-equality', values, {
			headers: {
				 'Authorization': `Bearer ${authToken}`,
				 'Content-Type': 'application/json'
			}
	  })
	}

	return (
		<div className="profile-container">
			<SidebarNav changeOption={changeOption} avatar={profileValues.avatar} username={profileValues.username}/>
			
			<ProfileOption profileValues={profileValues} onChange={changeProfile} onClick={setAgreements} onSubmit={handleSubmit} />
			
			<CoursesOption courses={profileValues.courses}/>

			<ChangePassword onSubmit={handlePasswordSubmit} onChange={handleChangePassword} passwordInputs={passwordInputs} />

		</div>
	)
}

export default Profile;
import ProfileInput from "./ProfileInput";

function ProfileOption({ profileValues, onChange, onSubmit }) {
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


	return (
		<div className="profile-content profile-shown" data-title="profile">
			<header>
				<h1 className='profile-header'>Profil</h1>
			</header>
			<form className="profile-info">

				{profileInputs.map((input) => (
					<ProfileInput onChange={onChange} key={input.id} placeholder={input.placeholder} label={input.label} value={input.value} id={input.id} />
				))}
				
				<div className="profile-btns-box">
					<button className="profile-btn" onClick={onSubmit}>Zatwierdź</button>
				</div>
			</form>
		</div>
	)
}

export default ProfileOption;
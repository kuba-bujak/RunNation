import ProfileCheckbox from "./ProfileCheckbox";
import ProfileInput from "./ProfileInput";

function ProfileOption({ profileValues, onChange, onSubmit, onClick }) {
	const profileInputs = [
		{
			id: 'firstName',
			label: 'Imię',
			value: profileValues.firstName,
			placeholder: 'Jan',
			type: 'text'
		},
		{
			id: 'surname',
			label: 'Nazwisko',
			value: profileValues.surname,
			placeholder: 'Kowalski',
			type: 'text'
		},
		{
			id: 'email',
			label: 'Email',
			value: profileValues.email,
			placeholder: 'jan.kowalski@gmail.com',
			type: 'email'
		},
	]

	const imageInput = {
		id: 'avatar',
		label: 'Zdjęcie',
		value: profileValues.avatar,
		placeholder: '',
		type: 'url'
	}

	const agreements = [
		{
			id: 'rodo',
			label: 'Zgoda na przetwarzanie danych',
			value: profileValues.rodo,
			type: 'checkbox'
		},
		{
			id: 'newsletter',
			label: 'Zgoda na wysyłanie newlettera',
			value: profileValues.newsletter,
			type: 'checkbox'
		}
	]


	return (
		<form className="profile-content profile-shown" data-title="profile">
			<header>
				<h1 className='profile-header'>Profil</h1>
			</header>
			<h3>Dane</h3>
			<div className="profile-info">
				{profileInputs.map((input) => (
					<ProfileInput onChange={onChange} key={input.id} placeholder={input.placeholder} label={input.label} value={input.value} id={input.id} type={input.type}/>
				))}
				
			</div>
			<h3>Zdjęcie</h3>
			<div className="profile-info">
				<ProfileInput onChange={onChange} key={imageInput.id} placeholder={imageInput.placeholder} label={imageInput.label} type={imageInput.type} value={imageInput.value} id={imageInput.id} />
			</div>
			<h3>Zgody</h3>
			<div className="profile-info">
				{agreements.map((input) => (
					<ProfileCheckbox onClick={onClick} key={input.id} label={input.label} value={input.value} id={input.id} />
				))}
				
				<div className="profile-btns-box">
					<button className="profile-btn" onClick={onSubmit}>Zatwierdź</button>
				</div>
			</div>
		</form>
	)
}

export default ProfileOption;
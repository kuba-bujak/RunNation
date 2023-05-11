import { useEffect, useState } from "react";

function ProfileInput({ label, value, id, placeholder, onChange, type }) {
	const [isEditClicked, setIsEditClicked] = useState(false);

	const handleIsEditClicked = (event) => {
		event.preventDefault();
		setIsEditClicked(!isEditClicked);
  }

	return (
		<div className="profile-input-group">
			<button onClick={handleIsEditClicked} className="profile-edit-btn"><i className="fa-solid fa-pen-to-square"></i></button>
			<label htmlFor={id} className="input-profile-label">{label}:</label>
			{isEditClicked ?
			<input 
				id={id}
				name={id}
				type={type}
				value={value}
				placeholder={placeholder}
				onChange={onChange}
				className="input-profile"
			/> :
			<p className="profile-text" onClick={handleIsEditClicked}>{value ? value : 'Brak'}</p>
			}
			
			
		</div>
	)
}

export default ProfileInput;
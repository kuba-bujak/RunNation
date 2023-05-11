import { useEffect, useState } from "react";

function ProfileCheckbox({ label, value, id, placeholder, onClick }) {
	const [isAgreed, setIsAgreed] = useState(false);

	const handleIsAgreed = (event) => {
		setIsAgreed(!isAgreed);
		onClick(id, isAgreed);
  }

	return (
		<div className="profile-input-group">
			{value ? 
			<input 
				type="checkbox"
				id={id}
				name={id}
				value={value}
				placeholder={placeholder}
				onClick={handleIsAgreed}
				className="input-profile"
				checked
			/> :
			<input 
				type="checkbox"
				id={id}
				name={id}
				value={value}
				placeholder={placeholder}
				onClick={handleIsAgreed}
				className="input-profile"
			/> 
			}
			
			<label htmlFor={id} className="input-profile-label">{label}</label>
		</div>
	)
}

export default ProfileCheckbox;
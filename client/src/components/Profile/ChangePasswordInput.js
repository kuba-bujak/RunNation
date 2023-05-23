function ChangePasswordInput({ label, value, id, onChange }) {

	return (
		<div className="profile-input-group">
			<label htmlFor={id} className="input-profile-label">{label}:</label>
			<input 
				id={id}
				name={id}
				type='password'
				value={value}
				onChange={onChange}
				className="input-profile"
			/>
		</div>
	)
}

export default ChangePasswordInput;
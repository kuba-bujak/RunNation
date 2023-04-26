import { useState } from 'react';

const FormInput = (props) => {
	const [focused, setFocused] = useState(false);
	const { label, name, errorMessage, onChange, id, icon, ...inputProps} = props;

	const handleFocus = (e) => {
		setFocused(true);
	}
	
 	return (
		<div className="row">
			<label htmlFor={name} className="input-label">{label}</label>
         <div className="input-group input-group-icon">
				{name==="role" 
				?  <select name={name} required value={props.value} onChange={onChange}>
				      <option value={'zawodnik'}>Zawodnik</option>
				      <option value={'trener'}>Trener</option>
				      <option value={'kibic'}>Kibic</option>
				   </select> 
				: <input 
				id={name} 
				name={name} 
				{...inputProps} 
				onChange={onChange} 
				onBlur={handleFocus} 
				onFocus={() => inputProps.name && setFocused(true)}
				focused={focused.toString()}	
			/>}
            
            <div className="input-icon"><i className={icon}></i></div>
            <span className="error-icon hidden">
					<i className="fa-solid fa-circle-exclamation"></i>
				</span>
				<div className="error-message">{errorMessage}</div>
         </div>
		</div>
	)
}

export default FormInput;
import { useState } from 'react';

const FormInput = (props) => {
	const [focused, setFocused] = useState(false);
	const { label, name, type, errorMessage, onChange, id, icon, ...inputProps} = props;

	const handleFocus = (e) => {
		setFocused(true);
	}
	
 	return (
		<div className={ props.class ? props.class : 'row' }>
			<label htmlFor={name} className="input-label">{label}</label>
         <div className="input-group input-group-icon">
				{type==="select" 
				?  <select name={name} required value={props.value} onChange={onChange}>
					{props.options.map((option) => (
						<option value={option.option}>{option.value}</option>
					))}
				      
				   </select> 
				: <input 
				className='formInput'
				id={name} 
				name={name} 
				type={type}
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
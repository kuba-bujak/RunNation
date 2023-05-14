import ChangePasswordInput from "./ChangePasswordInput";

function ChangePassword({ onSubmit, onChange, passwordInputs }) {

    const passwordInputss = [
        {
            id: "password",
            label: "Aktualne hasło",
            value: passwordInputs.password,
        },
        {
            id: "newPassword",
            label: "Nowe hasło",
            value: passwordInputs.newPassword,
        },
        {
            id: "repeatedPassword",
            label: "Potwierdź nowe hasło",
            value: passwordInputs.repeatedPassword,
        }
    ]

    return (
        <form className="profile-content profile-hidden" data-title="password">
            <header>
                <h1 className='profile-header'>Hasło</h1>
            </header>
            <div className="profile-info">
                {passwordInputss.map((input) => (
					<ChangePasswordInput key={input.id} onChange={onChange} placeholder={input.placeholder} label={input.label} value={input.value} id={input.id} type={input.type}/>
				))}
            </div>
            <div className="profile-btns-box">
				<button className="profile-btn" onClick={onSubmit}>Zatwierdź</button>
			</div>
		</form>
    )
}

export default ChangePassword;
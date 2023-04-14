import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';

function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');

    const createUser = async (username, password, email, role) => {
        const response = await axios.post(`/api/users/register`, {
            username,
            email,
            role,
            password
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        createUser(username, password, email, role);
    } 

    const handleChangeUsername = (event) => {
        setUsername(event.target.value);
    }

    const handleChangePassword = (event) => {
        setPassword(event.target.value);
    }

    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
    }

    const handleChangeRole = (event) => {
        setRole(event.target.value)
    }

    const handleChangeRepeatedPassword = (event) => {
        setRepeatPassword(event.target.value);
    }



    return (
        <div className="form-section">
            <form className="container shadow" onSubmit={handleSubmit}>
                 <header className="form-header">
                    <h1>Rejestracja</h1>
                </header>
                <div className="row">
                    <h4>Nazwa użytkownika</h4>
                    <div className="input-group input-group-icon">
                        <input type="text" placeholder="Nazwa użytkownika" value={username} onChange={handleChangeUsername} required/>
                        <div className="input-icon"><i className="fa fa-user"></i></div>
                    </div>
                    <h4>Adres email</h4>
                    <div className="input-group input-group-icon">
                        <input type="text" placeholder="Adres email" value={email} onChange={handleChangeEmail} required/>
                        <div className="input-icon"><i className="fa fa-envelope"></i></div>
                    </div>
                    <div className="row">
                        <h4>Stanowisko</h4>
                        <div className="input-group">
                            <select required value={role} onChange={handleChangeRole}>
                                <option value={'zawodnik'}>Zawodnik</option>
                                <option value={'trener'}>Trener</option>
                                <option value={'kibic'}>Kibic</option>
                            </select>
                        </div>
                    </div>
                    <h4>Hasło</h4>
                    <div className="input-group input-group-icon">
                        <input type="password" placeholder="Hasło" value={password} onChange={handleChangePassword} required/>
                        <div className="input-icon"><i className="fa fa-key"></i></div>
                    </div>
                    <h4>Powtórz hasło</h4>
                    <div className="input-group input-group-icon">
                        <input type="password" placeholder="Powtórz hasło" value={repeatPassword} onChange={handleChangeRepeatedPassword} required/>
                        <div className="input-icon"><i className="fa fa-key"></i></div>
                    </div>
                </div>
                <button type="submit" className="btn form-btn">Załóż konto</button>
                <div className="row">
                    <Link to={'/logowanie'} className="register-link">Zaloguj się</Link>
                </div>
            </form>
        </div>
    )
}

export default Register;
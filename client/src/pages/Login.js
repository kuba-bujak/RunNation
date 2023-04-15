import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Login({ handleLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const userLogin = async () => {
        await axios.post('/api/users/login', {
            username,
            password
        }).then((res) => {
            let token = res.data.accessToken;
            localStorage.setItem("AuthToken", token);
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        userLogin(username, password);
        handleLogin(true);
    } 

    const handleChangeUsername = (event) => {
        setUsername(event.target.value);
    }

    const handleChangePassword = (event) => {
        setPassword(event.target.value);
    }



    return (
        <div className="form-section">
            <form className="container shadow" onSubmit={handleSubmit}>
                 <header className="form-header">
                    <h1>Logowanie</h1>
                </header>
                <div className="row">
                    <h4>Nazwa użytkownika</h4>
                    <div className="input-group input-group-icon">
                        <input type="text" placeholder="Nazwa użytkownika" value={username} onChange={handleChangeUsername} required/>
                        <div className="input-icon"><i className="fa fa-user"></i></div>
                    </div>
                    <h4>Hasło</h4>
                    <div className="input-group input-group-icon">
                        <input type="password" placeholder="Hasło" value={password} onChange={handleChangePassword} required/>
                        <div className="input-icon"><i className="fa fa-key"></i></div>
                    </div>
                </div>
                <button type="submit" className="btn form-btn">Zaloguj</button>
                <div className="row">
                    <Link to={'/rejestracja'} className="register-link">Załóż konto</Link>
                </div>
            </form>
        </div>
    )
}

export default Login;
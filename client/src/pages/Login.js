import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import FormInput from '../components/FormInput';

function Login({ handleLogin }) {
    // const [username, setUsername] = useState('');
    // const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [values, setValues] = useState({
        username: "",
        password: ""
    })

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, []);

    const inputs = [
        {
            id: 1,
            name: "username",
            type: "text",
            placeholder: "Nazwa użytkownika",
            label: "Nazwa użytkownika",
            icon: "fa fa-user",
            errorMessage: "Nazwa użytkownika powinna zawierać od 3 do 16 znaków",
            pattern: "^[A-Za-z0-9]{3,16}$",
            required: true
        },
        {
            id: 2,
            name: "password",
            type: "password",
            placeholder: "Hasło",
            label: "Hasło",
            icon: "fa fa-key",
            errorMessage: "Hasło musi mieć od 8 do 20 znaków i zawierać przynajmniej 1 literę, 1 cyfrę i 1 znak specjalny",
            pattern: "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$",
            required: true
        }
    ]

    const userLogin = async (username, password) => {
        await axios.post('/api/users/login', {
            username,
            password
        }).then((res) => {
            let token = res.data.accessToken;
            localStorage.setItem("AuthToken", token);
            setMessage(res.data.message);
            setTimeout(() => {
                // navigate(`/wydarzenia`, { replace: true });
                window.location = '/';
            }, 2000)
        }).catch((err) => {
            setMessage(err.response.data.message);
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // const data = new FormData(event.target);
        // console.log(Object.fromEntries(data.entries()));
        userLogin(values.username, values.password);
        handleLogin(true);
    } 

    // const handleChangeUsername = (event) => {
    //     setUsername(event.target.value);
    // }

    // const handleChangePassword = (event) => {
    //     setPassword(event.target.value);
    // }

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    return (
        <div className="form-section">
            <div className="flashMessage">{message}</div>
            <form className="container shadow" onSubmit={handleSubmit}>
                 <header className="form-header">
                    <h1>Logowanie</h1>
                </header>
             
                    {/* <label htmlFor={'username'} className="input-label">Nazwa użytkownika</label>
                    <div className="input-group input-group-icon">
                        <input type="text" name={'username'} placeholder="Nazwa użytkownika" value={username} onChange={handleChangeUsername} id="username" minLength="2" custommaxlength="16" autoFocus required/>
                        <div className="input-icon"><i className="fa fa-user"></i></div>
                        <span className="error-icon hidden">
							<i className="fa-solid fa-circle-exclamation"></i>
						</span>
						<span className="check-icon hidden">
							<i className="fa-solid fa-circle-check"></i>
						</span>
						<div className="error-message">{username}</div>
                    </div>
                    <label htmlFor={'password'} className="input-label">Hasło</label>
                    <div className="input-group input-group-icon">
                        <input type="password" name={'password'} id='password' placeholder="Hasło" value={password} onChange={handleChangePassword} required/>
                        <div className="input-icon"><i className="fa fa-key"></i></div>
                    </div> */}

                    {inputs.map((input) => (
                        <FormInput 
                            key={input.id} 
                            {...input}
                            value={values[input.name]} 
                            onChange={onChange}
                        />
                    ))}
                
                <div className="buttons-row">
                    <button type="submit" className="btn form-btn">Zaloguj</button>
                    <Link to={'/rejestracja'} className="register-link">Załóż konto</Link>
                </div>
            </form>
        </div>
    )
}

export default Login;
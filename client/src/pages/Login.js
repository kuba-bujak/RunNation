import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import FormInput from '../components/FormInput';

function Login({ handleLogin }) {
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
                window.location = '/profil';
            }, 2000)
        }).catch((err) => {
            setMessage(err.response.data.message);
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        userLogin(values.username, values.password);
        handleLogin(true);
    } 

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
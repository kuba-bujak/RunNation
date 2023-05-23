import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';
import FormInput from '../components/FormInput';

function Register() {
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
    const [values, setValues] = useState({
        username: "",
        email: "",
        role: "kibic",
        password: "",
        repeatPassword: ""
    })

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
            name: "email",
            type: "email",
            placeholder: "Adres email",
            label: "Adres Email",
            icon: "fa fa-envelope",
            errorMessage: "Adres email musi zawierać poprawny format",
            pattern: "(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|'(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*')@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])",
            required: true
        },
        {
            id: 3,
            name: "role",
            type: "select",
            label: "Stanowisko",
            placeholder: "Stanowisko",
            icon: "fa-solid fa-user-tie",
            errorMessage: "Stanowisko musi być wybrane",
            required: true,
            options: [
                {
                    option: "zawodnik",
                    value: "Zawodnik"
                },
                {
                    option: 'trener',
                    value: "Trener"
                },
                {
                    option: "kibic",
                    value: "Kibic"
                }
            ]
        },
        {
            id: 4,
            name: "password",
            type: "password",
            placeholder: "Hasło",
            label: "Hasło",
            icon: "fa fa-key",
            errorMessage: "Hasło musi mieć od 8 do 20 znaków i zawierać przynajmniej 1 literę, 1 cyfrę i 1 znak specjalny",
            pattern: "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$",
            required: true
        },
        {
            id: 5,
            name: "repeatPassword",
            type: "password",
            placeholder: "Powtórz hasło",
            label: "Powtórz hasło",
            icon: "fa fa-key",
            errorMessage: "Hasła muszą być takie same",
            pattern: values.password,
            required: true
        }
    ]

    const createUser = async (username, email, role, password) => {
        await axios.post(`/api/users/register`, {
            username,
            email,
            role,
            password
        }).then((res) => {
            console.log(res)
            setMessage(res.data.message);
            setTimeout(() => {
                navigate(`/logowanie`, { replace: true });
            }, 2000)
        }).catch((err) => {
            setMessage(err.response.data.message);
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        createUser(values.username, values.email, values.role, values.password);
    } 

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }



    return (
        <div className="form-section" id="registration-form">
            <div className="flashMessage">{message}</div>
            <form className="container shadow" onSubmit={handleSubmit}>
                 <header className="form-header">
                    <h1>Rejestracja</h1>
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
                    <button type="submit" className="btn form-btn">Załóż konto</button>
                    <Link to={'/logowanie'} className="register-link">Zaloguj się</Link>
                </div>
            </form>
        </div>
    )
}

export default Register;
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';
import FormInput from '../components/FormInput';

function Register() {
    // const [username, setUsername] = useState('');
    // const [password, setPassword] = useState('');
    // const [email, setEmail] = useState('');
    // const [role, setRole] = useState('');
    // const [repeatPassword, setRepeatPassword] = useState('');
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
        // const data = new FormData(event.target);
        // console.log(Object.fromEntries(data.entries()));
        // console.log(values);
        createUser(values.username, values.email, values.role, values.password);
    } 

    // const handleChangeUsername = (event) => {
    //     setUsername(event.target.value);
    // }

    // const handleChangePassword = (event) => {
    //     setPassword(event.target.value);
    // }

    // const handleChangeEmail = (event) => {
    //     setEmail(event.target.value);
    // }

    // const handleChangeRole = (event) => {
    //     setRole(event.target.value)
    // }

    // const handleChangeRepeatedPassword = (event) => {
    //     setRepeatPassword(event.target.value);
    // }

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
                {/* <div className="row">
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
                                <option value={'zawodnik'} selected>Zawodnik</option>
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
                    <button type="submit" className="btn form-btn">Załóż konto</button>
                    <Link to={'/logowanie'} className="register-link">Zaloguj się</Link>
                </div>
            </form>
        </div>
    )
}

export default Register;
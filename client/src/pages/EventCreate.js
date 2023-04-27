import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import FormInput from '../components/FormInput';

function EventCreate({ onCreate }) {
    // const [title, setTitle] = useState('');
    // const [location, setLocation] = useState('');
    // const [image, setImage] = useState('');
    // const [rating, setRating] = useState('');
    // const [description, setDescription] = useState('');
    // const [day, setDay] = useState('');
    // const [month, setMonth] = useState('');
    // const [year, setYear] = useState('');
    const [isAdmin, setIsAdmin] = useState(false);
    const authToken = localStorage.getItem('AuthToken');
    const [values, setValues] = useState({
        title: "",
        location: "",
        image: "",
        rating: "I",
        description: "",
        day: "",
        month: "",
        year: ""
    })

    const inputs = [
        {
            id: 1,
            name: "title",
            type: "text",
            placeholder: "Tytuł",
            label: "Tytuł",
            icon: "fa-solid fa-file-signature",
            errorMessage: "Tytuł powinien zawierać od 3 do 100 znaków",
            pattern: "^[A-Za-z0-9ąćęłńóśźżĄĆĘŁŃÓŚŹŻ.- ]{3,100}$",
            required: true
        },
        {
            id: 2,
            name: "location",
            type: "text",
            placeholder: "Lokalizacja",
            label: "Lokalizacja",
            icon: "fa-solid fa-location-dot",
            errorMessage: "Lokalizacja powinna zawierać od 3 do 20 znaków",
            pattern: "^[A-Za-z0-9ąćęłńóśźżĄĆĘŁŃÓŚŹŻ- ]{3,40}$",
            required: true
        },
        {
            id: 3,
            name: "description",
            type: "textarea",
            label: "Opis wydarzenia",
            placeholder: "Opis...",
            icon: "fa-solid fa-message",
            errorMessage: "Opis wydarzenia jest wymagany",
            required: true
        },
        {
            id: 4,
            name: "day",
            type: "number",
            placeholder: "DD",
            label: "Dzień",
            icon: "fa-regular fa-calendar-days",
            errorMessage: "Dzień musi się znajdować w przedziale od 1 do 31",
            pattern: "^(0-9){2}$",
            min: 1,
            max: 31,
            required: true,
        },
        {
            id: 5,
            name: "month",
            type: "number",
            placeholder: "MM",
            label: "Miesiąc",
            icon: "fa-regular fa-calendar-days",
            errorMessage: "Miesiąc musi się znajdować w przedziale od 1 do 12",
            pattern: "^(0-9){2}$",
            min: 1,
            max: 12,
            required: true
        },
        {
            id: 6,
            name: "year",
            type: "number",
            placeholder: "YYYY",
            label: "Rok",
            icon: "fa-regular fa-calendar-days",
            errorMessage: "Rok musi się znajdować w przedziale od 2022 do 2032",
            pattern: "^(0-9){4}$",
            min: 2022,
            max: 2032,
            required: true
        },
        {
            id: 8,
            name: "rating",
            type: "select",
            placeholder: "Ranga",
            label: "Ranga zawodów",
            icon: "fa-solid fa-star",
            errorMessage: "Ranga zawodów musi być wybrana",
            required: true,
            options: [
                {
                    option: 0,
                    value: "II"
                },
                {
                    option: 1,
                    value: "I"
                },
                {
                    option: 2,
                    value: "M"
                },
                {
                    option: 3,
                    value: "MM"
                }
            ]
        },
        {
            id: 7,
            name: "image",
            type: "url",
            placeholder: "Adres url",
            label: "Zdjęcie",
            icon: "fa-solid fa-image",
            errorMessage: "",
            required: true
        }
    ]

    const navigate = useNavigate();

    const isAdminGetter = async () => {
        const response = await axios.get(`/api/users/current`, {
            headers: {
                'Authorization': `Bearer ${authToken}`,
                'Content-Type': 'application/json'
            }
        });
        if (response.data.role === 'admin') {
            setIsAdmin(true);
        } else {
            setIsAdmin(false);
            navigate(`/logowanie`, { replace: true });
        }
    }

    useEffect(() => {
        if (authToken) {
            isAdminGetter();
        } else {
            navigate(`/logowanie`, { replace: true });
        }
    }, []);

    const createSportEvent = async (title, location, image, rating, description, day, month, year) => {
        const date =  new Date(`${year}-${month}-${day}`);
          const response = await axios.post('/api/events', {
            title,
            location,
            image,
            rating,
            description,
            date 
        },{
            headers: {
                'Authorization': `Bearer ${authToken}`,
                'Content-Type': 'application/json'
            }
        })
        onCreate({title, location, image, rating, description, date});
        setTimeout(() => {
            window.location = '/wydarzenia';
        }, 1000);
        
    }

    // const handleChangeTitle = (event) => {
    //     setTitle(event.target.value)
    // }
    // const handleChangeLocation = (event) => {
    //     setLocation(event.target.value)
    // }
    // const handleChangeImage = (event) => {
    //     setImage(event.target.value)
    // }
    // const handleChangeRating = (event) => {
    //     setRating(event.target.value)
    // }
    // const handleChangeDescription = (event) => {
    //     setDescription(event.target.value)
    // }

    // const handleChangeDay = (event) => {
    //     setDay(event.target.value)
    // }
    // const handleChangeMonth = (event) => {
    //     setMonth(event.target.value)
    // }
    // const handleChangeYear = (event) => {
    //     setYear(event.target.value)
    // }

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log(values.title, values.location, values.image, values.rating, values.description, values.day, values.month, values.year);
        createSportEvent(values.title, values.location, values.image, values.rating, values.description, values.day, values.month, values.year);
        // setTitle('');
        // setLocation('');
        // setImage('');
        // setRating('');
        // setDescription('');
        // setDay('');
        // setMonth('');
        // setYear('');
    } 


    return (
        <div className="form-section">
            <form className="container shadow" onSubmit={handleSubmit}>
                    <header className="form-header">
                        <h1>Dodaj wydarzenie</h1>
                    </header>
                {/* <div className="row">
                <h4>Informacje ogólne</h4>
                <div className="input-group input-group-icon">
                    <input type="text" placeholder="Tytuł" value={title} onChange={handleChangeTitle} required/>
                    <div className="input-icon"><i className="fa fa-user"></i></div>
                </div>
                <div className="input-group input-group-icon">
                    <input type="text" placeholder="Lokalizacja" value={location} onChange={handleChangeLocation} required/>
                    <div className="input-icon"><i className="fa-solid fa-location-dot"></i></div>
                </div>
                <div className="input-group input-group-icon">
                    <textarea placeholder="Opis" rows={5} value={description} onChange={handleChangeDescription} required></textarea>
                    <div className="input-icon"><i className="fa-solid fa-message"></i></div>
                </div>
                </div>
                <div className="row">
                <div className="col-half">
                    <h4>Termin</h4>
                    <div className="input-group">
                    <div className="col-third">
                        <input type="text" placeholder="DD" value={day} onChange={handleChangeDay} required/>
                    </div>
                    <div className="col-third">
                        <input type="text" placeholder="MM" value={month} onChange={handleChangeMonth} required/>
                    </div>
                    <div className="col-third">
                        <input type="text" placeholder="YYYY" value={year} onChange={handleChangeYear} required/>
                    </div>
                    </div>
                </div>
                <div className="col-half">
                    <h4>Ranga</h4>
                    <div className="input-group">
                    <select onChange={handleChangeRating} value={rating} required>
                        <option value={0}>II</option>
                        <option value={1}>I</option>
                        <option value={2}>M</option>
                        <option value={3}>MM</option>
                    </select>
                    </div>
                </div>
                </div>
                <div className="row">
                <h4>Zdjęcie</h4>
                <div className="input-group input-group-icon">
                    <input type="url" placeholder="Zdjęcie" value={image} onChange={handleChangeImage}/>
                    <div className="input-icon"><i className="fa-solid fa-image"></i></div>
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
                <button type="submit" className="btn form-btn">Dodaj wydarzenie</button>
            </form>
        </div>
    )
}

export default EventCreate;
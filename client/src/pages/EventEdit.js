import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import FormInput from "../components/FormInput";

function EventEdit({ onEdit }) {
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

    const [isAdmin, setIsAdmin] = useState(false);
    const authToken = localStorage.getItem('AuthToken');
    
    const { id } = useParams();
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

    const setEvent = (event) => {
        let day = new Date(event.date).getDay() + 1;
        let month = new Date(event.date).getMonth() + 1;
        if (day < 10) day = `0${day}`;
        if (month < 10) month = `0${month}`;
        setValues({
            title: event.title,
            location: event.location,
            image: event.image,
            rating: event.rating,
            description: event.description,
            day,
            month,
            year: new Date(event.date).getFullYear() 
        });
    }

    const fetchEventData = async () => {
        const response = await axios.get(`/api/events/${id}`); 
        setEvent(response.data);
    };

    useEffect(() => {
        fetchEventData();
    }, [id]);

    

    const editEvent = async (title, location, image, rating, description, day, month, year) => {
        const date =  new Date(`${year}-${month}-${day}`);
          const response = await axios.put(`/api/events/${id}`, {
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

          onEdit(id, {title, location, date, description, image, rating});
          setTimeout(() => {
            window.location = `/wydarzenia/${id}`;
        }, 1000);
    }

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        editEvent(values.title, values.location, values.image, values.rating, values.description, values.day, values.month, values.year);
    } 


    return (
        <div className="form-section">
            <form className="container shadow" onSubmit={handleSubmit} noValidate>
                 <header className="form-header">
                    <h1>Edytuj <br />#{values.title}</h1>
                </header>
                {inputs.map((input) => (
                        <FormInput 
                            key={input.id} 
                            {...input}
                            value={values[input.name]} 
                            onChange={onChange}
                        />
                    ))}
                <button type="submit" className="btn form-btn">Edytuj wydarzenie</button>
            </form>
        </div>
    )
}

export default EventEdit;
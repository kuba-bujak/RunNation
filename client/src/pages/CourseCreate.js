import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import FormInput from '../components/FormInput';

function CourseCreate() {
    const [isAdmin, setIsAdmin] = useState(false);
    const authToken = localStorage.getItem('AuthToken');
    const [values, setValues] = useState({
        title: "",
        location: "",
        img: "",
        dateFrom: "",
		dateTo: "",
		hoursFrom: "",
		hoursTo: "",
        level: "",
        coach: "",
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
            name: "dateFrom",
            type: "date",
            label: "Data rozpoczęcia",
            placeholder: "",
            icon: "fa-regular fa-calendar-days",
            errorMessage: "Data rozpoczęcia jest wymagana",
            required: true
        },
			{
				id: 4,
				name: "dateTo",
				type: "date",
				label: "Data zakończenia",
				placeholder: "",
				icon: "fa-regular fa-calendar-days",
				errorMessage: "Data zakończenia jest wymagana",
				required: true
	  		},
        {
            id: 5,
            name: "hoursFrom",
            type: "time",
            placeholder: "",
            label: "Godzina (od)",
            icon: "fa-solid fa-clock",
            errorMessage: "Godzina rozpoczęcia jest wymagana",
            required: true,
        },
        {
            id: 6,
            name: "hoursTo",
            type: "time",
            placeholder: "",
            label: "Godzina (do)",
            icon: "fa-solid fa-clock",
            errorMessage: "Godzina zakończenia jest wymagana",
            required: true,
        },
        {
            id: 7,
            name: "level",
            type: "select",
            placeholder: "Poziom",
            label: "Poziom zaawansowania",
            icon: "fa-solid fa-chart-simple",
            errorMessage: "Poziom musi być wybrany",
            required: true,
            options: [
                {
                    option: "początkujący",
                    value: "początkujący",
						  selected: "selected"
                },
                {
                    option: "średniozaawansowany",
                    value: "średniozaawansowany"
                },
                {
                    option: "zaawansowany",
                    value: "zaawansowany"
                },
                {
                    option: "ekspercki",
                    value: "ekspercki"
                }
            ]
        },
		  {
				id: 9,
				name: "coach",
				type: "text",
				placeholder: "Jan Kowalski",
				label: "Trener",
				icon: "fa-solid fa-user",
				errorMessage: "Tytuł powinien zawierać od 3 do 100 znaków",
				pattern: "^[A-Za-z0-9ąćęłńóśźżĄĆĘŁŃÓŚŹŻ.- ]{3,100}$",
				required: true
		  },
        {
            id: 10,
            name: "img",
            type: "url",
            placeholder: "Adres url",
            label: "Zdjęcie",
            icon: "fa-solid fa-image",
            errorMessage: "",
            required: true
        },
		  {
			id: 11,
			name: "language",
			type: "select",
			placeholder: "Język",
			label: "Język",
			icon: "fa-solid fa-globe",
			errorMessage: "Język musi być wybrany",
			required: true,
			options: [
				 {
					  option: "polski",
					  value: "polski",
				 },
				 {
					  option: "angielski",
					  value: "angielski"
				 },
				 {
					  option: "niemiecki",
					  value: "niemiecki"
				 },
			]
	  },
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

    const createCourse = async (
		title, 
		location,
		img,
		dateFrom,
		dateTo,
		hoursFrom,
		hoursTo,
		level,
		coach,
		language) => {
         const response = await axios.post('/api/courses/new', {
            title, 
				location,
				img,
				dateFrom,
				dateTo,
				hoursFrom,
				hoursTo,
				level,
				coach,
				language
        },{
            headers: {
                'Authorization': `Bearer ${authToken}`,
                'Content-Type': 'application/json'
            }
        })
        setTimeout(() => {
            window.location = '/kursy';
        }, 1000);
        
    }

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        createCourse(
			  	values.title, 
			  	values.location,
				values.img,
				values.dateFrom,
				values.dateTo,
				values.hoursFrom,
				values.hoursTo,
				values.level,
				values.coach,
				values.language);
    } 


    return (
        <div className="form-section">
            <form className="container shadow" onSubmit={handleSubmit}>
                    <header className="form-header">
                        <h1>Dodaj Kurs</h1>
                    </header>
               
                {inputs.map((input) => (
                        <FormInput 
                            key={input.id} 
                            {...input}
                            value={values[input.name]} 
                            onChange={onChange}
                        />
                    ))}
                <button type="submit" className="btn form-btn">Dodaj Kurs</button>
            </form>
        </div>
    )
}

export default CourseCreate;
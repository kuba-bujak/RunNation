import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import FormInput from '../components/FormInput';

function CourseEdit() {
    const [isAdmin, setIsAdmin] = useState(false);
    const authToken = localStorage.getItem('AuthToken');

	 const { id } = useParams();
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
            id: 30,
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
            id: 31,
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
            id: 32,
            name: "dateFrom",
            type: "date",
            label: "Data rozpoczęcia",
            placeholder: "",
            icon: "fa-regular fa-calendar-days",
            errorMessage: "Data rozpoczęcia jest wymagana",
            required: true
        },
			{
				id: 33,
				name: "dateTo",
				type: "date",
				label: "Data zakończenia",
				placeholder: "",
				icon: "fa-regular fa-calendar-days",
				errorMessage: "Data zakończenia jest wymagana",
				required: true
	  		},
        {
            id: 34,
            name: "hoursFrom",
            type: "time",
            placeholder: "",
            label: "Godzina (od)",
            icon: "fa-solid fa-clock",
            errorMessage: "Godzina rozpoczęcia jest wymagana",
            required: true,
        },
        {
            id: 35,
            name: "hoursTo",
            type: "time",
            placeholder: "",
            label: "Godzina (do)",
            icon: "fa-solid fa-clock",
            errorMessage: "Godzina zakończenia jest wymagana",
            required: true,
        },
        {
            id: 36,
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
				id: 37,
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
            id: 38,
            name: "img",
            type: "url",
            placeholder: "Adres url",
            label: "Zdjęcie",
            icon: "fa-solid fa-image",
            errorMessage: "",
            required: true
        },
		  {
			id: 39,
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

	 const setCourse = (course) => {
		if (course.hoursFrom.length < 5) course.hoursFrom = `0${course.hoursFrom}`;
		if (course.hoursTo.length < 5) course.hoursTo = `0${course.hoursTo}`;
		let dates = [course.dateFrom, course.dateTo];
		dates.map((date, index) => {
			const thisDate = new Date(date)
			let day = thisDate.getDay() + 1;
			let month = thisDate.getMonth() + 1;
			if (day < 10) day = `0${day}`;
        	if (month < 10) month = `0${month}`;
			let year = thisDate.getFullYear();
			let formattedDate = `${year}-${month}-${day}`;
			if (index === 0) {
				course.dateFrom = formattedDate;
			} else {
				course.dateTo = formattedDate;
			}
		})
		
		setValues(course);
	 }

	 const fetchEventData = async () => {
		const response = await axios.get(`/api/courses/${id}`); 
		setCourse(response.data);
		
  };

  useEffect(() => {
	fetchEventData();
}, [id]);

    const editCourse = async (
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
         const response = await axios.put(`/api/courses/${id}`, {
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
        editCourse(
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
                <button type="submit" className="btn form-btn">Edytuj kurs</button>
            </form>
        </div>
    )
}

export default CourseEdit;
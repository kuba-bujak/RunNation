import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function EventCreate({ onCreate }) {
    const [title, setTitle] = useState('');
    const [location, setLocation] = useState('');
    const [image, setImage] = useState('');
    const [rating, setRating] = useState('');
    const [description, setDescription] = useState('');
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');

    const navigate = useNavigate();

    const createSportEvent = async (title, location, image, rating, description, day, month, year) => {
        const date =  new Date(`${year}-${month}-${day}`);
          const response = await axios.post('/api/events', {
            title,
            location,
            image,
            rating,
            description,
            date
          })
        onCreate({title, location, image, rating, description, date});
        setTimeout(() => {
            navigate(`/wydarzenia`, { replace: true });
        }, 3000);
        
    }

    const handleChangeTitle = (event) => {
        setTitle(event.target.value)
    }
    const handleChangeLocation = (event) => {
        setLocation(event.target.value)
    }
    const handleChangeImage = (event) => {
        setImage(event.target.value)
    }
    const handleChangeRating = (event) => {
        setRating(event.target.value)
    }
    const handleChangeDescription = (event) => {
        setDescription(event.target.value)
    }

    const handleChangeDay = (event) => {
        setDay(event.target.value)
    }
    const handleChangeMonth = (event) => {
        setMonth(event.target.value)
    }
    const handleChangeYear = (event) => {
        setYear(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        createSportEvent(title, location, image, rating, description, day, month, year);
        setTitle('');
        setLocation('');
        setImage('');
        setRating('');
        setDescription('');
        setDay('');
        setMonth('');
        setYear('');
    } 


    return (
        <div className="form-section">
            <form className="container shadow" onSubmit={handleSubmit}>
                    <header className="form-header">
                        <h1>Dodaj wydarzenie</h1>
                    </header>
                <div className="row">
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
                </div>
                <button type="submit" className="btn form-btn">Dodaj wydarzenie</button>
            </form>
        </div>
    )
}

export default EventCreate;
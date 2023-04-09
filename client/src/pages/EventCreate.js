import { useState } from "react";
import axios from "axios";

function EventCreate({ onCreate }) {
    const [title, setTitle] = useState('');
    const [location, setLocation] = useState('');
    const [image, setImage] = useState('');
    const [rating, setRating] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');

    const createSportEvent = async (title, location, image, rating, description, date) => {
          const response = await axios.post('/api/events/new', {
            title,
            location,
            image,
            rating,
            description,
            date
          })
        onCreate({title, location, image, rating, description, date});
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
    const handleChangeDate = (event) => {
        setDate(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        createSportEvent(title, location, image, rating, description, date);
        setTitle('');
        setLocation('');
        setImage('');
        setRating('');
        setDescription('');
        setDate('');
    } 


    return (
        <div className="event-section">
            <form onSubmit={handleSubmit}>
                <input type="text" value={title} onChange={handleChangeTitle} placeholder="title"/>
                <input type="text" value={location} onChange={handleChangeLocation} placeholder="location"/>
                <input type="url" value={image} onChange={handleChangeImage} placeholder="image"/>
                <input type="number" value={rating} onChange={handleChangeRating} placeholder="rating"/>
                <textarea value={description} onChange={handleChangeDescription}></textarea>
                <input type="date" value={date} onChange={handleChangeDate} placeholder="data"/>
                <button type="submit">Stwórz</button>
            </form>
        </div>
    )
}

export default EventCreate;
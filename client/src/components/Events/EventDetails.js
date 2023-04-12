import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import ReviewList from "../Reviews/ReviewList";

function EventDetails({ onDelete }) {
    const [event, setEvent] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        fetchEventData();
    }, [id]);

    
    const fetchEventData = async () => {
        const response = await axios.get(`/api/events/${id}`);

        setEvent(response.data);
    };

    let ratings = []
    for (let i = 0; i < event.rating; i++) {
        ratings.push(<AiFillStar />)
    }

    const deleteEvent = (id) => {
        const response = axios.delete(`/api/events/${id}`);
        console.log(response);
        onDelete(id);
        navigate(`/wydarzenia`, { replace: true });
    }

    return (
        <div className="event-page-container">
            <div className="card shadow">
                <div className="ratings">
                    {ratings}
                </div>
                <div className="card-image">
                    <figure className="card-image__figure">
                        <div style={{ backgroundImage: `url(${event.image})`}} className="card-image__figure--image"></div>
                    </figure>
                </div>
                <div className="card-content">
                    <div className="media">
                        <div className="media-content">
                            <h3 className="media-title">
                                {event.title}
                            </h3>
                            <h4 className="media-subtitle">
                                {event.location}
                            </h4>
                        </div>
                    </div>
                    <div className="content">
                        {event.description}
                        <br />
                        <time dateTime={event.date}>{event.date}</time>
                    </div>
                    <div className="card-footer">
                        <Link to={`/wydarzenia/${event._id}/edycja`} className="event-btn edit-btn">Edytuj</Link>
                        <button onClick={() => deleteEvent(event._id)} className="event-btn delete-btn">Usuń</button>
                    </div>
                </div>
            </div>
            <div className="comments-section">
                <ReviewList />
            </div>
        </div>
    )
}

export default EventDetails;
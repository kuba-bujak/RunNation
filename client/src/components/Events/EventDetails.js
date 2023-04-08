import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";

function EventDetails() {
    const [event, setEvent] = useState({});
    const { id } = useParams();

    const fetchEventData = async () => {
        const response = await axios.get(`/api/events/${id}`);

        setEvent(response.data);
    };

    useEffect(() => {
        fetchEventData();
    }, [id]);

    let ratings = []
    for (let i = 0; i < event.rating; i++) {
        ratings.push(<AiFillStar />)
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
                        <Link to={{}} className="event-btn edit-btn">Edytuj</Link>
                        <Link to={{}} className="event-btn delete-btn">Usuń</Link>
                    </div>
                </div>
            </div>
            <div className="comments-section">
                <div className="comment-container">
                    <div className="comment-container__image">
                        <div className="comment-avatar"></div>
                        <div className="comment-author">
                            @kuba.b
                        </div>
                        <div className="comment-role">
                            Zawodnik
                        </div>
                    </div>
                    <div className="comment-container__content">
                        <div className="content-text">
                            To jest jakiś taki mój tekst o niczym.  To jest jakiś taki mój tekst o niczym. To jest jakiś taki mój tekst o niczym. To jest jakiś taki mój tekst o niczym. To jest jakiś taki mój tekst o niczym. To jest jakiś taki mój tekst o niczym. To jest jakiś taki mój tekst o niczym. To jest jakiś taki mój tekst o niczym. To jest jakiś taki mój tekst o niczym. To jest jakiś taki mój tekst o niczym. To jest jakiś taki mój tekst o niczym. To jest jakiś taki mój tekst o niczym. To jest jakiś taki mój tekst o niczym. To jest jakiś taki mój tekst o niczym. To jest jakiś taki mój tekst o niczym. To jest jakiś taki mój tekst o niczym. To jest jakiś taki mój tekst o niczym. To jest jakiś taki mój tekst o niczym. To jest jakiś taki mój tekst o niczym. To jest jakiś taki mój tekst o niczym. To jest jakiś taki mój tekst o niczym. To jest jakiś taki mój tekst o niczym. To jest jakiś taki mój tekst o niczym. To jest jakiś taki mój tekst o niczym. To jest jakiś taki mój tekst o niczym. To jest jakiś taki mój tekst o niczym. To jest jakiś taki mój tekst o niczym. To jest jakiś taki mój tekst o niczym. To jest jakiś taki mój tekst o niczym. To jest jakiś taki mój tekst o niczym. To jest jakiś taki mój tekst o niczym. To jest jakiś taki mój tekst o niczym. To jest jakiś taki mój tekst o niczym.
                        </div>
                        <div className="time">
                            01-01-2023
                        </div>
                    </div>
                </div>
                <div className="comment-container">
                    <div className="comment-container__image">
                        <div className="comment-avatar"></div>
                        <div className="comment-author">
                            @kuba.b
                        </div>
                        <div className="comment-role">
                            Zawodnik
                        </div>
                    </div>
                    <div className="comment-container__content">
                        <div className="content-text">
                            To jest jakiś taki mój tekst o niczym.  To jest jakiś taki mój tekst o niczym. To jest jakiś taki mój tekst o niczym. To jest jakiś taki mój tekst o niczym. To jest jakiś taki mój tekst o niczym. To jest jakiś taki mój tekst o niczym. To jest jakiś taki mój tekst o niczym. To jest jakiś taki mój tekst o niczym. To jest jakiś taki mój tekst o niczym. To jest jakiś taki mój tekst o niczym. To jest jakiś taki mój tekst o niczym. To jest jakiś taki mój tekst o niczym. To jest jakiś taki mój tekst o niczym. To jest jakiś taki mój tekst o niczym. To jest jakiś taki mój tekst o niczym. To jest jakiś taki mój tekst o niczym. To jest jakiś taki mój tekst o niczym. To jest jakiś taki mój tekst o niczym. To jest jakiś taki mój tekst o niczym. To jest jakiś taki mój tekst o niczym. To jest jakiś taki mój tekst o niczym. To jest jakiś taki mój tekst o niczym. To jest jakiś taki mój tekst o niczym. To jest jakiś taki mój tekst o niczym. To jest jakiś taki mój tekst o niczym. To jest jakiś taki mój tekst o niczym. To jest jakiś taki mój tekst o niczym. To jest jakiś taki mój tekst o niczym. To jest jakiś taki mój tekst o niczym. To jest jakiś taki mój tekst o niczym. To jest jakiś taki mój tekst o niczym. To jest jakiś taki mój tekst o niczym. To jest jakiś taki mój tekst o niczym.
                        </div>
                        <div className="time">
                            01-01-2023
                        </div>
                    </div>
                </div>
                <div className="comment-container">
                    <div className="comment-container__image">
                        <div className="comment-avatar"></div>
                        <div className="comment-author">
                            @kuba.b
                        </div>
                        <div className="comment-role">
                            Zawodnik
                        </div>
                    </div>
                    <div className="comment-container__content">
                        <div className="content-text">
                            To jest jakiś taki mój tekst o niczym.  To jest jakiś taki mój tekst o niczym. To jest jakiś taki mój tekst o niczym. To jest jakiś taki mój tekst o niczym. To jest jakiś taki mój tekst o niczym. To jest jakiś taki mój tekst o niczym. To jest jakiś taki mój tekst o niczym. To jest jakiś taki mój tekst o niczym. To jest jakiś taki mój tekst o niczym. To jest jakiś taki mój tekst o niczym. To jest jakiś taki mój tekst o niczym. To jest jakiś taki mój tekst o niczym. To jest jakiś taki mój tekst o niczym. To jest jakiś taki mój tekst o niczym. To jest jakiś taki mój tekst o niczym. To jest jakiś taki mój tekst o niczym. To jest jakiś taki mój tekst o niczym. To jest jakiś taki mój tekst o niczym. To jest jakiś taki mój tekst o niczym. To jest jakiś taki mój tekst o niczym. To jest jakiś taki mój tekst o niczym. To jest jakiś taki mój tekst o niczym. To jest jakiś taki mój tekst o niczym. To jest jakiś taki mój tekst o niczym. To jest jakiś taki mój tekst o niczym. To jest jakiś taki mój tekst o niczym. To jest jakiś taki mój tekst o niczym. To jest jakiś taki mój tekst o niczym. To jest jakiś taki mój tekst o niczym. To jest jakiś taki mój tekst o niczym. To jest jakiś taki mój tekst o niczym. To jest jakiś taki mój tekst o niczym. To jest jakiś taki mój tekst o niczym.
                        </div>
                        <div className="time">
                            01-01-2023
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventDetails;
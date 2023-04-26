import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import ReviewList from "../Reviews/ReviewList";
import Modal from "react-overlays/Modal";
import ModalShow from "../ModalShow";

function EventDetails({ onDelete }) {
    const [event, setEvent] = useState({});
    const [eventDate, setEventDate] = useState('');
    const [eventReviews, setEventReviews] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const { id } = useParams();
    const navigate = useNavigate();
    const authToken = localStorage.getItem('AuthToken');
    const [isAdmin, setIsAdmin] = useState(false);

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
        }
    }

    useEffect(() => {
        if (authToken) {
            isAdminGetter();
        }
    }, [isAdmin]);

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        fetchEventData();
    }, []);

    
    const fetchEventData = async () => {
        const response = await axios.get(`/api/events/${id}`)
        setEvent(response.data);
        const date = new Date(response.data.date);
        const month = date.toLocaleString('default', { month: 'short' });
        const day = date.getDate();
        const year = date.getFullYear();
        setEventDate(`${day} ${month} ${year}`);
        setEventReviews(response.data.reviews);
    };

    let ratings = []
    for (let i = 0; i < event.rating; i++) {
        ratings.push(<AiFillStar />)
    }

    const deleteEvent = async (id) => {
        const response = await axios.delete(`/api/events/${id}`, {
            headers: {
                'Authorization': `Bearer ${authToken}`,
                'Content-Type': 'application/json'
            }
        });
        onDelete(id);
        navigate(`/wydarzenia`, { replace: true });
    }

    const handleModalClose = () => setShowModal(false);

    const renderBackdrop = (props) => <div className="backdrop" {...props} />

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
                        <time dateTime={eventDate}>{eventDate}</time>
                    </div>
                    {isAdmin &&
                    <div className="card-footer">
                        <Link to={`/wydarzenia/${event._id}/edycja`} className="event-btn edit-btn">Edytuj</Link>
                        {/* <button onClick={() => deleteEvent(event._id)} className="event-btn delete-btn">Usuń</button> */}
                        <button type="button" className="event-btn delete-btn" onClick={() => setShowModal(true)}>
                            Usuń
                        </button>
                    </div>}
                    <Modal
                        className="modal"
                        show={showModal}
                        onHide={handleModalClose}
                        renderBackdrop={renderBackdrop}
                    >
                        <ModalShow onClose={handleModalClose} onDelete={deleteEvent} eventId={event._id}/>
                    </Modal>
                </div>
            </div>
            <div className="comments-section">
                <ReviewList eventId={id} reviews={eventReviews} updateReviewList={setEventReviews} isAdmin={isAdmin} />
            </div>
        </div>
    )
}

export default EventDetails;
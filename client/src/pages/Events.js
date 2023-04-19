import { Link } from "react-router-dom";
import EventsList from "../components/Events/EventsList";
import { useEffect, useState } from "react";
import axios from "axios";

function Events({ events }) {
    const authToken = localStorage.getItem('AuthToken');
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        if (authToken) {
            isAdminGetter();
        }
    }, [isAdmin]);

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, []);

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

    return (
        <div className="home-container">
            <div className='header-section'>
                <header>
                    <h1>
                        Wydarzenia
                    </h1>
                    <h3>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod molestie fringilla. Quisque vel vehicula elit, a finibus nisl. Mauris id justo efficitur, tempor enim et, finibus arcu
                    </h3>
                    {isAdmin && 
                        <Link to={`/wydarzenia/nowe`} className="btn join-us-btn">
                            Dodaj wydarzenie
                        </Link>
                    }
                </header>
            </div>
            <div className='event-section'>
                <header>
                    <h1 className='event-header'>Wydarzenia wkrótce</h1>
                </header>
                <EventsList events={events} />
                {/* <Link to={{}} className='btn-secondary events-btn shadow'>
                    Zobacz więcej
                </Link> */}
            </div>
            <div className='event-section'>
                <header>
                    <h1 className='event-header'>Archiwum wydarzeń</h1>
                </header>
                <EventsList events={events} />
                {/* <Link to={{}} className='btn-secondary events-btn shadow'>
                    Zobacz więcej
                </Link> */}
            </div>
        </div>
    )
}

export default Events;
import { Link } from "react-router-dom";
import EventsList from "../components/Events/EventsList";

function Events({ events }) {
    const authToken = localStorage.getItem('AuthToken');

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
                    {authToken && 
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
import { AiFillStar } from 'react-icons/ai'

function ShowEvent({ event }) {
    let ratings = []
    for (let i = 0; i < event.rating; i++) {
        ratings.push(<AiFillStar />)
    }

    return (
        <div className="card shadow">
            <div className="ratings">
                {ratings}
            </div>
            <div className="card-image" style={{ backgroundImage: `url(${event.image})` }}>
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
                    {event.description.length > 100 ?
                        <p>{event.description.slice(0, 100)}...</p>
                        :
                        <p>{event.description}</p>
                    }
                    <br />
                    <div dateTime={event.date}>{event.date}</div>
                </div>
            </div>
        </div>
    );
}

export default ShowEvent;
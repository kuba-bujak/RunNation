import { AiFillStar } from 'react-icons/ai'

function ShowEvent({ event }) {
    let ratings = []
    for (let i = 0; i < event.rating; i++) {
        ratings.push(<AiFillStar />)
    }

    return (
        <div className="card">
            <div className="ratings">
                {ratings}
            </div>
            <div className="card-image">
                <figure className="card-image__figure">
                    <img src={event.image} alt={event.title} className="card-image__figure--image" />
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
                    {event.description.slice(0, 100)}...
                    <br />
                    <time dateTime={event.date}>{event.date}</time>
                </div>
            </div>
        </div>
    );
}

export default ShowEvent;
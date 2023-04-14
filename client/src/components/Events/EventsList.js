import { Link } from "react-router-dom";
import ShowEvent from "./ShowEvent";
import React from "react";

function EventsList({ events }) {
    const displayEvent = events.map(event => {
        return (
            <Link to={`/wydarzenia/${event._id}` } key={event._id}><ShowEvent event={event} /></Link>
        )
    })

    return (
        <div className="events-container">
           <React.Fragment>
                {displayEvent}
           </React.Fragment>
        </div>
    )
}

export default EventsList;
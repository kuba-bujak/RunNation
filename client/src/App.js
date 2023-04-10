import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';

import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";
import Courses from "./pages/Courses";
import Contact from "./pages/Contact";
import { useEffect, useState } from "react";
import Register from "./pages/Register";
import EventDetails from "./components/Events/EventDetails";
import EventCreate from "./pages/EventCreate";
import EventEdit from "./pages/EventEdit";

function App() {
    const [events, setEvents] = useState([]);
    const [sortedEvents, setSortedEvents] = useState([]);
    const [futureAllEvents, setFutureAllEvents] = useState([]);


    const fetchEvents = async () => {
        const response = await axios.get('/api/events');

        setEvents(response.data);
        sortEvents(response.data);
    } 

    useEffect(() => {
        fetchEvents()
    }, [events]);

    const sortEvents = (events) => {
        const futureEvents = events.filter(event => new Date(event.date) > new Date());

        futureEvents.sort((a,b) => {
            if (b.rating !== a.rating) {
                return b.rating - a.rating;
            } else {
                return new Date(a.date) - new Date(b.date)
            }
        });
    
        const topEvents = futureEvents.slice(0,6);
    
        const formattedEvents = topEvents.map(event => {
            const date = new Date(event.date);
            const month = date.toLocaleString('default', { month: 'short' });
            const day = date.getDate();
            const year = date.getFullYear();
            return {
                ...event,
                date: `${day} ${month} ${year}`
            };
        });

        setSortedEvents(formattedEvents);
        
        const futureAllEvents = events
            .filter(event => new Date(event.date) > new Date())
            .sort((a, b) => new Date(a.date) - new Date(b.date));

        setFutureAllEvents(futureAllEvents);
    } 
    
    const createEvent = (newEvent) => {
        const updatedEvents = [
            ...events,
            {
                title: newEvent.title,
                location: newEvent.location,
                date: newEvent.date,
                description: newEvent.description,
                image: newEvent.image,
                rating: newEvent.rating
            }
        ]
        setEvents(updatedEvents);
        sortEvents(updatedEvents);
    }

    const editEvent = (id, editedEvent) => {
        const updatedEvent = events.map((event) => {
            if (event._id === id) {
                return {
                    title: editedEvent.title,
                    location: editedEvent.location,
                    date: editedEvent.date,
                    description: editedEvent.description,
                    image: editedEvent.image,
                    rating: editedEvent.rating
                }
            }
            return event;
        });

        setEvents(updatedEvent);
        console.log(events);
        sortEvents(updatedEvent);
        console.log(sortedEvents);
    }

    const deleteEvent = (id) => {
        const updatedEvents = events.filter((event) => {
            return event._id !== id;
        });

        setEvents(updatedEvents);
        sortEvents(updatedEvents);
    }

    return (
        <div>
            <Router>
                <Navigation />
                <Routes>
                    <Route exact path="/" element={<Home events={sortedEvents} />} />
                    <Route path="/o-nas" element={<About />} />
                    <Route path="/wydarzenia" element={<Events events={futureAllEvents} />} />
                    <Route path="/wydarzenia/:id" element={<EventDetails onDelete={deleteEvent} />} />
                    <Route path="/kursy" element={<Courses />} />
                    <Route path="/kontakt" element={<Contact />} />
                    <Route path="/rejestracja" element={<Register />} />
                    <Route path="/wydarzenia/nowe" element={<EventCreate onCreate={createEvent} />} />
                    <Route path="/wydarzenia/:id/edycja" element={<EventEdit onEdit={editEvent} />} />
                </Routes>
                <Footer />   
            </Router>
        </div>
       
    );
};

export default App;
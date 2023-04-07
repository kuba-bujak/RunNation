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

function App() {
    const [events, setEvents] = useState([]);

    const fetchEvents = async () => {
        const response = await axios.get('/api/events');

        setEvents(response.data);
    } 

    useEffect(() => {
        fetchEvents();
    }, []);

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
    return (
        <div>
            <Router>
                <Navigation />
                <Routes>
                    <Route exact path="/" element={<Home events={formattedEvents} />} />
                    <Route path="/o-nas" element={<About />} />
                    <Route path="/wydarzenia" element={<Events />} />
                    <Route path="/kursy" element={<Courses />} />
                    <Route path="/kontakt" element={<Contact />} />
                </Routes>
                <Footer />
            </Router>
        </div>
       
    );
};

export default App;
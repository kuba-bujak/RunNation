import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";
import Courses from "./pages/Courses";
import Contact from "./pages/Contact";

function App() {
    return (
        <div>
            <Router>
                <Navigation />
                <Routes>
                    <Route exact path="/" element={<Home />} />
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
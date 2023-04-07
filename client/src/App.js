import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Example from "./components/Example";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <div>
            <Router>
                <Navigation />
                <Router>
                    
                </Router>
                <Footer />
            </Router>
        </div>
       
    );
};

export default App;
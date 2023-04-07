import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <div>
            <Router>
                <Navigation />
            </Router>
        </div>
       
    );
};

export default App;
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import CourseList from "../components/Courses/CourseList";
const authToken = localStorage.getItem('AuthToken');

function Courses() {
    const [isAdmin, setIsAdmin] = useState(false);
    const [courses, setCourses] = useState([]);
    const [currentUser, setCurrentUser] = useState('');
    const navigate = useNavigate();

    const fetchEvents = async () => {
        const response = await axios.get('/api/courses');
        setCourses(response.data);
    }

    useEffect(() => {
        if (authToken) {
            isAdminGetter();
        }
    }, [isAdmin]);

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        fetchEvents()
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
        setCurrentUser(response.data.id);
    }

    const registerUser = async (id) => {
        if(!authToken) {
            navigate(`/logowanie`, { replace: true });
        }
        const response = await axios.post(`/api/courses/${id}`, {id}, {
            headers: {
                'Authorization': `Bearer ${authToken}`,
                'Content-Type': 'application/json'
            }
        });
        console.log(response);
    }

    return (
        <div className="home-container">
            <div className='header-section'>
                <header>
                    <h1>
                        Kursy
                    </h1>
                    <h3>
                    Również Ty możesz głebiej poznać świat sportu! <br />
                    </h3>
                    {isAdmin && 
                        <Link to={`/kursy/nowe`} className="btn join-us-btn">
                            Dodaj kurs
                        </Link>
                    }
                </header>
            </div>
            <div className='event-section'>
                <header>
                    <h1 className='event-header'>Nadchodzące kursy</h1>
                </header>
                <CourseList courses={courses} registerUser={registerUser} currentUser={currentUser}/>
                {/* <Link to={{}} className='btn-secondary events-btn shadow'>
                    Zobacz więcej
                </Link> */}
            </div>
        </div>
    )
}

export default Courses;
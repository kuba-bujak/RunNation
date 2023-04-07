import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home() {

    return (
        <div className='home-container'>
            <div className='header-section'>
                <header>
                    <h1>
                        RunNation
                    </h1>
                    <h3>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod molestie fringilla. Quisque vel vehicula elit, a finibus nisl. Mauris id justo efficitur, tempor enim et, finibus arcu
                    </h3>
                    <Link to={{}} className="btn join-us-btn">
                        Dołącz do nas
                    </Link>
                </header>
            </div>
        </div>
    )
}

export default Home;
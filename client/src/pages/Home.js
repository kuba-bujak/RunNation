import { Link } from 'react-router-dom';
import EventsList from '../components/Events/EventsList';
import { useEffect } from 'react';

function Home({ events }) {
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, []);

    return (
        <div className='home-container'>
            <div className='header-section'>
                <header>
                    <h1>
                        Witaj na RunNation
                    </h1>
                    <h3>
                        Serwisie dla biegaczy i miłośników sportów biegowych!         
                    </h3>
                    <Link to={'logowanie'} className="btn join-us-btn">
                        Dołącz do nas
                    </Link>
                </header>
            </div>
            <div className='about-section'>
                <div className='about-section__row'>
                    <div className='image-column'></div>
                    <div className='about-column'>
                        <header>
                            <h3 className='about-header'>Skąd pomysł?</h3>
                        </header>
                        <p>
                        RunNation to serwis internetowy skupiający się na tematyce lekkoatletycznej. Jesteśmy pasjonatami biegania i wiemy, jak ważne jest dla naszych użytkowników zdrowie, kondycja oraz rozwój osobisty. Dlatego stworzyliśmy miejsce, które pozwala na łatwe i przyjemne korzystanie z narzędzi, aplikacji oraz społeczności, które pozwolą Ci osiągać cele w dziedzinie sportu.
                        </p>
                        <p>
                        W RunNation oferujemy wiele narzędzi i aplikacji, które pomogą Ci w codziennej aktywności fizycznej oraz śledzeniu swoich postępów. Nasza aplikacja do biegania umożliwia Ci rejestrowanie treningów, monitorowanie postępów oraz śledzenie swojego rywalizowania z innymi użytkownikami. Ponadto, posiadamy również narzędzia do planowania treningów, które pozwolą Ci na dostosowanie treningów do Twoich celów oraz możliwości.
                        </p>
                        <p>
                        RunNation to nie tylko narzędzia i aplikacje, ale przede wszystkim społeczność. Dzięki naszemu forum internetowemu oraz grupom dyskusyjnym możesz wymieniać się doświadczeniami, zadawać pytania i uzyskiwać wsparcie od innych biegaczy. Razem możemy osiągnąć więcej, dlatego zapraszamy do dołączenia do naszej społeczności!
                        </p>
                        <p>
                        Jeśli masz jakiekolwiek pytania lub sugestie odnośnie naszego serwisu, zachęcamy do skontaktowania się z nami poprzez formularz kontaktowy lub bezpośrednio na nasze konto na mediach społecznościowych. Jesteśmy otwarci na wszelkie uwagi i chętnie Ci pomożemy!
                        </p>
                        <Link to={'/o-nas'} className="btn about-us-btn">
                            Dowiedz się więcej
                        </Link>
                    </div>
                </div>
            </div>
            <div className='event-section'>
                <header>
                    <h1 className='event-header'>Wydarzenia wkrótce</h1>
                </header>
                <EventsList events={events} />
                <Link to={'/wydarzenia'} className='btn-secondary events-btn shadow'>
                    Zobacz więcej
                </Link>
            </div>
            <div className='courses-section'>
                <header>
                    <h1 className='courses-header'>Ofertę kursów i szkoleń prowadzimy dla:</h1>
                </header>
                <ul className='courses-list'>
                    <li className='courses-list__item'>trenerów</li>
                    <li className='courses-list__item'>zawodników</li>
                    <li className='courses-list__item'>amatorów</li>
                </ul>
                <Link to={'/kursy'} className='btn-primary courses-btn'>
                    Zobacz więcej
                </Link>
            </div>
            <div className='event-section'>
                <header>
                    <h1 className='event-header'>Galeria</h1>
                </header>
                <EventsList events={events} />
                <Link to={'/galeria'} className='btn-secondary events-btn shadow'>
                    Zobacz więcej
                </Link>
            </div>
        </div>
    )
}

export default Home;
import { Link } from 'react-router-dom';
import EventsList from '../components/Events/EventsList';

function Home({ events }) {

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
            <div className='about-section'>
                <div className='about-section__row'>
                    <div className='image-column'></div>
                    <div className='about-column'>
                        <header>
                            <h3 className='about-header'>Skąd pomysł?</h3>
                        </header>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod molestie fringilla. Quisque vel vehicula elit, a finibus nisl. Mauris id justo efficitur, tempor enim et, finibus arcu. Nulla accumsan pharetra tempor. Etiam convallis malesuada ipsum. Morbi ultricies a libero a facilisis. In eu blandit turpis. Curabitur dictum nunc placerat, malesuada massa id, interdum ligula. Donec sed dignissim nulla. Praesent imperdiet sapien lorem, ut fermentum tellus eleifend non. Fusce faucibus ex quis neque varius, a suscipit ligula ultricies. Aliquam erat diam, pellentesque sit amet interdum pretium, suscipit imperdiet leo. Aenean hendrerit est at ante posuere, vitae iaculis ante pulvinar.
                        </p>
                        <p>
                            Sed libero metus, convallis eget dapibus eget, vulputate et urna. Maecenas ac mauris id est euismod placerat at vitae eros. In hac habitasse platea dictumst. Curabitur arcu nibh, feugiat feugiat placerat in, malesuada convallis mi. Ut eget condimentum justo. Etiam et fringilla velit, lacinia auctor lorem. Nunc elementum dapibus arcu id mattis. Etiam vel magna condimentum, venenatis leo sed, mattis velit. Donec suscipit sed odio ut molestie. Donec magna eros, ultricies ac quam nec, facilisis pharetra turpis.
                        </p>
                        <p>
                            Phasellus scelerisque consequat ante. Suspendisse potenti. Cras at libero maximus, aliquet ipsum volutpat, facilisis nibh. Vestibulum porta, orci ac lacinia luctus, arcu metus aliquet felis, in tristique purus mi at justo. Quisque ex felis, vehicula sed blandit ac, aliquet eu eros. Nulla consectetur nibh vel ante vestibulum placerat ut ac lorem. Pellentesque maximus odio eu porta viverra. Proin porttitor maximus odio, id tempor risus venenatis ut. Mauris ac rhoncus diam, maximus aliquet est. Quisque pretium turpis non congue viverra. Pellentesque sem est, porttitor sit amet diam id, auctor sollicitudin ligula.
                        </p>
                        <Link to={{}} className="btn about-us-btn">
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
            </div>
        </div>
    )
}

export default Home;
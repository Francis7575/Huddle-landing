import logo from '../assets/logo.svg';
import card from '/src/assets/illustration-mockups.svg';
import Footer from '../containers/Footer';

const Content = () => {
    return (
        <>
            <main>
                <div className="container">
                    <div className="logo">
                        <img className="logo_image" src={logo} alt="logo-icon" />
                        </div>
                    <div className="mid_content">
                        <figure>
                            <img className="main_image" src={card} alt="card-image" />
                        </figure>
                        <div className="text">
                            <h1>
                                Build The Community <span>Your Fans Will Love</span>
                            </h1>
                            <p>
                                Huddle re-imagines the way we build communities. You have a voice, but so  does your audience. Create connections with your users as you engage in genuine discussion.
                            </p>
                            <a href="#">
                                <button id="registerBtn">Register</button>
                            </a>
                        </div>
                    </div>
                    <Footer />
                </div>
            </main>
        </>
    )
}
export default Content;
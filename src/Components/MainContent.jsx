import MainImage from '../images/illustration-mockups.svg';
import BgMobile from '../images/bg-mobile.svg'
import BgDesktop from '../images/bg-desktop.svg'

const MainContent = () => {
    return (
        <main>
            <div className="main__wrapper">
                <div className='image__container'>
                    <img className="main__image" src={MainImage} alt="" />
                </div>
                <div className="text__container">
                    <h1 className='text__h1'>Build The Community Your Fans Will Love</h1>
                    <p className='text__paragraph'>
                        Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.
                    </p>
                    <div className="button__container">
                        <button id="registerBtn">Register</button>
                    </div>
                </div>
            </div>
            <figure>
                <img className="mobile__pattern__image" src={BgMobile} alt="" />
                <img className="desktop__pattern__image" src={BgDesktop} alt="" />
            </figure>
        </main>
    )
}

export default MainContent
import logo from '../images/logo.svg'

const Header = () => {
    return (
        <header>
            <div className="logo__container">
                <img className="logo" src={logo} alt="Huddle logo" />
            </div>
        </header>
    )
}

export default Header
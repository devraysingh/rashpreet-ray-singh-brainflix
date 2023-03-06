import "./Header.scss";
import brainFlixLogo from "../../assets/images/logo/BrainFlix-logo.svg";

function Header(){
    //Header Component
    return(
        <div className="header">
            <img src={brainFlixLogo} className="header__logo" alt="Brain Flix Nav Logo"></img>
            <div className="header__actions">
                <input placeholder="Search" className="header__search"></input>
                <button className="header__upload-btn">UPLOAD</button>
                <div className="header__user"></div>
            </div>
        </div>
    )
}

export default Header;
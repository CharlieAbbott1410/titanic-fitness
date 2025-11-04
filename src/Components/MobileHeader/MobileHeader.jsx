import "./MobileHeader.css"
import LogoImage from "../../assets/Logo.png"
import MenuIcon from "../../assets/MenuIcon.svg"
import { NavLink } from "react-router"
import { useState } from "react"

export default function () {
    const [open,setOpen] = useState(false);
    function toggleOpen(){
        setOpen(!open);
    }

    let menuClassName = "Menu-Icon";
    if (open){
        menuClassName = "Menu-Icon open"
    }

    const navMenu =<nav className="mobile-nav">
    <NavLink to="/" className="nav-btn">Home</NavLink>
    <NavLink to="/Workouts" className="nav-btn">Workouts</NavLink>
    <NavLink to="/Auth" className="primary-btn">Join</NavLink>
</nav>

    return (
        <header className="mobile-header">
            <div className="logo">
                <img src={LogoImage} alt="Titanic Fitness Logo" />
                <h1>TITANIC FITNESS</h1>
            </div>
            <img onClick={toggleOpen} className={menuClassName} src={MenuIcon} alt="Mobile Menu Icon"></img>
            {open? navMenu : null}
        </header>
    )
}
import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import {GiHamburgerMenu} from "react-icons/gi";
const Menu = () =>
{
    const [showMenu, setShowMenu] = useState(false);
    const Menu = () =>
    {
        setShowMenu(!showMenu);
    }
    return(
        <>
        <div className= {showMenu ? "menu_style mobile_menu" : "menu_style"}>
        <ul>
        <li><NavLink exact activeClassName="active_class" to='/' onClick={Menu}>Home</NavLink></li>
        <li><NavLink exact activeClassName="active_class" to='/yoga' onClick={Menu}>Yoga</NavLink></li>
        <li><NavLink exact activeClassName="active_class" to='/cardio' onClick={Menu}>Cardio</NavLink></li>
        <li><NavLink exact activeClassName="active_class" to='/strength' onClick={Menu}>Strength</NavLink></li>
        <li><NavLink exact activeClassName="active_class" to='/flexibility' onClick={Menu}>Flexibility</NavLink></li>
        </ul>
        </div>
        <div className="hamburger_menu">
            <a href="#" onClick={Menu}> 
            <GiHamburgerMenu/>
            </a>
        </div>
        </>
    );
}
export default Menu;

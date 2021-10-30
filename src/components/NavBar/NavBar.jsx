import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import './Nav.scss'

export default function NavBar(props) {

    const [solid, setSolid] = useState(false);

    const changeBackground = () => {
        if (window.scrollY > 20) {
            setSolid(true);
        } else {
            setSolid(false);
        }
    };

    window.addEventListener("scroll", changeBackground);

    return (
        <>
            <div className={solid ? 'NavBarSolid' : 'Nav'}>
                <ul>
                    <li><NavLink to='/projects' activeClassName="isActive">Projects</NavLink></li>
                    <li><NavLink to='/experience'>Xperience</NavLink></li>
                    <li><NavLink to='/home'>Home</NavLink></li>
                    <li><NavLink to='/skills'>Skills</NavLink></li>
                    <li><NavLink to='/contact'>ContactMe</NavLink></li>
                </ul>
            </div>
        </>
    )
}
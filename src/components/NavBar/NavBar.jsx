import React from "react";
import { NavLink } from "react-router-dom";
import './Nav.scss'

export default function NavBar(props) {

    return (
        <>
            <div className='Nav'>
                <ul>
                    <li><NavLink to='/projects' activeClassName="isActive">Projects</NavLink></li>
                    <li><NavLink to='/experience' activeClassName="isActive">Xperience</NavLink></li>
                    <li><NavLink to='/home' activeClassName="isActive">Home</NavLink></li>
                    <li><NavLink to='/skills' activeClassName="isActive">Skills</NavLink></li>
                    <li><NavLink to='/contact' activeClassName="isActive">ContactMe</NavLink></li>
                </ul>
            </div>
        </>
    )
}
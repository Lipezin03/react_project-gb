import "./Header.scss"
import React from 'react';
import { NavLink } from 'react-router-dom';;


export const Header = () => {

    const setActiv = ({ isActive }) => ({ color: isActive ? "teal" : "tomato" })

    return (
        <div className="header">
            <div className="header__content container">
                <div className="header__title">
                    <NavLink to="/">My React Project</NavLink>
                </div>
                <nav className="header__nav">
                    <ul className="header__list">
                        <li className="header__list-item" ><NavLink style={setActiv} to="/chats">Chats</NavLink></li>
                        <li className="header__list-item"><NavLink style={setActiv} to="/profile">Profile</NavLink></li>
                        <li className="header__list-item"><NavLink style={setActiv} to="/space-news">SpaceNews</NavLink></li>
                    </ul>
                </nav>

            </div>
        </div>

    )
}
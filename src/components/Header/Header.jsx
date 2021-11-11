import "./Header.scss"
import React from 'react';
import { Link } from 'react-router-dom';;


export const Header = () => {

    return (
        <div className="header">
            <div className="header__content container">
                <div className="header__title">
                    <Link to="/">My React Project</Link>
                </div>
                <nav className="header__nav">
                    <ul className="header__list">
                        <li className="header__list-item" ><Link to="/chats">Chats</Link></li>
                        <li className="header__list-item"><Link to="/profile">Profile</Link></li>
                    </ul>
                </nav>

            </div>
        </div>

    )
}
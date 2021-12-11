import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuItem } from './ManuItem';
import './Navigation.css'

const Navigation = () => {
    const [clicked, setClicked] = useState(false);
    const handleClick = e => {
        if (clicked === true) {
            setClicked(false)
        } else {
            setClicked(true)
        }

        e.preventDefault();
    }

    return (
        <>
            <nav className='NavbarItem'>
                <h1 className="navbar-logo">N R SHAGOR</h1>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
                <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItem.map((item, index) => {
                        return (
                            <li><Link className={item.cName} to={item.url}>{item.title}</Link></li>
                            // <li><a className={item.cName} href={item.url} smooth={true} duration={1000}>{item.title}</a></li>
                        )
                    })}

                </ul>

            </nav>
        </>
    );

};

export default Navigation;
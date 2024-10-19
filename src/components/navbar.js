import React, { useEffect, useState } from 'react';
import "./styles/navbar.css";
import logo from "./images/logo.png";


const Navbar = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [])

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    
    return (
        <nav className="navbar">
            {isMenuOpen && <div className='Overlay' onClick={toggleMenu}>


            </div>}
            <div className='navbar-container'>
                <img src={logo} alt="Home" className='logo' />
                <div className='home'>

                    <span className='title'>
                        <a href='/'>Lithium</a>
                    </span>
                </div>
                {isMobile ? ( <div>
                    <button className='menu-button' onClick={toggleMenu}>
                    <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                        </button>
                    <div className={`dropdown ${isMenuOpen ? 'open' : ''}`}>
                            <ul className="dropdown-menu">
                                <li className='nav-item-drop menu-close'>
                                    <button className='menu-button' onClick={toggleMenu}>
                                    <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i> 
                                    </button>
                                </li>

                                <li className='nav-item-drop'>
                                    <a href='/' className='nav-links'>Home</a>
                                </li>
                                <li className='nav-item-drop'>
                                    <a href='/showcase' className='nav-links'>Project-Showcase</a>
                                </li>
                                <li className='nav-item-drop'>
                                    <a href='/events' className='nav-links'>Events</a>
                                </li>
                                <li className='nav-item-drop'>
                                    <a href='/Timeline' className='nav-links'>Timeline</a>
                                </li>
                                <li className='nav-item-drop'>
                                    <a href='/contact' className='nav-links'>Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
               ) : (

                    <ul className='nav-menu'>
                        <li className='nav-item'>
                            <a href='/' className='nav-links'>Home</a>
                        </li>
                        <li className='nav-item'>
                            <a href='/showcase' className='nav-links'>Project Showcase</a>
                        </li>
                        <li className='nav-item'>
                            <a href='/timeline' className='nav-links'>Timeline</a>
                        </li>
                        <li className='nav-item'>
                            <a href='/events' className='nav-links'>Events</a>
                        </li>
                        <li className='nav-item'>
                            <a href='/contact' className='nav-links'>Contact</a>
                        </li>

                    </ul>)}

            </div>
        </nav>
    )

}

export default Navbar;

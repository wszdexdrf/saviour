// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Button from '@mui/material/Button';
import banner from '../assets/logo.png';



function Navbar() {
    return (
        <div className="navbar" >
            <img src={banner} alt="Logo" className="banner-image" style={{ alignSelf: 'flex-start' }} />
            <div className='links' style={{ marginLeft: 'auto' }}>
                <Button classname='navbutton' component={Link} to="/" className="nav-button" variant="contained" style={{ padding: '10px' }}>Home</Button>
                <Button classname='navbutton' component={Link} to="/downloads" className="nav-button" variant="contained" style={{ padding: '10px' }}>Downloads</Button>
                <Button classname='navbutton' component={Link} to="/work" className="nav-button" variant="contained" style={{ padding: '10px' }}>Work</Button>
            </div>
        </div>
    );
}


export default Navbar;
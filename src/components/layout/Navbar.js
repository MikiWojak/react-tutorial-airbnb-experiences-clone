import React from 'react'

import airbnbLogo from '../../assets/images/airbnb-logo.png'

const Navbar = () => {
    return (
        <nav className="navbar">
            <img src={airbnbLogo} alt="airbnb logo" className="navbar--logo" />
        </nav>
    )
}

export default Navbar
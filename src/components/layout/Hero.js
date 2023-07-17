import React from 'react'

import photoGrid from '../../assets/images/photo-grid.png'

const Hero = () => {
    return (
        <section className="hero">
            <img src={photoGrid} alt="photo grid" className="hero--photo-grid" />

            <h1>Online Experiences</h1>
            <p>
                Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </p>
        </section>
    )
}

export default Hero
import React from 'react'

import Hero from './components/layout/Hero'
import Card from './components/elements/Card'
import Navbar from './components/layout/Navbar'

import cardsData from './data'

const App = () => {
    const cards = cardsData.map(card => {
        const {
            id,
            coverImg,
            stats: { rating, reviewCount },
            location,
            title,
            price,
            openSpots,
        } = card

        return (
            <Card
                key={id}
                img={coverImg}
                rating={rating}
                reviewCount={reviewCount}
                location={location}
                title={title}
                price={price}
                openSpots={openSpots}
            />
        )
    })

    return (
        <div>
            <Navbar />
            <Hero />
            
            <section className="cards--list">
                {cards}
            </section>
        </div>
    )
}

export default App

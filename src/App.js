import React from 'react'

import Hero from './components/layout/Hero'
import Card from './components/elements/Card'
import Navbar from './components/layout/Navbar'

import cardsData from './data'

const App = () => {
    const cards = cardsData.map(card => {
        const {
            coverImg,
            stats: { rating, reviewCount },
            location,
            title,
            price,
        } = card

        return (
            <Card
                img={coverImg}
                rating={rating}
                reviewCount={reviewCount}
                country={location}
                title={title}
                price={price}
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

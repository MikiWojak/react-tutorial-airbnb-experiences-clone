import React from 'react'

import Hero from './components/layout/Hero'
import Card from './components/elements/Card'
import Navbar from './components/layout/Navbar'

import cardsData from './data'

const App = () => {
    const cards = cardsData.map(item => {
        return (
            <Card
                key={item.id}
                item={item}
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

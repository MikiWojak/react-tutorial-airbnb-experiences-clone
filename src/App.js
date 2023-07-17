import React from 'react'

import Hero from './components/layout/Hero'
import Card from './components/elements/Card'
import Navbar from './components/layout/Navbar'

const App = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            
            <Card />
        </div>
    )
}

export default App

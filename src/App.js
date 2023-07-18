import React from 'react'

import Hero from './components/layout/Hero'
import Card from './components/elements/Card'
import Navbar from './components/layout/Navbar'

import katieZaferesImg from './assets/images/katie-zaferes.png'

const App = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            
            <Card 
                img={katieZaferesImg}
                rating="5.0"
                reviewCount={6}
                country="USA"
                title="Life lessons with Katie Zaferes"
                price={136}
            />
        </div>
    )
}

export default App

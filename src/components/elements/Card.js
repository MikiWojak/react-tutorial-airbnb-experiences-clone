import React from 'react'

import star from '../../assets/images/star.png'
import katieZaferes from '../../assets/images/katie-zaferes.png'

const Card = () => {
    return (
        <div className="card">
            <img src={katieZaferes} alt="katie zaferes" className="card--image" />

            <div className="card--stats">
                <img src={star} alt="katie zaferes" className="card--stats_star" />
                <span className="card--stats_grade">5.0</span>
                <span className="gray">(6) &bull;</span>
                <span className="gray">USA</span>
            </div>

            <p className="card--description">
                Life lessons with Katie Zaferes
            </p>

            <p className="card--price">
                <b>From $136</b> / person
            </p>
        </div>
    )
}

export default Card

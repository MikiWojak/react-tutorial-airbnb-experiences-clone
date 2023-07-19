import React from 'react'

import star from '../../assets/images/star.png'

const Card = (props) => {
    const {
        img,
        rating,
        reviewCount,
        country,
        title,
        price
    } = props

    return (
        <div className="card">
            <img src={`./images/${img}`} alt={title} className="card--image" />
            
            <div className="card--stats">
                <img src={star} alt="star" />
                <span className="card--stats_grade">{rating}</span>
                <span className="gray">({reviewCount}) &bull; </span>
                <span className="gray">{country}</span>
            </div>

            <p className="card--description">
                {title}
            </p>

            <p className="card--price">
                <b>From ${price}</b> / person
            </p>
        </div>
    )
}

export default Card

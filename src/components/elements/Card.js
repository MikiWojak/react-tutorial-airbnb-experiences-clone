import React from 'react'

import star from '../../assets/images/star.png'

const Card = (props) => {
    const {
        item: {
            coverImg,
            stats: {
                rating,
                reviewCount
            },
            location,
            title,
            price,
            openSpots
        }
    } = props

    let badgeText

    if (openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={`./images/${coverImg}`} alt={title} className="card--image" />
            
            <div className="card--stats">
                <img src={star} alt="star" />
                <span className="card--stats_grade">{rating}</span>
                <span className="gray">({reviewCount}) &bull; </span>
                <span className="gray">{location}</span>
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

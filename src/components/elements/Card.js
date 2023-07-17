import React from 'react'

import star from '../../assets/images/star.png'
import katieZaferes from '../../assets/images/katie-zaferes.png'

const Card = () => {
    return (
        <section className="card">
            <div className="card--photo">
                <img src={katieZaferes} alt="katie zaferes" className="card--photo_img" />
                <div className="card--photo_status">Sold out</div>
            </div>

            <div className="card--rating">
                <img src={star} alt="katie zaferes" className="card--rating_star" />
                <span className="card--rating_grade">5.0</span>
                <span className="card--rating_info">(6) USA</span>
            </div>

            <div className="card--description">
                Life lessons with Katie Zaferes
            </div>

            <div className="card--price">
                <b>From $136</b> / person
            </div>
        </section>
    )
}

export default Card

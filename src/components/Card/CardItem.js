import React from 'react'
import { CardContainer, CardImg, CardInfo, CardRate } from './CardStyles'

const CardItem = ({type, url, title, rating, preview_gif}) => {
    return (
        <CardContainer href={url} target="_blank">
            <CardRate>
                <span className="rate-text">Rate</span>
                <span className="rate-num">{rating}</span>
            </CardRate>
            <CardImg src={preview_gif} alt={title} />
            <CardInfo>
                <h3 className="title">{title}</h3>
                <h5 className="type">{type}</h5>
            </CardInfo>
        </CardContainer>
    )
}

export default CardItem

import React from 'react'

function Card(props) {

    
    return (
        
        
        <div className="overlay">
        
        <div className="flexbox">
        <h3 className="w-text no-margin">{props.title}</h3>
        
        </div>
        
        <div className="flexbox">
        <h6 className="w-text tur-text no-margin rating ">Rating: {props.rating} <span className="w-text no-margin black-bg rounded">{props.year}</span> </h6>
        
        </div>
        </div>
        
        
    )
}

export default Card

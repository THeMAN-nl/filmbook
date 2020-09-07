import React from 'react'

function NewsCard(props) {
    return (
        
    <div className="overlay">
        
            <p className=" tur-text" >{props.source}</p>
            <h4 className="newsTitle w-text no-margins" >{props.title} </h4>
        
    </div>
    
  )
}

export default NewsCard

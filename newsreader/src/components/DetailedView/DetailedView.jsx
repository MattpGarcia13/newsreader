import './DetailedView.css'
import React from 'react'

function DetailedView({currentCard, setCurrentCard}) {
  function handleClick(){
   setCurrentCard(null) 
  }

  return (
    <section className='detailed-card'>
            <button className='detailed-btn' onClick={handleClick} >Back</button>
            <h1 className='detailed-title'>{currentCard.title}</h1>
            <h3 className='detailed-description'>{currentCard.description}</h3>
            <img className='detailed-img' src={currentCard.urlToImage} alt={currentCard.title}></img>
            <a href={currentCard.url} className='detailed-link'>Source</a>
        </section>
  )
}

export default DetailedView


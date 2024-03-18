import './NewsCards.css';
import React from 'react'

function NewsCards({articles, setCurrentCard}) {
  function handleClick(article){
    setCurrentCard(article)
  }


const articlesCards = articles.map((article, index) => {
    return (
        <section id={index} key={index} className='card'>
            <h1>{article.title}</h1>
            <h3>{article.description}</h3>
            <img src={article.urlToImage} alt={article.title}></img>
            <h1>{article.date}</h1>
            <button className='card-btn' onClick={event => handleClick(article)} >View</button>
        </section>
    )
})
  return (
    <div>
      {articlesCards}
    </div>
  )
}

export default NewsCards

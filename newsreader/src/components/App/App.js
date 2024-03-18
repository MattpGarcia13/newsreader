import './App.css';
import { useEffect, useState } from 'react';
import mockData from '../../MockData';
import NewsCards from '../NewsCards/NewsCards';
import Header from '../Header/Header';
import Sort from '../Sort/Sort';
import DetailedView from '../DetailedView/DetailedView';

function App() {
  const [articles, setArticles] = useState(mockData.articles);
  const [currentCard, setCurrentCard] = useState(null);

  useEffect(() => {
    fetch('https://newsapi.org/v2/everything?q=apple&from=2024-03-16&to=2024-03-16&sortBy=popularity&apiKey=98413c79109740d0a5435f2418710fd1')
      .then(response => response.json())
      .then(data => setArticles(data.articles))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="App">
      <Header />
      <Sort setArticles={setArticles}/>
      {currentCard ? (
        <DetailedView setCurrentCard={setCurrentCard} currentCard={currentCard}/>
      ) : (
        <NewsCards setCurrentCard={setCurrentCard} articles={articles} />
      )}
    </div>
  );
}

export default App;


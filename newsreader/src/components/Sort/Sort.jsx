import './Sort.css';
import React, { useState } from 'react';

function Sort({ setArticles }) {

    function getNewArticles(term) {

        fetch(`https://newsapi.org/v2/everything?q=${term}&from=2024-03-16&to=2024-03-16&sortBy=popularity&apiKey=98413c79109740d0a5435f2418710fd1`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setArticles(data.articles);
            })
            .catch(error => console.log(error));
    }

    function handleClick(event) {
        const term = event.target.value;
        getNewArticles(term);
    }

    return (
        <div className='sort-btns'>
            <button value='entertainment' onClick={handleClick}>Entertainment</button>
            <button value='health' onClick={handleClick}>Health</button>
            <button value='science' onClick={handleClick}>Science</button>
            <button value='sports' onClick={handleClick}>Sports</button>
            <button value='technology' onClick={handleClick}>Technology</button>
            <button value='business' onClick={handleClick}>Business</button>
        </div>
    );
}

export default Sort;

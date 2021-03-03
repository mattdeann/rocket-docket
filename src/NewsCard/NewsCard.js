import React from 'react';
import './NewsCard.css';
import stockPhoto from '../assets/stock-photo.jpg';

function NewsCard({article}) {

  return (
    <article 
      style={{ backgroundImage: `url(${article.imageUrl || stockPhoto})`}} 
      className="news-card" 
      alt="article cover" >
      <p>
        {article.publishedAt}
      </p>
      <h2>
        {article.title}
      </h2>
      <section>
        More Info
      </section>
    </article>
  );
}


export default NewsCard;
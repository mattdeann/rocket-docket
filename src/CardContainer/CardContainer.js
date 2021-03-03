import React from 'react';
import './CardContainer.css';
import RocketCard from '../RocketCard/RocketCard';
import NewsCard from '../NewsCard/NewsCard';

function CardContainer({newsData}) {
  const newsArticles = newsData.map(article => {
    return (
      <NewsCard article={article} />
    )
  })

  return (
    <main className="card-container">
      {newsArticles}
      {/* <RocketCard />
      <RocketCard />
      <RocketCard />
      <RocketCard />
      <RocketCard />
      <RocketCard /> */}
    </main>
  );
}


export default CardContainer;
import React from 'react';
import './CardContainer.css';
import RocketCard from '../RocketCard/RocketCard';
import NewsCard from '../NewsCard/NewsCard';

function CardContainer({newsData, rocketData}) {
  // const newsCards = newsData.map(article => {
  //   return (
  //     <NewsCard article={article} />
  //   )
  // })

  // ROCKETDATA.RESULTS MAY BECOME JUST ROCKET DATA UPON SWITCHING TO API REQUEST

  const rocketCards = rocketData.map(rocket => {
    return (
      <RocketCard rocket={rocket} key={rocket.slug} />
    )
  })

  return (
    <main className="card-container">
      {/* {newsCards} */}
      {rocketCards}
    </main>
  );
}


export default CardContainer;
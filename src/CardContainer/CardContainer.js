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

  let rocketCards;

  console.log(rocketData)
  
  if (rocketData) {
      rocketCards = rocketData.map(rocket => {
      return (
        <RocketCard rocket={rocket} key={rocket.slug} />
      )
      
    })
  }

  return (
    <main className="card-container">
      {/* {newsCards} */}
      {rocketCards}
    </main>
  );
}


export default CardContainer;
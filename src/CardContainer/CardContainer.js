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

  const rocketCards = rocketData.map(data => {
    return (
      <RocketCard data={data} />
    )
  })

  return (
    <main className="card-container">
      {/* {newsCards} */}
      {rocketCards}
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
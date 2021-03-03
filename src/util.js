const getNewsData = () => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const requestOptions = {
  headers: myHeaders,
  };

  return fetch("https://spaceflightnewsapi.net/api/v2/articles", requestOptions)
    .then(response => response.json())
    .catch(error => console.log('error', error));
}

export default getNewsData;
const getUpcomingRockets = () => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const requestOptions = {
  headers: myHeaders,
  };

  return fetch("https://ll.thespacedevs.com/2.0.0/launch/upcoming", requestOptions)
    .then(response => response.json())
    .catch(error => console.log('error', error));
}

const getRecentRockets = () => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const requestOptions = {
  headers: myHeaders,
  };

  return fetch("https://ll.thespacedevs.com/2.0.0/launch/previous", requestOptions)
    .then(response => response.json())
    .catch(error => console.log('error', error));
}

export {getUpcomingRockets, getRecentRockets};
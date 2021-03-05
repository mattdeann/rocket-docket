const getRocketData = () => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const requestOptions = {
  headers: myHeaders,
  };

  return fetch("https://ll.thespacedevs.com/2.0.0/launch/", requestOptions)
    .then(response => response.json())
    .catch(error => console.log('error', error));
}

export default getRocketData;
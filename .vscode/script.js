const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      'x-cg-demo-api-key': ''
    }
  };
  
  fetch('https://api.coingecko.com/api/v3/ping', options)
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.error(err));
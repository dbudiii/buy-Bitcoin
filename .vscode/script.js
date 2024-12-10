const apiKey = 'CG-syBgZNHgtsL74efX2XqVSZsR';

async function fetchBTCPrice() {
  try {
    const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd', {
      method: 'GET',
      headers: {
        'x-cg-api-key': apiKey
      }
    });

    const data = await response.json();
    console.log(data);
    const price = data.bitcoin.usd;

    document.getElementById('price').innerText = `Price: $${price.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
  } 

  catch (error) {
    console.error('Error fetching data:', error);
    document.getElementById('price').innerText = "Error loading price.";
  }

}

fetchBTCPrice();
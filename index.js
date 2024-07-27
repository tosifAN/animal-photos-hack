// index.js

import axios from 'axios';

// Function to fetch a random cat image URL
async function fetchCatImageUrl() {
  try {
    const response = await axios.get('https://cataas.com/cat');
    return response.request.res.responseUrl; // Fetch the redirected URL
  } catch (error) {
    throw new Error('Error fetching the cat image URL: ' + error.message);
  }
}

module.exports = fetchCatImageUrl;

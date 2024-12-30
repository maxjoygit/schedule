import axios from "axios";


const websites = [
    'https://nonsense.win/'
]

async function fetchMultipleUrls() {
    try {
      // Create an array of Axios request promises
      const requests = websites.map(url => axios.get(url));
      
      // Await all requests simultaneously
      const responses = await Promise.all(requests);
  
      // Process all the responses
      responses.forEach((response, index) => {
        console.log(`Response from URL ${websites[index]}:`);
        console.log(response.data);
      });
    } catch (error) {
      console.error('Error in one of the requests:', error.message);
    }
  }
  
  // Execute the function
  fetchMultipleUrls();

import axios from 'axios';


const winnersApi = axios.create({
  baseURL: 'https://www.ag-grid.com/example-assets/olympic-winners.json',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default winnersApi;
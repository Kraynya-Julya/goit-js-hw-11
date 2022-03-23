import axios from 'axios';

const API_KEY = '25809768-25809815-48234f4bdae6ed5bfcb89977d';
const BASE_URL = 'https://pixabay.com/api';

export default async function getImages(word) {
    const response = await axios.get(`${BASE_URL}/?key=${API_KEY}&q=${word}&image_type='photo'&page=1&per_page=40&orientation='horizontal'&safesearch='true'`);
    //   console.log(response);
    return response.data.hits;
}
  
import axios from 'axios';

const API_KEY = '25809768-25809815-48234f4bdae6ed5bfcb89977d';
const BASE_URL = 'https://pixabay.com/api';

export default class NewsApiService {
    constructor() {
        this.newsApiService = '';
        this.API_KEY = API_KEY;
        this.BASE_URL = BASE_URL;
        this.page = 1;
        this.per_page = 40;
    }
    
    async getImages(requestWord) {
        try {
            const response = await axios.get(`${this.BASE_URL}/?key=${this.API_KEY}&q=${this.requestWord}&image_type='photo'&page=${this.page}&per_page=${this.per_page}&orientation='horizontal'&safesearch='true'`);
            //   console.log(response);
            const result = await response.data;
            this.incrementPage();
            return result;
        } catch (error) {
            // console.error(error);
            } 
    }

    get searchWord() {
        return this.requestWord;
    }
    set searchWord(newWord) {
        this.requestWord = newWord;
    }

    incrementPage() {
        this.page += 1;
    }

    resetPage() {
        this.page = 1;
    }
}
    
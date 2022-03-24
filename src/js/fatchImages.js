import axios from 'axios';

const API_KEY = '25809768-25809815-48234f4bdae6ed5bfcb89977d';
const BASE_URL = 'https://pixabay.com/api';

export default class NewApi {
    constructor(){
        this.API_KEY=API_KEY;
        this.BASE_URL=BASE_URL;
        this.word='';
        this.page=1;
    } 

    async getImages(word) { 
        try {
        const response = await axios.get(`${BASE_URL}/?key=${API_KEY}&q=${word}&image_type='photo'&page=${this.page}&per_page=40&orientation='horizontal'&safesearch='true'`);
        //   console.log(response);
        const result = await response.data;
        this.addPage();
        return result;
    }   catch (error) {
}
}
get newWord(){
    return this.word
}
set newWord(anotherWord){
    this.word=anotherWord;
}
addPage(){
    this.page += 1;
}
resetPage(){
    this.page = 1; 
}
}
  
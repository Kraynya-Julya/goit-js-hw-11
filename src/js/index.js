import './sass/main.scss';
import getImages from './fatchImages';
import card from './c'
import Notiflix from 'notiflix';

const refs = {
    searchForm: document.querySelector('.search-form'),
    articlesContainer: document.querySelector('.gallery'),
    loadMore: document.querySelector('.load-more'),
}


refs.searchForm.addEventListener('submit', onSearch);

let requestWord = '';

function onSearch(e) {
  e.preventDefault();
  requestWord = e.target.elements.searchQuery.value.trim();

  try {
    if (requestWord !== '') {
      getImages(requestWord).then(word => renderImageCards(word));
      Notiflix.Notify.success(`Hooray! We found totalHits images.`);
    }
    else {
      Notiflix.Notify.info(`Enter any word`)
    }
  } catch (error) {
    onFetchError();
   }
}

function renderImageCards (word) {
    refs.articlesContainer.innerHTML = card(word);
}

function onFetchError(error) {
    // console.log(error);
    Notiflix.Notify.failure('Sorry, there are no images matching your search query. Please try again');
}
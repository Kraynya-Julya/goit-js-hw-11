import './sass/main.scss';
import NewApi from './js/fatchImages';
import card from './hbs/card.hbs';
import Notiflix from 'notiflix';
import LoadMoreBtn from './js/LoadMoreBtn';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const refs = {
    searchForm: document.querySelector('.search-form'),
    articlesContainer: document.querySelector('.gallery'),
    loadMore: document.querySelector('.load-more'),
}
const newApi = new NewApi();

refs.searchForm.addEventListener('submit', onSearch);

function onSearch(e) {
  e.preventDefault();
  newApi.newWord = e.target.elements.searchQuery.value.trim();
  clearImageCards();
  newApi.getImages().then(({ hits, totalHits }) => {

    if (newApi.newWord === '') {
     Notiflix.Notify.info(`Enter any word`);
    } else if (hits.length === 0) {
        onFetchError();
       } else {
          renderImageCards(hits);
          Notiflix.Notify.success(`Hooray! We found ${totalHits} images.`);
       }
      });
    }

    function clearImageCards() {
           refs.articlesContainer.innerHTML = '';
          }
// newsApiService.getImages().then(({ hits, totalHits }) => {
//   if (newsApiService.searchWord === '') {
//     Notiflix.Notify.info(`Enter any word`)
//   } else if (hits.length === 0) {
//     onFetchError();
//   } else {
//     loadMoreBtn.show();
//     renderImageCards(hits);
//     Notiflix.Notify.success(`Hooray! We found ${totalHits} images.`);
//     lightbox.refresh();
//   }
// });
function renderImageCards (word) {
    refs.articlesContainer.insertAdjacentHTML('beforeend', card(word));

}

function onFetchError(error) {
    // console.log(error);
    Notiflix.Notify.failure('Sorry, there are no images matching your search query. Please try again');
}
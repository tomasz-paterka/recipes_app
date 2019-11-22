// Global app controller
import '../css/style.css';

import '../img/favicon.png';
import '../img/icons.svg';
import '../img/logo.png';
// import '../img/test-1.jpg';

import Search from './models/Search';
import * as searchView from './views/searchView';
import { elements, renderLoader, clearLoader } from './views/base';

// Global state of the app
// - Search object
// - Recipe object
// - Shopping list object
// - Liked object

const state = {};

const controlSearch = async () => {
  const query = searchView.getInput();
  // console.log(query);
  if (query) {
    state.search = new Search(query);

    searchView.cleanInput();
    searchView.clearResults();

    renderLoader(elements.searchRes);

    await state.search.getResults();
    console.log(state.search.result);

    clearLoader();

    searchView.renderResults(state.search.result);
  }
};

elements.searchForm.addEventListener('submit', e => {
  e.preventDefault();
  controlSearch();
});

elements.searchResPages.addEventListener('click', e => {
  const btn = e.target.closest('.btn-inline');
  if (btn) {
    const goToPage = parseInt(btn.dataset.goto, 10);
    searchView.clearResults();
    searchView.renderResults(state.search.result, goToPage);
  }
});

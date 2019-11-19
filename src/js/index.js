// Global app controller
import '../css/style.css';

import '../img/favicon.png';
import '../img/icons.svg';
import '../img/logo.png';
import '../img/test-1.jpg';

import Search from './models/Search';

const search = new Search('pizza');
console.log(search);

search.getResults();
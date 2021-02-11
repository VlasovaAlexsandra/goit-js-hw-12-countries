const debounce = require('lodash.debounce');

import './js/notification';
import './styles.css';

import fetchCountries from './js/fetchCountries';
import updateCountriesMarkup from './js/update-countries-markup';

const refs = {
  countriesContainer: document.querySelector('.js-countries'),
  searchInput: document.querySelector('.js-searchInput'),
};

refs.searchInput.addEventListener(
  'input',
  debounce(event => {
    event.preventDefault();

    const inputValue = event.target.value;

    refs.countriesContainer.innerHTML = '';

    fetchCountries(inputValue).then(data => updateCountriesMarkup(data));
  }, 500),
);

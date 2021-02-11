import countriesTpl from '../templates/countries.hbs';
import countriesName from '../templates/countriesName.hbs';

const refs = {
  countriesContainer: document.querySelector('.js-countries'),
  searchInput: document.querySelector('.js-searchInput'),
};

function updateCountriesMarkup(data) {
  // записать условие для ошибки + нотификашка эрор

  const markupNames = countriesName(data);

  // записать условие для вывода имен стран + нотификашка успех

  const markup = countriesTpl(data);

  // записать условие для вывода одной страны + нотификашка успех

  refs.countriesContainer.insertAdjacentHTML('beforeend', markupNames);
  refs.countriesContainer.insertAdjacentHTML('beforeend', markup);
}

export default updateCountriesMarkup;

import countriesTpl from '../templates/countries.hbs';

const refs = {
  countriesContainer: document.querySelector('.js-countries'),
  searchInput: document.querySelector('.js-searchInput'),
};

function updateCountriesMarkup(data) {
  const markup = countriesTpl(data);

  refs.countriesContainer.insertAdjacentHTML('beforeend', markup);
}

export default updateCountriesMarkup;

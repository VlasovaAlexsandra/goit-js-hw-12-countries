import '../js/notification';
import countriesTpl from '../templates/countries.hbs';
import countriesName from '../templates/countriesName.hbs';

const refs = {
  countriesContainer: document.querySelector('.js-countries'),
  searchInput: document.querySelector('.js-searchInput'),
};

function updateCountriesMarkup(data, event) {
  // записать условие для ошибки + нотификашка эрор

  if (event.target.value === '' || event.target.value === ' ') {
    PNotify.error({
      text:
        'Error message! Too many matches found. Please enter a more specific query!',
    });
  }

  const markupNames = countriesName(data);
  refs.countriesContainer.insertAdjacentHTML('beforeend', markupNames);
  if (data.length >= 2 && data.length <= 10) {
    PNotify.success({
      text: 'Success message. You find country!',
    });
  }

  // записать условие для вывода имен стран + нотификашка успех

  const markup = countriesTpl(data);
  refs.countriesContainer.insertAdjacentHTML('beforeend', markup);
  if (data.length > 10) {
    PNotify.success({
      text: 'Success message. You find country!',
    });
  }

  // записать условие для вывода одной страны + нотификашка успех
}

export default updateCountriesMarkup;

import './styles.css';

import '@pnotify/core/dist/BrightTheme.css'; // стилизиция сообщений
import { alert } from '@pnotify/core'; // импорт требуемых функций для отображения нотификации

import debounce from 'lodash.debounce';
import fetchCountries from './js/fetchCountries';
import updateCountriesMarkup from './js/update-countries-markup';

const refs = {
  countriesContainer: document.querySelector('.js-countries'),
  searchInput: document.querySelector('.js-searchInput'),
};

refs.searchInput.addEventListener('input', debounce(loadCountries, 500));

function loadCountries(event) {
  event.preventDefault(); // event.target - это наш "инпут" в котором произошло событие

  const inputValue = event.target.value.trim(); // удаляем пробелы из содержащегося в нем текста

  refs.countriesContainer.innerHTML = '';

  if (inputValue) {
    // если ничего не ввели - лучше запрос вообще не делать
    fetchCountries(inputValue).then(data => updateCountriesMarkup(data));
  } else {
    alert({
      text: 'Please enter country name',
      type: 'info',
    });
  }
}

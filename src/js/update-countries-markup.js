import '../js/notification';

import countriesTpl from '../templates/countries.hbs';
import countriesName from '../templates/countriesName.hbs';

import '@pnotify/core/dist/BrightTheme.css'; // стилизиция сообщений
import { success, error } from '@pnotify/core'; // импорт требуемых функций для отображения нотификации, при желании, можно импортировать alert и success

const refs = {
  countriesContainer: document.querySelector('.js-countries'),
  searchInput: document.querySelector('.js-searchInput'),
};

function updateCountriesMarkup(data) {
  if (data) {
    // получен массив стран
    if (data.length === 1) {
      // в массиве есть только одна страна - сгенерировать шаблон countriesTpl
      refs.countriesContainer.insertAdjacentHTML(
        'beforeend',
        countriesTpl(data),
      );
      success({
        text: 'Success message. You find country!',
      });
    } else if (data.length > 1 && data.length <= 10) {
      // если количесто стран от 2 до 10 - показать список стран
      refs.countriesContainer.insertAdjacentHTML(
        'beforeend',
        countriesName(data),
      );
      success({
        text: 'Success message. You find a lot of countries!',
      });
    } else {
      // если количество элементов массива больше 10 - показать ошибку, что необходимо сделать запрос более специфичным
      error({
        text:
          'Error message! Too many matches found. Please enter a more specific query!',
        delay: 2000,
      });
    }
  } else {
    // если вернулся undefined, значит запрос завершился с ошибкой - страны с таким названием отсутствуют, нужно вывести сообщение об ошибке
    error({ text: 'No matches found', delay: 2000 });
  }
}

export default updateCountriesMarkup;

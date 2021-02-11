function fetchCountries(searchQuery) {
  const url = 'https://restcountries.eu/rest/v2/';
  return fetch(url)
    .then(data => data.json())
    .catch(error => console.log(error));
}

export default fetchCountries;

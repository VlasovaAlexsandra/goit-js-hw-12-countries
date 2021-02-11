function fetchCountries(searchQuery) {
  const url = 'https://restcountries.eu/rest/v2/';

  return fetch(url + 'name/' + searchQuery)
    .then(data => {
      if (data.ok) return data.json();
    })

    .catch(error => console.log(error));
}

export default fetchCountries;

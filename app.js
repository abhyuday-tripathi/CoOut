const fetchData = async () => {
  const res = await fetch('https://covid-193.p.rapidapi.com/statistics', {
    headers: {
      'x-rapidapi-key': '06ad5bc6camsha77135a751c7b5fp11bfe2jsn1b07897a0f4e',
      'x-rapidapi-host': 'covid-193.p.rapidapi.com',
    },
  });
  return res.json();
};

fetchData().then(data => {
  document.querySelector('#newCases').textContent =
    data.response[227].cases.new;
  document.querySelector('#activeCases').textContent =
    data.response[227].cases.active;
  document.querySelector('#criticalCases').textContent =
    data.response[227].cases.critical;
  document.querySelector('#recoveredCases').textContent =
    data.response[227].cases.recovered;
  document.querySelector('#totalCases').textContent =
    data.response[227].cases.total;
  document.querySelector('#totalDeaths').textContent =
    data.response[227].deaths.total;
  document.querySelector('#totalTests').textContent =
    data.response[227].tests.total;
  document.querySelector('#totalPopulation').textContent =
    data.response[227].population;
  console.log(data.response[227]);
});

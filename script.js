let countries = [];
let currentPage = 1;
const pageSize = 20; 

// Elementos HTML
const countriesList = document.getElementById('countriesList');
const searchInput = document.getElementById('searchInput');
const regionFilter = document.getElementById('regionFilter');
const populationFilter = document.getElementById('populationFilter');
const sortOrder = document.getElementById('sortOrder');


async function fetchCountries() {
    const res = await fetch('https://restcountries.com/v3.1/all');
    countries = await res.json();
    displayCountries(countries);
}


function displayCountries(countryList) {
    countriesList.innerHTML = '';

    countryList
        .slice(0, currentPage * pageSize) 
        .forEach(country => {
            const countryCard = document.createElement('div');
            countryCard.classList.add('country-card');
            countryCard.innerHTML = `
                <img src="${country.flags.png}" alt="${country.name.common}">
                <h3>${country.name.common}</h3>
                <p>Capital: ${country.capital ? country.capital[0] : 'N/A'}</p>
                <p>Região: ${country.region}</p>
                <p>População: ${country.population.toLocaleString()}</p>
            `;
            countriesList.appendChild(countryCard);

            countryCard.addEventListener('click', () => {
                showCountryDetails(country);
            });
        });
}


searchInput.addEventListener('input', () => {
    const filteredCountries = countries.filter(country =>
        country.name.common.toLowerCase().includes(searchInput.value.toLowerCase())
    );
    displayCountries(filteredCountries);
});


regionFilter.addEventListener('change', () => {
    const filteredCountries = countries.filter(country =>
       
        country.region === regionFilter.value || regionFilter.value === ""
    );
    displayCountries(filteredCountries);
});


populationFilter.addEventListener('change', () => {
    const filteredCountries = countries.filter(country => {
        const population = country.population;
        if (populationFilter.value === "<1000000") return population < 1000000;
        if (populationFilter.value === "1000000-10000000") return population >= 1000000 && population <= 10000000;
        if (populationFilter.value === "10000000-100000000") return population >= 10000000 && population <= 100000000;
        if (populationFilter.value === ">100000000") return population > 100000000;
        return true;
    });
    displayCountries(filteredCountries);
});


sortOrder.addEventListener('change', () => {
    let sortedCountries = [...countries];
    if (sortOrder.value === 'name') {
        sortedCountries.sort((a, b) => a.name.common.localeCompare(b.name.common));
    } else if (sortOrder.value === 'population') {
        sortedCountries.sort((a, b) => a.population - b.population);
    } else if (sortOrder.value === 'area') {
        sortedCountries.sort((a, b) => a.area - b.area);
    }
    displayCountries(sortedCountries);
});


function showCountryDetails(country) {
    alert(`
        Nome oficial: ${country.name.official}
        Capital: ${country.capital ? country.capital[0] : 'N/A'}
        Região: ${country.region}
        Sub-região: ${country.subregion || 'N/A'}
        População: ${country.population.toLocaleString()}
        Área: ${country.area.toLocaleString()} km²
        Idiomas: ${Object.values(country.languages || {}).join(', ')}
        Moedas: ${Object.values(country.currencies || {}).map(c => c.name).join(', ')}
        Fuso horário: ${country.timezones.join(', ')}
        Código de Discagem: +${country.idd?.root || ''}${country.idd?.suffixes?.[0] || ''}
    `);
}


window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        currentPage++;
        displayCountries(countries);
    }
});

// Inicializar a aplicação
fetchCountries();

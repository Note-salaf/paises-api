export const select = document.querySelector("#countrySelect");
export const button = document.querySelector("#addCountry");
export const container = document.getElementById("countries")

export function criarCardPais(country, text) {

const card = `
<div class="card">
<h3>${country.name.common}</h3>
<img src="${country.flags.png}" width="120">
<p>Capital: ${country.capital}</p>
<p>População: ${text}</p>
<button class="delete-btn">Excluir</button>
</div>
`

container.innerHTML += card
}

export function criarSelect(paises) {

paises
.sort((a, b) => a.translations.por.common.localeCompare(b.translations.por.common))
.forEach(pais => {

const option = document.createElement("option");

option.value = pais.name.common
option.textContent = pais.translations.por.common

select.appendChild(option)

})

}
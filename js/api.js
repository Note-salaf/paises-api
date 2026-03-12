import { criarCardPais, criarSelect, select } from "./ui.js"

export async function nomesPaises() {

  const response = await fetch("https://restcountries.com/v3.1/all?fields=name,translations")
  const paises = await response.json()

  criarSelect(paises)

}

export async function showCountry(){

const selectedCountry = select.value

if(!selectedCountry){
  alert("Selecione um país")
  return
}

const url =
`https://restcountries.com/v3.1/name/${selectedCountry}?fullText=true&fields=name,flags,capital,population`

const res = await fetch(url)
const data = await res.json()

const country = data[0]

const population = country.population

const text = population < 1000000
  ? population
  : `${(population / 1000000).toFixed(1)} M`

criarCardPais(country, text)

}
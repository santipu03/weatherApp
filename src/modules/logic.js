import { renderCityWeather } from './UI'

const displayCityWeather = (cityName, units) => {
  getCityWeather(cityName, units).then(data => renderCityWeather(data))
}

async function getCityWeather (cityName, units) {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=0289ceb6bf189f255d7c1f30b04ec011&units=${units}`, { mode: 'cors' })
    return await response.json()
  } catch (e) {
    alert('This city does not exist')
  }
}

export { displayCityWeather }

import { renderCityWeather, getCityName } from './UI'

const displayCityWeather = (cityName, units) => {
  getForecast(cityName, units).then((data) => renderCityWeather(data, units))
}

async function getForecast (cityName, units) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=0289ceb6bf189f255d7c1f30b04ec011&units=${units}`,
      { mode: 'cors' }
    )
    const data = await response.json()
    return data
  } catch (e) {
    alert('This city does not exist')
  }
}

const changeToFarenheit = () => displayCityWeather(getCityName(), 'imperial')

const changeToCelsius = () => displayCityWeather(getCityName(), 'metric')

export { displayCityWeather, changeToCelsius, changeToFarenheit }

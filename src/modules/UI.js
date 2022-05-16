import { displayCityWeather } from './logic'
import { capitalizeFirstLetter, getBackground, getIcon } from './utils'

const cityName = document.querySelector('.city-name')
const weatherTitle = document.querySelector('.weather-title')
const temperature = document.querySelector('.temp')
const icon = document.querySelector('.icon')
const feelsLikeTemp = document.querySelector('.feel-temp')
const humidity = document.querySelector('.humidity')
const wind = document.querySelector('.wind')
const clouds = document.querySelector('.clouds')
const input = document.querySelector('input')

const renderCityWeather = (data) => {
  try {
    cityName.textContent = `${data.name}, ${data.sys.country}`
    weatherTitle.textContent = capitalizeFirstLetter(data.weather[0].description)
    temperature.innerHTML = `${Math.floor(data.main.temp)}<span>°C</span>`
    feelsLikeTemp.textContent = `${Math.floor(data.main.feels_like)}°C`
    humidity.textContent = `${data.main.humidity}%`
    wind.textContent = `${data.wind.speed} m/s`
    clouds.textContent = `${data.clouds.all}%`
    icon.innerHTML = getIcon(data.weather[0].icon)
    renderBackgroundImg(data.weather[0].icon)
  } catch (e) {
    alert(data.message)
  }
}

const renderBackgroundImg = (code) => {
  const backgroundImg = getBackground(code)
  document.documentElement.style.setProperty('--background-img', `url(${backgroundImg})`)
}

const setBtnListener = () => {
  document.querySelector('button').addEventListener('click', (e) => {
    e.preventDefault()
    displayCityWeather(input.value, 'metric')
    input.value = ''
  })
}

export { renderCityWeather, setBtnListener }

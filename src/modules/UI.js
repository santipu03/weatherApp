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

const renderCityWeather = (data, unit) => {
  try {
    cityName.textContent = `${data.name}, ${data.sys.country}`
    weatherTitle.textContent = capitalizeFirstLetter(data.weather[0].description)
    humidity.textContent = `${data.main.humidity}%`
    clouds.textContent = `${data.clouds.all}%`
    icon.innerHTML = getIcon(data.weather[0].icon)
    renderBackgroundImg(data.weather[0].icon)

    if (unit === 'metric') {
      temperature.innerHTML = `${Math.floor(data.main.temp)}<span>°C</span>`
      feelsLikeTemp.textContent = `${Math.floor(data.main.feels_like)}°C`
      wind.textContent = `${data.wind.speed} m/s`
    } else if (unit === 'imperial') {
      temperature.innerHTML = `${Math.floor(data.main.temp)}<span>°F</span>`
      feelsLikeTemp.textContent = `${Math.floor(data.main.feels_like)}°F`
      wind.textContent = `${data.wind.speed} mph`
    }
  } catch (e) {
    alert(data.message)
  }
}

const changeToFarenheit = () => {
  const city = cityName.textContent.split(',')[0]
  displayCityWeather(city, 'imperial')
}

const changeToCelsius = () => {
  const city = cityName.textContent.split(',')[0]
  displayCityWeather(city, 'metric')
}

const renderBackgroundImg = (code) => {
  const backgroundImg = getBackground(code)
  document.documentElement.style.setProperty('--background-img', `url(${backgroundImg})`)
}

const setBtnListeners = () => {
  document.querySelector('.search').addEventListener('click', (e) => {
    e.preventDefault()
    const units = document.querySelector('.to-farenheit').textContent.split('').reverse()[0]
    if (units === 'F') {
      displayCityWeather(input.value, 'metric')
    } else if (units === 'C') {
      displayCityWeather(input.value, 'imperial')
    }
    input.value = ''
  })

  document.querySelector('.to-farenheit').addEventListener('click', (e) => {
    const unit = e.target.textContent.split('').reverse()[0]
    if (unit === 'F') {
      changeToFarenheit()
      e.target.textContent = 'Display °C'
    } else if (unit === 'C') {
      changeToCelsius()
      e.target.textContent = 'Display °F'
    }
  })
}

export { renderCityWeather, setBtnListeners }

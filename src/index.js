import {
  displayCityWeather,
  changeToFarenheit,
  changeToCelsius
} from './modules/logic'

// Initial Load
window.addEventListener('DOMContentLoaded', () => {
  displayCityWeather('barcelona', 'metric')
  setBtnListeners()
})

const setBtnListeners = () => {
  // Set listener to two btns: Search and Toggle between Celsius and Farenheit

  const input = document.querySelector('input')

  document.querySelector('.search').addEventListener('click', (e) => {
    e.preventDefault()
    const units = document
      .querySelector('.to-farenheit')
      .textContent.split('')
      .reverse()[0]
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

import { displayCityWeather } from './modules/logic'
import { setBtnListener } from './modules/UI'

// Weather api Key 0289ceb6bf189f255d7c1f30b04ec011

window.addEventListener('DOMContentLoaded', () => {
  displayCityWeather('barcelona', 'metric')
  setBtnListener()
})

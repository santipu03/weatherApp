
const capitalizeFirstLetter = (word) => word.charAt(0).toUpperCase() + word.slice(1)

const getIcon = (code) => {
  if (code === '01d') {
    return '<span class="material-icons">wb_sunny</span>'
  }
  if (code === '01n') {
    return '<span class="material-icons">dark_mode</span>'
  }
  if (code === '02n') {
    return '<span class="material-icons">nights_stay</span>'
  }
  if (code === '03d' || code === '03n' || code === '04d' || code === '04n' || code === '02d') {
    return '<span class="material-icons">wb_cloudy</span>'
  }
  if (code === '09d' || code === '09n' || code === '10d' || code === '10n') {
    return '<span class="material-icons">cloudy_snowing</span>'
  }
  if (code === '11d' || code === '11n') {
    return '<span class="material-icons">thunderstorm</span>'
  }
  if (code === '13d' || code === '13n') {
    return '<span class="material-icons">ac_unit</span>'
  }
  if (code === '50d' || code === '50n') {
    return '<span class="material-icons">snowing</span>'
  }
}

const getBackground = (code) => {
  if (code === '01d') {
    return 'images/sunny.jpg'
  }
  if (code === '01n') {
    return 'images/night.jpg'
  }
  if (code === '02n') {
    return 'images/cloudyNight.jpg'
  }
  if (code === '03d' || code === '03n' || code === '04d' || code === '04n' || code === '02d') {
    return 'images/cloudy.jpg'
  }
  if (code === '09d' || code === '09n' || code === '10d' || code === '10n') {
    return 'images/rainy.jpg'
  }
  if (code === '11d' || code === '11n') {
    return 'images/lightning.jpg'
  }
  if (code === '13d' || code === '13n') {
    return 'images/snow.jpg'
  }
  if (code === '50d' || code === '50n') {
    return 'images/mist.jpg'
  }
}

export { capitalizeFirstLetter, getIcon, getBackground }

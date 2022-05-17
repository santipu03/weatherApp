/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/UI.js":
/*!***************************!*\
  !*** ./src/modules/UI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCityName": () => (/* binding */ getCityName),
/* harmony export */   "renderCityWeather": () => (/* binding */ renderCityWeather)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/modules/utils.js");


const cityName = document.querySelector('.city-name')
const weatherTitle = document.querySelector('.weather-title')
const temperature = document.querySelector('.temp')
const icon = document.querySelector('.icon')
const feelsLikeTemp = document.querySelector('.feel-temp')
const humidity = document.querySelector('.humidity')
const wind = document.querySelector('.wind')
const clouds = document.querySelector('.clouds')
const errorMsg = document.querySelector('.error')

const renderCityWeather = (data, unit) => {
  try {
    cityName.textContent = `${data.name}, ${data.sys.country}`
    weatherTitle.textContent = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.capitalizeFirstLetter)(data.weather[0].description)
    humidity.textContent = `${data.main.humidity}%`
    clouds.textContent = `${data.clouds.all}%`
    icon.innerHTML = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getIcon)(data.weather[0].icon)
    renderBackgroundImg(data.weather[0].icon)
    clearErrorMsg()

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
    renderErrorMsg(data.message)
  }
}

const clearErrorMsg = () => errorMsg.classList.remove('show')

const renderErrorMsg = (msg) => {
  errorMsg.classList.add('show')
  errorMsg.textContent = msg
}

const renderBackgroundImg = (code) => {
  const backgroundImg = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getBackground)(code)
  document.documentElement.style.setProperty('--background-img', `url(${backgroundImg})`)
}

const getCityName = () => cityName.textContent.split(',')[0]




/***/ }),

/***/ "./src/modules/logic.js":
/*!******************************!*\
  !*** ./src/modules/logic.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "changeToCelsius": () => (/* binding */ changeToCelsius),
/* harmony export */   "changeToFarenheit": () => (/* binding */ changeToFarenheit),
/* harmony export */   "displayCityWeather": () => (/* binding */ displayCityWeather)
/* harmony export */ });
/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI */ "./src/modules/UI.js");


const displayCityWeather = (cityName, units) => {
  getForecast(cityName, units).then(data => (0,_UI__WEBPACK_IMPORTED_MODULE_0__.renderCityWeather)(data, units))
}

async function getForecast (cityName, units) {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=0289ceb6bf189f255d7c1f30b04ec011&units=${units}`, { mode: 'cors' })
    const data = await response.json()
    return data
  } catch (e) {
    alert('This city does not exist')
  }
}

const changeToFarenheit = () => displayCityWeather((0,_UI__WEBPACK_IMPORTED_MODULE_0__.getCityName)(), 'imperial')

const changeToCelsius = () => displayCityWeather((0,_UI__WEBPACK_IMPORTED_MODULE_0__.getCityName)(), 'metric')




/***/ }),

/***/ "./src/modules/utils.js":
/*!******************************!*\
  !*** ./src/modules/utils.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "capitalizeFirstLetter": () => (/* binding */ capitalizeFirstLetter),
/* harmony export */   "getBackground": () => (/* binding */ getBackground),
/* harmony export */   "getIcon": () => (/* binding */ getIcon)
/* harmony export */ });

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




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/logic */ "./src/modules/logic.js");


// Weather api Key 0289ceb6bf189f255d7c1f30b04ec011

// Initial Load
window.addEventListener('DOMContentLoaded', () => {
  (0,_modules_logic__WEBPACK_IMPORTED_MODULE_0__.displayCityWeather)('barcelona', 'imperial')
  setBtnListeners()
})

const setBtnListeners = () => {
  // Set listener to two btns: Search and Toggle between Celsius and Farenheit

  const input = document.querySelector('input')

  document.querySelector('.search').addEventListener('click', (e) => {
    e.preventDefault()
    const units = document.querySelector('.to-farenheit').textContent.split('').reverse()[0]
    if (units === 'F') {
      (0,_modules_logic__WEBPACK_IMPORTED_MODULE_0__.displayCityWeather)(input.value, 'metric')
    } else if (units === 'C') {
      (0,_modules_logic__WEBPACK_IMPORTED_MODULE_0__.displayCityWeather)(input.value, 'imperial')
    }
    input.value = ''
  })

  document.querySelector('.to-farenheit').addEventListener('click', (e) => {
    const unit = e.target.textContent.split('').reverse()[0]
    if (unit === 'F') {
      (0,_modules_logic__WEBPACK_IMPORTED_MODULE_0__.changeToFarenheit)()
      e.target.textContent = 'Display °C'
    } else if (unit === 'C') {
      (0,_modules_logic__WEBPACK_IMPORTED_MODULE_0__.changeToCelsius)()
      e.target.textContent = 'Display °F'
    }
  })
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQXVFOztBQUV2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDhCQUE4QixVQUFVLElBQUksaUJBQWlCO0FBQzdELCtCQUErQiw2REFBcUI7QUFDcEQsOEJBQThCLG1CQUFtQjtBQUNqRCw0QkFBNEIsZ0JBQWdCO0FBQzVDLHFCQUFxQiwrQ0FBTztBQUM1QjtBQUNBOztBQUVBO0FBQ0EsaUNBQWlDLDJCQUEyQjtBQUM1RCxxQ0FBcUMsaUNBQWlDO0FBQ3RFLDRCQUE0QixpQkFBaUI7QUFDN0MsTUFBTTtBQUNOLGlDQUFpQywyQkFBMkI7QUFDNUQscUNBQXFDLGlDQUFpQztBQUN0RSw0QkFBNEIsaUJBQWlCO0FBQzdDO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdCQUF3QixxREFBYTtBQUNyQyx3RUFBd0UsY0FBYztBQUN0Rjs7QUFFQTs7QUFFeUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xEWTs7QUFFckQ7QUFDQSw0Q0FBNEMsc0RBQWlCO0FBQzdEOztBQUVBO0FBQ0E7QUFDQSxzRkFBc0YsU0FBUyxnREFBZ0QsTUFBTSxLQUFLLGNBQWM7QUFDeEs7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUEsbURBQW1ELGdEQUFXOztBQUU5RCxpREFBaUQsZ0RBQVc7O0FBRUs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CakU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUV3RDs7Ozs7OztVQ3pEeEQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ053Rjs7QUFFeEY7O0FBRUE7QUFDQTtBQUNBLEVBQUUsa0VBQWtCO0FBQ3BCO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxrRUFBa0I7QUFDeEIsTUFBTTtBQUNOLE1BQU0sa0VBQWtCO0FBQ3hCO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLE1BQU0saUVBQWlCO0FBQ3ZCO0FBQ0EsTUFBTTtBQUNOLE1BQU0sK0RBQWU7QUFDckI7QUFDQTtBQUNBLEdBQUc7QUFDSCIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvbW9kdWxlcy9VSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL21vZHVsZXMvbG9naWMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9tb2R1bGVzL3V0aWxzLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXJhcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNhcGl0YWxpemVGaXJzdExldHRlciwgZ2V0QmFja2dyb3VuZCwgZ2V0SWNvbiB9IGZyb20gJy4vdXRpbHMnXG5cbmNvbnN0IGNpdHlOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNpdHktbmFtZScpXG5jb25zdCB3ZWF0aGVyVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VhdGhlci10aXRsZScpXG5jb25zdCB0ZW1wZXJhdHVyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZW1wJylcbmNvbnN0IGljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaWNvbicpXG5jb25zdCBmZWVsc0xpa2VUZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZlZWwtdGVtcCcpXG5jb25zdCBodW1pZGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5odW1pZGl0eScpXG5jb25zdCB3aW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndpbmQnKVxuY29uc3QgY2xvdWRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3VkcycpXG5jb25zdCBlcnJvck1zZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lcnJvcicpXG5cbmNvbnN0IHJlbmRlckNpdHlXZWF0aGVyID0gKGRhdGEsIHVuaXQpID0+IHtcbiAgdHJ5IHtcbiAgICBjaXR5TmFtZS50ZXh0Q29udGVudCA9IGAke2RhdGEubmFtZX0sICR7ZGF0YS5zeXMuY291bnRyeX1gXG4gICAgd2VhdGhlclRpdGxlLnRleHRDb250ZW50ID0gY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKGRhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvbilcbiAgICBodW1pZGl0eS50ZXh0Q29udGVudCA9IGAke2RhdGEubWFpbi5odW1pZGl0eX0lYFxuICAgIGNsb3Vkcy50ZXh0Q29udGVudCA9IGAke2RhdGEuY2xvdWRzLmFsbH0lYFxuICAgIGljb24uaW5uZXJIVE1MID0gZ2V0SWNvbihkYXRhLndlYXRoZXJbMF0uaWNvbilcbiAgICByZW5kZXJCYWNrZ3JvdW5kSW1nKGRhdGEud2VhdGhlclswXS5pY29uKVxuICAgIGNsZWFyRXJyb3JNc2coKVxuXG4gICAgaWYgKHVuaXQgPT09ICdtZXRyaWMnKSB7XG4gICAgICB0ZW1wZXJhdHVyZS5pbm5lckhUTUwgPSBgJHtNYXRoLmZsb29yKGRhdGEubWFpbi50ZW1wKX08c3Bhbj7CsEM8L3NwYW4+YFxuICAgICAgZmVlbHNMaWtlVGVtcC50ZXh0Q29udGVudCA9IGAke01hdGguZmxvb3IoZGF0YS5tYWluLmZlZWxzX2xpa2UpfcKwQ2BcbiAgICAgIHdpbmQudGV4dENvbnRlbnQgPSBgJHtkYXRhLndpbmQuc3BlZWR9IG0vc2BcbiAgICB9IGVsc2UgaWYgKHVuaXQgPT09ICdpbXBlcmlhbCcpIHtcbiAgICAgIHRlbXBlcmF0dXJlLmlubmVySFRNTCA9IGAke01hdGguZmxvb3IoZGF0YS5tYWluLnRlbXApfTxzcGFuPsKwRjwvc3Bhbj5gXG4gICAgICBmZWVsc0xpa2VUZW1wLnRleHRDb250ZW50ID0gYCR7TWF0aC5mbG9vcihkYXRhLm1haW4uZmVlbHNfbGlrZSl9wrBGYFxuICAgICAgd2luZC50ZXh0Q29udGVudCA9IGAke2RhdGEud2luZC5zcGVlZH0gbXBoYFxuICAgIH1cbiAgfSBjYXRjaCAoZSkge1xuICAgIHJlbmRlckVycm9yTXNnKGRhdGEubWVzc2FnZSlcbiAgfVxufVxuXG5jb25zdCBjbGVhckVycm9yTXNnID0gKCkgPT4gZXJyb3JNc2cuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpXG5cbmNvbnN0IHJlbmRlckVycm9yTXNnID0gKG1zZykgPT4ge1xuICBlcnJvck1zZy5jbGFzc0xpc3QuYWRkKCdzaG93JylcbiAgZXJyb3JNc2cudGV4dENvbnRlbnQgPSBtc2dcbn1cblxuY29uc3QgcmVuZGVyQmFja2dyb3VuZEltZyA9IChjb2RlKSA9PiB7XG4gIGNvbnN0IGJhY2tncm91bmRJbWcgPSBnZXRCYWNrZ3JvdW5kKGNvZGUpXG4gIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1iYWNrZ3JvdW5kLWltZycsIGB1cmwoJHtiYWNrZ3JvdW5kSW1nfSlgKVxufVxuXG5jb25zdCBnZXRDaXR5TmFtZSA9ICgpID0+IGNpdHlOYW1lLnRleHRDb250ZW50LnNwbGl0KCcsJylbMF1cblxuZXhwb3J0IHsgcmVuZGVyQ2l0eVdlYXRoZXIsIGdldENpdHlOYW1lIH1cbiIsImltcG9ydCB7IHJlbmRlckNpdHlXZWF0aGVyLCBnZXRDaXR5TmFtZSB9IGZyb20gJy4vVUknXG5cbmNvbnN0IGRpc3BsYXlDaXR5V2VhdGhlciA9IChjaXR5TmFtZSwgdW5pdHMpID0+IHtcbiAgZ2V0Rm9yZWNhc3QoY2l0eU5hbWUsIHVuaXRzKS50aGVuKGRhdGEgPT4gcmVuZGVyQ2l0eVdlYXRoZXIoZGF0YSwgdW5pdHMpKVxufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRGb3JlY2FzdCAoY2l0eU5hbWUsIHVuaXRzKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2NpdHlOYW1lfSZhcHBpZD0wMjg5Y2ViNmJmMTg5ZjI1NWQ3YzFmMzBiMDRlYzAxMSZ1bml0cz0ke3VuaXRzfWAsIHsgbW9kZTogJ2NvcnMnIH0pXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuICAgIHJldHVybiBkYXRhXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBhbGVydCgnVGhpcyBjaXR5IGRvZXMgbm90IGV4aXN0JylcbiAgfVxufVxuXG5jb25zdCBjaGFuZ2VUb0ZhcmVuaGVpdCA9ICgpID0+IGRpc3BsYXlDaXR5V2VhdGhlcihnZXRDaXR5TmFtZSgpLCAnaW1wZXJpYWwnKVxuXG5jb25zdCBjaGFuZ2VUb0NlbHNpdXMgPSAoKSA9PiBkaXNwbGF5Q2l0eVdlYXRoZXIoZ2V0Q2l0eU5hbWUoKSwgJ21ldHJpYycpXG5cbmV4cG9ydCB7IGRpc3BsYXlDaXR5V2VhdGhlciwgY2hhbmdlVG9DZWxzaXVzLCBjaGFuZ2VUb0ZhcmVuaGVpdCB9XG4iLCJcbmNvbnN0IGNhcGl0YWxpemVGaXJzdExldHRlciA9ICh3b3JkKSA9PiB3b3JkLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgd29yZC5zbGljZSgxKVxuXG5jb25zdCBnZXRJY29uID0gKGNvZGUpID0+IHtcbiAgaWYgKGNvZGUgPT09ICcwMWQnKSB7XG4gICAgcmV0dXJuICc8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+d2Jfc3Vubnk8L3NwYW4+J1xuICB9XG4gIGlmIChjb2RlID09PSAnMDFuJykge1xuICAgIHJldHVybiAnPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPmRhcmtfbW9kZTwvc3Bhbj4nXG4gIH1cbiAgaWYgKGNvZGUgPT09ICcwMm4nKSB7XG4gICAgcmV0dXJuICc8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+bmlnaHRzX3N0YXk8L3NwYW4+J1xuICB9XG4gIGlmIChjb2RlID09PSAnMDNkJyB8fCBjb2RlID09PSAnMDNuJyB8fCBjb2RlID09PSAnMDRkJyB8fCBjb2RlID09PSAnMDRuJyB8fCBjb2RlID09PSAnMDJkJykge1xuICAgIHJldHVybiAnPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPndiX2Nsb3VkeTwvc3Bhbj4nXG4gIH1cbiAgaWYgKGNvZGUgPT09ICcwOWQnIHx8IGNvZGUgPT09ICcwOW4nIHx8IGNvZGUgPT09ICcxMGQnIHx8IGNvZGUgPT09ICcxMG4nKSB7XG4gICAgcmV0dXJuICc8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+Y2xvdWR5X3Nub3dpbmc8L3NwYW4+J1xuICB9XG4gIGlmIChjb2RlID09PSAnMTFkJyB8fCBjb2RlID09PSAnMTFuJykge1xuICAgIHJldHVybiAnPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPnRodW5kZXJzdG9ybTwvc3Bhbj4nXG4gIH1cbiAgaWYgKGNvZGUgPT09ICcxM2QnIHx8IGNvZGUgPT09ICcxM24nKSB7XG4gICAgcmV0dXJuICc8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+YWNfdW5pdDwvc3Bhbj4nXG4gIH1cbiAgaWYgKGNvZGUgPT09ICc1MGQnIHx8IGNvZGUgPT09ICc1MG4nKSB7XG4gICAgcmV0dXJuICc8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+c25vd2luZzwvc3Bhbj4nXG4gIH1cbn1cblxuY29uc3QgZ2V0QmFja2dyb3VuZCA9IChjb2RlKSA9PiB7XG4gIGlmIChjb2RlID09PSAnMDFkJykge1xuICAgIHJldHVybiAnaW1hZ2VzL3N1bm55LmpwZydcbiAgfVxuICBpZiAoY29kZSA9PT0gJzAxbicpIHtcbiAgICByZXR1cm4gJ2ltYWdlcy9uaWdodC5qcGcnXG4gIH1cbiAgaWYgKGNvZGUgPT09ICcwMm4nKSB7XG4gICAgcmV0dXJuICdpbWFnZXMvY2xvdWR5TmlnaHQuanBnJ1xuICB9XG4gIGlmIChjb2RlID09PSAnMDNkJyB8fCBjb2RlID09PSAnMDNuJyB8fCBjb2RlID09PSAnMDRkJyB8fCBjb2RlID09PSAnMDRuJyB8fCBjb2RlID09PSAnMDJkJykge1xuICAgIHJldHVybiAnaW1hZ2VzL2Nsb3VkeS5qcGcnXG4gIH1cbiAgaWYgKGNvZGUgPT09ICcwOWQnIHx8IGNvZGUgPT09ICcwOW4nIHx8IGNvZGUgPT09ICcxMGQnIHx8IGNvZGUgPT09ICcxMG4nKSB7XG4gICAgcmV0dXJuICdpbWFnZXMvcmFpbnkuanBnJ1xuICB9XG4gIGlmIChjb2RlID09PSAnMTFkJyB8fCBjb2RlID09PSAnMTFuJykge1xuICAgIHJldHVybiAnaW1hZ2VzL2xpZ2h0bmluZy5qcGcnXG4gIH1cbiAgaWYgKGNvZGUgPT09ICcxM2QnIHx8IGNvZGUgPT09ICcxM24nKSB7XG4gICAgcmV0dXJuICdpbWFnZXMvc25vdy5qcGcnXG4gIH1cbiAgaWYgKGNvZGUgPT09ICc1MGQnIHx8IGNvZGUgPT09ICc1MG4nKSB7XG4gICAgcmV0dXJuICdpbWFnZXMvbWlzdC5qcGcnXG4gIH1cbn1cblxuZXhwb3J0IHsgY2FwaXRhbGl6ZUZpcnN0TGV0dGVyLCBnZXRJY29uLCBnZXRCYWNrZ3JvdW5kIH1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgZGlzcGxheUNpdHlXZWF0aGVyLCBjaGFuZ2VUb0ZhcmVuaGVpdCwgY2hhbmdlVG9DZWxzaXVzIH0gZnJvbSAnLi9tb2R1bGVzL2xvZ2ljJ1xuXG4vLyBXZWF0aGVyIGFwaSBLZXkgMDI4OWNlYjZiZjE4OWYyNTVkN2MxZjMwYjA0ZWMwMTFcblxuLy8gSW5pdGlhbCBMb2FkXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgZGlzcGxheUNpdHlXZWF0aGVyKCdiYXJjZWxvbmEnLCAnaW1wZXJpYWwnKVxuICBzZXRCdG5MaXN0ZW5lcnMoKVxufSlcblxuY29uc3Qgc2V0QnRuTGlzdGVuZXJzID0gKCkgPT4ge1xuICAvLyBTZXQgbGlzdGVuZXIgdG8gdHdvIGJ0bnM6IFNlYXJjaCBhbmQgVG9nZ2xlIGJldHdlZW4gQ2Vsc2l1cyBhbmQgRmFyZW5oZWl0XG5cbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpXG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBjb25zdCB1bml0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50by1mYXJlbmhlaXQnKS50ZXh0Q29udGVudC5zcGxpdCgnJykucmV2ZXJzZSgpWzBdXG4gICAgaWYgKHVuaXRzID09PSAnRicpIHtcbiAgICAgIGRpc3BsYXlDaXR5V2VhdGhlcihpbnB1dC52YWx1ZSwgJ21ldHJpYycpXG4gICAgfSBlbHNlIGlmICh1bml0cyA9PT0gJ0MnKSB7XG4gICAgICBkaXNwbGF5Q2l0eVdlYXRoZXIoaW5wdXQudmFsdWUsICdpbXBlcmlhbCcpXG4gICAgfVxuICAgIGlucHV0LnZhbHVlID0gJydcbiAgfSlcblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG8tZmFyZW5oZWl0JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGNvbnN0IHVuaXQgPSBlLnRhcmdldC50ZXh0Q29udGVudC5zcGxpdCgnJykucmV2ZXJzZSgpWzBdXG4gICAgaWYgKHVuaXQgPT09ICdGJykge1xuICAgICAgY2hhbmdlVG9GYXJlbmhlaXQoKVxuICAgICAgZS50YXJnZXQudGV4dENvbnRlbnQgPSAnRGlzcGxheSDCsEMnXG4gICAgfSBlbHNlIGlmICh1bml0ID09PSAnQycpIHtcbiAgICAgIGNoYW5nZVRvQ2Vsc2l1cygpXG4gICAgICBlLnRhcmdldC50ZXh0Q29udGVudCA9ICdEaXNwbGF5IMKwRidcbiAgICB9XG4gIH0pXG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
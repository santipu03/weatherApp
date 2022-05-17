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
    weatherTitle.textContent = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.capitalizeFirstLetter)(
      data.weather[0].description
    )
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
  document.documentElement.style.setProperty(
    '--background-img',
    `url(${backgroundImg})`
  )
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
  getForecast(cityName, units).then((data) => (0,_UI__WEBPACK_IMPORTED_MODULE_0__.renderCityWeather)(data, units))
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


// Initial Load
window.addEventListener('DOMContentLoaded', () => {
  (0,_modules_logic__WEBPACK_IMPORTED_MODULE_0__.displayCityWeather)('barcelona', 'metric')
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQXVFOztBQUV2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDhCQUE4QixVQUFVLElBQUksaUJBQWlCO0FBQzdELCtCQUErQiw2REFBcUI7QUFDcEQ7QUFDQTtBQUNBLDhCQUE4QixtQkFBbUI7QUFDakQsNEJBQTRCLGdCQUFnQjtBQUM1QyxxQkFBcUIsK0NBQU87QUFDNUI7QUFDQTs7QUFFQTtBQUNBLGlDQUFpQywyQkFBMkI7QUFDNUQscUNBQXFDLGlDQUFpQztBQUN0RSw0QkFBNEIsaUJBQWlCO0FBQzdDLE1BQU07QUFDTixpQ0FBaUMsMkJBQTJCO0FBQzVELHFDQUFxQyxpQ0FBaUM7QUFDdEUsNEJBQTRCLGlCQUFpQjtBQUM3QztBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0IscURBQWE7QUFDckM7QUFDQTtBQUNBLFdBQVcsY0FBYztBQUN6QjtBQUNBOztBQUVBOztBQUV5Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkRZOztBQUVyRDtBQUNBLDhDQUE4QyxzREFBaUI7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMkRBQTJELFNBQVMsZ0RBQWdELE1BQU07QUFDMUgsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUEsbURBQW1ELGdEQUFXOztBQUU5RCxpREFBaUQsZ0RBQVc7O0FBRUs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkJqRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRXdEOzs7Ozs7O1VDeER4RDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDRndCOztBQUV4QjtBQUNBO0FBQ0EsRUFBRSxrRUFBa0I7QUFDcEI7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLGtFQUFrQjtBQUN4QixNQUFNO0FBQ04sTUFBTSxrRUFBa0I7QUFDeEI7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsTUFBTSxpRUFBaUI7QUFDdkI7QUFDQSxNQUFNO0FBQ04sTUFBTSwrREFBZTtBQUNyQjtBQUNBO0FBQ0EsR0FBRztBQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9tb2R1bGVzL1VJLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvbW9kdWxlcy9sb2dpYy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL21vZHVsZXMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY2FwaXRhbGl6ZUZpcnN0TGV0dGVyLCBnZXRCYWNrZ3JvdW5kLCBnZXRJY29uIH0gZnJvbSAnLi91dGlscydcblxuY29uc3QgY2l0eU5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2l0eS1uYW1lJylcbmNvbnN0IHdlYXRoZXJUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWF0aGVyLXRpdGxlJylcbmNvbnN0IHRlbXBlcmF0dXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlbXAnKVxuY29uc3QgaWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pY29uJylcbmNvbnN0IGZlZWxzTGlrZVRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmVlbC10ZW1wJylcbmNvbnN0IGh1bWlkaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmh1bWlkaXR5JylcbmNvbnN0IHdpbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2luZCcpXG5jb25zdCBjbG91ZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvdWRzJylcbmNvbnN0IGVycm9yTXNnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVycm9yJylcblxuY29uc3QgcmVuZGVyQ2l0eVdlYXRoZXIgPSAoZGF0YSwgdW5pdCkgPT4ge1xuICB0cnkge1xuICAgIGNpdHlOYW1lLnRleHRDb250ZW50ID0gYCR7ZGF0YS5uYW1lfSwgJHtkYXRhLnN5cy5jb3VudHJ5fWBcbiAgICB3ZWF0aGVyVGl0bGUudGV4dENvbnRlbnQgPSBjYXBpdGFsaXplRmlyc3RMZXR0ZXIoXG4gICAgICBkYXRhLndlYXRoZXJbMF0uZGVzY3JpcHRpb25cbiAgICApXG4gICAgaHVtaWRpdHkudGV4dENvbnRlbnQgPSBgJHtkYXRhLm1haW4uaHVtaWRpdHl9JWBcbiAgICBjbG91ZHMudGV4dENvbnRlbnQgPSBgJHtkYXRhLmNsb3Vkcy5hbGx9JWBcbiAgICBpY29uLmlubmVySFRNTCA9IGdldEljb24oZGF0YS53ZWF0aGVyWzBdLmljb24pXG4gICAgcmVuZGVyQmFja2dyb3VuZEltZyhkYXRhLndlYXRoZXJbMF0uaWNvbilcbiAgICBjbGVhckVycm9yTXNnKClcblxuICAgIGlmICh1bml0ID09PSAnbWV0cmljJykge1xuICAgICAgdGVtcGVyYXR1cmUuaW5uZXJIVE1MID0gYCR7TWF0aC5mbG9vcihkYXRhLm1haW4udGVtcCl9PHNwYW4+wrBDPC9zcGFuPmBcbiAgICAgIGZlZWxzTGlrZVRlbXAudGV4dENvbnRlbnQgPSBgJHtNYXRoLmZsb29yKGRhdGEubWFpbi5mZWVsc19saWtlKX3CsENgXG4gICAgICB3aW5kLnRleHRDb250ZW50ID0gYCR7ZGF0YS53aW5kLnNwZWVkfSBtL3NgXG4gICAgfSBlbHNlIGlmICh1bml0ID09PSAnaW1wZXJpYWwnKSB7XG4gICAgICB0ZW1wZXJhdHVyZS5pbm5lckhUTUwgPSBgJHtNYXRoLmZsb29yKGRhdGEubWFpbi50ZW1wKX08c3Bhbj7CsEY8L3NwYW4+YFxuICAgICAgZmVlbHNMaWtlVGVtcC50ZXh0Q29udGVudCA9IGAke01hdGguZmxvb3IoZGF0YS5tYWluLmZlZWxzX2xpa2UpfcKwRmBcbiAgICAgIHdpbmQudGV4dENvbnRlbnQgPSBgJHtkYXRhLndpbmQuc3BlZWR9IG1waGBcbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZW5kZXJFcnJvck1zZyhkYXRhLm1lc3NhZ2UpXG4gIH1cbn1cblxuY29uc3QgY2xlYXJFcnJvck1zZyA9ICgpID0+IGVycm9yTXNnLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKVxuXG5jb25zdCByZW5kZXJFcnJvck1zZyA9IChtc2cpID0+IHtcbiAgZXJyb3JNc2cuY2xhc3NMaXN0LmFkZCgnc2hvdycpXG4gIGVycm9yTXNnLnRleHRDb250ZW50ID0gbXNnXG59XG5cbmNvbnN0IHJlbmRlckJhY2tncm91bmRJbWcgPSAoY29kZSkgPT4ge1xuICBjb25zdCBiYWNrZ3JvdW5kSW1nID0gZ2V0QmFja2dyb3VuZChjb2RlKVxuICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoXG4gICAgJy0tYmFja2dyb3VuZC1pbWcnLFxuICAgIGB1cmwoJHtiYWNrZ3JvdW5kSW1nfSlgXG4gIClcbn1cblxuY29uc3QgZ2V0Q2l0eU5hbWUgPSAoKSA9PiBjaXR5TmFtZS50ZXh0Q29udGVudC5zcGxpdCgnLCcpWzBdXG5cbmV4cG9ydCB7IHJlbmRlckNpdHlXZWF0aGVyLCBnZXRDaXR5TmFtZSB9XG4iLCJpbXBvcnQgeyByZW5kZXJDaXR5V2VhdGhlciwgZ2V0Q2l0eU5hbWUgfSBmcm9tICcuL1VJJ1xuXG5jb25zdCBkaXNwbGF5Q2l0eVdlYXRoZXIgPSAoY2l0eU5hbWUsIHVuaXRzKSA9PiB7XG4gIGdldEZvcmVjYXN0KGNpdHlOYW1lLCB1bml0cykudGhlbigoZGF0YSkgPT4gcmVuZGVyQ2l0eVdlYXRoZXIoZGF0YSwgdW5pdHMpKVxufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRGb3JlY2FzdCAoY2l0eU5hbWUsIHVuaXRzKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgIGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eU5hbWV9JmFwcGlkPTAyODljZWI2YmYxODlmMjU1ZDdjMWYzMGIwNGVjMDExJnVuaXRzPSR7dW5pdHN9YCxcbiAgICAgIHsgbW9kZTogJ2NvcnMnIH1cbiAgICApXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuICAgIHJldHVybiBkYXRhXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBhbGVydCgnVGhpcyBjaXR5IGRvZXMgbm90IGV4aXN0JylcbiAgfVxufVxuXG5jb25zdCBjaGFuZ2VUb0ZhcmVuaGVpdCA9ICgpID0+IGRpc3BsYXlDaXR5V2VhdGhlcihnZXRDaXR5TmFtZSgpLCAnaW1wZXJpYWwnKVxuXG5jb25zdCBjaGFuZ2VUb0NlbHNpdXMgPSAoKSA9PiBkaXNwbGF5Q2l0eVdlYXRoZXIoZ2V0Q2l0eU5hbWUoKSwgJ21ldHJpYycpXG5cbmV4cG9ydCB7IGRpc3BsYXlDaXR5V2VhdGhlciwgY2hhbmdlVG9DZWxzaXVzLCBjaGFuZ2VUb0ZhcmVuaGVpdCB9XG4iLCJjb25zdCBjYXBpdGFsaXplRmlyc3RMZXR0ZXIgPSAod29yZCkgPT4gd29yZC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHdvcmQuc2xpY2UoMSlcblxuY29uc3QgZ2V0SWNvbiA9IChjb2RlKSA9PiB7XG4gIGlmIChjb2RlID09PSAnMDFkJykge1xuICAgIHJldHVybiAnPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPndiX3N1bm55PC9zcGFuPidcbiAgfVxuICBpZiAoY29kZSA9PT0gJzAxbicpIHtcbiAgICByZXR1cm4gJzxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5kYXJrX21vZGU8L3NwYW4+J1xuICB9XG4gIGlmIChjb2RlID09PSAnMDJuJykge1xuICAgIHJldHVybiAnPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPm5pZ2h0c19zdGF5PC9zcGFuPidcbiAgfVxuICBpZiAoY29kZSA9PT0gJzAzZCcgfHwgY29kZSA9PT0gJzAzbicgfHwgY29kZSA9PT0gJzA0ZCcgfHwgY29kZSA9PT0gJzA0bicgfHwgY29kZSA9PT0gJzAyZCcpIHtcbiAgICByZXR1cm4gJzxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj53Yl9jbG91ZHk8L3NwYW4+J1xuICB9XG4gIGlmIChjb2RlID09PSAnMDlkJyB8fCBjb2RlID09PSAnMDluJyB8fCBjb2RlID09PSAnMTBkJyB8fCBjb2RlID09PSAnMTBuJykge1xuICAgIHJldHVybiAnPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPmNsb3VkeV9zbm93aW5nPC9zcGFuPidcbiAgfVxuICBpZiAoY29kZSA9PT0gJzExZCcgfHwgY29kZSA9PT0gJzExbicpIHtcbiAgICByZXR1cm4gJzxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj50aHVuZGVyc3Rvcm08L3NwYW4+J1xuICB9XG4gIGlmIChjb2RlID09PSAnMTNkJyB8fCBjb2RlID09PSAnMTNuJykge1xuICAgIHJldHVybiAnPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPmFjX3VuaXQ8L3NwYW4+J1xuICB9XG4gIGlmIChjb2RlID09PSAnNTBkJyB8fCBjb2RlID09PSAnNTBuJykge1xuICAgIHJldHVybiAnPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPnNub3dpbmc8L3NwYW4+J1xuICB9XG59XG5cbmNvbnN0IGdldEJhY2tncm91bmQgPSAoY29kZSkgPT4ge1xuICBpZiAoY29kZSA9PT0gJzAxZCcpIHtcbiAgICByZXR1cm4gJ2ltYWdlcy9zdW5ueS5qcGcnXG4gIH1cbiAgaWYgKGNvZGUgPT09ICcwMW4nKSB7XG4gICAgcmV0dXJuICdpbWFnZXMvbmlnaHQuanBnJ1xuICB9XG4gIGlmIChjb2RlID09PSAnMDJuJykge1xuICAgIHJldHVybiAnaW1hZ2VzL2Nsb3VkeU5pZ2h0LmpwZydcbiAgfVxuICBpZiAoY29kZSA9PT0gJzAzZCcgfHwgY29kZSA9PT0gJzAzbicgfHwgY29kZSA9PT0gJzA0ZCcgfHwgY29kZSA9PT0gJzA0bicgfHwgY29kZSA9PT0gJzAyZCcpIHtcbiAgICByZXR1cm4gJ2ltYWdlcy9jbG91ZHkuanBnJ1xuICB9XG4gIGlmIChjb2RlID09PSAnMDlkJyB8fCBjb2RlID09PSAnMDluJyB8fCBjb2RlID09PSAnMTBkJyB8fCBjb2RlID09PSAnMTBuJykge1xuICAgIHJldHVybiAnaW1hZ2VzL3JhaW55LmpwZydcbiAgfVxuICBpZiAoY29kZSA9PT0gJzExZCcgfHwgY29kZSA9PT0gJzExbicpIHtcbiAgICByZXR1cm4gJ2ltYWdlcy9saWdodG5pbmcuanBnJ1xuICB9XG4gIGlmIChjb2RlID09PSAnMTNkJyB8fCBjb2RlID09PSAnMTNuJykge1xuICAgIHJldHVybiAnaW1hZ2VzL3Nub3cuanBnJ1xuICB9XG4gIGlmIChjb2RlID09PSAnNTBkJyB8fCBjb2RlID09PSAnNTBuJykge1xuICAgIHJldHVybiAnaW1hZ2VzL21pc3QuanBnJ1xuICB9XG59XG5cbmV4cG9ydCB7IGNhcGl0YWxpemVGaXJzdExldHRlciwgZ2V0SWNvbiwgZ2V0QmFja2dyb3VuZCB9XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7XG4gIGRpc3BsYXlDaXR5V2VhdGhlcixcbiAgY2hhbmdlVG9GYXJlbmhlaXQsXG4gIGNoYW5nZVRvQ2Vsc2l1c1xufSBmcm9tICcuL21vZHVsZXMvbG9naWMnXG5cbi8vIEluaXRpYWwgTG9hZFxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIGRpc3BsYXlDaXR5V2VhdGhlcignYmFyY2Vsb25hJywgJ21ldHJpYycpXG4gIHNldEJ0bkxpc3RlbmVycygpXG59KVxuXG5jb25zdCBzZXRCdG5MaXN0ZW5lcnMgPSAoKSA9PiB7XG4gIC8vIFNldCBsaXN0ZW5lciB0byB0d28gYnRuczogU2VhcmNoIGFuZCBUb2dnbGUgYmV0d2VlbiBDZWxzaXVzIGFuZCBGYXJlbmhlaXRcblxuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JylcblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGNvbnN0IHVuaXRzID0gZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKCcudG8tZmFyZW5oZWl0JylcbiAgICAgIC50ZXh0Q29udGVudC5zcGxpdCgnJylcbiAgICAgIC5yZXZlcnNlKClbMF1cbiAgICBpZiAodW5pdHMgPT09ICdGJykge1xuICAgICAgZGlzcGxheUNpdHlXZWF0aGVyKGlucHV0LnZhbHVlLCAnbWV0cmljJylcbiAgICB9IGVsc2UgaWYgKHVuaXRzID09PSAnQycpIHtcbiAgICAgIGRpc3BsYXlDaXR5V2VhdGhlcihpbnB1dC52YWx1ZSwgJ2ltcGVyaWFsJylcbiAgICB9XG4gICAgaW5wdXQudmFsdWUgPSAnJ1xuICB9KVxuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50by1mYXJlbmhlaXQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgY29uc3QgdW5pdCA9IGUudGFyZ2V0LnRleHRDb250ZW50LnNwbGl0KCcnKS5yZXZlcnNlKClbMF1cbiAgICBpZiAodW5pdCA9PT0gJ0YnKSB7XG4gICAgICBjaGFuZ2VUb0ZhcmVuaGVpdCgpXG4gICAgICBlLnRhcmdldC50ZXh0Q29udGVudCA9ICdEaXNwbGF5IMKwQydcbiAgICB9IGVsc2UgaWYgKHVuaXQgPT09ICdDJykge1xuICAgICAgY2hhbmdlVG9DZWxzaXVzKClcbiAgICAgIGUudGFyZ2V0LnRleHRDb250ZW50ID0gJ0Rpc3BsYXkgwrBGJ1xuICAgIH1cbiAgfSlcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
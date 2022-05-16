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
/* harmony export */   "renderCityWeather": () => (/* binding */ renderCityWeather),
/* harmony export */   "setBtnListener": () => (/* binding */ setBtnListener)
/* harmony export */ });
/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic */ "./src/modules/logic.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/modules/utils.js");



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
    weatherTitle.textContent = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.capitalizeFirstLetter)(data.weather[0].description)
    temperature.innerHTML = `${Math.floor(data.main.temp)}<span>°C</span>`
    feelsLikeTemp.textContent = `${Math.floor(data.main.feels_like)}°C`
    humidity.textContent = `${data.main.humidity}%`
    wind.textContent = `${data.wind.speed} m/s`
    clouds.textContent = `${data.clouds.all}%`
    icon.innerHTML = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getIcon)(data.weather[0].icon)
    renderBackgroundImg(data.weather[0].icon)
  } catch (e) {
    alert(data.message)
  }
}

const renderBackgroundImg = (code) => {
  const backgroundImg = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getBackground)(code)
  document.documentElement.style.setProperty('--background-img', `url(${backgroundImg})`)
}

const setBtnListener = () => {
  document.querySelector('button').addEventListener('click', (e) => {
    e.preventDefault()
    ;(0,_logic__WEBPACK_IMPORTED_MODULE_0__.displayCityWeather)(input.value, 'metric')
    input.value = ''
  })
}




/***/ }),

/***/ "./src/modules/logic.js":
/*!******************************!*\
  !*** ./src/modules/logic.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayCityWeather": () => (/* binding */ displayCityWeather)
/* harmony export */ });
/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI */ "./src/modules/UI.js");


const displayCityWeather = (cityName, units) => {
  getCityWeather(cityName, units).then(data => (0,_UI__WEBPACK_IMPORTED_MODULE_0__.renderCityWeather)(data))
}

async function getCityWeather (cityName, units) {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=0289ceb6bf189f255d7c1f30b04ec011&units=${units}`, { mode: 'cors' })
    return await response.json()
  } catch (e) {
    alert('This city does not exist')
  }
}




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
/* harmony import */ var _modules_UI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/UI */ "./src/modules/UI.js");



// Weather api Key 0289ceb6bf189f255d7c1f30b04ec011

window.addEventListener('DOMContentLoaded', () => {
  (0,_modules_logic__WEBPACK_IMPORTED_MODULE_0__.displayCityWeather)('barcelona', 'metric')
  ;(0,_modules_UI__WEBPACK_IMPORTED_MODULE_1__.setBtnListener)()
})

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUE0QztBQUMyQjs7QUFFdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw4QkFBOEIsVUFBVSxJQUFJLGlCQUFpQjtBQUM3RCwrQkFBK0IsNkRBQXFCO0FBQ3BELCtCQUErQiwyQkFBMkI7QUFDMUQsbUNBQW1DLGlDQUFpQztBQUNwRSw4QkFBOEIsbUJBQW1CO0FBQ2pELDBCQUEwQixpQkFBaUI7QUFDM0MsNEJBQTRCLGdCQUFnQjtBQUM1QyxxQkFBcUIsK0NBQU87QUFDNUI7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0JBQXdCLHFEQUFhO0FBQ3JDLHdFQUF3RSxjQUFjO0FBQ3RGOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUksMkRBQWtCO0FBQ3RCO0FBQ0EsR0FBRztBQUNIOztBQUU0Qzs7Ozs7Ozs7Ozs7Ozs7OztBQzFDSjs7QUFFeEM7QUFDQSwrQ0FBK0Msc0RBQWlCO0FBQ2hFOztBQUVBO0FBQ0E7QUFDQSxzRkFBc0YsU0FBUyxnREFBZ0QsTUFBTSxLQUFLLGNBQWM7QUFDeEs7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUU2Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZDdCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFd0Q7Ozs7Ozs7VUN6RHhEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTm9EO0FBQ1A7O0FBRTdDOztBQUVBO0FBQ0EsRUFBRSxrRUFBa0I7QUFDcEIsRUFBRSw0REFBYztBQUNoQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9tb2R1bGVzL1VJLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvbW9kdWxlcy9sb2dpYy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL21vZHVsZXMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZGlzcGxheUNpdHlXZWF0aGVyIH0gZnJvbSAnLi9sb2dpYydcbmltcG9ydCB7IGNhcGl0YWxpemVGaXJzdExldHRlciwgZ2V0QmFja2dyb3VuZCwgZ2V0SWNvbiB9IGZyb20gJy4vdXRpbHMnXG5cbmNvbnN0IGNpdHlOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNpdHktbmFtZScpXG5jb25zdCB3ZWF0aGVyVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VhdGhlci10aXRsZScpXG5jb25zdCB0ZW1wZXJhdHVyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZW1wJylcbmNvbnN0IGljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaWNvbicpXG5jb25zdCBmZWVsc0xpa2VUZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZlZWwtdGVtcCcpXG5jb25zdCBodW1pZGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5odW1pZGl0eScpXG5jb25zdCB3aW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndpbmQnKVxuY29uc3QgY2xvdWRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3VkcycpXG5jb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JylcblxuY29uc3QgcmVuZGVyQ2l0eVdlYXRoZXIgPSAoZGF0YSkgPT4ge1xuICB0cnkge1xuICAgIGNpdHlOYW1lLnRleHRDb250ZW50ID0gYCR7ZGF0YS5uYW1lfSwgJHtkYXRhLnN5cy5jb3VudHJ5fWBcbiAgICB3ZWF0aGVyVGl0bGUudGV4dENvbnRlbnQgPSBjYXBpdGFsaXplRmlyc3RMZXR0ZXIoZGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uKVxuICAgIHRlbXBlcmF0dXJlLmlubmVySFRNTCA9IGAke01hdGguZmxvb3IoZGF0YS5tYWluLnRlbXApfTxzcGFuPsKwQzwvc3Bhbj5gXG4gICAgZmVlbHNMaWtlVGVtcC50ZXh0Q29udGVudCA9IGAke01hdGguZmxvb3IoZGF0YS5tYWluLmZlZWxzX2xpa2UpfcKwQ2BcbiAgICBodW1pZGl0eS50ZXh0Q29udGVudCA9IGAke2RhdGEubWFpbi5odW1pZGl0eX0lYFxuICAgIHdpbmQudGV4dENvbnRlbnQgPSBgJHtkYXRhLndpbmQuc3BlZWR9IG0vc2BcbiAgICBjbG91ZHMudGV4dENvbnRlbnQgPSBgJHtkYXRhLmNsb3Vkcy5hbGx9JWBcbiAgICBpY29uLmlubmVySFRNTCA9IGdldEljb24oZGF0YS53ZWF0aGVyWzBdLmljb24pXG4gICAgcmVuZGVyQmFja2dyb3VuZEltZyhkYXRhLndlYXRoZXJbMF0uaWNvbilcbiAgfSBjYXRjaCAoZSkge1xuICAgIGFsZXJ0KGRhdGEubWVzc2FnZSlcbiAgfVxufVxuXG5jb25zdCByZW5kZXJCYWNrZ3JvdW5kSW1nID0gKGNvZGUpID0+IHtcbiAgY29uc3QgYmFja2dyb3VuZEltZyA9IGdldEJhY2tncm91bmQoY29kZSlcbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLWJhY2tncm91bmQtaW1nJywgYHVybCgke2JhY2tncm91bmRJbWd9KWApXG59XG5cbmNvbnN0IHNldEJ0bkxpc3RlbmVyID0gKCkgPT4ge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgZGlzcGxheUNpdHlXZWF0aGVyKGlucHV0LnZhbHVlLCAnbWV0cmljJylcbiAgICBpbnB1dC52YWx1ZSA9ICcnXG4gIH0pXG59XG5cbmV4cG9ydCB7IHJlbmRlckNpdHlXZWF0aGVyLCBzZXRCdG5MaXN0ZW5lciB9XG4iLCJpbXBvcnQgeyByZW5kZXJDaXR5V2VhdGhlciB9IGZyb20gJy4vVUknXG5cbmNvbnN0IGRpc3BsYXlDaXR5V2VhdGhlciA9IChjaXR5TmFtZSwgdW5pdHMpID0+IHtcbiAgZ2V0Q2l0eVdlYXRoZXIoY2l0eU5hbWUsIHVuaXRzKS50aGVuKGRhdGEgPT4gcmVuZGVyQ2l0eVdlYXRoZXIoZGF0YSkpXG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldENpdHlXZWF0aGVyIChjaXR5TmFtZSwgdW5pdHMpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eU5hbWV9JmFwcGlkPTAyODljZWI2YmYxODlmMjU1ZDdjMWYzMGIwNGVjMDExJnVuaXRzPSR7dW5pdHN9YCwgeyBtb2RlOiAnY29ycycgfSlcbiAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBhbGVydCgnVGhpcyBjaXR5IGRvZXMgbm90IGV4aXN0JylcbiAgfVxufVxuXG5leHBvcnQgeyBkaXNwbGF5Q2l0eVdlYXRoZXIgfVxuIiwiXG5jb25zdCBjYXBpdGFsaXplRmlyc3RMZXR0ZXIgPSAod29yZCkgPT4gd29yZC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHdvcmQuc2xpY2UoMSlcblxuY29uc3QgZ2V0SWNvbiA9IChjb2RlKSA9PiB7XG4gIGlmIChjb2RlID09PSAnMDFkJykge1xuICAgIHJldHVybiAnPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPndiX3N1bm55PC9zcGFuPidcbiAgfVxuICBpZiAoY29kZSA9PT0gJzAxbicpIHtcbiAgICByZXR1cm4gJzxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5kYXJrX21vZGU8L3NwYW4+J1xuICB9XG4gIGlmIChjb2RlID09PSAnMDJuJykge1xuICAgIHJldHVybiAnPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPm5pZ2h0c19zdGF5PC9zcGFuPidcbiAgfVxuICBpZiAoY29kZSA9PT0gJzAzZCcgfHwgY29kZSA9PT0gJzAzbicgfHwgY29kZSA9PT0gJzA0ZCcgfHwgY29kZSA9PT0gJzA0bicgfHwgY29kZSA9PT0gJzAyZCcpIHtcbiAgICByZXR1cm4gJzxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj53Yl9jbG91ZHk8L3NwYW4+J1xuICB9XG4gIGlmIChjb2RlID09PSAnMDlkJyB8fCBjb2RlID09PSAnMDluJyB8fCBjb2RlID09PSAnMTBkJyB8fCBjb2RlID09PSAnMTBuJykge1xuICAgIHJldHVybiAnPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPmNsb3VkeV9zbm93aW5nPC9zcGFuPidcbiAgfVxuICBpZiAoY29kZSA9PT0gJzExZCcgfHwgY29kZSA9PT0gJzExbicpIHtcbiAgICByZXR1cm4gJzxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj50aHVuZGVyc3Rvcm08L3NwYW4+J1xuICB9XG4gIGlmIChjb2RlID09PSAnMTNkJyB8fCBjb2RlID09PSAnMTNuJykge1xuICAgIHJldHVybiAnPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPmFjX3VuaXQ8L3NwYW4+J1xuICB9XG4gIGlmIChjb2RlID09PSAnNTBkJyB8fCBjb2RlID09PSAnNTBuJykge1xuICAgIHJldHVybiAnPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPnNub3dpbmc8L3NwYW4+J1xuICB9XG59XG5cbmNvbnN0IGdldEJhY2tncm91bmQgPSAoY29kZSkgPT4ge1xuICBpZiAoY29kZSA9PT0gJzAxZCcpIHtcbiAgICByZXR1cm4gJ2ltYWdlcy9zdW5ueS5qcGcnXG4gIH1cbiAgaWYgKGNvZGUgPT09ICcwMW4nKSB7XG4gICAgcmV0dXJuICdpbWFnZXMvbmlnaHQuanBnJ1xuICB9XG4gIGlmIChjb2RlID09PSAnMDJuJykge1xuICAgIHJldHVybiAnaW1hZ2VzL2Nsb3VkeU5pZ2h0LmpwZydcbiAgfVxuICBpZiAoY29kZSA9PT0gJzAzZCcgfHwgY29kZSA9PT0gJzAzbicgfHwgY29kZSA9PT0gJzA0ZCcgfHwgY29kZSA9PT0gJzA0bicgfHwgY29kZSA9PT0gJzAyZCcpIHtcbiAgICByZXR1cm4gJ2ltYWdlcy9jbG91ZHkuanBnJ1xuICB9XG4gIGlmIChjb2RlID09PSAnMDlkJyB8fCBjb2RlID09PSAnMDluJyB8fCBjb2RlID09PSAnMTBkJyB8fCBjb2RlID09PSAnMTBuJykge1xuICAgIHJldHVybiAnaW1hZ2VzL3JhaW55LmpwZydcbiAgfVxuICBpZiAoY29kZSA9PT0gJzExZCcgfHwgY29kZSA9PT0gJzExbicpIHtcbiAgICByZXR1cm4gJ2ltYWdlcy9saWdodG5pbmcuanBnJ1xuICB9XG4gIGlmIChjb2RlID09PSAnMTNkJyB8fCBjb2RlID09PSAnMTNuJykge1xuICAgIHJldHVybiAnaW1hZ2VzL3Nub3cuanBnJ1xuICB9XG4gIGlmIChjb2RlID09PSAnNTBkJyB8fCBjb2RlID09PSAnNTBuJykge1xuICAgIHJldHVybiAnaW1hZ2VzL21pc3QuanBnJ1xuICB9XG59XG5cbmV4cG9ydCB7IGNhcGl0YWxpemVGaXJzdExldHRlciwgZ2V0SWNvbiwgZ2V0QmFja2dyb3VuZCB9XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGRpc3BsYXlDaXR5V2VhdGhlciB9IGZyb20gJy4vbW9kdWxlcy9sb2dpYydcbmltcG9ydCB7IHNldEJ0bkxpc3RlbmVyIH0gZnJvbSAnLi9tb2R1bGVzL1VJJ1xuXG4vLyBXZWF0aGVyIGFwaSBLZXkgMDI4OWNlYjZiZjE4OWYyNTVkN2MxZjMwYjA0ZWMwMTFcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIGRpc3BsYXlDaXR5V2VhdGhlcignYmFyY2Vsb25hJywgJ21ldHJpYycpXG4gIHNldEJ0bkxpc3RlbmVyKClcbn0pXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
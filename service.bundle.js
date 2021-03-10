/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/service/service.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/img/cat.svg":
/*!*************************!*\
  !*** ./src/img/cat.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/cat.svg");

/***/ }),

/***/ "./src/service/service.ts":
/*!********************************!*\
  !*** ./src/service/service.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.helloService = void 0;
__webpack_require__(/*! ../img/cat.svg */ "./src/img/cat.svg");
exports.helloService = "Hello, service!";
const VERSION = "0.0.1";
const CACHE_KEY = 'servicetest-v' + VERSION;
const OFFLINE = '/offline.html';
const PREFETCHED = [];
const EXCLUDED = [
    '/manifest.json'
];
function cacheResponse(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        if (request.method.toLowerCase() === 'get') {
            const url = request.url;
            if (!EXCLUDED.reduce((ex, u) => { return ex || url.endsWith(u); }, false)) {
                const cache = yield caches.open(CACHE_KEY);
                cache.put(request, response.clone());
            }
        }
    });
}
self.addEventListener('install', (evt) => {
    console.log('installing service worker');
    evt.waitUntil(caches.open(CACHE_KEY).then((cache) => { cache.add('./img/cat.svg'); }));
});
self.addEventListener('fetch', (fetchEvent) => {
    const url = new URL(fetchEvent.request.url);
    console.log('got fetch for ' + url.pathname);
    if (url.origin === location.origin && url.pathname.endsWith('dog.svg')) {
        fetchEvent.respondWith(caches.match('./img/cat.svg'));
        return;
    }
    fetchEvent.respondWith(caches.match(fetchEvent.request).then((cachedResponse) => __awaiter(void 0, void 0, void 0, function* () {
        const url = fetchEvent.request.url;
        try {
            const response = yield fetch(fetchEvent.request);
            console.log('returning fetched response for ' + url);
            yield cacheResponse(fetchEvent.request, response);
            return response;
        }
        catch (err) {
            console.warn(err);
            if (cachedResponse) {
                console.log('returning cached response for ' + url);
                return cachedResponse;
            }
            return caches.match(OFFLINE);
        }
    })));
});
self.addEventListener('activate', (evt) => {
    console.log('service worker activated');
    evt.waitUntil(caches.keys().then((cacheNames) => {
        return Promise.all(cacheNames.map((name) => {
            if (name !== CACHE_KEY) {
                console.log('removing cache ' + name);
                return caches.delete(name);
            }
        }));
    }));
});


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZy9jYXQuc3ZnIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlL3NlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFlLG9GQUF1QixnQkFBZ0IsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXRELCtEQUF1QjtBQUVWLG9CQUFZLEdBQUcsaUJBQWlCLENBQUM7QUFFOUMsTUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDO0FBQ3hCLE1BQU0sU0FBUyxHQUFHLGVBQWUsR0FBRyxPQUFPLENBQUM7QUFDNUMsTUFBTSxPQUFPLEdBQUcsZUFBZSxDQUFDO0FBRWhDLE1BQU0sVUFBVSxHQUFHLEVBQ2xCLENBQUM7QUFFRixNQUFNLFFBQVEsR0FBRztJQUNiLGdCQUFnQjtDQUNu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O0lBQ3hDLEdBQUcsQ0FBQyxTQUFTLENBQ1QsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLFVBQVUsRUFBRSxFQUFFO1FBQzlCLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFDdkMsSUFBSSxJQUFJLEtBQUssU0FBUyxFQUFFO2dCQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxDQUFDO2dCQUN0QyxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDOUI7UUFDTCxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ1IsQ0FBQyxDQUFDLENBQ0wsQ0FBQztBQUNOLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6InNlcnZpY2UuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvc2VydmljZS9zZXJ2aWNlLnRzXCIpO1xuIiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9jYXQuc3ZnXCI7IiwiaW1wb3J0IFwiLi4vaW1nL2NhdC5zdmdcIlxuXG5leHBvcnQgY29uc3QgaGVsbG9TZXJ2aWNlID0gXCJIZWxsbywgc2VydmljZSFcIjtcbiAgICBcbmNvbnN0IFZFUlNJT04gPSBcIjAuMC4xXCI7XG5jb25zdCBDQUNIRV9LRVkgPSAnc2VydmljZXRlc3QtdicgKyBWRVJTSU9OO1xuY29uc3QgT0ZGTElORSA9ICcvb2ZmbGluZS5odG1sJztcblxuY29uc3QgUFJFRkVUQ0hFRCA9IFtcbl07XG5cbmNvbnN0IEVYQ0xVREVEID0gW1xuICAgICcvbWFuaWZlc3QuanNvbidcbl07XG5cbmFzeW5jIGZ1bmN0aW9uIGNhY2hlUmVzcG9uc2UocmVxdWVzdDogUmVxdWVzdCwgcmVzcG9uc2U6IFJlc3BvbnNlKSB7XG4gICAgaWYgKHJlcXVlc3QubWV0aG9kLnRvTG93ZXJDYXNlKCkgPT09ICdnZXQnKSB7XG4gICAgICAgIGNvbnN0IHVybDogc3RyaW5nID0gcmVxdWVzdC51cmw7XG5cbiAgICAgICAgaWYgKCFFWENMVURFRC5yZWR1Y2UoKGV4OiBib29sZWFuLCB1OiBzdHJpbmcpID0+IHsgcmV0dXJuIGV4IHx8IHVybC5lbmRzV2l0aCh1KSB9LCBmYWxzZSkpIHtcbiAgICAgICAgICAgIGNvbnN0IGNhY2hlID0gYXdhaXQgY2FjaGVzLm9wZW4oQ0FDSEVfS0VZKTtcbiAgICAgICAgICAgIGNhY2hlLnB1dChyZXF1ZXN0LCByZXNwb25zZS5jbG9uZSgpKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuc2VsZi5hZGRFdmVudExpc3RlbmVyKCdpbnN0YWxsJywgKGV2dDogRXh0ZW5kYWJsZUV2ZW50KSA9PiB7XG4gICAgY29uc29sZS5sb2coJ2luc3RhbGxpbmcgc2VydmljZSB3b3JrZXInKTtcblxuICAgIGV2dC53YWl0VW50aWwoXG4gICAgICAgIGNhY2hlcy5vcGVuKENBQ0hFX0tFWSkudGhlbigoY2FjaGUpID0+IHsgY2FjaGUuYWRkKCcuL2ltZy9jYXQuc3ZnJykgfSlcbiAgICApO1xufSk7XG5cbnNlbGYuYWRkRXZlbnRMaXN0ZW5lcignZmV0Y2gnLCAoZmV0Y2hFdmVudDogRmV0Y2hFdmVudCkgPT4ge1xuICAgIGNvbnN0IHVybCA9IG5ldyBVUkwoZmV0Y2hFdmVudC5yZXF1ZXN0LnVybCk7XG5cbiAgICBjb25zb2xlLmxvZygnZ290IGZldGNoIGZvciAnICsgdXJsLnBhdGhuYW1lKVxuXG4gICAgaWYgKHVybC5vcmlnaW4gPT09IGxvY2F0aW9uLm9yaWdpbiAmJiB1cmwucGF0aG5hbWUuZW5kc1dpdGgoJ2RvZy5zdmcnKSkge1xuICAgICAgICBmZXRjaEV2ZW50LnJlc3BvbmRXaXRoKGNhY2hlcy5tYXRjaCgnLi9pbWcvY2F0LnN2ZycpKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZldGNoRXZlbnQucmVzcG9uZFdpdGgoXG4gICAgICAgIGNhY2hlcy5tYXRjaChmZXRjaEV2ZW50LnJlcXVlc3QpLnRoZW4oYXN5bmMgKGNhY2hlZFJlc3BvbnNlOiBSZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdXJsID0gZmV0Y2hFdmVudC5yZXF1ZXN0LnVybDtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChmZXRjaEV2ZW50LnJlcXVlc3QpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZXR1cm5pbmcgZmV0Y2hlZCByZXNwb25zZSBmb3IgJyArIHVybCk7XG4gICAgICAgICAgICAgICAgYXdhaXQgY2FjaGVSZXNwb25zZShmZXRjaEV2ZW50LnJlcXVlc3QsIHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oZXJyKTtcbiAgICAgICAgICAgICAgICBpZiAoY2FjaGVkUmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3JldHVybmluZyBjYWNoZWQgcmVzcG9uc2UgZm9yICcgKyB1cmwpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2FjaGVkUmVzcG9uc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBjYWNoZXMubWF0Y2goT0ZGTElORSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgKTtcbn0pO1xuXG5zZWxmLmFkZEV2ZW50TGlzdGVuZXIoJ2FjdGl2YXRlJywgKGV2dDogRXh0ZW5kYWJsZUV2ZW50KSA9PiB7XG4gICAgY29uc29sZS5sb2coJ3NlcnZpY2Ugd29ya2VyIGFjdGl2YXRlZCcpO1xuICAgIGV2dC53YWl0VW50aWwoXG4gICAgICAgIGNhY2hlcy5rZXlzKCkudGhlbigoY2FjaGVOYW1lcykgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKGNhY2hlTmFtZXMubWFwKChuYW1lKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKG5hbWUgIT09IENBQ0hFX0tFWSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncmVtb3ZpbmcgY2FjaGUgJyArIG5hbWUpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2FjaGVzLmRlbGV0ZShuYW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH0pXG4gICAgKTtcbn0pOyJdLCJzb3VyY2VSb290IjoiIn0=
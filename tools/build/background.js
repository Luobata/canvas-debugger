/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

	// the background script runs all the time and serves as a central message
	// hub for each vue devtools (panel + proxy + backend) instance.
	
	const ports = {}
	
	chrome.runtime.onConnect.addListener(port => {
	  let tab
	  let name
	  if (isNumeric(port.name)) {
	    tab = port.name
	    name = 'devtools'
	    installProxy(+port.name)
	  } else {
	    tab = port.sender.tab.id
	    name = 'backend'
	  }
	
	  if (!ports[tab]) {
	    ports[tab] = {
	      devtools: null,
	      backend: null
	    }
	  }
	  ports[tab][name] = port
	
	  if (ports[tab].devtools && ports[tab].backend) {
	    doublePipe(tab, ports[tab].devtools, ports[tab].backend)
	  }
	})
	
	function isNumeric (str) {
	  return +str + '' === str
	}
	
	function installProxy (tabId) {
	  chrome.tabs.executeScript(tabId, {
	    file: '/build/proxy.js'
	  }, function (res) {
	        debugger;
	    if (!res) {
	        ports[tabId].devtools.postMessage('proxy-fail')
	    } else {
	      console.log('injected proxy to tab ' + tabId)
	    }
	  })
	}
	
	function doublePipe (id, one, two) {
	  one.onMessage.addListener(lOne)
	  function lOne (message) {
	    if (message.event === 'log') {
	      return console.log('tab ' + id, message.payload)
	    }
	    console.log('devtools -> backend', message)
	    two.postMessage(message)
	  }
	  two.onMessage.addListener(lTwo)
	  function lTwo (message) {
	    if (message.event === 'log') {
	      return console.log('tab ' + id, message.payload)
	    }
	    console.log('backend -> devtools', message)
	    one.postMessage(message)
	  }
	  function shutdown () {
	    console.log('tab ' + id + ' disconnected.')
	    one.onMessage.removeListener(lOne)
	    two.onMessage.removeListener(lTwo)
	    one.disconnect()
	    two.disconnect()
	    ports[id] = null
	  }
	  one.onDisconnect.addListener(shutdown)
	  two.onDisconnect.addListener(shutdown)
	  console.log('tab ' + id + ' connected.')
	}
	
	chrome.runtime.onMessage.addListener((req, sender) => {
	  if (sender.tab && req.vueDetected) {
	    chrome.browserAction.setIcon({
	      tabId: sender.tab.id,
	      path: {
	        16: 'icons/16.png',
	        48: 'icons/48.png',
	        128: 'icons/128.png'
	      }
	    })
	    chrome.browserAction.setPopup({
	      tabId: sender.tab.id,
	      popup: req.devtoolsEnabled ? 'popups/enabled.html' : 'popups/disabled.html'
	    })
	  }
	})


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNjc3Y2RlMDEwYjNkNDc1YmI2NTciLCJ3ZWJwYWNrOi8vLy4vc3JjL2JhY2tncm91bmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUN0Q0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsSUFBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBLEVBQUMiLCJmaWxlIjoiYmFja2dyb3VuZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDY3N2NkZTAxMGIzZDQ3NWJiNjU3IiwiLy8gdGhlIGJhY2tncm91bmQgc2NyaXB0IHJ1bnMgYWxsIHRoZSB0aW1lIGFuZCBzZXJ2ZXMgYXMgYSBjZW50cmFsIG1lc3NhZ2Vcbi8vIGh1YiBmb3IgZWFjaCB2dWUgZGV2dG9vbHMgKHBhbmVsICsgcHJveHkgKyBiYWNrZW5kKSBpbnN0YW5jZS5cblxuY29uc3QgcG9ydHMgPSB7fVxuXG5jaHJvbWUucnVudGltZS5vbkNvbm5lY3QuYWRkTGlzdGVuZXIocG9ydCA9PiB7XG4gIGxldCB0YWJcbiAgbGV0IG5hbWVcbiAgaWYgKGlzTnVtZXJpYyhwb3J0Lm5hbWUpKSB7XG4gICAgdGFiID0gcG9ydC5uYW1lXG4gICAgbmFtZSA9ICdkZXZ0b29scydcbiAgICBpbnN0YWxsUHJveHkoK3BvcnQubmFtZSlcbiAgfSBlbHNlIHtcbiAgICB0YWIgPSBwb3J0LnNlbmRlci50YWIuaWRcbiAgICBuYW1lID0gJ2JhY2tlbmQnXG4gIH1cblxuICBpZiAoIXBvcnRzW3RhYl0pIHtcbiAgICBwb3J0c1t0YWJdID0ge1xuICAgICAgZGV2dG9vbHM6IG51bGwsXG4gICAgICBiYWNrZW5kOiBudWxsXG4gICAgfVxuICB9XG4gIHBvcnRzW3RhYl1bbmFtZV0gPSBwb3J0XG5cbiAgaWYgKHBvcnRzW3RhYl0uZGV2dG9vbHMgJiYgcG9ydHNbdGFiXS5iYWNrZW5kKSB7XG4gICAgZG91YmxlUGlwZSh0YWIsIHBvcnRzW3RhYl0uZGV2dG9vbHMsIHBvcnRzW3RhYl0uYmFja2VuZClcbiAgfVxufSlcblxuZnVuY3Rpb24gaXNOdW1lcmljIChzdHIpIHtcbiAgcmV0dXJuICtzdHIgKyAnJyA9PT0gc3RyXG59XG5cbmZ1bmN0aW9uIGluc3RhbGxQcm94eSAodGFiSWQpIHtcbiAgY2hyb21lLnRhYnMuZXhlY3V0ZVNjcmlwdCh0YWJJZCwge1xuICAgIGZpbGU6ICcvYnVpbGQvcHJveHkuanMnXG4gIH0sIGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgZGVidWdnZXI7XG4gICAgaWYgKCFyZXMpIHtcbiAgICAgICAgcG9ydHNbdGFiSWRdLmRldnRvb2xzLnBvc3RNZXNzYWdlKCdwcm94eS1mYWlsJylcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coJ2luamVjdGVkIHByb3h5IHRvIHRhYiAnICsgdGFiSWQpXG4gICAgfVxuICB9KVxufVxuXG5mdW5jdGlvbiBkb3VibGVQaXBlIChpZCwgb25lLCB0d28pIHtcbiAgb25lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihsT25lKVxuICBmdW5jdGlvbiBsT25lIChtZXNzYWdlKSB7XG4gICAgaWYgKG1lc3NhZ2UuZXZlbnQgPT09ICdsb2cnKSB7XG4gICAgICByZXR1cm4gY29uc29sZS5sb2coJ3RhYiAnICsgaWQsIG1lc3NhZ2UucGF5bG9hZClcbiAgICB9XG4gICAgY29uc29sZS5sb2coJ2RldnRvb2xzIC0+IGJhY2tlbmQnLCBtZXNzYWdlKVxuICAgIHR3by5wb3N0TWVzc2FnZShtZXNzYWdlKVxuICB9XG4gIHR3by5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIobFR3bylcbiAgZnVuY3Rpb24gbFR3byAobWVzc2FnZSkge1xuICAgIGlmIChtZXNzYWdlLmV2ZW50ID09PSAnbG9nJykge1xuICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKCd0YWIgJyArIGlkLCBtZXNzYWdlLnBheWxvYWQpXG4gICAgfVxuICAgIGNvbnNvbGUubG9nKCdiYWNrZW5kIC0+IGRldnRvb2xzJywgbWVzc2FnZSlcbiAgICBvbmUucG9zdE1lc3NhZ2UobWVzc2FnZSlcbiAgfVxuICBmdW5jdGlvbiBzaHV0ZG93biAoKSB7XG4gICAgY29uc29sZS5sb2coJ3RhYiAnICsgaWQgKyAnIGRpc2Nvbm5lY3RlZC4nKVxuICAgIG9uZS5vbk1lc3NhZ2UucmVtb3ZlTGlzdGVuZXIobE9uZSlcbiAgICB0d28ub25NZXNzYWdlLnJlbW92ZUxpc3RlbmVyKGxUd28pXG4gICAgb25lLmRpc2Nvbm5lY3QoKVxuICAgIHR3by5kaXNjb25uZWN0KClcbiAgICBwb3J0c1tpZF0gPSBudWxsXG4gIH1cbiAgb25lLm9uRGlzY29ubmVjdC5hZGRMaXN0ZW5lcihzaHV0ZG93bilcbiAgdHdvLm9uRGlzY29ubmVjdC5hZGRMaXN0ZW5lcihzaHV0ZG93bilcbiAgY29uc29sZS5sb2coJ3RhYiAnICsgaWQgKyAnIGNvbm5lY3RlZC4nKVxufVxuXG5jaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoKHJlcSwgc2VuZGVyKSA9PiB7XG4gIGlmIChzZW5kZXIudGFiICYmIHJlcS52dWVEZXRlY3RlZCkge1xuICAgIGNocm9tZS5icm93c2VyQWN0aW9uLnNldEljb24oe1xuICAgICAgdGFiSWQ6IHNlbmRlci50YWIuaWQsXG4gICAgICBwYXRoOiB7XG4gICAgICAgIDE2OiAnaWNvbnMvMTYucG5nJyxcbiAgICAgICAgNDg6ICdpY29ucy80OC5wbmcnLFxuICAgICAgICAxMjg6ICdpY29ucy8xMjgucG5nJ1xuICAgICAgfVxuICAgIH0pXG4gICAgY2hyb21lLmJyb3dzZXJBY3Rpb24uc2V0UG9wdXAoe1xuICAgICAgdGFiSWQ6IHNlbmRlci50YWIuaWQsXG4gICAgICBwb3B1cDogcmVxLmRldnRvb2xzRW5hYmxlZCA/ICdwb3B1cHMvZW5hYmxlZC5odG1sJyA6ICdwb3B1cHMvZGlzYWJsZWQuaHRtbCdcbiAgICB9KVxuICB9XG59KVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmFja2dyb3VuZC5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9
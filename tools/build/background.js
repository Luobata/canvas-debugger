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

	'use strict';
	
	// the background script runs all the time and serves as a central message
	// hub for each vue devtools (panel + proxy + backend) instance.
	/* eslint-disable */
	
	var ports = {};
	
	chrome.runtime.onConnect.addListener(function (port) {
	    var tab = void 0;
	    var name = void 0;
	    if (isNumeric(port.name)) {
	        tab = port.name;
	        name = 'devtools';
	        installProxy(+port.name);
	    } else {
	        tab = port.sender.tab.id;
	        name = 'backend';
	    }
	
	    if (!ports[tab]) {
	        ports[tab] = {
	            devtools: null,
	            backend: null
	        };
	    }
	    ports[tab][name] = port;
	
	    if (ports[tab].devtools && ports[tab].backend) {
	        doublePipe(tab, ports[tab].devtools, ports[tab].backend);
	    }
	});
	
	function isNumeric(str) {
	    return '' + +str === str;
	}
	
	function installProxy(tabId) {
	    chrome.tabs.executeScript(tabId, {
	        file: '/build/proxy.js'
	    }, function (res) {
	        if (!res) {
	            ports[tabId].devtools.postMessage('proxy-fail');
	        } else {
	            console.log('injected proxy to tab ' + tabId);
	        }
	    });
	}
	
	function doublePipe(id, one, two) {
	    one.onMessage.addListener(lOne);
	    function lOne(message) {
	        if (message.event === 'log') {
	            return console.log('tab ' + id, message.payload);
	        }
	        console.log('devtools -> backend', message);
	        two.postMessage(message);
	    }
	    two.onMessage.addListener(lTwo);
	    function lTwo(message) {
	        if (message.event === 'log') {
	            return console.log('tab ' + id, message.payload);
	        }
	        console.log('backend -> devtools', message);
	        one.postMessage(message);
	    }
	    function shutdown() {
	        console.log('tab ' + id + ' disconnected.');
	        one.onMessage.removeListener(lOne);
	        two.onMessage.removeListener(lTwo);
	        one.disconnect();
	        two.disconnect();
	        ports[id] = null;
	    }
	    one.onDisconnect.addListener(shutdown);
	    two.onDisconnect.addListener(shutdown);
	    console.log('tab ' + id + ' connected.');
	}
	
	chrome.runtime.onMessage.addListener(function (req, sender) {
	    if (sender.tab && req.vueDetected) {
	        chrome.browserAction.setIcon({
	            tabId: sender.tab.id,
	            path: {
	                16: 'icons/16.png',
	                48: 'icons/48.png',
	                128: 'icons/128.png'
	            }
	        });
	        chrome.browserAction.setPopup({
	            tabId: sender.tab.id,
	            popup: req.devtoolsEnabled ? 'popups/enabled.html' : 'popups/disabled.html'
	        });
	    }
	});
	/* eslint-disable */

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgY2YwMzQ0YzdmNGQ0NTM0ZTRkYjMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JhY2tncm91bmQuanMiXSwibmFtZXMiOlsicG9ydHMiLCJjaHJvbWUiLCJydW50aW1lIiwib25Db25uZWN0IiwiYWRkTGlzdGVuZXIiLCJwb3J0IiwidGFiIiwibmFtZSIsImlzTnVtZXJpYyIsImluc3RhbGxQcm94eSIsInNlbmRlciIsImlkIiwiZGV2dG9vbHMiLCJiYWNrZW5kIiwiZG91YmxlUGlwZSIsInN0ciIsInRhYklkIiwidGFicyIsImV4ZWN1dGVTY3JpcHQiLCJmaWxlIiwicmVzIiwicG9zdE1lc3NhZ2UiLCJjb25zb2xlIiwibG9nIiwib25lIiwidHdvIiwib25NZXNzYWdlIiwibE9uZSIsIm1lc3NhZ2UiLCJldmVudCIsInBheWxvYWQiLCJsVHdvIiwic2h1dGRvd24iLCJyZW1vdmVMaXN0ZW5lciIsImRpc2Nvbm5lY3QiLCJvbkRpc2Nvbm5lY3QiLCJyZXEiLCJ2dWVEZXRlY3RlZCIsImJyb3dzZXJBY3Rpb24iLCJzZXRJY29uIiwicGF0aCIsInNldFBvcHVwIiwicG9wdXAiLCJkZXZ0b29sc0VuYWJsZWQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUN0Q0E7QUFDQTtBQUNBOztBQUVBLEtBQU1BLFFBQVEsRUFBZDs7QUFFQUMsUUFBT0MsT0FBUCxDQUFlQyxTQUFmLENBQXlCQyxXQUF6QixDQUFxQyxVQUFDQyxJQUFELEVBQVU7QUFDM0MsU0FBSUMsWUFBSjtBQUNBLFNBQUlDLGFBQUo7QUFDQSxTQUFJQyxVQUFVSCxLQUFLRSxJQUFm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LFVBQUNnQyxHQUFELEVBQU0xQixNQUFOLEVBQWlCO0FBQ2xELFNBQUlBLE9BQU9KLEdBQVAsSUFBYzhCLElBQUlDLFdBQXRCLEVBQW1DO0FBQy9CcEMsZ0JBQU9xQyxhQUFQLENBQXFCQyxPQUFyQixDQUE2QjtBQUN6QnZCLG9CQUFPTixPQUFPSixHQUFQLENBQVdLLEVBRE87QUFFekI2QixtQkFBTTtBQUNGLHFCQUFJLGNBREY7QUFFRixxQkFBSSxjQUZGO0FBR0Ysc0JBQUs7QUFISDtBQUZtQixVQUE3QjtBQVFBdkMsZ0JBQU9xQyxhQUFQLENBQXFCRyxRQUFyQixDQUE4QjtBQUMxQnpCLG9CQUFPTixPQUFPSixHQUFQLENBQVdLLEVBRFE7QUFFMUIrQixvQkFBT04sSUFBSU8sZUFBSixHQUFzQixxQkFBdEIsR0FBOEM7QUFGM0IsVUFBOUI7QUFJSDtBQUNKLEVBZkQ7QUFnQkEscUIiLCJmaWxlIjoiYmFja2dyb3VuZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGNmMDM0NGM3ZjRkNDUzNGU0ZGIzIiwiLy8gdGhlIGJhY2tncm91bmQgc2NyaXB0IHJ1bnMgYWxsIHRoZSB0aW1lIGFuZCBzZXJ2ZXMgYXMgYSBjZW50cmFsIG1lc3NhZ2Vcbi8vIGh1YiBmb3IgZWFjaCB2dWUgZGV2dG9vbHMgKHBhbmVsICsgcHJveHkgKyBiYWNrZW5kKSBpbnN0YW5jZS5cbi8qIGVzbGludC1kaXNhYmxlICovXG5cbmNvbnN0IHBvcnRzID0ge307XG5cbmNocm9tZS5ydW50aW1lLm9uQ29ubmVjdC5hZGRMaXN0ZW5lcigocG9ydCkgPT4ge1xuICAgIGxldCB0YWI7XG4gICAgbGV0IG5hbWU7XG4gICAgaWYgKGlzTnVtZXJpYyhwb3J0Lm5hbWUpKSB7XG4gICAgICAgIHRhYiA9IHBvcnQubmFtZTtcbiAgICAgICAgbmFtZSA9ICdkZXZ0b29scyc7XG4gICAgICAgIGluc3RhbGxQcm94eSgrcG9ydC5uYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0YWIgPSBwb3J0LnNlbmRlci50YWIuaWQ7XG4gICAgICAgIG5hbWUgPSAnYmFja2VuZCc7XG4gICAgfVxuXG4gICAgaWYgKCFwb3J0c1t0YWJdKSB7XG4gICAgICAgIHBvcnRzW3RhYl0gPSB7XG4gICAgICAgICAgICBkZXZ0b29sczogbnVsbCxcbiAgICAgICAgICAgIGJhY2tlbmQ6IG51bGwsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHBvcnRzW3RhYl1bbmFtZV0gPSBwb3J0O1xuXG4gICAgaWYgKHBvcnRzW3RhYl0uZGV2dG9vbHMgJiYgcG9ydHNbdGFiXS5iYWNrZW5kKSB7XG4gICAgICAgIGRvdWJsZVBpcGUodGFiLCBwb3J0c1t0YWJdLmRldnRvb2xzLCBwb3J0c1t0YWJdLmJhY2tlbmQpO1xuICAgIH1cbn0pO1xuXG5mdW5jdGlvbiBpc051bWVyaWMoc3RyKSB7XG4gICAgcmV0dXJuIGAkeytzdHJ9YCA9PT0gc3RyO1xufVxuXG5mdW5jdGlvbiBpbnN0YWxsUHJveHkodGFiSWQpIHtcbiAgICBjaHJvbWUudGFicy5leGVjdXRlU2NyaXB0KHRhYklkLCB7XG4gICAgICAgIGZpbGU6ICcvYnVpbGQvcHJveHkuanMnLFxuICAgIH0sIChyZXMpID0+IHtcbiAgICAgICAgaWYgKCFyZXMpIHtcbiAgICAgICAgICAgIHBvcnRzW3RhYklkXS5kZXZ0b29scy5wb3N0TWVzc2FnZSgncHJveHktZmFpbCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYGluamVjdGVkIHByb3h5IHRvIHRhYiAke3RhYklkfWApO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGRvdWJsZVBpcGUoaWQsIG9uZSwgdHdvKSB7XG4gICAgb25lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihsT25lKTtcbiAgICBmdW5jdGlvbiBsT25lKG1lc3NhZ2UpIHtcbiAgICAgICAgaWYgKG1lc3NhZ2UuZXZlbnQgPT09ICdsb2cnKSB7XG4gICAgICAgICAgICByZXR1cm4gY29uc29sZS5sb2coYHRhYiAke2lkfWAsIG1lc3NhZ2UucGF5bG9hZCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coJ2RldnRvb2xzIC0+IGJhY2tlbmQnLCBtZXNzYWdlKTtcbiAgICAgICAgdHdvLnBvc3RNZXNzYWdlKG1lc3NhZ2UpO1xuICAgIH1cbiAgICB0d28ub25NZXNzYWdlLmFkZExpc3RlbmVyKGxUd28pO1xuICAgIGZ1bmN0aW9uIGxUd28obWVzc2FnZSkge1xuICAgICAgICBpZiAobWVzc2FnZS5ldmVudCA9PT0gJ2xvZycpIHtcbiAgICAgICAgICAgIHJldHVybiBjb25zb2xlLmxvZyhgdGFiICR7aWR9YCwgbWVzc2FnZS5wYXlsb2FkKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZygnYmFja2VuZCAtPiBkZXZ0b29scycsIG1lc3NhZ2UpO1xuICAgICAgICBvbmUucG9zdE1lc3NhZ2UobWVzc2FnZSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHNodXRkb3duKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhgdGFiICR7aWR9IGRpc2Nvbm5lY3RlZC5gKTtcbiAgICAgICAgb25lLm9uTWVzc2FnZS5yZW1vdmVMaXN0ZW5lcihsT25lKTtcbiAgICAgICAgdHdvLm9uTWVzc2FnZS5yZW1vdmVMaXN0ZW5lcihsVHdvKTtcbiAgICAgICAgb25lLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgdHdvLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgcG9ydHNbaWRdID0gbnVsbDtcbiAgICB9XG4gICAgb25lLm9uRGlzY29ubmVjdC5hZGRMaXN0ZW5lcihzaHV0ZG93bik7XG4gICAgdHdvLm9uRGlzY29ubmVjdC5hZGRMaXN0ZW5lcihzaHV0ZG93bik7XG4gICAgY29uc29sZS5sb2coYHRhYiAke2lkfSBjb25uZWN0ZWQuYCk7XG59XG5cbmNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcigocmVxLCBzZW5kZXIpID0+IHtcbiAgICBpZiAoc2VuZGVyLnRhYiAmJiByZXEudnVlRGV0ZWN0ZWQpIHtcbiAgICAgICAgY2hyb21lLmJyb3dzZXJBY3Rpb24uc2V0SWNvbih7XG4gICAgICAgICAgICB0YWJJZDogc2VuZGVyLnRhYi5pZCxcbiAgICAgICAgICAgIHBhdGg6IHtcbiAgICAgICAgICAgICAgICAxNjogJ2ljb25zLzE2LnBuZycsXG4gICAgICAgICAgICAgICAgNDg6ICdpY29ucy80OC5wbmcnLFxuICAgICAgICAgICAgICAgIDEyODogJ2ljb25zLzEyOC5wbmcnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICAgIGNocm9tZS5icm93c2VyQWN0aW9uLnNldFBvcHVwKHtcbiAgICAgICAgICAgIHRhYklkOiBzZW5kZXIudGFiLmlkLFxuICAgICAgICAgICAgcG9wdXA6IHJlcS5kZXZ0b29sc0VuYWJsZWQgPyAncG9wdXBzL2VuYWJsZWQuaHRtbCcgOiAncG9wdXBzL2Rpc2FibGVkLmh0bWwnLFxuICAgICAgICB9KTtcbiAgICB9XG59KTtcbi8qIGVzbGludC1kaXNhYmxlICovXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYmFja2dyb3VuZC5qcyJdLCJzb3VyY2VSb290IjoiIn0=
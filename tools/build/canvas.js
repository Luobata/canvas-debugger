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
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _index = __webpack_require__(1);
	
	var _index2 = _interopRequireDefault(_index);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	module.exports = (0, _index2.default)(); /**
	                                          * @description canvas-debugger 入口文件
	                                          */

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _render = __webpack_require__(2);
	
	var _render2 = _interopRequireDefault(_render);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function () {
	    (0, _render2.default)();
	};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _config = __webpack_require__(3);
	
	var getFocus = function getFocus() {};
	
	var createLine = function createLine(div) {
	    var body = document.body;
	    var blockNum = _config.config.blockNum;
	    var width = body.offsetWidth / blockNum;
	    var height = body.offsetHeight / blockNum;
	    var beginX = 0;
	    var beginY = 0;
	    var focusPoint = getFocus();
	
	    for (var i = 0; i < blockNum - 1; i++) {
	        var line = document.createElement('div');
	        var row = document.createElement('div');
	        line.style.width = '1px';
	        line.style.height = '100%';
	        line.style.background = '#FC6246';
	        line.style.display = 'inline-block';
	        line.style.position = 'absolute';
	        line.style.left = beginX + (i + 1) * width + 'px';
	
	        div.appendChild(line);
	
	        row.style.width = '100%';
	        row.style.height = '1px';
	        row.style.background = '#FC6246';
	        row.style.display = 'inline-block';
	        row.style.position = 'absolute';
	        row.style.top = beginY + (i + 1) * height + 'px';
	
	        div.appendChild(row);
	    }
	
	    body.appendChild(div);
	};
	
	var createWrap = function createWrap() {
	    return new Promise(function (resolve) {
	        window.onload = function () {
	            var body = document.body;
	            var div = document.createElement('div');
	            div.style.width = body.offsetWidth + 'px';
	            div.style.height = body.offsetHeight + 'px';
	            div.style.position = 'fixed';
	            div.style.top = 0;
	            div.style.left = 0;
	
	            resolve(div);
	            //body.appendChild(div);
	        };
	    });
	};
	
	exports.default = function () {
	    createWrap().then(function (div) {
	        console.log(div);
	        createLine(div);
	    });
	};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var config = exports.config = {
	    blockNum: 10
	};

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMTNkOTI1ZGVkNzhiN2QxNzkzOTkiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhbnZhcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2FudmFzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jYW52YXMvcmVuZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jYW52YXMvY29uZmlnLmpzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJnZXRGb2N1cyIsImNyZWF0ZUxpbmUiLCJkaXYiLCJib2R5IiwiZG9jdW1lbnQiLCJibG9ja051bSIsIndpZHRoIiwib2Zmc2V0V2lkdGgiLCJoZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJiZWdpblgiLCJiZWdpblkiLCJmb2N1c1BvaW50IiwiaSIsImxpbmUiLCJjcmVhdGVFbGVtZW50Iiwicm93Iiwic3R5bGUiLCJiYWNrZ3JvdW5kIiwiZGlzcGxheSIsInBvc2l0aW9uIiwibGVmdCIsImFwcGVuZENoaWxkIiwidG9wIiwiY3JlYXRlV3JhcCIsIlByb21pc2UiLCJyZXNvbHZlIiwid2luZG93Iiwib25sb2FkIiwidGhlbiIsImNvbnNvbGUiLCJsb2ciLCJjb25maWciXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUNsQ0E7Ozs7OztBQUVBQSxRQUFPQyxPQUFQLEdBQWlCLHNCQUFqQixDLENBTkE7Ozs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7OzttQkFFZSxZQUFNO0FBQ2pCO0FBQ0gsRTs7Ozs7Ozs7Ozs7O0FDSkQ7O0FBRUEsS0FBTUMsV0FBVyxTQUFYQSxRQUFXLEdBQU0sQ0FDdEIsQ0FERDs7QUFH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Y2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDEzZDkyNWRlZDc4YjdkMTc5Mzk5IiwiLyoqXG4gKiBAZGVzY3JpcHRpb24gY2FudmFzLWRlYnVnZ2VyIOWFpeWPo+aWh+S7tlxuICovXG5cbmltcG9ydCBpbml0IGZyb20gJy4vY2FudmFzL2luZGV4JztcblxubW9kdWxlLmV4cG9ydHMgPSBpbml0KCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2FudmFzLmpzIiwiaW1wb3J0IHJlbmRlciBmcm9tICcuL3JlbmRlcic7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgICByZW5kZXIoKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2FudmFzL2luZGV4LmpzIiwiaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnLi9jb25maWcnO1xuXG5jb25zdCBnZXRGb2N1cyA9ICgpID0+IHtcbn07XG5cbmNvbnN0IGNyZWF0ZUxpbmUgPSAoZGl2KSA9PiB7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XG4gICAgY29uc3QgYmxvY2tOdW0gPSBjb25maWcuYmxvY2tOdW07XG4gICAgY29uc3Qgd2lkdGggPSBib2R5Lm9mZnNldFdpZHRoIC8gYmxvY2tOdW07XG4gICAgY29uc3QgaGVpZ2h0ID0gYm9keS5vZmZzZXRIZWlnaHQgLyBibG9ja051bTtcbiAgICBjb25zdCBiZWdpblggPSAwO1xuICAgIGNvbnN0IGJlZ2luWSA9IDA7XG4gICAgY29uc3QgZm9jdXNQb2ludCA9IGdldEZvY3VzKCk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJsb2NrTnVtIC0gMTsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGxpbmUuc3R5bGUud2lkdGggPSAnMXB4JztcbiAgICAgICAgbGluZS5zdHlsZS5oZWlnaHQgPSAnMTAwJSc7XG4gICAgICAgIGxpbmUuc3R5bGUuYmFja2dyb3VuZCA9ICcjRkM2MjQ2JztcbiAgICAgICAgbGluZS5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jayc7XG4gICAgICAgIGxpbmUuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICBsaW5lLnN0eWxlLmxlZnQgPSBiZWdpblggKyAoaSArIDEpICogd2lkdGggKyAncHgnO1xuXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChsaW5lKTtcblxuICAgICAgICByb3cuc3R5bGUud2lkdGggPSAnMTAwJSc7XG4gICAgICAgIHJvdy5zdHlsZS5oZWlnaHQgPSAnMXB4JztcbiAgICAgICAgcm93LnN0eWxlLmJhY2tncm91bmQgPSAnI0ZDNjI0Nic7XG4gICAgICAgIHJvdy5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jayc7XG4gICAgICAgIHJvdy5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICAgIHJvdy5zdHlsZS50b3AgPSBiZWdpblkgKyAoaSArIDEpICogaGVpZ2h0ICsgJ3B4JztcblxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQocm93KTtcbiAgICB9XG5cbiAgICBib2R5LmFwcGVuZENoaWxkKGRpdik7XG59O1xuXG5jb25zdCBjcmVhdGVXcmFwID0gKCkgPT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICB3aW5kb3cub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XG4gICAgICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGRpdi5zdHlsZS53aWR0aCA9IGJvZHkub2Zmc2V0V2lkdGggKyAncHgnO1xuICAgICAgICAgICAgZGl2LnN0eWxlLmhlaWdodCA9IGJvZHkub2Zmc2V0SGVpZ2h0ICsgJ3B4JztcbiAgICAgICAgICAgIGRpdi5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCc7XG4gICAgICAgICAgICBkaXYuc3R5bGUudG9wID0gMDtcbiAgICAgICAgICAgIGRpdi5zdHlsZS5sZWZ0ID0gMDtcblxuICAgICAgICAgICAgcmVzb2x2ZShkaXYpO1xuICAgICAgICAgICAgLy9ib2R5LmFwcGVuZENoaWxkKGRpdik7XG4gICAgICAgIH1cbiAgICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgICBjcmVhdGVXcmFwKClcbiAgICAgICAgLnRoZW4oKGRpdikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGl2KTtcbiAgICAgICAgICAgIGNyZWF0ZUxpbmUoZGl2KTtcbiAgICAgICAgfSk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NhbnZhcy9yZW5kZXIuanMiLCJleHBvcnQgY29uc3QgY29uZmlnID0ge1xuICAgIGJsb2NrTnVtOiAxMCxcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2FudmFzL2NvbmZpZy5qcyJdLCJzb3VyY2VSb290IjoiIn0=
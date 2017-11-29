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
	
	var getFocus = function getFocus(column, row) {
	    var arr = [];
	    var beginX = 0;
	    var beginY = 0;
	    var body = document.body;
	    var width = body.offsetWidth / column;
	    var height = body.offsetHeight / row;
	
	    for (var i = 0; i < column - 1; i++) {
	        for (var j = 0; j < row - 1; j++) {
	            arr.push([beginX + (i + 1) * width, beginY + (j + 1) * height]);
	        }
	    }
	
	    return arr;
	};
	
	var createLine = function createLine(div) {
	    var body = document.body;
	    var blockColumnNum = _config.config.blockColumnNum;
	    var blockRowNum = _config.config.blockRowNum;
	    var width = body.offsetWidth / blockColumnNum;
	    var height = body.offsetHeight / blockRowNum;
	    var beginX = 0;
	    var beginY = 0;
	    var focusPoint = getFocus(blockColumnNum, blockRowNum);
	
	    for (var i = 0; i < blockColumnNum - 1; i++) {
	        var column = document.createElement('div');
	
	        column.style.width = '1px';
	        column.style.height = '100%';
	        column.style.background = '#FC6246';
	        column.style.display = 'inline-block';
	        column.style.position = 'absolute';
	        column.style.left = beginX + (i + 1) * width + 'px';
	
	        div.appendChild(column);
	    }
	
	    for (var _i = 0; _i < blockRowNum - 1; _i++) {
	        var row = document.createElement('div');
	
	        row.style.width = '100%';
	        row.style.height = '1px';
	        row.style.background = '#FC6246';
	        row.style.display = 'inline-block';
	        row.style.position = 'absolute';
	        row.style.top = beginY + (_i + 1) * height + 'px';
	
	        div.appendChild(row);
	    }
	
	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;
	
	    try {
	        for (var _iterator = focusPoint[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            var _i2 = _step.value;
	
	            var pointWrap = document.createElement('div');
	            var point = document.createElement('span');
	            var pointTxt = document.createElement('span');
	            var wid = 15;
	
	            pointWrap.style.opacity = 0;
	            pointWrap.style.position = 'absolute';
	            pointWrap.style.cursor = 'pointer';
	            pointWrap.style.left = _i2[0] - wid / 2 + 1 / 2 + 'px';
	            pointWrap.style.top = _i2[1] - wid / 2 - 1 / 2 + 'px';
	
	            point.style.width = wid + 'px';
	            point.style.height = wid + 'px';
	            point.style.background = '#FC6246';
	            point.style.display = 'block';
	            point.style['border-radius'] = wid + 'px';
	            point.style['vertical-align'] = 'top';
	
	            pointTxt.innerText = '(' + _i2[0] + ',' + _i2[1] + ')';
	            pointTxt.style.position = 'relative';
	            pointTxt.style.left = '-50%';
	            pointTxt.style.top = '10px';
	
	            pointWrap.addEventListener('mouseover', function mouseover() {
	                this.style.opacity = 1;
	            });
	
	            pointWrap.addEventListener('mouseout', function mouseout() {
	                this.style.opacity = 0;
	            });
	
	            pointWrap.appendChild(point);
	            pointWrap.appendChild(pointTxt);
	
	            div.appendChild(pointWrap);
	        }
	    } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	    } finally {
	        try {
	            if (!_iteratorNormalCompletion && _iterator.return) {
	                _iterator.return();
	            }
	        } finally {
	            if (_didIteratorError) {
	                throw _iteratorError;
	            }
	        }
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
	            div.style['z-index'] = 1000;
	            div.style.top = 0;
	            div.style.left = 0;
	
	            resolve(div);
	            // body.appendChild(div);
	        };
	    });
	};
	
	exports.default = function () {
	    createWrap().then(function (div) {
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
	    blockColumnNum: 10,
	    blockRowNum: 20
	};
	
	var assignConfig = exports.assignConfig = function assignConfig(obj) {
	    Object.assign(config, obj);
	};

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNDNkYjAzODM5MzQzNTM4NWYwMjY/ZWYzZCIsIndlYnBhY2s6Ly8vLi9zcmMvY2FudmFzLmpzIiwid2VicGFjazovLy8uL3NyYy9jYW52YXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhbnZhcy9yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhbnZhcy9jb25maWcuanMiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsImdldEZvY3VzIiwiY29sdW1uIiwicm93IiwiYXJyIiwiYmVnaW5YIiwiYmVnaW5ZIiwiYm9keSIsImRvY3VtZW50Iiwid2lkdGgiLCJvZmZzZXRXaWR0aCIsImhlaWdodCIsIm9mZnNldEhlaWdodCIsImkiLCJqIiwicHVzaCIsImNyZWF0ZUxpbmUiLCJkaXYiLCJibG9ja0NvbHVtbk51bSIsImJsb2NrUm93TnVtIiwiZm9jdXNQb2ludCIsImNyZWF0ZUVsZW1lbnQiLCJzdHlsZSIsImJhY2tncm91bmQiLCJkaXNwbGF5IiwicG9zaXRpb24iLCJsZWZ0IiwiYXBwZW5kQ2hpbGQiLCJ0b3AiLCJwb2ludFdyYXAiLCJwb2ludCIsInBvaW50VHh0Iiwid2lkIiwib3BhY2l0eSIsImN1cnNvciIsImlubmVyVGV4dCIsImFkZEV2ZW50TGlzdGVuZXIiLCJtb3VzZW92ZXIiLCJtb3VzZW91dCIsImNyZWF0ZVdyYXAiLCJQcm9taXNlIiwicmVzb2x2ZSIsIndpbmRvdyIsIm9ubG9hZCIsInRoZW4iLCJjb25maWciLCJhc3NpZ25Db25maWciLCJvYmoiLCJPYmplY3QiLCJhc3NpZ24iXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7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S0FBSixDQUFVTSxHQUFWLEdBQWdCLENBQWhCO0FBQ0FYLGlCQUFJSyxLQUFKLENBQVVJLElBQVYsR0FBaUIsQ0FBakI7O0FBRUFlLHFCQUFReEIsR0FBUjtBQUNBO0FBQ0gsVUFaRDtBQWFILE1BZHdCLENBQU47QUFBQSxFQUFuQjs7bUJBZ0JlLFlBQU07QUFDakJzQixrQkFDS0ssSUFETCxDQUNVLFVBQUMzQixHQUFELEVBQVM7QUFDWEQsb0JBQVdDLEdBQVg7QUFDSCxNQUhMO0FBSUgsRTs7Ozs7Ozs7Ozs7QUN2SE0sS0FBTTRCLDBCQUFTO0FBQ2xCM0IscUJBQWdCLEVBREU7QUFFbEJDLGtCQUFhO0FBRkssRUFBZjs7QUFLQSxLQUFNMkIsc0NBQWUsU0FBZkEsWUFBZSxDQUFDQyxHQUFELEVBQVM7QUFDakNDLFlBQU9DLE1BQVAsQ0FBY0osTUFBZCxFQUFzQkUsR0FBdEI7QUFDSCxFQUZNLEMiLCJmaWxlIjoiY2FudmFzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNDNkYjAzODM5MzQzNTM4NWYwMjYiLCIvKipcbiAqIEBkZXNjcmlwdGlvbiBjYW52YXMtZGVidWdnZXIg5YWl5Y+j5paH5Lu2XG4gKi9cblxuaW1wb3J0IGluaXQgZnJvbSAnLi9jYW52YXMvaW5kZXgnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGluaXQoKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jYW52YXMuanMiLCJpbXBvcnQgcmVuZGVyIGZyb20gJy4vcmVuZGVyJztcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICAgIHJlbmRlcigpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jYW52YXMvaW5kZXguanMiLCJpbXBvcnQgeyBjb25maWcgfSBmcm9tICcuL2NvbmZpZyc7XG5cbmNvbnN0IGdldEZvY3VzID0gKGNvbHVtbiwgcm93KSA9PiB7XG4gICAgY29uc3QgYXJyID0gW107XG4gICAgY29uc3QgYmVnaW5YID0gMDtcbiAgICBjb25zdCBiZWdpblkgPSAwO1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xuICAgIGNvbnN0IHdpZHRoID0gYm9keS5vZmZzZXRXaWR0aCAvIGNvbHVtbjtcbiAgICBjb25zdCBoZWlnaHQgPSBib2R5Lm9mZnNldEhlaWdodCAvIHJvdztcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29sdW1uIC0gMTsgaSsrKSB7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgcm93IC0gMTsgaisrKSB7XG4gICAgICAgICAgICBhcnIucHVzaChbYmVnaW5YICsgKGkgKyAxKSAqIHdpZHRoLFxuICAgICAgICAgICAgICAgIGJlZ2luWSArIChqICsgMSkgKiBoZWlnaHRdKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgcmV0dXJuIGFycjtcbn07XG5cbmNvbnN0IGNyZWF0ZUxpbmUgPSAoZGl2KSA9PiB7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XG4gICAgY29uc3QgYmxvY2tDb2x1bW5OdW0gPSBjb25maWcuYmxvY2tDb2x1bW5OdW07XG4gICAgY29uc3QgYmxvY2tSb3dOdW0gPSBjb25maWcuYmxvY2tSb3dOdW07XG4gICAgY29uc3Qgd2lkdGggPSBib2R5Lm9mZnNldFdpZHRoIC8gYmxvY2tDb2x1bW5OdW07XG4gICAgY29uc3QgaGVpZ2h0ID0gYm9keS5vZmZzZXRIZWlnaHQgLyBibG9ja1Jvd051bTtcbiAgICBjb25zdCBiZWdpblggPSAwO1xuICAgIGNvbnN0IGJlZ2luWSA9IDA7XG4gICAgY29uc3QgZm9jdXNQb2ludCA9IGdldEZvY3VzKGJsb2NrQ29sdW1uTnVtLCBibG9ja1Jvd051bSk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJsb2NrQ29sdW1uTnVtIC0gMTsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGNvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgIGNvbHVtbi5zdHlsZS53aWR0aCA9ICcxcHgnO1xuICAgICAgICBjb2x1bW4uc3R5bGUuaGVpZ2h0ID0gJzEwMCUnO1xuICAgICAgICBjb2x1bW4uc3R5bGUuYmFja2dyb3VuZCA9ICcjRkM2MjQ2JztcbiAgICAgICAgY29sdW1uLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJztcbiAgICAgICAgY29sdW1uLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgICAgY29sdW1uLnN0eWxlLmxlZnQgPSBgJHtiZWdpblggKyAoaSArIDEpICogd2lkdGh9cHhgO1xuXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChjb2x1bW4pO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYmxvY2tSb3dOdW0gLSAxOyBpKyspIHtcbiAgICAgICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgcm93LnN0eWxlLndpZHRoID0gJzEwMCUnO1xuICAgICAgICByb3cuc3R5bGUuaGVpZ2h0ID0gJzFweCc7XG4gICAgICAgIHJvdy5zdHlsZS5iYWNrZ3JvdW5kID0gJyNGQzYyNDYnO1xuICAgICAgICByb3cuc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snO1xuICAgICAgICByb3cuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICByb3cuc3R5bGUudG9wID0gYCR7YmVnaW5ZICsgKGkgKyAxKSAqIGhlaWdodH1weGA7XG5cbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKHJvdyk7XG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBpIG9mIGZvY3VzUG9pbnQpIHtcbiAgICAgICAgY29uc3QgcG9pbnRXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IHBvaW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBjb25zdCBwb2ludFR4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgY29uc3Qgd2lkID0gMTU7XG5cbiAgICAgICAgcG9pbnRXcmFwLnN0eWxlLm9wYWNpdHkgPSAwO1xuICAgICAgICBwb2ludFdyYXAuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICBwb2ludFdyYXAuc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInO1xuICAgICAgICBwb2ludFdyYXAuc3R5bGUubGVmdCA9IGAke2lbMF0gLSB3aWQgLyAyICsgMSAvIDJ9cHhgO1xuICAgICAgICBwb2ludFdyYXAuc3R5bGUudG9wID0gYCR7aVsxXSAtIHdpZCAvIDIgLSAxIC8gMn1weGA7XG5cbiAgICAgICAgcG9pbnQuc3R5bGUud2lkdGggPSBgJHt3aWR9cHhgO1xuICAgICAgICBwb2ludC5zdHlsZS5oZWlnaHQgPSBgJHt3aWR9cHhgO1xuICAgICAgICBwb2ludC5zdHlsZS5iYWNrZ3JvdW5kID0gJyNGQzYyNDYnO1xuICAgICAgICBwb2ludC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgcG9pbnQuc3R5bGVbJ2JvcmRlci1yYWRpdXMnXSA9IGAke3dpZH1weGA7XG4gICAgICAgIHBvaW50LnN0eWxlWyd2ZXJ0aWNhbC1hbGlnbiddID0gJ3RvcCc7XG5cbiAgICAgICAgcG9pbnRUeHQuaW5uZXJUZXh0ID0gYCgke2lbMF19LCR7aVsxXX0pYDtcbiAgICAgICAgcG9pbnRUeHQuc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xuICAgICAgICBwb2ludFR4dC5zdHlsZS5sZWZ0ID0gJy01MCUnO1xuICAgICAgICBwb2ludFR4dC5zdHlsZS50b3AgPSAnMTBweCc7XG5cbiAgICAgICAgcG9pbnRXcmFwLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIGZ1bmN0aW9uIG1vdXNlb3ZlcigpIHtcbiAgICAgICAgICAgIHRoaXMuc3R5bGUub3BhY2l0eSA9IDE7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHBvaW50V3JhcC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIGZ1bmN0aW9uIG1vdXNlb3V0KCkge1xuICAgICAgICAgICAgdGhpcy5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcG9pbnRXcmFwLmFwcGVuZENoaWxkKHBvaW50KTtcbiAgICAgICAgcG9pbnRXcmFwLmFwcGVuZENoaWxkKHBvaW50VHh0KTtcblxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQocG9pbnRXcmFwKTtcbiAgICB9XG5cbiAgICBib2R5LmFwcGVuZENoaWxkKGRpdik7XG59O1xuXG5jb25zdCBjcmVhdGVXcmFwID0gKCkgPT4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICB3aW5kb3cub25sb2FkID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRpdi5zdHlsZS53aWR0aCA9IGAke2JvZHkub2Zmc2V0V2lkdGh9cHhgO1xuICAgICAgICBkaXYuc3R5bGUuaGVpZ2h0ID0gYCR7Ym9keS5vZmZzZXRIZWlnaHR9cHhgO1xuICAgICAgICBkaXYuc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xuICAgICAgICBkaXYuc3R5bGVbJ3otaW5kZXgnXSA9IDEwMDA7XG4gICAgICAgIGRpdi5zdHlsZS50b3AgPSAwO1xuICAgICAgICBkaXYuc3R5bGUubGVmdCA9IDA7XG5cbiAgICAgICAgcmVzb2x2ZShkaXYpO1xuICAgICAgICAvLyBib2R5LmFwcGVuZENoaWxkKGRpdik7XG4gICAgfTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gICAgY3JlYXRlV3JhcCgpXG4gICAgICAgIC50aGVuKChkaXYpID0+IHtcbiAgICAgICAgICAgIGNyZWF0ZUxpbmUoZGl2KTtcbiAgICAgICAgfSk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NhbnZhcy9yZW5kZXIuanMiLCJleHBvcnQgY29uc3QgY29uZmlnID0ge1xuICAgIGJsb2NrQ29sdW1uTnVtOiAxMCxcbiAgICBibG9ja1Jvd051bTogMjAsXG59O1xuXG5leHBvcnQgY29uc3QgYXNzaWduQ29uZmlnID0gKG9iaikgPT4ge1xuICAgIE9iamVjdC5hc3NpZ24oY29uZmlnLCBvYmopO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jYW52YXMvY29uZmlnLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==
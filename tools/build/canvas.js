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
	            pointTxt.style.position = 'absolute';
	            // pointTxt.style.left = '-50%';
	            pointTxt.style.top = '20px';
	
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYTBjYzdjYzc3NzI4ZDYxZmIyMmEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhbnZhcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2FudmFzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jYW52YXMvcmVuZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jYW52YXMvY29uZmlnLmpzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJnZXRGb2N1cyIsImNvbHVtbiIsInJvdyIsImFyciIsImJlZ2luWCIsImJlZ2luWSIsImJvZHkiLCJkb2N1bWVudCIsIndpZHRoIiwib2Zmc2V0V2lkdGgiLCJoZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJpIiwiaiIsInB1c2giLCJjcmVhdGVMaW5lIiwiZGl2IiwiYmxvY2tDb2x1bW5OdW0iLCJibG9ja1Jvd051bSIsImZvY3VzUG9pbnQiLCJjcmVhdGVFbGVtZW50Iiwic3R5bGUiLCJiYWNrZ3JvdW5kIiwiZGlzcGxheSIsInBvc2l0aW9uIiwibGVmdCIsImFwcGVuZENoaWxkIiwidG9wIiwicG9pbnRXcmFwIiwicG9pbnQiLCJwb2ludFR4dCIsIndpZCIsIm9wYWNpdHkiLCJjdXJzb3IiLCJpbm5lclRleHQiLCJhZGRFdmVudExpc3RlbmVyIiwibW91c2VvdmVyIiwibW91c2VvdXQiLCJjcmVhdGVXcmFwIiwiUHJvbWlzZSIsInJlc29sdmUiLCJ3aW5kb3ciLCJvbmxvYWQiLCJ0aGVuIiwiY29uZmlnIiwiYXNzaWduQ29uZmlnIiwib2JqIiwiT2JqZWN0IiwiYXNzaWduIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7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S0FBSixDQUFVSSxJQUFWLEdBQWlCLENBQWpCOztBQUVBZSxxQkFBUXhCLEdBQVI7QUFDQTtBQUNILFVBWkQ7QUFhSCxNQWR3QixDQUFOO0FBQUEsRUFBbkI7O21CQWdCZSxZQUFNO0FBQ2pCc0Isa0JBQ0tLLElBREwsQ0FDVSxVQUFDM0IsR0FBRCxFQUFTO0FBQ1hELG9CQUFXQyxHQUFYO0FBQ0gsTUFITDtBQUlILEU7Ozs7Ozs7Ozs7O0FDdkhNLEtBQU00QiwwQkFBUztBQUNsQjNCLHFCQUFnQixFQURFO0FBRWxCQyxrQkFBYTtBQUZLLEVBQWY7O0FBS0EsS0FBTTJCLHNDQUFlLFNBQWZBLFlBQWUsQ0FBQ0MsR0FBRCxFQUFTO0FBQ2pDQyxZQUFPQyxNQUFQLENBQWNKLE1BQWQsRUFBc0JFLEdBQXRCO0FBQ0gsRUFGTSxDIiwiZmlsZSI6ImNhbnZhcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGEwY2M3Y2M3NzcyOGQ2MWZiMjJhIiwiLyoqXG4gKiBAZGVzY3JpcHRpb24gY2FudmFzLWRlYnVnZ2VyIOWFpeWPo+aWh+S7tlxuICovXG5cbmltcG9ydCBpbml0IGZyb20gJy4vY2FudmFzL2luZGV4JztcblxubW9kdWxlLmV4cG9ydHMgPSBpbml0KCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2FudmFzLmpzIiwiaW1wb3J0IHJlbmRlciBmcm9tICcuL3JlbmRlcic7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgICByZW5kZXIoKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2FudmFzL2luZGV4LmpzIiwiaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnLi9jb25maWcnO1xuXG5jb25zdCBnZXRGb2N1cyA9IChjb2x1bW4sIHJvdykgPT4ge1xuICAgIGNvbnN0IGFyciA9IFtdO1xuICAgIGNvbnN0IGJlZ2luWCA9IDA7XG4gICAgY29uc3QgYmVnaW5ZID0gMDtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcbiAgICBjb25zdCB3aWR0aCA9IGJvZHkub2Zmc2V0V2lkdGggLyBjb2x1bW47XG4gICAgY29uc3QgaGVpZ2h0ID0gYm9keS5vZmZzZXRIZWlnaHQgLyByb3c7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbHVtbiAtIDE7IGkrKykge1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHJvdyAtIDE7IGorKykge1xuICAgICAgICAgICAgYXJyLnB1c2goW2JlZ2luWCArIChpICsgMSkgKiB3aWR0aCxcbiAgICAgICAgICAgICAgICBiZWdpblkgKyAoaiArIDEpICogaGVpZ2h0XSk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHJldHVybiBhcnI7XG59O1xuXG5jb25zdCBjcmVhdGVMaW5lID0gKGRpdikgPT4ge1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xuICAgIGNvbnN0IGJsb2NrQ29sdW1uTnVtID0gY29uZmlnLmJsb2NrQ29sdW1uTnVtO1xuICAgIGNvbnN0IGJsb2NrUm93TnVtID0gY29uZmlnLmJsb2NrUm93TnVtO1xuICAgIGNvbnN0IHdpZHRoID0gYm9keS5vZmZzZXRXaWR0aCAvIGJsb2NrQ29sdW1uTnVtO1xuICAgIGNvbnN0IGhlaWdodCA9IGJvZHkub2Zmc2V0SGVpZ2h0IC8gYmxvY2tSb3dOdW07XG4gICAgY29uc3QgYmVnaW5YID0gMDtcbiAgICBjb25zdCBiZWdpblkgPSAwO1xuICAgIGNvbnN0IGZvY3VzUG9pbnQgPSBnZXRGb2N1cyhibG9ja0NvbHVtbk51bSwgYmxvY2tSb3dOdW0pO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBibG9ja0NvbHVtbk51bSAtIDE7IGkrKykge1xuICAgICAgICBjb25zdCBjb2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICBjb2x1bW4uc3R5bGUud2lkdGggPSAnMXB4JztcbiAgICAgICAgY29sdW1uLnN0eWxlLmhlaWdodCA9ICcxMDAlJztcbiAgICAgICAgY29sdW1uLnN0eWxlLmJhY2tncm91bmQgPSAnI0ZDNjI0Nic7XG4gICAgICAgIGNvbHVtbi5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jayc7XG4gICAgICAgIGNvbHVtbi5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICAgIGNvbHVtbi5zdHlsZS5sZWZ0ID0gYCR7YmVnaW5YICsgKGkgKyAxKSAqIHdpZHRofXB4YDtcblxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoY29sdW1uKTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJsb2NrUm93TnVtIC0gMTsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgIHJvdy5zdHlsZS53aWR0aCA9ICcxMDAlJztcbiAgICAgICAgcm93LnN0eWxlLmhlaWdodCA9ICcxcHgnO1xuICAgICAgICByb3cuc3R5bGUuYmFja2dyb3VuZCA9ICcjRkM2MjQ2JztcbiAgICAgICAgcm93LnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJztcbiAgICAgICAgcm93LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgICAgcm93LnN0eWxlLnRvcCA9IGAke2JlZ2luWSArIChpICsgMSkgKiBoZWlnaHR9cHhgO1xuXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChyb3cpO1xuICAgIH1cblxuICAgIGZvciAoY29uc3QgaSBvZiBmb2N1c1BvaW50KSB7XG4gICAgICAgIGNvbnN0IHBvaW50V3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBwb2ludCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgY29uc3QgcG9pbnRUeHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIGNvbnN0IHdpZCA9IDE1O1xuXG4gICAgICAgIHBvaW50V3JhcC5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgICAgICAgcG9pbnRXcmFwLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgICAgcG9pbnRXcmFwLnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJztcbiAgICAgICAgcG9pbnRXcmFwLnN0eWxlLmxlZnQgPSBgJHtpWzBdIC0gd2lkIC8gMiArIDEgLyAyfXB4YDtcbiAgICAgICAgcG9pbnRXcmFwLnN0eWxlLnRvcCA9IGAke2lbMV0gLSB3aWQgLyAyIC0gMSAvIDJ9cHhgO1xuXG4gICAgICAgIHBvaW50LnN0eWxlLndpZHRoID0gYCR7d2lkfXB4YDtcbiAgICAgICAgcG9pbnQuc3R5bGUuaGVpZ2h0ID0gYCR7d2lkfXB4YDtcbiAgICAgICAgcG9pbnQuc3R5bGUuYmFja2dyb3VuZCA9ICcjRkM2MjQ2JztcbiAgICAgICAgcG9pbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIHBvaW50LnN0eWxlWydib3JkZXItcmFkaXVzJ10gPSBgJHt3aWR9cHhgO1xuICAgICAgICBwb2ludC5zdHlsZVsndmVydGljYWwtYWxpZ24nXSA9ICd0b3AnO1xuXG4gICAgICAgIHBvaW50VHh0LmlubmVyVGV4dCA9IGAoJHtpWzBdfSwke2lbMV19KWA7XG4gICAgICAgIHBvaW50VHh0LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgICAgLy8gcG9pbnRUeHQuc3R5bGUubGVmdCA9ICctNTAlJztcbiAgICAgICAgcG9pbnRUeHQuc3R5bGUudG9wID0gJzIwcHgnO1xuXG4gICAgICAgIHBvaW50V3JhcC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBmdW5jdGlvbiBtb3VzZW92ZXIoKSB7XG4gICAgICAgICAgICB0aGlzLnN0eWxlLm9wYWNpdHkgPSAxO1xuICAgICAgICB9KTtcblxuICAgICAgICBwb2ludFdyYXAuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCBmdW5jdGlvbiBtb3VzZW91dCgpIHtcbiAgICAgICAgICAgIHRoaXMuc3R5bGUub3BhY2l0eSA9IDA7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHBvaW50V3JhcC5hcHBlbmRDaGlsZChwb2ludCk7XG4gICAgICAgIHBvaW50V3JhcC5hcHBlbmRDaGlsZChwb2ludFR4dCk7XG5cbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKHBvaW50V3JhcCk7XG4gICAgfVxuXG4gICAgYm9keS5hcHBlbmRDaGlsZChkaXYpO1xufTtcblxuY29uc3QgY3JlYXRlV3JhcCA9ICgpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgd2luZG93Lm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkaXYuc3R5bGUud2lkdGggPSBgJHtib2R5Lm9mZnNldFdpZHRofXB4YDtcbiAgICAgICAgZGl2LnN0eWxlLmhlaWdodCA9IGAke2JvZHkub2Zmc2V0SGVpZ2h0fXB4YDtcbiAgICAgICAgZGl2LnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJztcbiAgICAgICAgZGl2LnN0eWxlWyd6LWluZGV4J10gPSAxMDAwO1xuICAgICAgICBkaXYuc3R5bGUudG9wID0gMDtcbiAgICAgICAgZGl2LnN0eWxlLmxlZnQgPSAwO1xuXG4gICAgICAgIHJlc29sdmUoZGl2KTtcbiAgICAgICAgLy8gYm9keS5hcHBlbmRDaGlsZChkaXYpO1xuICAgIH07XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICAgIGNyZWF0ZVdyYXAoKVxuICAgICAgICAudGhlbigoZGl2KSA9PiB7XG4gICAgICAgICAgICBjcmVhdGVMaW5lKGRpdik7XG4gICAgICAgIH0pO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jYW52YXMvcmVuZGVyLmpzIiwiZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcbiAgICBibG9ja0NvbHVtbk51bTogMTAsXG4gICAgYmxvY2tSb3dOdW06IDIwLFxufTtcblxuZXhwb3J0IGNvbnN0IGFzc2lnbkNvbmZpZyA9IChvYmopID0+IHtcbiAgICBPYmplY3QuYXNzaWduKGNvbmZpZywgb2JqKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2FudmFzL2NvbmZpZy5qcyJdLCJzb3VyY2VSb290IjoiIn0=
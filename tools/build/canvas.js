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
	            arr.push(beginX + (i + 1) * width + ',' + (beginY + (j + 1) * height));
	        }
	    }
	
	    console.log(arr);
	
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
	    blockColumnNum: 10,
	    blockRowNum: 20
	};

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNDljNjhlMjdhNjlkZmYyN2YwNzIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhbnZhcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2FudmFzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jYW52YXMvcmVuZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jYW52YXMvY29uZmlnLmpzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJnZXRGb2N1cyIsImNvbHVtbiIsInJvdyIsImFyciIsImJlZ2luWCIsImJlZ2luWSIsImJvZHkiLCJkb2N1bWVudCIsIndpZHRoIiwib2Zmc2V0V2lkdGgiLCJoZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJpIiwiaiIsInB1c2giLCJjb25zb2xlIiwibG9nIiwiY3JlYXRlTGluZSIsImRpdiIsImJsb2NrQ29sdW1uTnVtIiwiYmxvY2tSb3dOdW0iLCJmb2N1c1BvaW50IiwiY3JlYXRlRWxlbWVudCIsInN0eWxlIiwiYmFja2dyb3VuZCIsImRpc3BsYXkiLCJwb3NpdGlvbiIsImxlZnQiLCJhcHBlbmRDaGlsZCIsInRvcCIsImNyZWF0ZVdyYXAiLCJQcm9taXNlIiwicmVzb2x2ZSIsIndpbmRvdyIsIm9ubG9hZCIsInRoZW4iLCJjb25maWciXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUNsQ0E7Ozs7OztBQUVBQSxRQUFPQyxPQUFQLEdBQWlCLHNCQUFqQixDLENBTkE7Ozs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7OzttQkFFZSxZQUFNO0FBQ2pCO0FBQ0gsRTs7Ozs7Ozs7Ozs7O0FDSkQ7O0FBRUEsS0FBTUMsV0FBVyxTQUFYQSxRQUFXLENBQUNDLE1BQUQsRUFBU0MsR0FBVCxFQUFpQjtBQUM5QixTQUFNQyxNQUFNLEVBQVo7QUFDQSxTQUFNQyxTQUFTLENBQWY7QUFDQSxTQUFNQyxTQUFTLENBQWY7QUFDQSxTQUFNQyxPQUFPQyxTQUFTRCxJQUF0QjtBQUNBLFNBQU1FLFFBQVFGLEtBQUtHLFdBQUwsR0FBbUJSLE1BQWpDO0FBQ0EsU0FBTVMsU0FBU0osS0FBS0ssWUFBTCxHQUFvQlQsR0FBbkM7O0FBRUEsVUFBSyxJQUFJVSxJQUFJLENBQWIsRUFBZ0JBLElBQUlYLFNBQVMsQ0FBN0IsRUFBZ0NXLEdBQWhDLEVBQXFDO0FBQ2pDLGNBQUssSUFBSUMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJWCxNQUFNLENBQTFCLEVBQTZCVyxHQUE3QixFQUFrQztBQUM5QlYsaUJBQUlXLElBQUosQ0FBVVYsU0FBUyxDQUFDUSxJQUFJLENBQUwsSUFBVUosS0FBcEIsR0FBNkIsR0FBN0IsSUFDSkgsU0FBUyxDQUFDUSxJQUFJLENBQUwsSUFBVUgsTUFEZixDQUFUO0FBR0g7QUFDSjs7QUFFREssYUFBUUMsR0FBUixDQUFZYixHQUFaOztBQUVBLFlBQU9BLEdBQVA7QUFDSCxFQW5CRDs7QUFxQkEsS0FBTWMsYUFBYSxTQUFiQSxVQUFhLENBQUNDLEdBQUQsRUFBUztBQUN4QixTQUFNWixPQUFPQyxTQUFTRCxJQUF0QjtBQUNBLFNBQU1hLGlCQUFpQixlQUFPQSxjQUE5QjtBQUNBLFNBQU1DLGNBQWMsZUFBT0EsV0FBM0I7QUFDQSxTQUFNWixRQUFRRixLQUFLRyxXQUFMLEdBQW1CVSxjQUFqQztBQUNBLFNBQU1ULFNBQVNKLEtBQUtLLFlBQUwsR0FBb0JTLFdBQW5DO0FBQ0EsU0FBTWhCLFNBQVMsQ0FBZjtBQUNBLFNBQU1DLFNBQVMsQ0FBZjtBQUNBLFNBQU1nQixhQUFhckIsU0FBU21CLGNBQVQsRUFBeUJDLFdBQXpCLENBQW5COztBQUVBLFVBQUssSUFBSVIsSUFBSSxDQUFiLEVBQWdCQSxJQUFJTyxpQkFBaUIsQ0FBckMsRUFBd0NQLEdBQXhDLEVBQTZDO0FBQ3pDLGFBQU1YLFNBQVNNLFNBQVNlLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBZjs7QUFFQXJCLGdCQUFPc0IsS0FBUCxDQUFhZixLQUFiLEdBQXFCLEtBQXJCO0FBQ0FQLGdCQUFPc0IsS0FBUCxDQUFhYixNQUFiLEdBQXNCLE1BQXRCO0FBQ0FULGdCQUFPc0IsS0FBUCxDQUFhQyxVQUFiLEdBQTBCLFNBQTFCO0FBQ0F2QixnQkFBT3NCLEtBQVAsQ0FBYUUsT0FBYixHQUF1QixjQUF2QjtBQUNBeEIsZ0JBQU9zQixLQUFQLENBQWFHLFFBQWIsR0FBd0IsVUFBeEI7QUFDQXpCLGdCQUFPc0IsS0FBUCxDQUFhSSxJQUFiLEdBQW9CdkIsU0FBUyxDQUFDUSxJQUFJLENBQUwsSUFBVUosS0FBbkIsR0FBMkIsSUFBL0M7O0FBRUFVLGFBQUlVLFdBQUosQ0FBZ0IzQixNQUFoQjtBQUVIOztBQUVELFVBQUssSUFBSVcsS0FBSSxDQUFiLEVBQWdCQSxLQUFJUSxjQUFjLENBQWxDLEVBQXFDUixJQUFyQyxFQUEwQztBQUN0QyxhQUFNVixNQUFNSyxTQUFTZSxhQUFULENBQXVCLEtBQXZCLENBQVo7O0FBRUFwQixhQUFJcUIsS0FBSixDQUFVZixLQUFWLEdBQWtCLE1BQWxCO0FBQ0FOLGFBQUlxQixLQUFKLENBQVViLE1BQVYsR0FBbUIsS0FBbkI7QUFDQVIsYUFBSXFCLEtBQUosQ0FBVUMsVUFBVixHQUF1QixTQUF2QjtBQUNBdEIsYUFBSXFCLEtBQUosQ0FBVUUsT0FBVixHQUFvQixjQUFwQjtBQUNBdkIsYUFBSXFCLEtBQUosQ0FBVUcsUUFBVixHQUFxQixVQUFyQjtBQUNBeEIsYUFBSXFCLEtBQUosQ0FBVU0sR0FBVixHQUFnQnhCLFNBQVMsQ0FBQ08sS0FBSSxDQUFMLElBQVVGLE1BQW5CLEdBQTRCLElBQTVDOztBQUVBUSxhQUFJVSxXQUFKLENBQWdCMUIsR0FBaEI7QUFDSDs7QUFFREksVUFBS3NCLFdBQUwsQ0FBaUJWLEdBQWpCO0FBQ0gsRUF0Q0Q7O0FBd0NBLEtBQU1ZLGFBQWEsU0FBYkEsVUFBYSxHQUFNO0FBQ3JCLFlBQU8sSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBYTtBQUM1QkMsZ0JBQU9DLE1BQVAsR0FBZ0IsWUFBTTtBQUNsQixpQkFBTTVCLE9BQU9DLFNBQVNELElBQXRCO0FBQ0EsaUJBQU1ZLE1BQU1YLFNBQVNlLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBWjtBQUNBSixpQkFBSUssS0FBSixDQUFVZixLQUFWLEdBQWtCRixLQUFLRyxXQUFMLEdBQW1CLElBQXJDO0FBQ0FTLGlCQUFJSyxLQUFKLENBQVViLE1BQVYsR0FBbUJKLEtBQUtLLFlBQUwsR0FBb0IsSUFBdkM7QUFDQU8saUJBQUlLLEtBQUosQ0FBVUcsUUFBVixHQUFxQixPQUFyQjtBQUNBUixpQkFBSUssS0FBSixDQUFVLFNBQVYsSUFBdUIsSUFBdkI7QUFDQUwsaUJBQUlLLEtBQUosQ0FBVU0sR0FBVixHQUFnQixDQUFoQjtBQUNBWCxpQkFBSUssS0FBSixDQUFVSSxJQUFWLEdBQWlCLENBQWpCOztBQUVBSyxxQkFBUWQsR0FBUjtBQUNBO0FBQ0gsVUFaRDtBQWFILE1BZE0sQ0FBUDtBQWVILEVBaEJEOzttQkFrQmUsWUFBTTtBQUNqQlksa0JBQ0tLLElBREwsQ0FDVSxVQUFDakIsR0FBRCxFQUFTO0FBQ1hILGlCQUFRQyxHQUFSLENBQVlFLEdBQVo7QUFDQUQsb0JBQVdDLEdBQVg7QUFDSCxNQUpMO0FBS0gsRTs7Ozs7Ozs7Ozs7QUN2Rk0sS0FBTWtCLDBCQUFTO0FBQ2xCakIscUJBQWdCLEVBREU7QUFFbEJDLGtCQUFhO0FBRkssRUFBZixDIiwiZmlsZSI6ImNhbnZhcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDQ5YzY4ZTI3YTY5ZGZmMjdmMDcyIiwiLyoqXG4gKiBAZGVzY3JpcHRpb24gY2FudmFzLWRlYnVnZ2VyIOWFpeWPo+aWh+S7tlxuICovXG5cbmltcG9ydCBpbml0IGZyb20gJy4vY2FudmFzL2luZGV4JztcblxubW9kdWxlLmV4cG9ydHMgPSBpbml0KCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2FudmFzLmpzIiwiaW1wb3J0IHJlbmRlciBmcm9tICcuL3JlbmRlcic7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgICByZW5kZXIoKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2FudmFzL2luZGV4LmpzIiwiaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnLi9jb25maWcnO1xuXG5jb25zdCBnZXRGb2N1cyA9IChjb2x1bW4sIHJvdykgPT4ge1xuICAgIGNvbnN0IGFyciA9IFtdO1xuICAgIGNvbnN0IGJlZ2luWCA9IDA7XG4gICAgY29uc3QgYmVnaW5ZID0gMDtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcbiAgICBjb25zdCB3aWR0aCA9IGJvZHkub2Zmc2V0V2lkdGggLyBjb2x1bW47XG4gICAgY29uc3QgaGVpZ2h0ID0gYm9keS5vZmZzZXRIZWlnaHQgLyByb3c7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbHVtbiAtIDE7IGkrKykge1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHJvdyAtIDE7IGorKykge1xuICAgICAgICAgICAgYXJyLnB1c2goKGJlZ2luWCArIChpICsgMSkgKiB3aWR0aCkgKyAnLCcgK1xuICAgICAgICAgICAgICAgIChiZWdpblkgKyAoaiArIDEpICogaGVpZ2h0KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKGFycik7XG5cbiAgICByZXR1cm4gYXJyO1xufTtcblxuY29uc3QgY3JlYXRlTGluZSA9IChkaXYpID0+IHtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcbiAgICBjb25zdCBibG9ja0NvbHVtbk51bSA9IGNvbmZpZy5ibG9ja0NvbHVtbk51bTtcbiAgICBjb25zdCBibG9ja1Jvd051bSA9IGNvbmZpZy5ibG9ja1Jvd051bTtcbiAgICBjb25zdCB3aWR0aCA9IGJvZHkub2Zmc2V0V2lkdGggLyBibG9ja0NvbHVtbk51bTtcbiAgICBjb25zdCBoZWlnaHQgPSBib2R5Lm9mZnNldEhlaWdodCAvIGJsb2NrUm93TnVtO1xuICAgIGNvbnN0IGJlZ2luWCA9IDA7XG4gICAgY29uc3QgYmVnaW5ZID0gMDtcbiAgICBjb25zdCBmb2N1c1BvaW50ID0gZ2V0Rm9jdXMoYmxvY2tDb2x1bW5OdW0sIGJsb2NrUm93TnVtKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYmxvY2tDb2x1bW5OdW0gLSAxOyBpKyspIHtcbiAgICAgICAgY29uc3QgY29sdW1uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgY29sdW1uLnN0eWxlLndpZHRoID0gJzFweCc7XG4gICAgICAgIGNvbHVtbi5zdHlsZS5oZWlnaHQgPSAnMTAwJSc7XG4gICAgICAgIGNvbHVtbi5zdHlsZS5iYWNrZ3JvdW5kID0gJyNGQzYyNDYnO1xuICAgICAgICBjb2x1bW4uc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snO1xuICAgICAgICBjb2x1bW4uc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICBjb2x1bW4uc3R5bGUubGVmdCA9IGJlZ2luWCArIChpICsgMSkgKiB3aWR0aCArICdweCc7XG5cbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGNvbHVtbik7XG5cbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJsb2NrUm93TnVtIC0gMTsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgIHJvdy5zdHlsZS53aWR0aCA9ICcxMDAlJztcbiAgICAgICAgcm93LnN0eWxlLmhlaWdodCA9ICcxcHgnO1xuICAgICAgICByb3cuc3R5bGUuYmFja2dyb3VuZCA9ICcjRkM2MjQ2JztcbiAgICAgICAgcm93LnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJztcbiAgICAgICAgcm93LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgICAgcm93LnN0eWxlLnRvcCA9IGJlZ2luWSArIChpICsgMSkgKiBoZWlnaHQgKyAncHgnO1xuXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChyb3cpO1xuICAgIH1cblxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoZGl2KTtcbn07XG5cbmNvbnN0IGNyZWF0ZVdyYXAgPSAoKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgIHdpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcbiAgICAgICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZGl2LnN0eWxlLndpZHRoID0gYm9keS5vZmZzZXRXaWR0aCArICdweCc7XG4gICAgICAgICAgICBkaXYuc3R5bGUuaGVpZ2h0ID0gYm9keS5vZmZzZXRIZWlnaHQgKyAncHgnO1xuICAgICAgICAgICAgZGl2LnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJztcbiAgICAgICAgICAgIGRpdi5zdHlsZVsnei1pbmRleCddID0gMTAwMDtcbiAgICAgICAgICAgIGRpdi5zdHlsZS50b3AgPSAwO1xuICAgICAgICAgICAgZGl2LnN0eWxlLmxlZnQgPSAwO1xuXG4gICAgICAgICAgICByZXNvbHZlKGRpdik7XG4gICAgICAgICAgICAvL2JvZHkuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICAgICAgfVxuICAgIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICAgIGNyZWF0ZVdyYXAoKVxuICAgICAgICAudGhlbigoZGl2KSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkaXYpO1xuICAgICAgICAgICAgY3JlYXRlTGluZShkaXYpO1xuICAgICAgICB9KTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2FudmFzL3JlbmRlci5qcyIsImV4cG9ydCBjb25zdCBjb25maWcgPSB7XG4gICAgYmxvY2tDb2x1bW5OdW06IDEwLFxuICAgIGJsb2NrUm93TnVtOiAyMCxcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2FudmFzL2NvbmZpZy5qcyJdLCJzb3VyY2VSb290IjoiIn0=
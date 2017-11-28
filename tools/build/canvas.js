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
	    var blockColumnNum = _config.config.blockColumnNum;
	    var blockRowNum = _config.config.blockRowNum;
	    var width = body.offsetWidth / blockColumnNum;
	    var height = body.offsetHeight / blockRowNum;
	    var beginX = 0;
	    var beginY = 0;
	    var focusPoint = [];
	
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgODQ2ODQxNDA3OGM4N2RjZTQ1OGQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhbnZhcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2FudmFzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jYW52YXMvcmVuZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jYW52YXMvY29uZmlnLmpzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJnZXRGb2N1cyIsImNyZWF0ZUxpbmUiLCJkaXYiLCJib2R5IiwiZG9jdW1lbnQiLCJibG9ja0NvbHVtbk51bSIsImJsb2NrUm93TnVtIiwid2lkdGgiLCJvZmZzZXRXaWR0aCIsImhlaWdodCIsIm9mZnNldEhlaWdodCIsImJlZ2luWCIsImJlZ2luWSIsImZvY3VzUG9pbnQiLCJpIiwiY29sdW1uIiwiY3JlYXRlRWxlbWVudCIsInN0eWxlIiwiYmFja2dyb3VuZCIsImRpc3BsYXkiLCJwb3NpdGlvbiIsImxlZnQiLCJhcHBlbmRDaGlsZCIsInJvdyIsInRvcCIsImNyZWF0ZVdyYXAiLCJQcm9taXNlIiwicmVzb2x2ZSIsIndpbmRvdyIsIm9ubG9hZCIsInRoZW4iLCJjb25zb2xlIiwibG9nIiwiY29uZmlnIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7O0FDbENBOzs7Ozs7QUFFQUEsUUFBT0MsT0FBUCxHQUFpQixzQkFBakIsQyxDQU5BOzs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7bUJBRWUsWUFBTTtBQUNqQjtBQUNILEU7Ozs7Ozs7Ozs7OztBQ0pEOztBQUVBLEtBQU1DLFdBQVcsU0FBWEEsUUFBVyxHQUFNLENBQ3RCLENBREQ7O0FBR0EsS0FBTUMsYUFBYSxTQUFiQSxVQUFhLENBQUNDLEdBQUQsRUFBUztBQUN4QixTQUFNQyxPQUFPQyxTQUFTRCxJQUF0QjtBQUNBLFNBQU1FLGlCQUFpQixlQUFPQSxjQUE5QjtBQUNBLFNBQU1DLGNBQWMsZUFBT0EsV0FBM0I7QUFDQSxTQUFNQyxRQUFRSixLQUFLSyxXQUFMLEdBQW1CSCxjQUFqQztBQUNBLFNBQU1JLFNBQVNOLEtBQUtPLFlBQUwsR0FBb0JKLFdBQW5DO0FBQ0EsU0FBTUssU0FBUyxDQUFmO0FBQ0EsU0FBTUMsU0FBUyxDQUFmO0FBQ0EsU0FBTUMsYUFBYSxFQUFuQjs7QUFFQSxVQUFLLElBQUlDLElBQUksQ0FBYixFQUFnQkEsSUFBSVQsaUJBQWlCLENBQXJDLEVBQXdDUyxHQUF4QyxFQUE2QztBQUN6QyxhQUFNQyxTQUFTWCxTQUFTWSxhQUFULENBQXVCLEtBQXZCLENBQWY7QUFDQUQsZ0JBQU9FLEtBQVAsQ0FBYVYsS0FBYixHQUFxQixLQUFyQjtBQUNBUSxnQkFBT0UsS0FBUCxDQUFhUixNQUFiLEdBQXNCLE1BQXRCO0FBQ0FNLGdCQUFPRSxLQUFQLENBQWFDLFVBQWIsR0FBMEIsU0FBMUI7QUFDQUgsZ0JBQU9FLEtBQVAsQ0FBYUUsT0FBYixHQUF1QixjQUF2QjtBQUNBSixnQkFBT0UsS0FBUCxDQUFhRyxRQUFiLEdBQXdCLFVBQXhCO0FBQ0FMLGdCQUFPRSxLQUFQLENBQWFJLElBQWIsR0FBb0JWLFNBQVMsQ0FBQ0csSUFBSSxDQUFMLElBQVVQLEtBQW5CLEdBQTJCLElBQS9DOztBQUVBTCxhQUFJb0IsV0FBSixDQUFnQlAsTUFBaEI7QUFFSDs7QUFFRCxVQUFLLElBQUlELEtBQUksQ0FBYixFQUFnQkEsS0FBSVIsY0FBYyxDQUFsQyxFQUFxQ1EsSUFBckMsRUFBMEM7QUFDdEMsYUFBTVMsTUFBTW5CLFNBQVNZLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBWjs7QUFFQU8sYUFBSU4sS0FBSixDQUFVVixLQUFWLEdBQWtCLE1BQWxCO0FBQ0FnQixhQUFJTixLQUFKLENBQVVSLE1BQVYsR0FBbUIsS0FBbkI7QUFDQWMsYUFBSU4sS0FBSixDQUFVQyxVQUFWLEdBQXVCLFNBQXZCO0FBQ0FLLGFBQUlOLEtBQUosQ0FBVUUsT0FBVixHQUFvQixjQUFwQjtBQUNBSSxhQUFJTixLQUFKLENBQVVHLFFBQVYsR0FBcUIsVUFBckI7QUFDQUcsYUFBSU4sS0FBSixDQUFVTyxHQUFWLEdBQWdCWixTQUFTLENBQUNFLEtBQUksQ0FBTCxJQUFVTCxNQUFuQixHQUE0QixJQUE1Qzs7QUFFQVAsYUFBSW9CLFdBQUosQ0FBZ0JDLEdBQWhCO0FBQ0g7O0FBRURwQixVQUFLbUIsV0FBTCxDQUFpQnBCLEdBQWpCO0FBQ0gsRUFyQ0Q7O0FBdUNBLEtBQU11QixhQUFhLFNBQWJBLFVBQWEsR0FBTTtBQUNyQixZQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQWE7QUFDNUJDLGdCQUFPQyxNQUFQLEdBQWdCLFlBQU07QUFDbEIsaUJBQU0xQixPQUFPQyxTQUFTRCxJQUF0QjtBQUNBLGlCQUFNRCxNQUFNRSxTQUFTWSxhQUFULENBQXVCLEtBQXZCLENBQVo7QUFDQWQsaUJBQUllLEtBQUosQ0FBVVYsS0FBVixHQUFrQkosS0FBS0ssV0FBTCxHQUFtQixJQUFyQztBQUNBTixpQkFBSWUsS0FBSixDQUFVUixNQUFWLEdBQW1CTixLQUFLTyxZQUFMLEdBQW9CLElBQXZDO0FBQ0FSLGlCQUFJZSxLQUFKLENBQVVHLFFBQVYsR0FBcUIsT0FBckI7QUFDQWxCLGlCQUFJZSxLQUFKLENBQVUsU0FBVixJQUF1QixJQUF2QjtBQUNBZixpQkFBSWUsS0FBSixDQUFVTyxHQUFWLEdBQWdCLENBQWhCO0FBQ0F0QixpQkFBSWUsS0FBSixDQUFVSSxJQUFWLEdBQWlCLENBQWpCOztBQUVBTSxxQkFBUXpCLEdBQVI7QUFDQTtBQUNILFVBWkQ7QUFhSCxNQWRNLENBQVA7QUFlSCxFQWhCRDs7bUJBa0JlLFlBQU07QUFDakJ1QixrQkFDS0ssSUFETCxDQUNVLFVBQUM1QixHQUFELEVBQVM7QUFDWDZCLGlCQUFRQyxHQUFSLENBQVk5QixHQUFaO0FBQ0FELG9CQUFXQyxHQUFYO0FBQ0gsTUFKTDtBQUtILEU7Ozs7Ozs7Ozs7O0FDcEVNLEtBQU0rQiwwQkFBUztBQUNsQjVCLHFCQUFnQixFQURFO0FBRWxCQyxrQkFBYTtBQUZLLEVBQWYsQyIsImZpbGUiOiJjYW52YXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA4NDY4NDE0MDc4Yzg3ZGNlNDU4ZCIsIi8qKlxuICogQGRlc2NyaXB0aW9uIGNhbnZhcy1kZWJ1Z2dlciDlhaXlj6Pmlofku7ZcbiAqL1xuXG5pbXBvcnQgaW5pdCBmcm9tICcuL2NhbnZhcy9pbmRleCc7XG5cbm1vZHVsZS5leHBvcnRzID0gaW5pdCgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NhbnZhcy5qcyIsImltcG9ydCByZW5kZXIgZnJvbSAnLi9yZW5kZXInO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gICAgcmVuZGVyKCk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NhbnZhcy9pbmRleC5qcyIsImltcG9ydCB7IGNvbmZpZyB9IGZyb20gJy4vY29uZmlnJztcblxuY29uc3QgZ2V0Rm9jdXMgPSAoKSA9PiB7XG59O1xuXG5jb25zdCBjcmVhdGVMaW5lID0gKGRpdikgPT4ge1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xuICAgIGNvbnN0IGJsb2NrQ29sdW1uTnVtID0gY29uZmlnLmJsb2NrQ29sdW1uTnVtO1xuICAgIGNvbnN0IGJsb2NrUm93TnVtID0gY29uZmlnLmJsb2NrUm93TnVtO1xuICAgIGNvbnN0IHdpZHRoID0gYm9keS5vZmZzZXRXaWR0aCAvIGJsb2NrQ29sdW1uTnVtO1xuICAgIGNvbnN0IGhlaWdodCA9IGJvZHkub2Zmc2V0SGVpZ2h0IC8gYmxvY2tSb3dOdW07XG4gICAgY29uc3QgYmVnaW5YID0gMDtcbiAgICBjb25zdCBiZWdpblkgPSAwO1xuICAgIGNvbnN0IGZvY3VzUG9pbnQgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYmxvY2tDb2x1bW5OdW0gLSAxOyBpKyspIHtcbiAgICAgICAgY29uc3QgY29sdW1uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbHVtbi5zdHlsZS53aWR0aCA9ICcxcHgnO1xuICAgICAgICBjb2x1bW4uc3R5bGUuaGVpZ2h0ID0gJzEwMCUnO1xuICAgICAgICBjb2x1bW4uc3R5bGUuYmFja2dyb3VuZCA9ICcjRkM2MjQ2JztcbiAgICAgICAgY29sdW1uLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJztcbiAgICAgICAgY29sdW1uLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgICAgY29sdW1uLnN0eWxlLmxlZnQgPSBiZWdpblggKyAoaSArIDEpICogd2lkdGggKyAncHgnO1xuXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChjb2x1bW4pO1xuXG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBibG9ja1Jvd051bSAtIDE7IGkrKykge1xuICAgICAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICByb3cuc3R5bGUud2lkdGggPSAnMTAwJSc7XG4gICAgICAgIHJvdy5zdHlsZS5oZWlnaHQgPSAnMXB4JztcbiAgICAgICAgcm93LnN0eWxlLmJhY2tncm91bmQgPSAnI0ZDNjI0Nic7XG4gICAgICAgIHJvdy5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jayc7XG4gICAgICAgIHJvdy5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICAgIHJvdy5zdHlsZS50b3AgPSBiZWdpblkgKyAoaSArIDEpICogaGVpZ2h0ICsgJ3B4JztcblxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQocm93KTtcbiAgICB9XG5cbiAgICBib2R5LmFwcGVuZENoaWxkKGRpdik7XG59O1xuXG5jb25zdCBjcmVhdGVXcmFwID0gKCkgPT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICB3aW5kb3cub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XG4gICAgICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGRpdi5zdHlsZS53aWR0aCA9IGJvZHkub2Zmc2V0V2lkdGggKyAncHgnO1xuICAgICAgICAgICAgZGl2LnN0eWxlLmhlaWdodCA9IGJvZHkub2Zmc2V0SGVpZ2h0ICsgJ3B4JztcbiAgICAgICAgICAgIGRpdi5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCc7XG4gICAgICAgICAgICBkaXYuc3R5bGVbJ3otaW5kZXgnXSA9IDEwMDA7XG4gICAgICAgICAgICBkaXYuc3R5bGUudG9wID0gMDtcbiAgICAgICAgICAgIGRpdi5zdHlsZS5sZWZ0ID0gMDtcblxuICAgICAgICAgICAgcmVzb2x2ZShkaXYpO1xuICAgICAgICAgICAgLy9ib2R5LmFwcGVuZENoaWxkKGRpdik7XG4gICAgICAgIH1cbiAgICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgICBjcmVhdGVXcmFwKClcbiAgICAgICAgLnRoZW4oKGRpdikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGl2KTtcbiAgICAgICAgICAgIGNyZWF0ZUxpbmUoZGl2KTtcbiAgICAgICAgfSk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NhbnZhcy9yZW5kZXIuanMiLCJleHBvcnQgY29uc3QgY29uZmlnID0ge1xuICAgIGJsb2NrQ29sdW1uTnVtOiAxMCxcbiAgICBibG9ja1Jvd051bTogMjAsXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NhbnZhcy9jb25maWcuanMiXSwic291cmNlUm9vdCI6IiJ9
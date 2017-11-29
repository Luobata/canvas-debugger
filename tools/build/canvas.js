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
	            var _width = 15;
	            var position = _i2.split(',');
	
	            pointWrap.style.opacity = 0;
	            pointWrap.style.position = 'absolute';
	            pointWrap.style.cursor = 'pointer';
	            pointWrap.style.left = position[0] - _width / 2 + 1 / 2 + 'px';
	            pointWrap.style.top = position[1] - _width / 2 - 1 / 2 + 'px';
	
	            point.style.width = _width + 'px';
	            point.style.height = _width + 'px';
	            point.style.background = '#FC6246';
	            point.style.display = 'block';
	            point.style['border-radius'] = _width + 'px';
	            point.style['vertical-align'] = 'top';
	
	            pointTxt.innerText = '(' + position[0] + ',' + position[1] + ')';
	            pointTxt.style.position = 'relative';
	            pointTxt.style.left = '-50%';
	            pointTxt.style.top = '10px';
	
	            pointWrap.addEventListener('mouseover', function () {
	                this.style.opacity = 1;
	            });
	
	            pointWrap.addEventListener('mouseout', function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZGQ2NWRlMzkwMjliZDRlYTRmMDUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhbnZhcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2FudmFzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jYW52YXMvcmVuZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jYW52YXMvY29uZmlnLmpzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJnZXRGb2N1cyIsImNvbHVtbiIsInJvdyIsImFyciIsImJlZ2luWCIsImJlZ2luWSIsImJvZHkiLCJkb2N1bWVudCIsIndpZHRoIiwib2Zmc2V0V2lkdGgiLCJoZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJpIiwiaiIsInB1c2giLCJjcmVhdGVMaW5lIiwiZGl2IiwiYmxvY2tDb2x1bW5OdW0iLCJibG9ja1Jvd051bSIsImZvY3VzUG9pbnQiLCJjcmVhdGVFbGVtZW50Iiwic3R5bGUiLCJiYWNrZ3JvdW5kIiwiZGlzcGxheSIsInBvc2l0aW9uIiwibGVmdCIsImFwcGVuZENoaWxkIiwidG9wIiwicG9pbnRXcmFwIiwicG9pbnQiLCJwb2ludFR4dCIsInNwbGl0Iiwib3BhY2l0eSIsImN1cnNvciIsImlubmVyVGV4dCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjcmVhdGVXcmFwIiwiUHJvbWlzZSIsInJlc29sdmUiLCJ3aW5kb3ciLCJvbmxvYWQiLCJ0aGVuIiwiY29uc29sZSIsImxvZyIsImNvbmZpZyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7OztBQ2xDQTs7Ozs7O0FBRUFBLFFBQU9DLE9BQVAsR0FBaUIsc0JBQWpCLEMsQ0FOQTs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7O21CQUVlLFlBQU07QUFDakI7QUFDSCxFOzs7Ozs7Ozs7Ozs7QUNKRDs7QUFFQSxLQUFNQyxXQUFXLFNBQVhBLFFBQVcsQ0FBQ0MsTUFBRCxFQUFTQyxHQUFULEVBQWlCO0FBQzlCLFNBQU1DLE1BQU0sRUFBWjtBQUNBLFNBQU1DLFNBQVMsQ0FBZjtBQUNBLFNBQU1DLFNBQVMsQ0FBZjtBQUNBLFNBQU1DLE9BQU9DLFNBQVNELElBQXRCO0FBQ0EsU0FBTUUsUUFBUUYsS0FBS0csV0FBTCxHQUFtQlIsTUFBakM7QUFDQSxTQUFNUyxTQUFTSixLQUFLSyxZQUFMLEdBQW9CVCxHQUFuQzs7QUFFQSxVQUFLLElBQUlVLElBQUksQ0FBYixFQUFnQkEsSUFBSVgsU0FBUyxDQUE3QixFQUFnQ1csR0FBaEMsRUFBcUM7QUFDakMsY0FBSyxJQUFJQyxJQUFJLENBQWIsRUFBZ0JBLElBQUlYLE1BQU0sQ0FBMUIsRUFBNkJXLEdBQTdCLEVBQWtDO0FBQzlCVixpQkFBSVcsSUFBSixDQUFVVixTQUFTLENBQUNRLElBQUksQ0FBTCxJQUFVSixLQUFwQixHQUE2QixHQUE3QixJQUNKSCxTQUFTLENBQUNRLElBQUksQ0FBTCxJQUFVSCxNQURmLENBQVQ7QUFHSDtBQUNKOztBQUdELFlBQU9QLEdBQVA7QUFDSCxFQWxCRDs7QUFvQkEsS0FBTVksYUFBYSxTQUFiQSxVQUFhLENBQUNDLEdBQUQsRUFBUztBQUN4QixTQUFNVixPQUFPQyxTQUFTRCxJQUF0QjtBQUNBLFNBQU1XLGlCQUFpQixlQUFPQSxjQUE5QjtBQUNBLFNBQU1DLGNBQWMsZUFBT0EsV0FBM0I7QUFDQSxTQUFNVixRQUFRRixLQUFLRyxXQUFMLEdBQW1CUSxjQUFqQztBQUNBLFNBQU1QLFNBQVNKLEtBQUtLLFlBQUwsR0FBb0JPLFdBQW5DO0FBQ0EsU0FBTWQsU0FBUyxDQUFmO0FBQ0EsU0FBTUMsU0FBUyxDQUFmO0FBQ0EsU0FBTWMsYUFBYW5CLFNBQVNpQixjQUFULEVBQXlCQyxXQUF6QixDQUFuQjs7QUFFQSxVQUFLLElBQUlOLElBQUksQ0FBYixFQUFnQkEsSUFBSUssaUJBQWlCLENBQXJDLEVBQXdDTCxHQUF4QyxFQUE2QztBQUN6QyxhQUFNWCxTQUFTTSxTQUFTYSxhQUFULENBQXVCLEtBQXZCLENBQWY7O0FBRUFuQixnQkFBT29CLEtBQVAsQ0FBYWIsS0FBYixHQUFxQixLQUFyQjtBQUNBUCxnQkFBT29CLEtBQVAsQ0FBYVgsTUFBYixHQUFzQixNQUF0QjtBQUNBVCxnQkFBT29CLEtBQVAsQ0FBYUMsVUFBYixHQUEwQixTQUExQjtBQUNBckIsZ0JBQU9vQixLQUFQLENBQWFFLE9BQWIsR0FBdUIsY0FBdkI7QUFDQXRCLGdCQUFPb0IsS0FBUCxDQUFhRyxRQUFiLEdBQXdCLFVBQXhCO0FBQ0F2QixnQkFBT29CLEtBQVAsQ0FBYUksSUFBYixHQUFvQnJCLFNBQVMsQ0FBQ1EsSUFBSSxDQUFMLElBQVVKLEtBQW5CLEdBQTJCLElBQS9DOztBQUVBUSxhQUFJVSxXQUFKLENBQWdCekIsTUFBaEI7QUFFSDs7QUFFRCxVQUFLLElBQUlXLEtBQUksQ0FBYixFQUFnQkEsS0FBSU0sY0FBYyxDQUFsQyxFQUFxQ04sSUFBckMsRUFBMEM7QUFDdEMsYUFBTVYsTUFBTUssU0FBU2EsYUFBVCxDQUF1QixLQUF2QixDQUFaOztBQUVBbEIsYUFBSW1CLEtBQUosQ0FBVWIsS0FBVixHQUFrQixNQUFsQjtBQUNBTixhQUFJbUIsS0FBSixDQUFVWCxNQUFWLEdBQW1CLEtBQW5CO0FBQ0FSLGFBQUltQixLQUFKLENBQVVDLFVBQVYsR0FBdUIsU0FBdkI7QUFDQXBCLGFBQUltQixLQUFKLENBQVVFLE9BQVYsR0FBb0IsY0FBcEI7QUFDQXJCLGFBQUltQixLQUFKLENBQVVHLFFBQVYsR0FBcUIsVUFBckI7QUFDQXRCLGFBQUltQixLQUFKLENBQVVNLEdBQVYsR0FBZ0J0QixTQUFTLENBQUNPLEtBQUksQ0FBTCxJQUFVRixNQUFuQixHQUE0QixJQUE1Qzs7QUFFQU0sYUFBSVUsV0FBSixDQUFnQnhCLEdBQWhCO0FBQ0g7O0FBbkN1QjtBQUFBO0FBQUE7O0FBQUE7QUFxQ3hCLDhCQUFjaUIsVUFBZCw4SEFBMEI7QUFBQSxpQkFBakJQLEdBQWlCOztBQUN0QixpQkFBTWdCLFlBQVlyQixTQUFTYSxhQUFULENBQXVCLEtBQXZCLENBQWxCO0FBQ0EsaUJBQU1TLFFBQVF0QixTQUFTYSxhQUFULENBQXVCLE1BQXZCLENBQWQ7QUFDQSxpQkFBTVUsV0FBV3ZCLFNBQVNhLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBakI7QUFDQSxpQkFBTVosU0FBUSxFQUFkO0FBQ0EsaUJBQU1nQixXQUFXWixJQUFFbUIsS0FBRixDQUFRLEdBQVIsQ0FBakI7O0FBRUFILHVCQUFVUCxLQUFWLENBQWdCVyxPQUFoQixHQUEwQixDQUExQjtBQUNBSix1QkFBVVAsS0FBVixDQUFnQkcsUUFBaEIsR0FBMkIsVUFBM0I7QUFDQUksdUJBQVVQLEtBQVYsQ0FBZ0JZLE1BQWhCLEdBQXlCLFNBQXpCO0FBQ0FMLHVCQUFVUCxLQUFWLENBQWdCSSxJQUFoQixHQUF3QkQsU0FBUyxDQUFULElBQWNoQixTQUFRLENBQXRCLEdBQTBCLElBQUksQ0FBL0IsR0FBb0MsSUFBM0Q7QUFDQW9CLHVCQUFVUCxLQUFWLENBQWdCTSxHQUFoQixHQUF1QkgsU0FBUyxDQUFULElBQWNoQixTQUFRLENBQXRCLEdBQTBCLElBQUksQ0FBL0IsR0FBb0MsSUFBMUQ7O0FBRUFxQixtQkFBTVIsS0FBTixDQUFZYixLQUFaLEdBQW9CQSxTQUFRLElBQTVCO0FBQ0FxQixtQkFBTVIsS0FBTixDQUFZWCxNQUFaLEdBQXFCRixTQUFRLElBQTdCO0FBQ0FxQixtQkFBTVIsS0FBTixDQUFZQyxVQUFaLEdBQXlCLFNBQXpCO0FBQ0FPLG1CQUFNUixLQUFOLENBQVlFLE9BQVosR0FBc0IsT0FBdEI7QUFDQU0sbUJBQU1SLEtBQU4sQ0FBWSxlQUFaLElBQStCYixTQUFRLElBQXZDO0FBQ0FxQixtQkFBTVIsS0FBTixDQUFZLGdCQUFaLElBQWdDLEtBQWhDOztBQUVBUyxzQkFBU0ksU0FBVCxHQUFxQixNQUFNVixTQUFTLENBQVQsQ0FBTixHQUFvQixHQUFwQixHQUEwQkEsU0FBUyxDQUFULENBQTFCLEdBQXdDLEdBQTdEO0FBQ0FNLHNCQUFTVCxLQUFULENBQWVHLFFBQWYsR0FBMEIsVUFBMUI7QUFDQU0sc0JBQVNULEtBQVQsQ0FBZUksSUFBZixHQUFzQixNQUF0QjtBQUNBSyxzQkFBU1QsS0FBVCxDQUFlTSxHQUFmLEdBQXFCLE1BQXJCOztBQUVBQyx1QkFBVU8sZ0JBQVYsQ0FBMkIsV0FBM0IsRUFBd0MsWUFBWTtBQUNoRCxzQkFBS2QsS0FBTCxDQUFXVyxPQUFYLEdBQXFCLENBQXJCO0FBQ0gsY0FGRDs7QUFJQUosdUJBQVVPLGdCQUFWLENBQTJCLFVBQTNCLEVBQXVDLFlBQVk7QUFDL0Msc0JBQUtkLEtBQUwsQ0FBV1csT0FBWCxHQUFxQixDQUFyQjtBQUNILGNBRkQ7O0FBSUFKLHVCQUFVRixXQUFWLENBQXNCRyxLQUF0QjtBQUNBRCx1QkFBVUYsV0FBVixDQUFzQkksUUFBdEI7O0FBRUFkLGlCQUFJVSxXQUFKLENBQWdCRSxTQUFoQjtBQUNIO0FBMUV1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQTRFeEJ0QixVQUFLb0IsV0FBTCxDQUFpQlYsR0FBakI7QUFDSCxFQTdFRDs7QUErRUEsS0FBTW9CLGFBQWEsU0FBYkEsVUFBYSxHQUFNO0FBQ3JCLFlBQU8sSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBYTtBQUM1QkMsZ0JBQU9DLE1BQVAsR0FBZ0IsWUFBTTtBQUNsQixpQkFBTWxDLE9BQU9DLFNBQVNELElBQXRCO0FBQ0EsaUJBQU1VLE1BQU1ULFNBQVNhLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBWjtBQUNBSixpQkFBSUssS0FBSixDQUFVYixLQUFWLEdBQWtCRixLQUFLRyxXQUFMLEdBQW1CLElBQXJDO0FBQ0FPLGlCQUFJSyxLQUFKLENBQVVYLE1BQVYsR0FBbUJKLEtBQUtLLFlBQUwsR0FBb0IsSUFBdkM7QUFDQUssaUJBQUlLLEtBQUosQ0FBVUcsUUFBVixHQUFxQixPQUFyQjtBQUNBUixpQkFBSUssS0FBSixDQUFVLFNBQVYsSUFBdUIsSUFBdkI7QUFDQUwsaUJBQUlLLEtBQUosQ0FBVU0sR0FBVixHQUFnQixDQUFoQjtBQUNBWCxpQkFBSUssS0FBSixDQUFVSSxJQUFWLEdBQWlCLENBQWpCOztBQUVBYSxxQkFBUXRCLEdBQVI7QUFDQTtBQUNILFVBWkQ7QUFhSCxNQWRNLENBQVA7QUFlSCxFQWhCRDs7bUJBa0JlLFlBQU07QUFDakJvQixrQkFDS0ssSUFETCxDQUNVLFVBQUN6QixHQUFELEVBQVM7QUFDWDBCLGlCQUFRQyxHQUFSLENBQVkzQixHQUFaO0FBQ0FELG9CQUFXQyxHQUFYO0FBQ0gsTUFKTDtBQUtILEU7Ozs7Ozs7Ozs7O0FDN0hNLEtBQU00QiwwQkFBUztBQUNsQjNCLHFCQUFnQixFQURFO0FBRWxCQyxrQkFBYTtBQUZLLEVBQWYsQyIsImZpbGUiOiJjYW52YXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBkZDY1ZGUzOTAyOWJkNGVhNGYwNSIsIi8qKlxuICogQGRlc2NyaXB0aW9uIGNhbnZhcy1kZWJ1Z2dlciDlhaXlj6Pmlofku7ZcbiAqL1xuXG5pbXBvcnQgaW5pdCBmcm9tICcuL2NhbnZhcy9pbmRleCc7XG5cbm1vZHVsZS5leHBvcnRzID0gaW5pdCgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NhbnZhcy5qcyIsImltcG9ydCByZW5kZXIgZnJvbSAnLi9yZW5kZXInO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gICAgcmVuZGVyKCk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NhbnZhcy9pbmRleC5qcyIsImltcG9ydCB7IGNvbmZpZyB9IGZyb20gJy4vY29uZmlnJztcblxuY29uc3QgZ2V0Rm9jdXMgPSAoY29sdW1uLCByb3cpID0+IHtcbiAgICBjb25zdCBhcnIgPSBbXTtcbiAgICBjb25zdCBiZWdpblggPSAwO1xuICAgIGNvbnN0IGJlZ2luWSA9IDA7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XG4gICAgY29uc3Qgd2lkdGggPSBib2R5Lm9mZnNldFdpZHRoIC8gY29sdW1uO1xuICAgIGNvbnN0IGhlaWdodCA9IGJvZHkub2Zmc2V0SGVpZ2h0IC8gcm93O1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2x1bW4gLSAxOyBpKyspIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCByb3cgLSAxOyBqKyspIHtcbiAgICAgICAgICAgIGFyci5wdXNoKChiZWdpblggKyAoaSArIDEpICogd2lkdGgpICsgJywnICtcbiAgICAgICAgICAgICAgICAoYmVnaW5ZICsgKGogKyAxKSAqIGhlaWdodClcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHJldHVybiBhcnI7XG59O1xuXG5jb25zdCBjcmVhdGVMaW5lID0gKGRpdikgPT4ge1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xuICAgIGNvbnN0IGJsb2NrQ29sdW1uTnVtID0gY29uZmlnLmJsb2NrQ29sdW1uTnVtO1xuICAgIGNvbnN0IGJsb2NrUm93TnVtID0gY29uZmlnLmJsb2NrUm93TnVtO1xuICAgIGNvbnN0IHdpZHRoID0gYm9keS5vZmZzZXRXaWR0aCAvIGJsb2NrQ29sdW1uTnVtO1xuICAgIGNvbnN0IGhlaWdodCA9IGJvZHkub2Zmc2V0SGVpZ2h0IC8gYmxvY2tSb3dOdW07XG4gICAgY29uc3QgYmVnaW5YID0gMDtcbiAgICBjb25zdCBiZWdpblkgPSAwO1xuICAgIGNvbnN0IGZvY3VzUG9pbnQgPSBnZXRGb2N1cyhibG9ja0NvbHVtbk51bSwgYmxvY2tSb3dOdW0pO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBibG9ja0NvbHVtbk51bSAtIDE7IGkrKykge1xuICAgICAgICBjb25zdCBjb2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICBjb2x1bW4uc3R5bGUud2lkdGggPSAnMXB4JztcbiAgICAgICAgY29sdW1uLnN0eWxlLmhlaWdodCA9ICcxMDAlJztcbiAgICAgICAgY29sdW1uLnN0eWxlLmJhY2tncm91bmQgPSAnI0ZDNjI0Nic7XG4gICAgICAgIGNvbHVtbi5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jayc7XG4gICAgICAgIGNvbHVtbi5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICAgIGNvbHVtbi5zdHlsZS5sZWZ0ID0gYmVnaW5YICsgKGkgKyAxKSAqIHdpZHRoICsgJ3B4JztcblxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoY29sdW1uKTtcblxuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYmxvY2tSb3dOdW0gLSAxOyBpKyspIHtcbiAgICAgICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgcm93LnN0eWxlLndpZHRoID0gJzEwMCUnO1xuICAgICAgICByb3cuc3R5bGUuaGVpZ2h0ID0gJzFweCc7XG4gICAgICAgIHJvdy5zdHlsZS5iYWNrZ3JvdW5kID0gJyNGQzYyNDYnO1xuICAgICAgICByb3cuc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snO1xuICAgICAgICByb3cuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICByb3cuc3R5bGUudG9wID0gYmVnaW5ZICsgKGkgKyAxKSAqIGhlaWdodCArICdweCc7XG5cbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKHJvdyk7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSBvZiBmb2N1c1BvaW50KSB7XG4gICAgICAgIGNvbnN0IHBvaW50V3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBwb2ludCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgY29uc3QgcG9pbnRUeHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIGNvbnN0IHdpZHRoID0gMTU7XG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0gaS5zcGxpdCgnLCcpO1xuXG4gICAgICAgIHBvaW50V3JhcC5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgICAgICAgcG9pbnRXcmFwLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgICAgcG9pbnRXcmFwLnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJztcbiAgICAgICAgcG9pbnRXcmFwLnN0eWxlLmxlZnQgPSAocG9zaXRpb25bMF0gLSB3aWR0aCAvIDIgKyAxIC8gMikgKyAncHgnO1xuICAgICAgICBwb2ludFdyYXAuc3R5bGUudG9wID0gKHBvc2l0aW9uWzFdIC0gd2lkdGggLyAyIC0gMSAvIDIpICsgJ3B4JztcblxuICAgICAgICBwb2ludC5zdHlsZS53aWR0aCA9IHdpZHRoICsgJ3B4JztcbiAgICAgICAgcG9pbnQuc3R5bGUuaGVpZ2h0ID0gd2lkdGggKyAncHgnO1xuICAgICAgICBwb2ludC5zdHlsZS5iYWNrZ3JvdW5kID0gJyNGQzYyNDYnO1xuICAgICAgICBwb2ludC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgcG9pbnQuc3R5bGVbJ2JvcmRlci1yYWRpdXMnXSA9IHdpZHRoICsgJ3B4JztcbiAgICAgICAgcG9pbnQuc3R5bGVbJ3ZlcnRpY2FsLWFsaWduJ10gPSAndG9wJztcblxuICAgICAgICBwb2ludFR4dC5pbm5lclRleHQgPSAnKCcgKyBwb3NpdGlvblswXSArICcsJyArIHBvc2l0aW9uWzFdICsgJyknXG4gICAgICAgIHBvaW50VHh0LnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcbiAgICAgICAgcG9pbnRUeHQuc3R5bGUubGVmdCA9ICctNTAlJztcbiAgICAgICAgcG9pbnRUeHQuc3R5bGUudG9wID0gJzEwcHgnO1xuXG4gICAgICAgIHBvaW50V3JhcC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLnN0eWxlLm9wYWNpdHkgPSAxO1xuICAgICAgICB9KTtcblxuICAgICAgICBwb2ludFdyYXAuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLnN0eWxlLm9wYWNpdHkgPSAwO1xuICAgICAgICB9KTtcblxuICAgICAgICBwb2ludFdyYXAuYXBwZW5kQ2hpbGQocG9pbnQpO1xuICAgICAgICBwb2ludFdyYXAuYXBwZW5kQ2hpbGQocG9pbnRUeHQpO1xuXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChwb2ludFdyYXApO1xuICAgIH1cblxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoZGl2KTtcbn07XG5cbmNvbnN0IGNyZWF0ZVdyYXAgPSAoKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgIHdpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcbiAgICAgICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZGl2LnN0eWxlLndpZHRoID0gYm9keS5vZmZzZXRXaWR0aCArICdweCc7XG4gICAgICAgICAgICBkaXYuc3R5bGUuaGVpZ2h0ID0gYm9keS5vZmZzZXRIZWlnaHQgKyAncHgnO1xuICAgICAgICAgICAgZGl2LnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJztcbiAgICAgICAgICAgIGRpdi5zdHlsZVsnei1pbmRleCddID0gMTAwMDtcbiAgICAgICAgICAgIGRpdi5zdHlsZS50b3AgPSAwO1xuICAgICAgICAgICAgZGl2LnN0eWxlLmxlZnQgPSAwO1xuXG4gICAgICAgICAgICByZXNvbHZlKGRpdik7XG4gICAgICAgICAgICAvL2JvZHkuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICAgICAgfVxuICAgIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICAgIGNyZWF0ZVdyYXAoKVxuICAgICAgICAudGhlbigoZGl2KSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkaXYpO1xuICAgICAgICAgICAgY3JlYXRlTGluZShkaXYpO1xuICAgICAgICB9KTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2FudmFzL3JlbmRlci5qcyIsImV4cG9ydCBjb25zdCBjb25maWcgPSB7XG4gICAgYmxvY2tDb2x1bW5OdW06IDEwLFxuICAgIGJsb2NrUm93TnVtOiAyMCxcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2FudmFzL2NvbmZpZy5qcyJdLCJzb3VyY2VSb290IjoiIn0=
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/sass/app.sass":
/*!**********************************!*\
  !*** ./src/assets/sass/app.sass ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/app.css";

/***/ }),

/***/ "./src/components/bank-statement.component.js":
/*!****************************************************!*\
  !*** ./src/components/bank-statement.component.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BankStatementComponent = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _bankStatement = __webpack_require__(/*! ../services/bank-statement.service */ "./src/services/bank-statement.service.js");

var _formatters = __webpack_require__(/*! ../utils/formatters */ "./src/utils/formatters.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BankStatementComponent = exports.BankStatementComponent = function () {
  function BankStatementComponent(id) {
    _classCallCheck(this, BankStatementComponent);

    this.list = document.getElementById(id);
    this.service = new _bankStatement.BankStatementService();
    if (!this.list) {
      throw 'Failed to instantiate BankStatementComponent. Could not find element with id ' + id + '.';
    }
    this.init();
  }

  _createClass(BankStatementComponent, [{
    key: 'init',
    value: function init() {
      this.refreshList();
    }
  }, {
    key: 'refreshList',
    value: function refreshList() {
      var _this = this;

      this.list.innerHTML = '';
      this.service.get().then(function (transactions) {
        return _this.updateList(transactions);
      });
    }
  }, {
    key: 'bindTemplate',
    value: function bindTemplate(transaction, template) {
      var _this2 = this;

      var item = document.importNode(template.content, true);
      item.querySelector('li').id = 'item-' + transaction.id;
      item.querySelector('.title').innerHTML = transaction.title;
      var valueElement = item.querySelector('.value');
      if (transaction.value > 0) {
        valueElement.classList.add('positive');
      }
      valueElement.innerHTML = (0, _formatters.formatBRLWithSignal)(transaction.value);
      item.querySelector('.category-name').innerHTML = transaction.category;
      item.querySelector('button').addEventListener('click', function () {
        return _this2.deleteTransaction(transaction);
      });
      return item;
    }
  }, {
    key: 'deleteTransaction',
    value: function deleteTransaction(_ref) {
      var _this3 = this;

      var id = _ref.id;

      this.service.delete(id).then(function () {
        var removedTransactionElement = _this3.list.querySelector('#item-' + id);
        _this3.list.removeChild(removedTransactionElement);
      });
    }
  }, {
    key: 'updateList',
    value: function updateList() {
      var _this4 = this;

      var transactions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      var template = document.getElementById('bank-statement-item-template');
      transactions.forEach(function (transaction) {
        var item = _this4.bindTemplate(transaction, template);
        _this4.list.appendChild(item);
      });
    }
  }]);

  return BankStatementComponent;
}();

/***/ }),

/***/ "./src/components/carousel.component.js":
/*!**********************************************!*\
  !*** ./src/components/carousel.component.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CarouselComponent = exports.CarouselComponent = function () {
  function CarouselComponent(id) {
    _classCallCheck(this, CarouselComponent);

    this.wrapper = document.getElementById(id);
    if (!this.wrapper) {
      throw 'Failed to instantiate CarouselComponent. Could not find element with id ' + id + '.';
    }
    this.init();
  }

  _createClass(CarouselComponent, [{
    key: 'init',
    value: function init() {
      this.addControls();
    }
  }, {
    key: 'addControls',
    value: function addControls() {
      var _this = this;

      var controlsWrapper = this.wrapper.querySelector('.controls');
      this.wrapper.querySelectorAll('.slide').forEach(function (slide) {
        var control = document.createElement('a');
        control.href = '#' + slide.id;
        control.classList.add('control');
        if (slide.classList.contains('active')) {
          control.classList.add('active');
        }
        control.addEventListener('click', function () {
          controlsWrapper.querySelectorAll('a').forEach(function (c) {
            return c.classList.remove('active');
          });
          control.classList.add('active');
          _this.moveTo(slide);
        });
        controlsWrapper.appendChild(control);
      });
    }
  }, {
    key: 'moveTo',
    value: function moveTo(slide) {
      var active = this.getActive(slide);
      var next = active && active.nextElementSibling;
      var previous = active && active.previousElementSibling;
      var predecessor = previous && previous.previousElementSibling;
      var successor = next && next.nextElementSibling;
      this.hideAllPredecessors(predecessor);
      this.removeStateClasses(predecessor).add('predecessor');
      this.removeStateClasses(previous).add('previous');
      this.removeStateClasses(active).add('active');
      this.removeStateClasses(next).add('next');
      this.removeStateClasses(successor).add('successor');
    }
  }, {
    key: 'getActive',
    value: function getActive(target) {
      switch (target) {
        case 'next':
          return this.wrapper.querySelector('.active').nextElementSibling;
        case 'prev':
          return this.wrapper.querySelector('.active').previousElementSibling;
        default:
          return target;
      }
    }
  }, {
    key: 'hideAllPredecessors',
    value: function hideAllPredecessors(predecessor) {
      if (!predecessor) return;
      var node = predecessor.previousElementSibling;
      while (node && node.nodeType === Node.ELEMENT_NODE) {
        node.classList.add('hideLeft');
        node = node.previousElementSibling;
      }
    }
  }, {
    key: 'removeStateClasses',
    value: function removeStateClasses(element) {
      if (!element) {
        return document.createElement('div').classList;
      }
      ['predecessor', 'previous', 'active', 'next', 'successor'].forEach(function (clazz) {
        return element.classList.remove(clazz);
      });
      return element.classList;
    }
  }]);

  return CarouselComponent;
}();

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _carousel = __webpack_require__(/*! ./components/carousel.component */ "./src/components/carousel.component.js");

var _bankStatement = __webpack_require__(/*! ./components/bank-statement.component */ "./src/components/bank-statement.component.js");

window.onload = function () {
  new _carousel.CarouselComponent('balance-carousel');
  new _bankStatement.BankStatementComponent('bank-statement');
};

/***/ }),

/***/ "./src/services/bank-statement.service.js":
/*!************************************************!*\
  !*** ./src/services/bank-statement.service.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var transactionsMock = [{
  id: 1,
  category: 'categoria',
  title: 'Sua compra aparece aqui',
  value: 1000000000
}, {
  id: 2,
  category: 'categoria',
  title: 'Receba pagamentos',
  value: 2000000000
}, {
  id: 3,
  category: 'categoria',
  title: 'Tarifa',
  value: -0.01
}, {
  id: 4,
  category: 'categoria',
  title: 'Tarifa',
  value: -0.01
}, {
  id: 5,
  category: 'categoria',
  title: 'Tarifa',
  value: -0.01
}, {
  id: 6,
  category: 'categoria',
  title: 'Tarifa',
  value: -0.01
}];

var BankStatementService = exports.BankStatementService = function () {
  function BankStatementService() {
    _classCallCheck(this, BankStatementService);

    this.transactions = transactionsMock;
  }

  _createClass(BankStatementService, [{
    key: 'get',
    value: function get() {
      return Promise.resolve(this.transactions);
    }
  }, {
    key: 'delete',
    value: function _delete(id) {
      var index = this.transactions.findIndex(function (item) {
        return item.id === id;
      });
      var deleted = this.transactions.splice(index, 1);
      return Promise.resolve(deleted);
    }
  }]);

  return BankStatementService;
}();

/***/ }),

/***/ "./src/utils/formatters.js":
/*!*********************************!*\
  !*** ./src/utils/formatters.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var brazilianRealFormatter = exports.brazilianRealFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL'
});

var moneyFormatter = exports.moneyFormatter = function moneyFormatter(formatter) {
  return function (value) {
    return formatter.format(value);
  };
};

var formatBRL = exports.formatBRL = moneyFormatter(brazilianRealFormatter);

var formatBRLWithSignal = exports.formatBRLWithSignal = function formatBRLWithSignal(value) {
  var signal = value > 0 ? '+' : '-';
  var simbol = value > 0 ? 'R$ ' : '-R$ ';
  var formatted = formatBRL(value).replace(simbol, 'R$ ' + signal);
  return formatted;
};

/***/ }),

/***/ 0:
/*!*******************************************************!*\
  !*** multi ./src/index.js ./src/assets/sass/app.sass ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/index.js */"./src/index.js");
module.exports = __webpack_require__(/*! ./src/assets/sass/app.sass */"./src/assets/sass/app.sass");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zYXNzL2FwcC5zYXNzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Jhbmstc3RhdGVtZW50LmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jYXJvdXNlbC5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9iYW5rLXN0YXRlbWVudC5zZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9mb3JtYXR0ZXJzLmpzIl0sIm5hbWVzIjpbIkJhbmtTdGF0ZW1lbnRDb21wb25lbnQiLCJpZCIsImxpc3QiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic2VydmljZSIsIkJhbmtTdGF0ZW1lbnRTZXJ2aWNlIiwiaW5pdCIsInJlZnJlc2hMaXN0IiwiaW5uZXJIVE1MIiwiZ2V0IiwidGhlbiIsInVwZGF0ZUxpc3QiLCJ0cmFuc2FjdGlvbnMiLCJ0cmFuc2FjdGlvbiIsInRlbXBsYXRlIiwiaXRlbSIsImltcG9ydE5vZGUiLCJjb250ZW50IiwicXVlcnlTZWxlY3RvciIsInRpdGxlIiwidmFsdWVFbGVtZW50IiwidmFsdWUiLCJjbGFzc0xpc3QiLCJhZGQiLCJjYXRlZ29yeSIsImFkZEV2ZW50TGlzdGVuZXIiLCJkZWxldGVUcmFuc2FjdGlvbiIsImRlbGV0ZSIsInJlbW92ZWRUcmFuc2FjdGlvbkVsZW1lbnQiLCJyZW1vdmVDaGlsZCIsImZvckVhY2giLCJiaW5kVGVtcGxhdGUiLCJhcHBlbmRDaGlsZCIsIkNhcm91c2VsQ29tcG9uZW50Iiwid3JhcHBlciIsImFkZENvbnRyb2xzIiwiY29udHJvbHNXcmFwcGVyIiwicXVlcnlTZWxlY3RvckFsbCIsImNvbnRyb2wiLCJjcmVhdGVFbGVtZW50IiwiaHJlZiIsInNsaWRlIiwiY29udGFpbnMiLCJjIiwicmVtb3ZlIiwibW92ZVRvIiwiYWN0aXZlIiwiZ2V0QWN0aXZlIiwibmV4dCIsIm5leHRFbGVtZW50U2libGluZyIsInByZXZpb3VzIiwicHJldmlvdXNFbGVtZW50U2libGluZyIsInByZWRlY2Vzc29yIiwic3VjY2Vzc29yIiwiaGlkZUFsbFByZWRlY2Vzc29ycyIsInJlbW92ZVN0YXRlQ2xhc3NlcyIsInRhcmdldCIsIm5vZGUiLCJub2RlVHlwZSIsIk5vZGUiLCJFTEVNRU5UX05PREUiLCJlbGVtZW50IiwiY2xhenoiLCJ3aW5kb3ciLCJvbmxvYWQiLCJ0cmFuc2FjdGlvbnNNb2NrIiwiUHJvbWlzZSIsInJlc29sdmUiLCJpbmRleCIsImZpbmRJbmRleCIsImRlbGV0ZWQiLCJzcGxpY2UiLCJicmF6aWxpYW5SZWFsRm9ybWF0dGVyIiwiSW50bCIsIk51bWJlckZvcm1hdCIsInN0eWxlIiwiY3VycmVuY3kiLCJtb25leUZvcm1hdHRlciIsImZvcm1hdHRlciIsImZvcm1hdCIsImZvcm1hdEJSTCIsImZvcm1hdEJSTFdpdGhTaWduYWwiLCJzaWduYWwiLCJzaW1ib2wiLCJmb3JtYXR0ZWQiLCJyZXBsYWNlIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFD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QUFvQnFELGdCQUFwQjtBQUNEOzs7OzBCQUNLO0FBQ0osYUFBT0MsUUFBUUMsT0FBUixDQUFnQixLQUFLdkQsWUFBckIsQ0FBUDtBQUNEOzs7NEJBRU1aLEUsRUFBSTtBQUNULFVBQU1vRSxRQUFRLEtBQUt4RCxZQUFMLENBQWtCeUQsU0FBbEIsQ0FBNEI7QUFBQSxlQUFRdEQsS0FBS2YsRUFBTCxLQUFZQSxFQUFwQjtBQUFBLE9BQTVCLENBQWQ7QUFDQSxVQUFNc0UsVUFBVSxLQUFLMUQsWUFBTCxDQUFrQjJELE1BQWxCLENBQXlCSCxLQUF6QixFQUFnQyxDQUFoQyxDQUFoQjtBQUNBLGFBQU9GLFFBQVFDLE9BQVIsQ0FBZ0JHLE9BQWhCLENBQVA7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkRJLElBQU1FLDBEQUF5QixJQUFJQyxLQUFLQyxZQUFULENBQXNCLE9BQXRCLEVBQStCO0FBQ25FQyxTQUFPLFVBRDREO0FBRW5FQyxZQUFVO0FBRnlELENBQS9CLENBQS9COztBQUtBLElBQU1DLDBDQUFpQixTQUFqQkEsY0FBaUI7QUFBQSxTQUFhO0FBQUEsV0FBU0MsVUFBVUMsTUFBVixDQUFpQjFELEtBQWpCLENBQVQ7QUFBQSxHQUFiO0FBQUEsQ0FBdkI7O0FBRUEsSUFBTTJELGdDQUFZSCxlQUFlTCxzQkFBZixDQUFsQjs7QUFFQSxJQUFNUyxvREFBc0IsU0FBdEJBLG1CQUFzQixRQUFTO0FBQzFDLE1BQU1DLFNBQVM3RCxRQUFRLENBQVIsR0FBWSxHQUFaLEdBQWtCLEdBQWpDO0FBQ0EsTUFBTThELFNBQVM5RCxRQUFRLENBQVIsR0FBWSxLQUFaLEdBQW9CLE1BQW5DO0FBQ0EsTUFBTStELFlBQVlKLFVBQVUzRCxLQUFWLEVBQWlCZ0UsT0FBakIsQ0FBeUJGLE1BQXpCLFVBQXVDRCxNQUF2QyxDQUFsQjtBQUNBLFNBQU9FLFNBQVA7QUFDRCxDQUxNLEMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiL2FwcC5jc3NcIjsiLCJpbXBvcnQgeyBCYW5rU3RhdGVtZW50U2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2Jhbmstc3RhdGVtZW50LnNlcnZpY2UnO1xuaW1wb3J0IHsgZm9ybWF0QlJMV2l0aFNpZ25hbCB9IGZyb20gJy4uL3V0aWxzL2Zvcm1hdHRlcnMnO1xuXG5leHBvcnQgY2xhc3MgQmFua1N0YXRlbWVudENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKGlkKSB7XG4gICAgdGhpcy5saXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICAgIHRoaXMuc2VydmljZSA9IG5ldyBCYW5rU3RhdGVtZW50U2VydmljZSgpO1xuICAgIGlmICghdGhpcy5saXN0KSB7XG4gICAgICB0aHJvdyBgRmFpbGVkIHRvIGluc3RhbnRpYXRlIEJhbmtTdGF0ZW1lbnRDb21wb25lbnQuIENvdWxkIG5vdCBmaW5kIGVsZW1lbnQgd2l0aCBpZCAke2lkfS5gO1xuICAgIH1cbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5yZWZyZXNoTGlzdCgpO1xuICB9XG5cbiAgcmVmcmVzaExpc3QoKSB7XG4gICAgdGhpcy5saXN0LmlubmVySFRNTCA9ICcnO1xuICAgIHRoaXMuc2VydmljZS5nZXQoKS50aGVuKHRyYW5zYWN0aW9ucyA9PiB0aGlzLnVwZGF0ZUxpc3QodHJhbnNhY3Rpb25zKSk7XG4gIH1cblxuICBiaW5kVGVtcGxhdGUodHJhbnNhY3Rpb24sIHRlbXBsYXRlKSB7XG4gICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmltcG9ydE5vZGUodGVtcGxhdGUuY29udGVudCwgdHJ1ZSk7XG4gICAgaXRlbS5xdWVyeVNlbGVjdG9yKCdsaScpLmlkID0gYGl0ZW0tJHt0cmFuc2FjdGlvbi5pZH1gO1xuICAgIGl0ZW0ucXVlcnlTZWxlY3RvcignLnRpdGxlJykuaW5uZXJIVE1MID0gdHJhbnNhY3Rpb24udGl0bGU7XG4gICAgY29uc3QgdmFsdWVFbGVtZW50ID0gaXRlbS5xdWVyeVNlbGVjdG9yKCcudmFsdWUnKTtcbiAgICBpZiAodHJhbnNhY3Rpb24udmFsdWUgPiAwKSB7XG4gICAgICB2YWx1ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgncG9zaXRpdmUnKTtcbiAgICB9XG4gICAgdmFsdWVFbGVtZW50LmlubmVySFRNTCA9IGZvcm1hdEJSTFdpdGhTaWduYWwodHJhbnNhY3Rpb24udmFsdWUpO1xuICAgIGl0ZW0ucXVlcnlTZWxlY3RvcignLmNhdGVnb3J5LW5hbWUnKS5pbm5lckhUTUwgPSB0cmFuc2FjdGlvbi5jYXRlZ29yeTtcbiAgICBpdGVtXG4gICAgICAucXVlcnlTZWxlY3RvcignYnV0dG9uJylcbiAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMuZGVsZXRlVHJhbnNhY3Rpb24odHJhbnNhY3Rpb24pKTtcbiAgICByZXR1cm4gaXRlbTtcbiAgfVxuXG4gIGRlbGV0ZVRyYW5zYWN0aW9uKHsgaWQgfSkge1xuICAgIHRoaXMuc2VydmljZS5kZWxldGUoaWQpLnRoZW4oKCkgPT4ge1xuICAgICAgY29uc3QgcmVtb3ZlZFRyYW5zYWN0aW9uRWxlbWVudCA9IHRoaXMubGlzdC5xdWVyeVNlbGVjdG9yKGAjaXRlbS0ke2lkfWApO1xuICAgICAgdGhpcy5saXN0LnJlbW92ZUNoaWxkKHJlbW92ZWRUcmFuc2FjdGlvbkVsZW1lbnQpO1xuICAgIH0pO1xuICB9XG5cbiAgdXBkYXRlTGlzdCh0cmFuc2FjdGlvbnMgPSBbXSkge1xuICAgIGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Jhbmstc3RhdGVtZW50LWl0ZW0tdGVtcGxhdGUnKTtcbiAgICB0cmFuc2FjdGlvbnMuZm9yRWFjaCh0cmFuc2FjdGlvbiA9PiB7XG4gICAgICBjb25zdCBpdGVtID0gdGhpcy5iaW5kVGVtcGxhdGUodHJhbnNhY3Rpb24sIHRlbXBsYXRlKTtcbiAgICAgIHRoaXMubGlzdC5hcHBlbmRDaGlsZChpdGVtKTtcbiAgICB9KTtcbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIENhcm91c2VsQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoaWQpIHtcbiAgICB0aGlzLndyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgaWYgKCF0aGlzLndyYXBwZXIpIHtcbiAgICAgIHRocm93IGBGYWlsZWQgdG8gaW5zdGFudGlhdGUgQ2Fyb3VzZWxDb21wb25lbnQuIENvdWxkIG5vdCBmaW5kIGVsZW1lbnQgd2l0aCBpZCAke2lkfS5gO1xuICAgIH1cbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5hZGRDb250cm9scygpO1xuICB9XG5cbiAgYWRkQ29udHJvbHMoKSB7XG4gICAgY29uc3QgY29udHJvbHNXcmFwcGVyID0gdGhpcy53cmFwcGVyLnF1ZXJ5U2VsZWN0b3IoJy5jb250cm9scycpO1xuICAgIHRoaXMud3JhcHBlci5xdWVyeVNlbGVjdG9yQWxsKCcuc2xpZGUnKS5mb3JFYWNoKHNsaWRlID0+IHtcbiAgICAgIGNvbnN0IGNvbnRyb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICBjb250cm9sLmhyZWYgPSBgIyR7c2xpZGUuaWR9YDtcbiAgICAgIGNvbnRyb2wuY2xhc3NMaXN0LmFkZCgnY29udHJvbCcpO1xuICAgICAgaWYgKHNsaWRlLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcbiAgICAgICAgY29udHJvbC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgIH1cbiAgICAgIGNvbnRyb2wuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnRyb2xzV3JhcHBlci5xdWVyeVNlbGVjdG9yQWxsKCdhJykuZm9yRWFjaChjID0+IGMuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpO1xuICAgICAgICBjb250cm9sLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICB0aGlzLm1vdmVUbyhzbGlkZSk7XG4gICAgICB9KTtcbiAgICAgIGNvbnRyb2xzV3JhcHBlci5hcHBlbmRDaGlsZChjb250cm9sKTtcbiAgICB9KTtcbiAgfVxuXG4gIG1vdmVUbyhzbGlkZSkge1xuICAgIGNvbnN0IGFjdGl2ZSA9IHRoaXMuZ2V0QWN0aXZlKHNsaWRlKTtcbiAgICBjb25zdCBuZXh0ID0gYWN0aXZlICYmIGFjdGl2ZS5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgY29uc3QgcHJldmlvdXMgPSBhY3RpdmUgJiYgYWN0aXZlLnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG4gICAgY29uc3QgcHJlZGVjZXNzb3IgPSBwcmV2aW91cyAmJiBwcmV2aW91cy5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xuICAgIGNvbnN0IHN1Y2Nlc3NvciA9IG5leHQgJiYgbmV4dC5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgdGhpcy5oaWRlQWxsUHJlZGVjZXNzb3JzKHByZWRlY2Vzc29yKTtcbiAgICB0aGlzLnJlbW92ZVN0YXRlQ2xhc3NlcyhwcmVkZWNlc3NvcikuYWRkKCdwcmVkZWNlc3NvcicpO1xuICAgIHRoaXMucmVtb3ZlU3RhdGVDbGFzc2VzKHByZXZpb3VzKS5hZGQoJ3ByZXZpb3VzJyk7XG4gICAgdGhpcy5yZW1vdmVTdGF0ZUNsYXNzZXMoYWN0aXZlKS5hZGQoJ2FjdGl2ZScpO1xuICAgIHRoaXMucmVtb3ZlU3RhdGVDbGFzc2VzKG5leHQpLmFkZCgnbmV4dCcpO1xuICAgIHRoaXMucmVtb3ZlU3RhdGVDbGFzc2VzKHN1Y2Nlc3NvcikuYWRkKCdzdWNjZXNzb3InKTtcbiAgfVxuXG4gIGdldEFjdGl2ZSh0YXJnZXQpIHtcbiAgICBzd2l0Y2ggKHRhcmdldCkge1xuICAgICAgY2FzZSAnbmV4dCc6XG4gICAgICAgIHJldHVybiB0aGlzLndyYXBwZXIucXVlcnlTZWxlY3RvcignLmFjdGl2ZScpLm5leHRFbGVtZW50U2libGluZztcbiAgICAgIGNhc2UgJ3ByZXYnOlxuICAgICAgICByZXR1cm4gdGhpcy53cmFwcGVyLnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmUnKS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9XG4gIH1cblxuICBoaWRlQWxsUHJlZGVjZXNzb3JzKHByZWRlY2Vzc29yKSB7XG4gICAgaWYgKCFwcmVkZWNlc3NvcikgcmV0dXJuO1xuICAgIGxldCBub2RlID0gcHJlZGVjZXNzb3IucHJldmlvdXNFbGVtZW50U2libGluZztcbiAgICB3aGlsZSAobm9kZSAmJiBub2RlLm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgbm9kZS5jbGFzc0xpc3QuYWRkKCdoaWRlTGVmdCcpO1xuICAgICAgbm9kZSA9IG5vZGUucHJldmlvdXNFbGVtZW50U2libGluZztcbiAgICB9XG4gIH1cblxuICByZW1vdmVTdGF0ZUNsYXNzZXMoZWxlbWVudCkge1xuICAgIGlmICghZWxlbWVudCkge1xuICAgICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLmNsYXNzTGlzdDtcbiAgICB9XG4gICAgWydwcmVkZWNlc3NvcicsICdwcmV2aW91cycsICdhY3RpdmUnLCAnbmV4dCcsICdzdWNjZXNzb3InXS5mb3JFYWNoKGNsYXp6ID0+XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY2xhenopLFxuICAgICk7XG4gICAgcmV0dXJuIGVsZW1lbnQuY2xhc3NMaXN0O1xuICB9XG59XG4iLCJpbXBvcnQgeyBDYXJvdXNlbENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jYXJvdXNlbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQmFua1N0YXRlbWVudENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9iYW5rLXN0YXRlbWVudC5jb21wb25lbnQnO1xuXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xuICBuZXcgQ2Fyb3VzZWxDb21wb25lbnQoJ2JhbGFuY2UtY2Fyb3VzZWwnKTtcbiAgbmV3IEJhbmtTdGF0ZW1lbnRDb21wb25lbnQoJ2Jhbmstc3RhdGVtZW50Jyk7XG59O1xuIiwiY29uc3QgdHJhbnNhY3Rpb25zTW9jayA9IFtcbiAge1xuICAgIGlkOiAxLFxuICAgIGNhdGVnb3J5OiAnY2F0ZWdvcmlhJyxcbiAgICB0aXRsZTogJ1N1YSBjb21wcmEgYXBhcmVjZSBhcXVpJyxcbiAgICB2YWx1ZTogMTAwMDAwMDAwMCxcbiAgfSxcbiAge1xuICAgIGlkOiAyLFxuICAgIGNhdGVnb3J5OiAnY2F0ZWdvcmlhJyxcbiAgICB0aXRsZTogJ1JlY2ViYSBwYWdhbWVudG9zJyxcbiAgICB2YWx1ZTogMjAwMDAwMDAwMCxcbiAgfSxcbiAge1xuICAgIGlkOiAzLFxuICAgIGNhdGVnb3J5OiAnY2F0ZWdvcmlhJyxcbiAgICB0aXRsZTogJ1RhcmlmYScsXG4gICAgdmFsdWU6IC0wLjAxLFxuICB9LFxuICB7XG4gICAgaWQ6IDQsXG4gICAgY2F0ZWdvcnk6ICdjYXRlZ29yaWEnLFxuICAgIHRpdGxlOiAnVGFyaWZhJyxcbiAgICB2YWx1ZTogLTAuMDEsXG4gIH0sXG4gIHtcbiAgICBpZDogNSxcbiAgICBjYXRlZ29yeTogJ2NhdGVnb3JpYScsXG4gICAgdGl0bGU6ICdUYXJpZmEnLFxuICAgIHZhbHVlOiAtMC4wMSxcbiAgfSxcbiAge1xuICAgIGlkOiA2LFxuICAgIGNhdGVnb3J5OiAnY2F0ZWdvcmlhJyxcbiAgICB0aXRsZTogJ1RhcmlmYScsXG4gICAgdmFsdWU6IC0wLjAxLFxuICB9LFxuXTtcblxuZXhwb3J0IGNsYXNzIEJhbmtTdGF0ZW1lbnRTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy50cmFuc2FjdGlvbnMgPSB0cmFuc2FjdGlvbnNNb2NrO1xuICB9XG4gIGdldCgpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMudHJhbnNhY3Rpb25zKTtcbiAgfVxuXG4gIGRlbGV0ZShpZCkge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy50cmFuc2FjdGlvbnMuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS5pZCA9PT0gaWQpO1xuICAgIGNvbnN0IGRlbGV0ZWQgPSB0aGlzLnRyYW5zYWN0aW9ucy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZGVsZXRlZCk7XG4gIH1cbn1cbiIsImV4cG9ydCBjb25zdCBicmF6aWxpYW5SZWFsRm9ybWF0dGVyID0gbmV3IEludGwuTnVtYmVyRm9ybWF0KCdwdC1CUicsIHtcbiAgc3R5bGU6ICdjdXJyZW5jeScsXG4gIGN1cnJlbmN5OiAnQlJMJyxcbn0pO1xuXG5leHBvcnQgY29uc3QgbW9uZXlGb3JtYXR0ZXIgPSBmb3JtYXR0ZXIgPT4gdmFsdWUgPT4gZm9ybWF0dGVyLmZvcm1hdCh2YWx1ZSk7XG5cbmV4cG9ydCBjb25zdCBmb3JtYXRCUkwgPSBtb25leUZvcm1hdHRlcihicmF6aWxpYW5SZWFsRm9ybWF0dGVyKTtcblxuZXhwb3J0IGNvbnN0IGZvcm1hdEJSTFdpdGhTaWduYWwgPSB2YWx1ZSA9PiB7XG4gIGNvbnN0IHNpZ25hbCA9IHZhbHVlID4gMCA/ICcrJyA6ICctJztcbiAgY29uc3Qgc2ltYm9sID0gdmFsdWUgPiAwID8gJ1IkwqAnIDogJy1SJMKgJztcbiAgY29uc3QgZm9ybWF0dGVkID0gZm9ybWF0QlJMKHZhbHVlKS5yZXBsYWNlKHNpbWJvbCwgYFIkICR7c2lnbmFsfWApO1xuICByZXR1cm4gZm9ybWF0dGVkO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=
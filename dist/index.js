'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var react = require('react');
var react__default = _interopDefault(react);
var yup = require('yup');

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/**
 * 表单数据绑定模型
 * @param {object} initvalue 初始化赋值
 */

function useModel() {
  var initvalue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var _useState = react.useState(initvalue),
      _useState2 = _slicedToArray(_useState, 2),
      model = _useState2[0],
      setModel = _useState2[1];

  var setModelWrapper = function setModelWrapper() {
    // setModel(key, value)
    // set field individual
    if (typeof arguments[0] === 'string') {
      var name = arguments[0];
      var value = arguments[1];

      var tm = _objectSpread2({}, model);

      tm[name] = value;
      setModel(tm);
      return;
    } // setModel({...obj})
    // set entire model object


    if (_typeof(arguments[0]) === 'object') {
      setModel(_objectSpread2(_objectSpread2({}, model), arguments[0]));
      return;
    }
  };

  return [model, setModelWrapper];
}

/**
 * validation hook.
 * @param {Yup Schema} schema yup schema
 */

function useValidate(schema) {
  var _useState = react.useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      errors = _useState2[0],
      setErrors = _useState2[1];
  /**
   * 添加验证错误
   * @param {*} path 验证规则路径
   * @param {*} e 错误实例
   */


  var addErrorItem = function addErrorItem(path, e) {
    if (!errors.some(function (item) {
      return item.path === path;
    })) {
      e.path = path;
      errors.push(e);
      setErrors(_toConsumableArray(errors));
    }
  };
  /**
   * 删除验证错误
   * @param {*} path 验证规则路径
   */


  var removeErrorItem = function removeErrorItem(path) {
    var index = errors.findIndex(function (e) {
      return e.path === path;
    });

    if (index > -1) {
      errors.splice(index, 1);
      setErrors(_toConsumableArray(errors));
    }
  };
  /**
   * 验证整个对象
   */


  var validateModel = function validateModel(model) {
    return new Promise(function (resolve, reject) {
      schema.validate(model, {
        abortEarly: false
      }).then(function () {
        setErrors([]);
        resolve();
      })["catch"](function (e) {
        if (Array.isArray(e.inner) && e.inner.length > 0) {
          setErrors(_toConsumableArray(e.inner));
          reject({
            message: e.errors[0],
            details: e
          });
        } else {
          e.path = name;
          setErrors([e]);
          reject({
            message: e.message,
            details: e
          });
        }
      });
    });
  };
  /**
   * 验证指定字段名与值
   * @param {string} name 字段名
   * @param {*} value 指定值
   */


  var validateField = function validateField(name, value) {
    return new Promise(function (resolve, reject) {
      var slice = yup.reach(schema, name);

      if (slice) {
        slice.validate(value).then(function () {
          removeErrorItem(name);
          resolve();
        })["catch"](function (e) {
          addErrorItem(name, e);
          reject({
            message: e.message,
            details: e
          });
        });
      } else {
        reject({
          message: '找不到验证规则'
        });
      }
    });
  };

  var validateWrapper = function validateWrapper() {
    if (arguments.length === 1) {
      return validateModel(arguments[0]);
    } else if (arguments.length === 2) {
      return validateField(arguments[0], arguments[1]);
    } else {
      return undefined;
    }
  };

  return [validateWrapper, errors];
}

var index = {
  useModel: useModel,
  useValidation: useValidate
};

module.exports = index;
//# sourceMappingURL=index.js.map

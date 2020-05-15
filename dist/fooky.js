/*!
* fooky v1.2.3
* (c) 2020 lvshiwei
*/
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var react = require('react');
var react__default = _interopDefault(react);
var yup = require('yup');

function _readOnlyError(name) {
  throw new Error("\"" + name + "\" is read-only");
}
var readOnlyError = _readOnlyError;

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var _extends_1 = createCommonjsModule(function (module) {
  function _extends() {
    module.exports = _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends.apply(this, arguments);
  }
  module.exports = _extends;
});

function useModel(initvalue) {
  if (initvalue === void 0) {
    initvalue = {};
  }
  var _useState = react.useState(initvalue),
      model = _useState[0],
      setModel = _useState[1];
  var setModelWrapper = function setModelWrapper() {
    if (typeof arguments[0] === 'string') {
      var _name = arguments[0];
      var value = arguments[1];
      var tm = _extends_1({}, model);
      tm[_name] = value;
      setModel(tm);
      return;
    }
    if (typeof arguments[0] === 'object') {
      setModel(_extends_1(_extends_1({}, model), arguments[0]));
      return;
    }
  };
  return [model, setModelWrapper];
}
function useValidation(schema) {
  var _useState2 = react.useState([]),
      errors = _useState2[0],
      setErrors = _useState2[1];
  var addErrorItem = function addErrorItem(path, e) {
    if (!errors.some(function (item) {
      return item.path === path;
    })) {
      e.path = path;
      errors.push(e);
      setErrors([].concat(errors));
    }
  };
  var removeErrorItem = function removeErrorItem(path) {
    var index = errors.findIndex(function (e) {
      return e.path === path;
    });
    if (index > -1) {
      errors.splice(index, 1);
      setErrors([].concat(errors));
    }
  };
  var validateModel = function validateModel(model) {
    return new Promise(function (resolve, reject) {
      schema.validate(model, {
        abortEarly: false
      }).then(function () {
        setErrors([]);
        resolve();
      }).catch(function (e) {
        if (Array.isArray(e.inner) && e.inner.length > 0) {
          setErrors([].concat(e.inner));
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
  var validateField = function validateField(name, value) {
    return new Promise(function (resolve, reject) {
      var slice = yup.reach(schema, name);
      if (slice) {
        slice.validate(value).then(function () {
          removeErrorItem(name);
          resolve();
        }).catch(function (e) {
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
  var hasError = function hasError(name) {
    return Array.isArray(errors) && errors.some(function (e) {
      return e.path === name;
    });
  };
  var getErrors = function getErrors(name) {
    return Array.isArray(errors) && errors.filter(function (e) {
      return e.path === name;
    });
  };
  var clearErrors = function clearErrors() {
    return errors = (readOnlyError("errors"), []);
  };
  return {
    errors: errors,
    validate: validateWrapper,
    hasError: hasError,
    getErrors: getErrors,
    clearErrors: clearErrors
  };
}

exports.useModel = useModel;
exports.useValidation = useValidation;

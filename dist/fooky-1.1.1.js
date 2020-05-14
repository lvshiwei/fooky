/*!
* fooky v1.1.1
* (c) 2020 lvshiwei
*/
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react')) :
	typeof define === 'function' && define.amd ? define(['react'], factory) :
	(global = global || self, global.fooky = factory(global.react));
}(this, (function (react) { 'use strict';

	var react__default = 'default' in react ? react['default'] : react;

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

	function useModel (initvalue) {
	  if (initvalue === void 0) {
	    initvalue = {};
	  }
	  var _useState = react.useState(initvalue),
	      model = _useState[0],
	      setModel = _useState[1];
	  var setModelWrapper = function setModelWrapper() {
	    if (typeof arguments[0] === 'string') {
	      var name = arguments[0];
	      var value = arguments[1];
	      var tm = _extends_1({}, model);
	      tm[name] = value;
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

	function _readOnlyError(name) {
	  throw new Error("\"" + name + "\" is read-only");
	}
	var readOnlyError = _readOnlyError;

	function _extends() {
	  _extends = Object.assign || function (target) {
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

	var objectProto = Object.prototype;
	var hasOwnProperty = objectProto.hasOwnProperty;
	function baseHas(object, key) {
	  return object != null && hasOwnProperty.call(object, key);
	}

	var isArray = Array.isArray;

	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
	var root = freeGlobal || freeSelf || Function('return this')();

	var Symbol$1 = root.Symbol;

	var objectProto$1 = Object.prototype;
	var hasOwnProperty$1 = objectProto$1.hasOwnProperty;
	var nativeObjectToString = objectProto$1.toString;
	var symToStringTag = Symbol$1 ? Symbol$1.toStringTag : undefined;
	function getRawTag(value) {
	  var isOwn = hasOwnProperty$1.call(value, symToStringTag),
	      tag = value[symToStringTag];
	  try {
	    value[symToStringTag] = undefined;
	    var unmasked = true;
	  } catch (e) {}
	  var result = nativeObjectToString.call(value);
	  if (unmasked) {
	    if (isOwn) {
	      value[symToStringTag] = tag;
	    } else {
	      delete value[symToStringTag];
	    }
	  }
	  return result;
	}

	var objectProto$2 = Object.prototype;
	var nativeObjectToString$1 = objectProto$2.toString;
	function objectToString(value) {
	  return nativeObjectToString$1.call(value);
	}

	var nullTag = '[object Null]',
	    undefinedTag = '[object Undefined]';
	var symToStringTag$1 = Symbol$1 ? Symbol$1.toStringTag : undefined;
	function baseGetTag(value) {
	  if (value == null) {
	    return value === undefined ? undefinedTag : nullTag;
	  }
	  return symToStringTag$1 && symToStringTag$1 in Object(value) ? getRawTag(value) : objectToString(value);
	}

	function isObjectLike(value) {
	  return value != null && typeof value == 'object';
	}

	var symbolTag = '[object Symbol]';
	function isSymbol(value) {
	  return typeof value == 'symbol' || isObjectLike(value) && baseGetTag(value) == symbolTag;
	}

	var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
	    reIsPlainProp = /^\w*$/;
	function isKey(value, object) {
	  if (isArray(value)) {
	    return false;
	  }
	  var type = typeof value;
	  if (type == 'number' || type == 'symbol' || type == 'boolean' || value == null || isSymbol(value)) {
	    return true;
	  }
	  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
	}

	function isObject(value) {
	  var type = typeof value;
	  return value != null && (type == 'object' || type == 'function');
	}

	var asyncTag = '[object AsyncFunction]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    proxyTag = '[object Proxy]';
	function isFunction(value) {
	  if (!isObject(value)) {
	    return false;
	  }
	  var tag = baseGetTag(value);
	  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
	}

	var coreJsData = root['__core-js_shared__'];

	var maskSrcKey = function () {
	  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
	  return uid ? 'Symbol(src)_1.' + uid : '';
	}();
	function isMasked(func) {
	  return !!maskSrcKey && maskSrcKey in func;
	}

	var funcProto = Function.prototype;
	var funcToString = funcProto.toString;
	function toSource(func) {
	  if (func != null) {
	    try {
	      return funcToString.call(func);
	    } catch (e) {}
	    try {
	      return func + '';
	    } catch (e) {}
	  }
	  return '';
	}

	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
	var reIsHostCtor = /^\[object .+?Constructor\]$/;
	var funcProto$1 = Function.prototype,
	    objectProto$3 = Object.prototype;
	var funcToString$1 = funcProto$1.toString;
	var hasOwnProperty$2 = objectProto$3.hasOwnProperty;
	var reIsNative = RegExp('^' + funcToString$1.call(hasOwnProperty$2).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
	function baseIsNative(value) {
	  if (!isObject(value) || isMasked(value)) {
	    return false;
	  }
	  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
	  return pattern.test(toSource(value));
	}

	function getValue(object, key) {
	  return object == null ? undefined : object[key];
	}

	function getNative(object, key) {
	  var value = getValue(object, key);
	  return baseIsNative(value) ? value : undefined;
	}

	var nativeCreate = getNative(Object, 'create');

	function hashClear() {
	  this.__data__ = nativeCreate ? nativeCreate(null) : {};
	  this.size = 0;
	}

	function hashDelete(key) {
	  var result = this.has(key) && delete this.__data__[key];
	  this.size -= result ? 1 : 0;
	  return result;
	}

	var HASH_UNDEFINED = '__lodash_hash_undefined__';
	var objectProto$4 = Object.prototype;
	var hasOwnProperty$3 = objectProto$4.hasOwnProperty;
	function hashGet(key) {
	  var data = this.__data__;
	  if (nativeCreate) {
	    var result = data[key];
	    return result === HASH_UNDEFINED ? undefined : result;
	  }
	  return hasOwnProperty$3.call(data, key) ? data[key] : undefined;
	}

	var objectProto$5 = Object.prototype;
	var hasOwnProperty$4 = objectProto$5.hasOwnProperty;
	function hashHas(key) {
	  var data = this.__data__;
	  return nativeCreate ? data[key] !== undefined : hasOwnProperty$4.call(data, key);
	}

	var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';
	function hashSet(key, value) {
	  var data = this.__data__;
	  this.size += this.has(key) ? 0 : 1;
	  data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED$1 : value;
	  return this;
	}

	function Hash(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;
	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}
	Hash.prototype.clear = hashClear;
	Hash.prototype['delete'] = hashDelete;
	Hash.prototype.get = hashGet;
	Hash.prototype.has = hashHas;
	Hash.prototype.set = hashSet;

	function listCacheClear() {
	  this.__data__ = [];
	  this.size = 0;
	}

	function eq(value, other) {
	  return value === other || value !== value && other !== other;
	}

	function assocIndexOf(array, key) {
	  var length = array.length;
	  while (length--) {
	    if (eq(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}

	var arrayProto = Array.prototype;
	var splice = arrayProto.splice;
	function listCacheDelete(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);
	  if (index < 0) {
	    return false;
	  }
	  var lastIndex = data.length - 1;
	  if (index == lastIndex) {
	    data.pop();
	  } else {
	    splice.call(data, index, 1);
	  }
	  --this.size;
	  return true;
	}

	function listCacheGet(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);
	  return index < 0 ? undefined : data[index][1];
	}

	function listCacheHas(key) {
	  return assocIndexOf(this.__data__, key) > -1;
	}

	function listCacheSet(key, value) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);
	  if (index < 0) {
	    ++this.size;
	    data.push([key, value]);
	  } else {
	    data[index][1] = value;
	  }
	  return this;
	}

	function ListCache(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;
	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}
	ListCache.prototype.clear = listCacheClear;
	ListCache.prototype['delete'] = listCacheDelete;
	ListCache.prototype.get = listCacheGet;
	ListCache.prototype.has = listCacheHas;
	ListCache.prototype.set = listCacheSet;

	var Map$1 = getNative(root, 'Map');

	function mapCacheClear() {
	  this.size = 0;
	  this.__data__ = {
	    'hash': new Hash(),
	    'map': new (Map$1 || ListCache)(),
	    'string': new Hash()
	  };
	}

	function isKeyable(value) {
	  var type = typeof value;
	  return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
	}

	function getMapData(map, key) {
	  var data = map.__data__;
	  return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
	}

	function mapCacheDelete(key) {
	  var result = getMapData(this, key)['delete'](key);
	  this.size -= result ? 1 : 0;
	  return result;
	}

	function mapCacheGet(key) {
	  return getMapData(this, key).get(key);
	}

	function mapCacheHas(key) {
	  return getMapData(this, key).has(key);
	}

	function mapCacheSet(key, value) {
	  var data = getMapData(this, key),
	      size = data.size;
	  data.set(key, value);
	  this.size += data.size == size ? 0 : 1;
	  return this;
	}

	function MapCache(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;
	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}
	MapCache.prototype.clear = mapCacheClear;
	MapCache.prototype['delete'] = mapCacheDelete;
	MapCache.prototype.get = mapCacheGet;
	MapCache.prototype.has = mapCacheHas;
	MapCache.prototype.set = mapCacheSet;

	var FUNC_ERROR_TEXT = 'Expected a function';
	function memoize(func, resolver) {
	  if (typeof func != 'function' || resolver != null && typeof resolver != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  var memoized = function () {
	    var args = arguments,
	        key = resolver ? resolver.apply(this, args) : args[0],
	        cache = memoized.cache;
	    if (cache.has(key)) {
	      return cache.get(key);
	    }
	    var result = func.apply(this, args);
	    memoized.cache = cache.set(key, result) || cache;
	    return result;
	  };
	  memoized.cache = new (memoize.Cache || MapCache)();
	  return memoized;
	}
	memoize.Cache = MapCache;

	var MAX_MEMOIZE_SIZE = 500;
	function memoizeCapped(func) {
	  var result = memoize(func, function (key) {
	    if (cache.size === MAX_MEMOIZE_SIZE) {
	      cache.clear();
	    }
	    return key;
	  });
	  var cache = result.cache;
	  return result;
	}

	var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
	var reEscapeChar = /\\(\\)?/g;
	var stringToPath = memoizeCapped(function (string) {
	  var result = [];
	  if (string.charCodeAt(0) === 46
	  ) {
	      result.push('');
	    }
	  string.replace(rePropName, function (match, number, quote, subString) {
	    result.push(quote ? subString.replace(reEscapeChar, '$1') : number || match);
	  });
	  return result;
	});

	function arrayMap(array, iteratee) {
	  var index = -1,
	      length = array == null ? 0 : array.length,
	      result = Array(length);
	  while (++index < length) {
	    result[index] = iteratee(array[index], index, array);
	  }
	  return result;
	}

	var INFINITY = 1 / 0;
	var symbolProto = Symbol$1 ? Symbol$1.prototype : undefined,
	    symbolToString = symbolProto ? symbolProto.toString : undefined;
	function baseToString(value) {
	  if (typeof value == 'string') {
	    return value;
	  }
	  if (isArray(value)) {
	    return arrayMap(value, baseToString) + '';
	  }
	  if (isSymbol(value)) {
	    return symbolToString ? symbolToString.call(value) : '';
	  }
	  var result = value + '';
	  return result == '0' && 1 / value == -INFINITY ? '-0' : result;
	}

	function toString(value) {
	  return value == null ? '' : baseToString(value);
	}

	function castPath(value, object) {
	  if (isArray(value)) {
	    return value;
	  }
	  return isKey(value, object) ? [value] : stringToPath(toString(value));
	}

	var argsTag = '[object Arguments]';
	function baseIsArguments(value) {
	  return isObjectLike(value) && baseGetTag(value) == argsTag;
	}

	var objectProto$6 = Object.prototype;
	var hasOwnProperty$5 = objectProto$6.hasOwnProperty;
	var propertyIsEnumerable = objectProto$6.propertyIsEnumerable;
	var isArguments = baseIsArguments(function () {
	  return arguments;
	}()) ? baseIsArguments : function (value) {
	  return isObjectLike(value) && hasOwnProperty$5.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
	};

	var MAX_SAFE_INTEGER = 9007199254740991;
	var reIsUint = /^(?:0|[1-9]\d*)$/;
	function isIndex(value, length) {
	  var type = typeof value;
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return !!length && (type == 'number' || type != 'symbol' && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
	}

	var MAX_SAFE_INTEGER$1 = 9007199254740991;
	function isLength(value) {
	  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER$1;
	}

	var INFINITY$1 = 1 / 0;
	function toKey(value) {
	  if (typeof value == 'string' || isSymbol(value)) {
	    return value;
	  }
	  var result = value + '';
	  return result == '0' && 1 / value == -INFINITY$1 ? '-0' : result;
	}

	function hasPath(object, path, hasFunc) {
	  path = castPath(path, object);
	  var index = -1,
	      length = path.length,
	      result = false;
	  while (++index < length) {
	    var key = toKey(path[index]);
	    if (!(result = object != null && hasFunc(object, key))) {
	      break;
	    }
	    object = object[key];
	  }
	  if (result || ++index != length) {
	    return result;
	  }
	  length = object == null ? 0 : object.length;
	  return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
	}

	function has(object, path) {
	  return object != null && hasPath(object, path, baseHas);
	}

	function stackClear() {
	  this.__data__ = new ListCache();
	  this.size = 0;
	}

	function stackDelete(key) {
	  var data = this.__data__,
	      result = data['delete'](key);
	  this.size = data.size;
	  return result;
	}

	function stackGet(key) {
	  return this.__data__.get(key);
	}

	function stackHas(key) {
	  return this.__data__.has(key);
	}

	var LARGE_ARRAY_SIZE = 200;
	function stackSet(key, value) {
	  var data = this.__data__;
	  if (data instanceof ListCache) {
	    var pairs = data.__data__;
	    if (!Map$1 || pairs.length < LARGE_ARRAY_SIZE - 1) {
	      pairs.push([key, value]);
	      this.size = ++data.size;
	      return this;
	    }
	    data = this.__data__ = new MapCache(pairs);
	  }
	  data.set(key, value);
	  this.size = data.size;
	  return this;
	}

	function Stack(entries) {
	  var data = this.__data__ = new ListCache(entries);
	  this.size = data.size;
	}
	Stack.prototype.clear = stackClear;
	Stack.prototype['delete'] = stackDelete;
	Stack.prototype.get = stackGet;
	Stack.prototype.has = stackHas;
	Stack.prototype.set = stackSet;

	function arrayEach(array, iteratee) {
	  var index = -1,
	      length = array == null ? 0 : array.length;
	  while (++index < length) {
	    if (iteratee(array[index], index, array) === false) {
	      break;
	    }
	  }
	  return array;
	}

	var defineProperty = function () {
	  try {
	    var func = getNative(Object, 'defineProperty');
	    func({}, '', {});
	    return func;
	  } catch (e) {}
	}();

	function baseAssignValue(object, key, value) {
	  if (key == '__proto__' && defineProperty) {
	    defineProperty(object, key, {
	      'configurable': true,
	      'enumerable': true,
	      'value': value,
	      'writable': true
	    });
	  } else {
	    object[key] = value;
	  }
	}

	var objectProto$7 = Object.prototype;
	var hasOwnProperty$6 = objectProto$7.hasOwnProperty;
	function assignValue(object, key, value) {
	  var objValue = object[key];
	  if (!(hasOwnProperty$6.call(object, key) && eq(objValue, value)) || value === undefined && !(key in object)) {
	    baseAssignValue(object, key, value);
	  }
	}

	function copyObject(source, props, object, customizer) {
	  var isNew = !object;
	  object || (object = {});
	  var index = -1,
	      length = props.length;
	  while (++index < length) {
	    var key = props[index];
	    var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined;
	    if (newValue === undefined) {
	      newValue = source[key];
	    }
	    if (isNew) {
	      baseAssignValue(object, key, newValue);
	    } else {
	      assignValue(object, key, newValue);
	    }
	  }
	  return object;
	}

	function baseTimes(n, iteratee) {
	  var index = -1,
	      result = Array(n);
	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}

	function stubFalse() {
	  return false;
	}

	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;
	var moduleExports = freeModule && freeModule.exports === freeExports;
	var Buffer = moduleExports ? root.Buffer : undefined;
	var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;
	var isBuffer = nativeIsBuffer || stubFalse;

	var argsTag$1 = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag$1 = '[object Function]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    weakMapTag = '[object WeakMap]';
	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag$1] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag$1] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
	function baseIsTypedArray(value) {
	  return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
	}

	function baseUnary(func) {
	  return function (value) {
	    return func(value);
	  };
	}

	var freeExports$1 = typeof exports == 'object' && exports && !exports.nodeType && exports;
	var freeModule$1 = freeExports$1 && typeof module == 'object' && module && !module.nodeType && module;
	var moduleExports$1 = freeModule$1 && freeModule$1.exports === freeExports$1;
	var freeProcess = moduleExports$1 && freeGlobal.process;
	var nodeUtil = function () {
	  try {
	    var types = freeModule$1 && freeModule$1.require && freeModule$1.require('util').types;
	    if (types) {
	      return types;
	    }
	    return freeProcess && freeProcess.binding && freeProcess.binding('util');
	  } catch (e) {}
	}();

	var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
	var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

	var objectProto$8 = Object.prototype;
	var hasOwnProperty$7 = objectProto$8.hasOwnProperty;
	function arrayLikeKeys(value, inherited) {
	  var isArr = isArray(value),
	      isArg = !isArr && isArguments(value),
	      isBuff = !isArr && !isArg && isBuffer(value),
	      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
	      skipIndexes = isArr || isArg || isBuff || isType,
	      result = skipIndexes ? baseTimes(value.length, String) : [],
	      length = result.length;
	  for (var key in value) {
	    if ((inherited || hasOwnProperty$7.call(value, key)) && !(skipIndexes && (
	    key == 'length' ||
	    isBuff && (key == 'offset' || key == 'parent') ||
	    isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset') ||
	    isIndex(key, length)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	var objectProto$9 = Object.prototype;
	function isPrototype(value) {
	  var Ctor = value && value.constructor,
	      proto = typeof Ctor == 'function' && Ctor.prototype || objectProto$9;
	  return value === proto;
	}

	function overArg(func, transform) {
	  return function (arg) {
	    return func(transform(arg));
	  };
	}

	var nativeKeys = overArg(Object.keys, Object);

	var objectProto$a = Object.prototype;
	var hasOwnProperty$8 = objectProto$a.hasOwnProperty;
	function baseKeys(object) {
	  if (!isPrototype(object)) {
	    return nativeKeys(object);
	  }
	  var result = [];
	  for (var key in Object(object)) {
	    if (hasOwnProperty$8.call(object, key) && key != 'constructor') {
	      result.push(key);
	    }
	  }
	  return result;
	}

	function isArrayLike(value) {
	  return value != null && isLength(value.length) && !isFunction(value);
	}

	function keys(object) {
	  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
	}

	function baseAssign(object, source) {
	  return object && copyObject(source, keys(source), object);
	}

	function nativeKeysIn(object) {
	  var result = [];
	  if (object != null) {
	    for (var key in Object(object)) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	var objectProto$b = Object.prototype;
	var hasOwnProperty$9 = objectProto$b.hasOwnProperty;
	function baseKeysIn(object) {
	  if (!isObject(object)) {
	    return nativeKeysIn(object);
	  }
	  var isProto = isPrototype(object),
	      result = [];
	  for (var key in object) {
	    if (!(key == 'constructor' && (isProto || !hasOwnProperty$9.call(object, key)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	function keysIn$1(object) {
	  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
	}

	function baseAssignIn(object, source) {
	  return object && copyObject(source, keysIn$1(source), object);
	}

	var freeExports$2 = typeof exports == 'object' && exports && !exports.nodeType && exports;
	var freeModule$2 = freeExports$2 && typeof module == 'object' && module && !module.nodeType && module;
	var moduleExports$2 = freeModule$2 && freeModule$2.exports === freeExports$2;
	var Buffer$1 = moduleExports$2 ? root.Buffer : undefined,
	    allocUnsafe = Buffer$1 ? Buffer$1.allocUnsafe : undefined;
	function cloneBuffer(buffer, isDeep) {
	  if (isDeep) {
	    return buffer.slice();
	  }
	  var length = buffer.length,
	      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
	  buffer.copy(result);
	  return result;
	}

	function copyArray(source, array) {
	  var index = -1,
	      length = source.length;
	  array || (array = Array(length));
	  while (++index < length) {
	    array[index] = source[index];
	  }
	  return array;
	}

	function arrayFilter(array, predicate) {
	  var index = -1,
	      length = array == null ? 0 : array.length,
	      resIndex = 0,
	      result = [];
	  while (++index < length) {
	    var value = array[index];
	    if (predicate(value, index, array)) {
	      result[resIndex++] = value;
	    }
	  }
	  return result;
	}

	function stubArray() {
	  return [];
	}

	var objectProto$c = Object.prototype;
	var propertyIsEnumerable$1 = objectProto$c.propertyIsEnumerable;
	var nativeGetSymbols = Object.getOwnPropertySymbols;
	var getSymbols = !nativeGetSymbols ? stubArray : function (object) {
	  if (object == null) {
	    return [];
	  }
	  object = Object(object);
	  return arrayFilter(nativeGetSymbols(object), function (symbol) {
	    return propertyIsEnumerable$1.call(object, symbol);
	  });
	};

	function copySymbols(source, object) {
	  return copyObject(source, getSymbols(source), object);
	}

	function arrayPush(array, values) {
	  var index = -1,
	      length = values.length,
	      offset = array.length;
	  while (++index < length) {
	    array[offset + index] = values[index];
	  }
	  return array;
	}

	var getPrototype = overArg(Object.getPrototypeOf, Object);

	var nativeGetSymbols$1 = Object.getOwnPropertySymbols;
	var getSymbolsIn = !nativeGetSymbols$1 ? stubArray : function (object) {
	  var result = [];
	  while (object) {
	    arrayPush(result, getSymbols(object));
	    object = getPrototype(object);
	  }
	  return result;
	};

	function copySymbolsIn(source, object) {
	  return copyObject(source, getSymbolsIn(source), object);
	}

	function baseGetAllKeys(object, keysFunc, symbolsFunc) {
	  var result = keysFunc(object);
	  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
	}

	function getAllKeys(object) {
	  return baseGetAllKeys(object, keys, getSymbols);
	}

	function getAllKeysIn(object) {
	  return baseGetAllKeys(object, keysIn$1, getSymbolsIn);
	}

	var DataView = getNative(root, 'DataView');

	var Promise$1 = getNative(root, 'Promise');

	var Set$1 = getNative(root, 'Set');

	var WeakMap = getNative(root, 'WeakMap');

	var mapTag$1 = '[object Map]',
	    objectTag$1 = '[object Object]',
	    promiseTag = '[object Promise]',
	    setTag$1 = '[object Set]',
	    weakMapTag$1 = '[object WeakMap]';
	var dataViewTag$1 = '[object DataView]';
	var dataViewCtorString = toSource(DataView),
	    mapCtorString = toSource(Map$1),
	    promiseCtorString = toSource(Promise$1),
	    setCtorString = toSource(Set$1),
	    weakMapCtorString = toSource(WeakMap);
	var getTag = baseGetTag;
	if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag$1 || Map$1 && getTag(new Map$1()) != mapTag$1 || Promise$1 && getTag(Promise$1.resolve()) != promiseTag || Set$1 && getTag(new Set$1()) != setTag$1 || WeakMap && getTag(new WeakMap()) != weakMapTag$1) {
	  getTag = function (value) {
	    var result = baseGetTag(value),
	        Ctor = result == objectTag$1 ? value.constructor : undefined,
	        ctorString = Ctor ? toSource(Ctor) : '';
	    if (ctorString) {
	      switch (ctorString) {
	        case dataViewCtorString:
	          return dataViewTag$1;
	        case mapCtorString:
	          return mapTag$1;
	        case promiseCtorString:
	          return promiseTag;
	        case setCtorString:
	          return setTag$1;
	        case weakMapCtorString:
	          return weakMapTag$1;
	      }
	    }
	    return result;
	  };
	}
	var getTag$1 = getTag;

	var objectProto$d = Object.prototype;
	var hasOwnProperty$a = objectProto$d.hasOwnProperty;
	function initCloneArray(array) {
	  var length = array.length,
	      result = new array.constructor(length);
	  if (length && typeof array[0] == 'string' && hasOwnProperty$a.call(array, 'index')) {
	    result.index = array.index;
	    result.input = array.input;
	  }
	  return result;
	}

	var Uint8Array = root.Uint8Array;

	function cloneArrayBuffer(arrayBuffer) {
	  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
	  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
	  return result;
	}

	function cloneDataView(dataView, isDeep) {
	  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
	  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
	}

	var reFlags = /\w*$/;
	function cloneRegExp(regexp) {
	  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
	  result.lastIndex = regexp.lastIndex;
	  return result;
	}

	var symbolProto$1 = Symbol$1 ? Symbol$1.prototype : undefined,
	    symbolValueOf = symbolProto$1 ? symbolProto$1.valueOf : undefined;
	function cloneSymbol(symbol) {
	  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
	}

	function cloneTypedArray(typedArray, isDeep) {
	  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
	  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
	}

	var boolTag$1 = '[object Boolean]',
	    dateTag$1 = '[object Date]',
	    mapTag$2 = '[object Map]',
	    numberTag$1 = '[object Number]',
	    regexpTag$1 = '[object RegExp]',
	    setTag$2 = '[object Set]',
	    stringTag$1 = '[object String]',
	    symbolTag$1 = '[object Symbol]';
	var arrayBufferTag$1 = '[object ArrayBuffer]',
	    dataViewTag$2 = '[object DataView]',
	    float32Tag$1 = '[object Float32Array]',
	    float64Tag$1 = '[object Float64Array]',
	    int8Tag$1 = '[object Int8Array]',
	    int16Tag$1 = '[object Int16Array]',
	    int32Tag$1 = '[object Int32Array]',
	    uint8Tag$1 = '[object Uint8Array]',
	    uint8ClampedTag$1 = '[object Uint8ClampedArray]',
	    uint16Tag$1 = '[object Uint16Array]',
	    uint32Tag$1 = '[object Uint32Array]';
	function initCloneByTag(object, tag, isDeep) {
	  var Ctor = object.constructor;
	  switch (tag) {
	    case arrayBufferTag$1:
	      return cloneArrayBuffer(object);
	    case boolTag$1:
	    case dateTag$1:
	      return new Ctor(+object);
	    case dataViewTag$2:
	      return cloneDataView(object, isDeep);
	    case float32Tag$1:
	    case float64Tag$1:
	    case int8Tag$1:
	    case int16Tag$1:
	    case int32Tag$1:
	    case uint8Tag$1:
	    case uint8ClampedTag$1:
	    case uint16Tag$1:
	    case uint32Tag$1:
	      return cloneTypedArray(object, isDeep);
	    case mapTag$2:
	      return new Ctor();
	    case numberTag$1:
	    case stringTag$1:
	      return new Ctor(object);
	    case regexpTag$1:
	      return cloneRegExp(object);
	    case setTag$2:
	      return new Ctor();
	    case symbolTag$1:
	      return cloneSymbol(object);
	  }
	}

	var objectCreate = Object.create;
	var baseCreate = function () {
	  function object() {}
	  return function (proto) {
	    if (!isObject(proto)) {
	      return {};
	    }
	    if (objectCreate) {
	      return objectCreate(proto);
	    }
	    object.prototype = proto;
	    var result = new object();
	    object.prototype = undefined;
	    return result;
	  };
	}();

	function initCloneObject(object) {
	  return typeof object.constructor == 'function' && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
	}

	var mapTag$3 = '[object Map]';
	function baseIsMap(value) {
	  return isObjectLike(value) && getTag$1(value) == mapTag$3;
	}

	var nodeIsMap = nodeUtil && nodeUtil.isMap;
	var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;

	var setTag$3 = '[object Set]';
	function baseIsSet(value) {
	  return isObjectLike(value) && getTag$1(value) == setTag$3;
	}

	var nodeIsSet = nodeUtil && nodeUtil.isSet;
	var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;

	var CLONE_DEEP_FLAG = 1,
	    CLONE_FLAT_FLAG = 2,
	    CLONE_SYMBOLS_FLAG = 4;
	var argsTag$2 = '[object Arguments]',
	    arrayTag$1 = '[object Array]',
	    boolTag$2 = '[object Boolean]',
	    dateTag$2 = '[object Date]',
	    errorTag$1 = '[object Error]',
	    funcTag$2 = '[object Function]',
	    genTag$1 = '[object GeneratorFunction]',
	    mapTag$4 = '[object Map]',
	    numberTag$2 = '[object Number]',
	    objectTag$2 = '[object Object]',
	    regexpTag$2 = '[object RegExp]',
	    setTag$4 = '[object Set]',
	    stringTag$2 = '[object String]',
	    symbolTag$2 = '[object Symbol]',
	    weakMapTag$2 = '[object WeakMap]';
	var arrayBufferTag$2 = '[object ArrayBuffer]',
	    dataViewTag$3 = '[object DataView]',
	    float32Tag$2 = '[object Float32Array]',
	    float64Tag$2 = '[object Float64Array]',
	    int8Tag$2 = '[object Int8Array]',
	    int16Tag$2 = '[object Int16Array]',
	    int32Tag$2 = '[object Int32Array]',
	    uint8Tag$2 = '[object Uint8Array]',
	    uint8ClampedTag$2 = '[object Uint8ClampedArray]',
	    uint16Tag$2 = '[object Uint16Array]',
	    uint32Tag$2 = '[object Uint32Array]';
	var cloneableTags = {};
	cloneableTags[argsTag$2] = cloneableTags[arrayTag$1] = cloneableTags[arrayBufferTag$2] = cloneableTags[dataViewTag$3] = cloneableTags[boolTag$2] = cloneableTags[dateTag$2] = cloneableTags[float32Tag$2] = cloneableTags[float64Tag$2] = cloneableTags[int8Tag$2] = cloneableTags[int16Tag$2] = cloneableTags[int32Tag$2] = cloneableTags[mapTag$4] = cloneableTags[numberTag$2] = cloneableTags[objectTag$2] = cloneableTags[regexpTag$2] = cloneableTags[setTag$4] = cloneableTags[stringTag$2] = cloneableTags[symbolTag$2] = cloneableTags[uint8Tag$2] = cloneableTags[uint8ClampedTag$2] = cloneableTags[uint16Tag$2] = cloneableTags[uint32Tag$2] = true;
	cloneableTags[errorTag$1] = cloneableTags[funcTag$2] = cloneableTags[weakMapTag$2] = false;
	function baseClone(value, bitmask, customizer, key, object, stack) {
	  var result,
	      isDeep = bitmask & CLONE_DEEP_FLAG,
	      isFlat = bitmask & CLONE_FLAT_FLAG,
	      isFull = bitmask & CLONE_SYMBOLS_FLAG;
	  if (customizer) {
	    result = object ? customizer(value, key, object, stack) : customizer(value);
	  }
	  if (result !== undefined) {
	    return result;
	  }
	  if (!isObject(value)) {
	    return value;
	  }
	  var isArr = isArray(value);
	  if (isArr) {
	    result = initCloneArray(value);
	    if (!isDeep) {
	      return copyArray(value, result);
	    }
	  } else {
	    var tag = getTag$1(value),
	        isFunc = tag == funcTag$2 || tag == genTag$1;
	    if (isBuffer(value)) {
	      return cloneBuffer(value, isDeep);
	    }
	    if (tag == objectTag$2 || tag == argsTag$2 || isFunc && !object) {
	      result = isFlat || isFunc ? {} : initCloneObject(value);
	      if (!isDeep) {
	        return isFlat ? copySymbolsIn(value, baseAssignIn(result, value)) : copySymbols(value, baseAssign(result, value));
	      }
	    } else {
	      if (!cloneableTags[tag]) {
	        return object ? value : {};
	      }
	      result = initCloneByTag(value, tag, isDeep);
	    }
	  }
	  stack || (stack = new Stack());
	  var stacked = stack.get(value);
	  if (stacked) {
	    return stacked;
	  }
	  stack.set(value, result);
	  if (isSet(value)) {
	    value.forEach(function (subValue) {
	      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
	    });
	  } else if (isMap(value)) {
	    value.forEach(function (subValue, key) {
	      result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
	    });
	  }
	  var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys;
	  var props = isArr ? undefined : keysFunc(value);
	  arrayEach(props || value, function (subValue, key) {
	    if (props) {
	      key = subValue;
	      subValue = value[key];
	    }
	    assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
	  });
	  return result;
	}

	var CLONE_DEEP_FLAG$1 = 1,
	    CLONE_SYMBOLS_FLAG$1 = 4;
	function cloneDeepWith(value, customizer) {
	  customizer = typeof customizer == 'function' ? customizer : undefined;
	  return baseClone(value, CLONE_DEEP_FLAG$1 | CLONE_SYMBOLS_FLAG$1, customizer);
	}

	var stringTag$3 = '[object String]';
	function isString(value) {
	  return typeof value == 'string' || !isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag$3;
	}

	function iteratorToArray(iterator) {
	  var data,
	      result = [];
	  while (!(data = iterator.next()).done) {
	    result.push(data.value);
	  }
	  return result;
	}

	function mapToArray(map) {
	  var index = -1,
	      result = Array(map.size);
	  map.forEach(function (value, key) {
	    result[++index] = [key, value];
	  });
	  return result;
	}

	function setToArray(set) {
	  var index = -1,
	      result = Array(set.size);
	  set.forEach(function (value) {
	    result[++index] = value;
	  });
	  return result;
	}

	function asciiToArray(string) {
	  return string.split('');
	}

	var rsAstralRange = '\\ud800-\\udfff',
	    rsComboMarksRange = '\\u0300-\\u036f',
	    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
	    rsComboSymbolsRange = '\\u20d0-\\u20ff',
	    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
	    rsVarRange = '\\ufe0e\\ufe0f';
	var rsZWJ = '\\u200d';
	var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange + rsComboRange + rsVarRange + ']');
	function hasUnicode(string) {
	  return reHasUnicode.test(string);
	}

	var rsAstralRange$1 = '\\ud800-\\udfff',
	    rsComboMarksRange$1 = '\\u0300-\\u036f',
	    reComboHalfMarksRange$1 = '\\ufe20-\\ufe2f',
	    rsComboSymbolsRange$1 = '\\u20d0-\\u20ff',
	    rsComboRange$1 = rsComboMarksRange$1 + reComboHalfMarksRange$1 + rsComboSymbolsRange$1,
	    rsVarRange$1 = '\\ufe0e\\ufe0f';
	var rsAstral = '[' + rsAstralRange$1 + ']',
	    rsCombo = '[' + rsComboRange$1 + ']',
	    rsFitz = '\\ud83c[\\udffb-\\udfff]',
	    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
	    rsNonAstral = '[^' + rsAstralRange$1 + ']',
	    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
	    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
	    rsZWJ$1 = '\\u200d';
	var reOptMod = rsModifier + '?',
	    rsOptVar = '[' + rsVarRange$1 + ']?',
	    rsOptJoin = '(?:' + rsZWJ$1 + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
	    rsSeq = rsOptVar + reOptMod + rsOptJoin,
	    rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';
	var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');
	function unicodeToArray(string) {
	  return string.match(reUnicode) || [];
	}

	function stringToArray(string) {
	  return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
	}

	function baseValues(object, props) {
	  return arrayMap(props, function (key) {
	    return object[key];
	  });
	}

	function values(object) {
	  return object == null ? [] : baseValues(object, keys(object));
	}

	var mapTag$5 = '[object Map]',
	    setTag$5 = '[object Set]';
	var symIterator = Symbol$1 ? Symbol$1.iterator : undefined;
	function toArray(value) {
	  if (!value) {
	    return [];
	  }
	  if (isArrayLike(value)) {
	    return isString(value) ? stringToArray(value) : copyArray(value);
	  }
	  if (symIterator && value[symIterator]) {
	    return iteratorToArray(value[symIterator]());
	  }
	  var tag = getTag$1(value),
	      func = tag == mapTag$5 ? mapToArray : tag == setTag$5 ? setToArray : values;
	  return func(value);
	}

	var toString$1 = Object.prototype.toString;
	var errorToString = Error.prototype.toString;
	var regExpToString = RegExp.prototype.toString;
	var symbolToString$1 = typeof Symbol !== 'undefined' ? Symbol.prototype.toString : function () {
	  return '';
	};
	var SYMBOL_REGEXP = /^Symbol\((.*)\)(.*)$/;
	function printNumber(val) {
	  if (val != +val) return 'NaN';
	  var isNegativeZero = val === 0 && 1 / val < 0;
	  return isNegativeZero ? '-0' : '' + val;
	}
	function printSimpleValue(val, quoteStrings) {
	  if (quoteStrings === void 0) {
	    quoteStrings = false;
	  }
	  if (val == null || val === true || val === false) return '' + val;
	  var typeOf = typeof val;
	  if (typeOf === 'number') return printNumber(val);
	  if (typeOf === 'string') return quoteStrings ? "\"" + val + "\"" : val;
	  if (typeOf === 'function') return '[Function ' + (val.name || 'anonymous') + ']';
	  if (typeOf === 'symbol') return symbolToString$1.call(val).replace(SYMBOL_REGEXP, 'Symbol($1)');
	  var tag = toString$1.call(val).slice(8, -1);
	  if (tag === 'Date') return isNaN(val.getTime()) ? '' + val : val.toISOString(val);
	  if (tag === 'Error' || val instanceof Error) return '[' + errorToString.call(val) + ']';
	  if (tag === 'RegExp') return regExpToString.call(val);
	  return null;
	}
	function printValue(value, quoteStrings) {
	  var result = printSimpleValue(value, quoteStrings);
	  if (result !== null) return result;
	  return JSON.stringify(value, function (key, value) {
	    var result = printSimpleValue(this[key], quoteStrings);
	    if (result !== null) return result;
	    return value;
	  }, 2);
	}

	var mixed = {
	  default: '${path} is invalid',
	  required: '${path} is a required field',
	  oneOf: '${path} must be one of the following values: ${values}',
	  notOneOf: '${path} must not be one of the following values: ${values}',
	  notType: function notType(_ref) {
	    var path = _ref.path,
	        type = _ref.type,
	        value = _ref.value,
	        originalValue = _ref.originalValue;
	    var isCast = originalValue != null && originalValue !== value;
	    var msg = path + " must be a `" + type + "` type, " + ("but the final value was: `" + printValue(value, true) + "`") + (isCast ? " (cast from the value `" + printValue(originalValue, true) + "`)." : '.');
	    if (value === null) {
	      msg += "\n If \"null\" is intended as an empty value be sure to mark the schema as `.nullable()`";
	    }
	    return msg;
	  },
	  defined: '${path} must be defined'
	};
	var string = {
	  length: '${path} must be exactly ${length} characters',
	  min: '${path} must be at least ${min} characters',
	  max: '${path} must be at most ${max} characters',
	  matches: '${path} must match the following: "${regex}"',
	  email: '${path} must be a valid email',
	  url: '${path} must be a valid URL',
	  trim: '${path} must be a trimmed string',
	  lowercase: '${path} must be a lowercase string',
	  uppercase: '${path} must be a upper case string'
	};
	var number = {
	  min: '${path} must be greater than or equal to ${min}',
	  max: '${path} must be less than or equal to ${max}',
	  lessThan: '${path} must be less than ${less}',
	  moreThan: '${path} must be greater than ${more}',
	  notEqual: '${path} must be not equal to ${notEqual}',
	  positive: '${path} must be a positive number',
	  negative: '${path} must be a negative number',
	  integer: '${path} must be an integer'
	};
	var date = {
	  min: '${path} field must be later than ${min}',
	  max: '${path} field must be at earlier than ${max}'
	};
	var object = {
	  noUnknown: '${path} field has unspecified keys: ${unknown}'
	};
	var array = {
	  min: '${path} field must have at least ${min} items',
	  max: '${path} field must have less than or equal to ${max} items'
	};

	var isSchema = (function (obj) {
	  return obj && obj.__isYupSchema__;
	});

	var Condition = function () {
	  function Condition(refs, options) {
	    this.refs = refs;
	    if (typeof options === 'function') {
	      this.fn = options;
	      return;
	    }
	    if (!has(options, 'is')) throw new TypeError('`is:` is required for `when()` conditions');
	    if (!options.then && !options.otherwise) throw new TypeError('either `then:` or `otherwise:` is required for `when()` conditions');
	    var is = options.is,
	        then = options.then,
	        otherwise = options.otherwise;
	    var check = typeof is === 'function' ? is : function () {
	      for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
	        values[_key] = arguments[_key];
	      }
	      return values.every(function (value) {
	        return value === is;
	      });
	    };
	    this.fn = function () {
	      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	        args[_key2] = arguments[_key2];
	      }
	      var options = args.pop();
	      var schema = args.pop();
	      var branch = check.apply(void 0, args) ? then : otherwise;
	      if (!branch) return undefined;
	      if (typeof branch === 'function') return branch(schema);
	      return schema.concat(branch.resolve(options));
	    };
	  }
	  var _proto = Condition.prototype;
	  _proto.resolve = function resolve(base, options) {
	    var values = this.refs.map(function (ref) {
	      return ref.getValue(options);
	    });
	    var schema = this.fn.apply(base, values.concat(base, options));
	    if (schema === undefined || schema === base) return base;
	    if (!isSchema(schema)) throw new TypeError('conditions must return a schema object');
	    return schema.resolve(options);
	  };
	  return Condition;
	}();

	function _objectWithoutPropertiesLoose(source, excluded) {
	  if (source == null) return {};
	  var target = {};
	  var sourceKeys = Object.keys(source);
	  var key, i;
	  for (i = 0; i < sourceKeys.length; i++) {
	    key = sourceKeys[i];
	    if (excluded.indexOf(key) >= 0) continue;
	    target[key] = source[key];
	  }
	  return target;
	}

	function makeArrayFrom(obj) {
	  return Array.prototype.slice.apply(obj);
	}
	var PENDING = "pending",
	    RESOLVED = "resolved",
	    REJECTED = "rejected";
	function SynchronousPromise(handler) {
	  this.status = PENDING;
	  this._continuations = [];
	  this._parent = null;
	  this._paused = false;
	  if (handler) {
	    handler.call(this, this._continueWith.bind(this), this._failWith.bind(this));
	  }
	}
	function looksLikeAPromise(obj) {
	  return obj && typeof obj.then === "function";
	}
	function passThrough(value) {
	  return value;
	}
	SynchronousPromise.prototype = {
	  then: function (nextFn, catchFn) {
	    var next = SynchronousPromise.unresolved()._setParent(this);
	    if (this._isRejected()) {
	      if (this._paused) {
	        this._continuations.push({
	          promise: next,
	          nextFn: nextFn,
	          catchFn: catchFn
	        });
	        return next;
	      }
	      if (catchFn) {
	        try {
	          var catchResult = catchFn(this._error);
	          if (looksLikeAPromise(catchResult)) {
	            this._chainPromiseData(catchResult, next);
	            return next;
	          } else {
	            return SynchronousPromise.resolve(catchResult)._setParent(this);
	          }
	        } catch (e) {
	          return SynchronousPromise.reject(e)._setParent(this);
	        }
	      }
	      return SynchronousPromise.reject(this._error)._setParent(this);
	    }
	    this._continuations.push({
	      promise: next,
	      nextFn: nextFn,
	      catchFn: catchFn
	    });
	    this._runResolutions();
	    return next;
	  },
	  catch: function (handler) {
	    if (this._isResolved()) {
	      return SynchronousPromise.resolve(this._data)._setParent(this);
	    }
	    var next = SynchronousPromise.unresolved()._setParent(this);
	    this._continuations.push({
	      promise: next,
	      catchFn: handler
	    });
	    this._runRejections();
	    return next;
	  },
	  finally: function (callback) {
	    var ran = false;
	    function runFinally(result) {
	      if (!ran) {
	        ran = true;
	        if (!callback) {
	          callback = passThrough;
	        }
	        return callback(result);
	      }
	    }
	    return this.then(function (result) {
	      return runFinally(result);
	    }).catch(function (err) {
	      return runFinally(err);
	    });
	  },
	  pause: function () {
	    this._paused = true;
	    return this;
	  },
	  resume: function () {
	    var firstPaused = this._findFirstPaused();
	    if (firstPaused) {
	      firstPaused._paused = false;
	      firstPaused._runResolutions();
	      firstPaused._runRejections();
	    }
	    return this;
	  },
	  _findAncestry: function () {
	    return this._continuations.reduce(function (acc, cur) {
	      if (cur.promise) {
	        var node = {
	          promise: cur.promise,
	          children: cur.promise._findAncestry()
	        };
	        acc.push(node);
	      }
	      return acc;
	    }, []);
	  },
	  _setParent: function (parent) {
	    if (this._parent) {
	      throw new Error("parent already set");
	    }
	    this._parent = parent;
	    return this;
	  },
	  _continueWith: function (data) {
	    var firstPending = this._findFirstPending();
	    if (firstPending) {
	      firstPending._data = data;
	      firstPending._setResolved();
	    }
	  },
	  _findFirstPending: function () {
	    return this._findFirstAncestor(function (test) {
	      return test._isPending && test._isPending();
	    });
	  },
	  _findFirstPaused: function () {
	    return this._findFirstAncestor(function (test) {
	      return test._paused;
	    });
	  },
	  _findFirstAncestor: function (matching) {
	    var test = this;
	    var result;
	    while (test) {
	      if (matching(test)) {
	        result = test;
	      }
	      test = test._parent;
	    }
	    return result;
	  },
	  _failWith: function (error) {
	    var firstRejected = this._findFirstPending();
	    if (firstRejected) {
	      firstRejected._error = error;
	      firstRejected._setRejected();
	    }
	  },
	  _takeContinuations: function () {
	    return this._continuations.splice(0, this._continuations.length);
	  },
	  _runRejections: function () {
	    if (this._paused || !this._isRejected()) {
	      return;
	    }
	    var error = this._error,
	        continuations = this._takeContinuations(),
	        self = this;
	    continuations.forEach(function (cont) {
	      if (cont.catchFn) {
	        try {
	          var catchResult = cont.catchFn(error);
	          self._handleUserFunctionResult(catchResult, cont.promise);
	        } catch (e) {
	          cont.promise.reject(e);
	        }
	      } else {
	        cont.promise.reject(error);
	      }
	    });
	  },
	  _runResolutions: function () {
	    if (this._paused || !this._isResolved() || this._isPending()) {
	      return;
	    }
	    var continuations = this._takeContinuations();
	    if (looksLikeAPromise(this._data)) {
	      return this._handleWhenResolvedDataIsPromise(this._data);
	    }
	    var data = this._data;
	    var self = this;
	    continuations.forEach(function (cont) {
	      if (cont.nextFn) {
	        try {
	          var result = cont.nextFn(data);
	          self._handleUserFunctionResult(result, cont.promise);
	        } catch (e) {
	          self._handleResolutionError(e, cont);
	        }
	      } else if (cont.promise) {
	        cont.promise.resolve(data);
	      }
	    });
	  },
	  _handleResolutionError: function (e, continuation) {
	    this._setRejected();
	    if (continuation.catchFn) {
	      try {
	        continuation.catchFn(e);
	        return;
	      } catch (e2) {
	        e = e2;
	      }
	    }
	    if (continuation.promise) {
	      continuation.promise.reject(e);
	    }
	  },
	  _handleWhenResolvedDataIsPromise: function (data) {
	    var self = this;
	    return data.then(function (result) {
	      self._data = result;
	      self._runResolutions();
	    }).catch(function (error) {
	      self._error = error;
	      self._setRejected();
	      self._runRejections();
	    });
	  },
	  _handleUserFunctionResult: function (data, nextSynchronousPromise) {
	    if (looksLikeAPromise(data)) {
	      this._chainPromiseData(data, nextSynchronousPromise);
	    } else {
	      nextSynchronousPromise.resolve(data);
	    }
	  },
	  _chainPromiseData: function (promiseData, nextSynchronousPromise) {
	    promiseData.then(function (newData) {
	      nextSynchronousPromise.resolve(newData);
	    }).catch(function (newError) {
	      nextSynchronousPromise.reject(newError);
	    });
	  },
	  _setResolved: function () {
	    this.status = RESOLVED;
	    if (!this._paused) {
	      this._runResolutions();
	    }
	  },
	  _setRejected: function () {
	    this.status = REJECTED;
	    if (!this._paused) {
	      this._runRejections();
	    }
	  },
	  _isPending: function () {
	    return this.status === PENDING;
	  },
	  _isResolved: function () {
	    return this.status === RESOLVED;
	  },
	  _isRejected: function () {
	    return this.status === REJECTED;
	  }
	};
	SynchronousPromise.resolve = function (result) {
	  return new SynchronousPromise(function (resolve, reject) {
	    if (looksLikeAPromise(result)) {
	      result.then(function (newResult) {
	        resolve(newResult);
	      }).catch(function (error) {
	        reject(error);
	      });
	    } else {
	      resolve(result);
	    }
	  });
	};
	SynchronousPromise.reject = function (result) {
	  return new SynchronousPromise(function (resolve, reject) {
	    reject(result);
	  });
	};
	SynchronousPromise.unresolved = function () {
	  return new SynchronousPromise(function (resolve, reject) {
	    this.resolve = resolve;
	    this.reject = reject;
	  });
	};
	SynchronousPromise.all = function () {
	  var args = makeArrayFrom(arguments);
	  if (Array.isArray(args[0])) {
	    args = args[0];
	  }
	  if (!args.length) {
	    return SynchronousPromise.resolve([]);
	  }
	  return new SynchronousPromise(function (resolve, reject) {
	    var allData = [],
	        numResolved = 0,
	        doResolve = function () {
	      if (numResolved === args.length) {
	        resolve(allData);
	      }
	    },
	        rejected = false,
	        doReject = function (err) {
	      if (rejected) {
	        return;
	      }
	      rejected = true;
	      reject(err);
	    };
	    args.forEach(function (arg, idx) {
	      SynchronousPromise.resolve(arg).then(function (thisResult) {
	        allData[idx] = thisResult;
	        numResolved += 1;
	        doResolve();
	      }).catch(function (err) {
	        doReject(err);
	      });
	    });
	  });
	};
	if (Promise === SynchronousPromise) {
	  throw new Error("Please use SynchronousPromise.installGlobally() to install globally");
	}
	var RealPromise = Promise;
	SynchronousPromise.installGlobally = function (__awaiter) {
	  if (Promise === SynchronousPromise) {
	    return __awaiter;
	  }
	  var result = patchAwaiterIfRequired(__awaiter);
	  Promise = SynchronousPromise;
	  return result;
	};
	SynchronousPromise.uninstallGlobally = function () {
	  if (Promise === SynchronousPromise) {
	    Promise = RealPromise;
	  }
	};
	function patchAwaiterIfRequired(__awaiter) {
	  if (typeof __awaiter === "undefined" || __awaiter.__patched) {
	    return __awaiter;
	  }
	  var originalAwaiter = __awaiter;
	  __awaiter = function () {
	    originalAwaiter.apply(this, makeArrayFrom(arguments));
	  };
	  __awaiter.__patched = true;
	  return __awaiter;
	}
	var synchronousPromise = {
	  SynchronousPromise: SynchronousPromise
	};
	var synchronousPromise_1 = synchronousPromise.SynchronousPromise;

	var strReg = /\$\{\s*(\w+)\s*\}/g;
	var replace = function replace(str) {
	  return function (params) {
	    return str.replace(strReg, function (_, key) {
	      return printValue(params[key]);
	    });
	  };
	};
	function ValidationError(errors, value, field, type) {
	  var _this = this;
	  this.name = 'ValidationError';
	  this.value = value;
	  this.path = field;
	  this.type = type;
	  this.errors = [];
	  this.inner = [];
	  if (errors) [].concat(errors).forEach(function (err) {
	    _this.errors = _this.errors.concat(err.errors || err);
	    if (err.inner) _this.inner = _this.inner.concat(err.inner.length ? err.inner : err);
	  });
	  this.message = this.errors.length > 1 ? this.errors.length + " errors occurred" : this.errors[0];
	  if (Error.captureStackTrace) Error.captureStackTrace(this, ValidationError);
	}
	ValidationError.prototype = Object.create(Error.prototype);
	ValidationError.prototype.constructor = ValidationError;
	ValidationError.isError = function (err) {
	  return err && err.name === 'ValidationError';
	};
	ValidationError.formatError = function (message, params) {
	  if (typeof message === 'string') message = replace(message);
	  var fn = function fn(params) {
	    params.path = params.label || params.path || 'this';
	    return typeof message === 'function' ? message(params) : message;
	  };
	  return arguments.length === 1 ? fn : fn(params);
	};

	var promise = function promise(sync) {
	  return sync ? synchronousPromise_1 : Promise;
	};
	var unwrapError = function unwrapError(errors) {
	  if (errors === void 0) {
	    errors = [];
	  }
	  return errors.inner && errors.inner.length ? errors.inner : [].concat(errors);
	};
	function scopeToValue(promises, value, sync) {
	  var p = promise(sync).all(promises);
	  var b = p.catch(function (err) {
	    if (err.name === 'ValidationError') err.value = value;
	    throw err;
	  });
	  var c = b.then(function () {
	    return value;
	  });
	  return c;
	}
	function propagateErrors(endEarly, errors) {
	  return endEarly ? null : function (err) {
	    errors.push(err);
	    return err.value;
	  };
	}
	function settled(promises, sync) {
	  var Promise = promise(sync);
	  return Promise.all(promises.map(function (p) {
	    return Promise.resolve(p).then(function (value) {
	      return {
	        fulfilled: true,
	        value: value
	      };
	    }, function (value) {
	      return {
	        fulfilled: false,
	        value: value
	      };
	    });
	  }));
	}
	function collectErrors(_ref) {
	  var validations = _ref.validations,
	      value = _ref.value,
	      path = _ref.path,
	      sync = _ref.sync,
	      errors = _ref.errors,
	      sort = _ref.sort;
	  errors = unwrapError(errors);
	  return settled(validations, sync).then(function (results) {
	    var nestedErrors = results.filter(function (r) {
	      return !r.fulfilled;
	    }).reduce(function (arr, _ref2) {
	      var error = _ref2.value;
	      if (!ValidationError.isError(error)) {
	        throw error;
	      }
	      return arr.concat(error);
	    }, []);
	    if (sort) nestedErrors.sort(sort);
	    errors = nestedErrors.concat(errors);
	    if (errors.length) throw new ValidationError(errors, value, path);
	    return value;
	  });
	}
	function runValidations(_ref3) {
	  var endEarly = _ref3.endEarly,
	      options = _objectWithoutPropertiesLoose(_ref3, ["endEarly"]);
	  if (endEarly) return scopeToValue(options.validations, options.value, options.sync);
	  return collectErrors(options);
	}

	var isObject$1 = function isObject(obj) {
	  return Object.prototype.toString.call(obj) === '[object Object]';
	};
	function prependDeep(target, source) {
	  for (var key in source) {
	    if (has(source, key)) {
	      var sourceVal = source[key],
	          targetVal = target[key];
	      if (targetVal === undefined) {
	        target[key] = sourceVal;
	      } else if (targetVal === sourceVal) {
	        continue;
	      } else if (isSchema(targetVal)) {
	        if (isSchema(sourceVal)) target[key] = sourceVal.concat(targetVal);
	      } else if (isObject$1(targetVal)) {
	        if (isObject$1(sourceVal)) target[key] = prependDeep(targetVal, sourceVal);
	      } else if (Array.isArray(targetVal)) {
	        if (Array.isArray(sourceVal)) target[key] = sourceVal.concat(targetVal);
	      }
	    }
	  }
	  return target;
	}

	function createBaseFor(fromRight) {
	  return function (object, iteratee, keysFunc) {
	    var index = -1,
	        iterable = Object(object),
	        props = keysFunc(object),
	        length = props.length;
	    while (length--) {
	      var key = props[fromRight ? length : ++index];
	      if (iteratee(iterable[key], key, iterable) === false) {
	        break;
	      }
	    }
	    return object;
	  };
	}

	var baseFor = createBaseFor();

	function baseForOwn(object, iteratee) {
	  return object && baseFor(object, iteratee, keys);
	}

	var HASH_UNDEFINED$2 = '__lodash_hash_undefined__';
	function setCacheAdd(value) {
	  this.__data__.set(value, HASH_UNDEFINED$2);
	  return this;
	}

	function setCacheHas(value) {
	  return this.__data__.has(value);
	}

	function SetCache(values) {
	  var index = -1,
	      length = values == null ? 0 : values.length;
	  this.__data__ = new MapCache();
	  while (++index < length) {
	    this.add(values[index]);
	  }
	}
	SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
	SetCache.prototype.has = setCacheHas;

	function arraySome(array, predicate) {
	  var index = -1,
	      length = array == null ? 0 : array.length;
	  while (++index < length) {
	    if (predicate(array[index], index, array)) {
	      return true;
	    }
	  }
	  return false;
	}

	function cacheHas(cache, key) {
	  return cache.has(key);
	}

	var COMPARE_PARTIAL_FLAG = 1,
	    COMPARE_UNORDERED_FLAG = 2;
	function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
	  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
	      arrLength = array.length,
	      othLength = other.length;
	  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
	    return false;
	  }
	  var stacked = stack.get(array);
	  if (stacked && stack.get(other)) {
	    return stacked == other;
	  }
	  var index = -1,
	      result = true,
	      seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : undefined;
	  stack.set(array, other);
	  stack.set(other, array);
	  while (++index < arrLength) {
	    var arrValue = array[index],
	        othValue = other[index];
	    if (customizer) {
	      var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
	    }
	    if (compared !== undefined) {
	      if (compared) {
	        continue;
	      }
	      result = false;
	      break;
	    }
	    if (seen) {
	      if (!arraySome(other, function (othValue, othIndex) {
	        if (!cacheHas(seen, othIndex) && (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
	          return seen.push(othIndex);
	        }
	      })) {
	        result = false;
	        break;
	      }
	    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
	      result = false;
	      break;
	    }
	  }
	  stack['delete'](array);
	  stack['delete'](other);
	  return result;
	}

	var COMPARE_PARTIAL_FLAG$1 = 1,
	    COMPARE_UNORDERED_FLAG$1 = 2;
	var boolTag$3 = '[object Boolean]',
	    dateTag$3 = '[object Date]',
	    errorTag$2 = '[object Error]',
	    mapTag$6 = '[object Map]',
	    numberTag$3 = '[object Number]',
	    regexpTag$3 = '[object RegExp]',
	    setTag$6 = '[object Set]',
	    stringTag$4 = '[object String]',
	    symbolTag$3 = '[object Symbol]';
	var arrayBufferTag$3 = '[object ArrayBuffer]',
	    dataViewTag$4 = '[object DataView]';
	var symbolProto$2 = Symbol$1 ? Symbol$1.prototype : undefined,
	    symbolValueOf$1 = symbolProto$2 ? symbolProto$2.valueOf : undefined;
	function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
	  switch (tag) {
	    case dataViewTag$4:
	      if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
	        return false;
	      }
	      object = object.buffer;
	      other = other.buffer;
	    case arrayBufferTag$3:
	      if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
	        return false;
	      }
	      return true;
	    case boolTag$3:
	    case dateTag$3:
	    case numberTag$3:
	      return eq(+object, +other);
	    case errorTag$2:
	      return object.name == other.name && object.message == other.message;
	    case regexpTag$3:
	    case stringTag$4:
	      return object == other + '';
	    case mapTag$6:
	      var convert = mapToArray;
	    case setTag$6:
	      var isPartial = bitmask & COMPARE_PARTIAL_FLAG$1;
	      convert || (convert = setToArray);
	      if (object.size != other.size && !isPartial) {
	        return false;
	      }
	      var stacked = stack.get(object);
	      if (stacked) {
	        return stacked == other;
	      }
	      bitmask |= COMPARE_UNORDERED_FLAG$1;
	      stack.set(object, other);
	      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
	      stack['delete'](object);
	      return result;
	    case symbolTag$3:
	      if (symbolValueOf$1) {
	        return symbolValueOf$1.call(object) == symbolValueOf$1.call(other);
	      }
	  }
	  return false;
	}

	var COMPARE_PARTIAL_FLAG$2 = 1;
	var objectProto$e = Object.prototype;
	var hasOwnProperty$b = objectProto$e.hasOwnProperty;
	function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
	  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$2,
	      objProps = getAllKeys(object),
	      objLength = objProps.length,
	      othProps = getAllKeys(other),
	      othLength = othProps.length;
	  if (objLength != othLength && !isPartial) {
	    return false;
	  }
	  var index = objLength;
	  while (index--) {
	    var key = objProps[index];
	    if (!(isPartial ? key in other : hasOwnProperty$b.call(other, key))) {
	      return false;
	    }
	  }
	  var stacked = stack.get(object);
	  if (stacked && stack.get(other)) {
	    return stacked == other;
	  }
	  var result = true;
	  stack.set(object, other);
	  stack.set(other, object);
	  var skipCtor = isPartial;
	  while (++index < objLength) {
	    key = objProps[index];
	    var objValue = object[key],
	        othValue = other[key];
	    if (customizer) {
	      var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
	    }
	    if (!(compared === undefined ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
	      result = false;
	      break;
	    }
	    skipCtor || (skipCtor = key == 'constructor');
	  }
	  if (result && !skipCtor) {
	    var objCtor = object.constructor,
	        othCtor = other.constructor;
	    if (objCtor != othCtor && 'constructor' in object && 'constructor' in other && !(typeof objCtor == 'function' && objCtor instanceof objCtor && typeof othCtor == 'function' && othCtor instanceof othCtor)) {
	      result = false;
	    }
	  }
	  stack['delete'](object);
	  stack['delete'](other);
	  return result;
	}

	var COMPARE_PARTIAL_FLAG$3 = 1;
	var argsTag$3 = '[object Arguments]',
	    arrayTag$2 = '[object Array]',
	    objectTag$3 = '[object Object]';
	var objectProto$f = Object.prototype;
	var hasOwnProperty$c = objectProto$f.hasOwnProperty;
	function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
	  var objIsArr = isArray(object),
	      othIsArr = isArray(other),
	      objTag = objIsArr ? arrayTag$2 : getTag$1(object),
	      othTag = othIsArr ? arrayTag$2 : getTag$1(other);
	  objTag = objTag == argsTag$3 ? objectTag$3 : objTag;
	  othTag = othTag == argsTag$3 ? objectTag$3 : othTag;
	  var objIsObj = objTag == objectTag$3,
	      othIsObj = othTag == objectTag$3,
	      isSameTag = objTag == othTag;
	  if (isSameTag && isBuffer(object)) {
	    if (!isBuffer(other)) {
	      return false;
	    }
	    objIsArr = true;
	    objIsObj = false;
	  }
	  if (isSameTag && !objIsObj) {
	    stack || (stack = new Stack());
	    return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
	  }
	  if (!(bitmask & COMPARE_PARTIAL_FLAG$3)) {
	    var objIsWrapped = objIsObj && hasOwnProperty$c.call(object, '__wrapped__'),
	        othIsWrapped = othIsObj && hasOwnProperty$c.call(other, '__wrapped__');
	    if (objIsWrapped || othIsWrapped) {
	      var objUnwrapped = objIsWrapped ? object.value() : object,
	          othUnwrapped = othIsWrapped ? other.value() : other;
	      stack || (stack = new Stack());
	      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
	    }
	  }
	  if (!isSameTag) {
	    return false;
	  }
	  stack || (stack = new Stack());
	  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
	}

	function baseIsEqual(value, other, bitmask, customizer, stack) {
	  if (value === other) {
	    return true;
	  }
	  if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
	    return value !== value && other !== other;
	  }
	  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
	}

	var COMPARE_PARTIAL_FLAG$4 = 1,
	    COMPARE_UNORDERED_FLAG$2 = 2;
	function baseIsMatch(object, source, matchData, customizer) {
	  var index = matchData.length,
	      length = index,
	      noCustomizer = !customizer;
	  if (object == null) {
	    return !length;
	  }
	  object = Object(object);
	  while (index--) {
	    var data = matchData[index];
	    if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
	      return false;
	    }
	  }
	  while (++index < length) {
	    data = matchData[index];
	    var key = data[0],
	        objValue = object[key],
	        srcValue = data[1];
	    if (noCustomizer && data[2]) {
	      if (objValue === undefined && !(key in object)) {
	        return false;
	      }
	    } else {
	      var stack = new Stack();
	      if (customizer) {
	        var result = customizer(objValue, srcValue, key, object, source, stack);
	      }
	      if (!(result === undefined ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG$4 | COMPARE_UNORDERED_FLAG$2, customizer, stack) : result)) {
	        return false;
	      }
	    }
	  }
	  return true;
	}

	function isStrictComparable(value) {
	  return value === value && !isObject(value);
	}

	function getMatchData(object) {
	  var result = keys(object),
	      length = result.length;
	  while (length--) {
	    var key = result[length],
	        value = object[key];
	    result[length] = [key, value, isStrictComparable(value)];
	  }
	  return result;
	}

	function matchesStrictComparable(key, srcValue) {
	  return function (object) {
	    if (object == null) {
	      return false;
	    }
	    return object[key] === srcValue && (srcValue !== undefined || key in Object(object));
	  };
	}

	function baseMatches(source) {
	  var matchData = getMatchData(source);
	  if (matchData.length == 1 && matchData[0][2]) {
	    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
	  }
	  return function (object) {
	    return object === source || baseIsMatch(object, source, matchData);
	  };
	}

	function baseGet(object, path) {
	  path = castPath(path, object);
	  var index = 0,
	      length = path.length;
	  while (object != null && index < length) {
	    object = object[toKey(path[index++])];
	  }
	  return index && index == length ? object : undefined;
	}

	function get(object, path, defaultValue) {
	  var result = object == null ? undefined : baseGet(object, path);
	  return result === undefined ? defaultValue : result;
	}

	function baseHasIn(object, key) {
	  return object != null && key in Object(object);
	}

	function hasIn(object, path) {
	  return object != null && hasPath(object, path, baseHasIn);
	}

	var COMPARE_PARTIAL_FLAG$5 = 1,
	    COMPARE_UNORDERED_FLAG$3 = 2;
	function baseMatchesProperty(path, srcValue) {
	  if (isKey(path) && isStrictComparable(srcValue)) {
	    return matchesStrictComparable(toKey(path), srcValue);
	  }
	  return function (object) {
	    var objValue = get(object, path);
	    return objValue === undefined && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG$5 | COMPARE_UNORDERED_FLAG$3);
	  };
	}

	function identity(value) {
	  return value;
	}

	function baseProperty(key) {
	  return function (object) {
	    return object == null ? undefined : object[key];
	  };
	}

	function basePropertyDeep(path) {
	  return function (object) {
	    return baseGet(object, path);
	  };
	}

	function property(path) {
	  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
	}

	function baseIteratee(value) {
	  if (typeof value == 'function') {
	    return value;
	  }
	  if (value == null) {
	    return identity;
	  }
	  if (typeof value == 'object') {
	    return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
	  }
	  return property(value);
	}

	function mapValues(object, iteratee) {
	  var result = {};
	  iteratee = baseIteratee(iteratee);
	  baseForOwn(object, function (value, key, object) {
	    baseAssignValue(result, key, iteratee(value, key, object));
	  });
	  return result;
	}

	function Cache(maxSize) {
	  this._maxSize = maxSize;
	  this.clear();
	}
	Cache.prototype.clear = function () {
	  this._size = 0;
	  this._values = Object.create(null);
	};
	Cache.prototype.get = function (key) {
	  return this._values[key];
	};
	Cache.prototype.set = function (key, value) {
	  this._size >= this._maxSize && this.clear();
	  if (!(key in this._values)) this._size++;
	  return this._values[key] = value;
	};
	var SPLIT_REGEX = /[^.^\]^[]+|(?=\[\]|\.\.)/g,
	    DIGIT_REGEX = /^\d+$/,
	    LEAD_DIGIT_REGEX = /^\d/,
	    SPEC_CHAR_REGEX = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g,
	    CLEAN_QUOTES_REGEX = /^\s*(['"]?)(.*?)(\1)\s*$/,
	    MAX_CACHE_SIZE = 512;
	var pathCache = new Cache(MAX_CACHE_SIZE),
	    setCache = new Cache(MAX_CACHE_SIZE),
	    getCache = new Cache(MAX_CACHE_SIZE);
	var propertyExpr = {
	  Cache: Cache,
	  split: split,
	  normalizePath: normalizePath,
	  setter: function (path) {
	    var parts = normalizePath(path);
	    return setCache.get(path) || setCache.set(path, function setter(data, value) {
	      var index = 0,
	          len = parts.length;
	      while (index < len - 1) {
	        data = data[parts[index++]];
	      }
	      data[parts[index]] = value;
	    });
	  },
	  getter: function (path, safe) {
	    var parts = normalizePath(path);
	    return getCache.get(path) || getCache.set(path, function getter(data) {
	      var index = 0,
	          len = parts.length;
	      while (index < len) {
	        if (data != null || !safe) data = data[parts[index++]];else return;
	      }
	      return data;
	    });
	  },
	  join: function (segments) {
	    return segments.reduce(function (path, part) {
	      return path + (isQuoted(part) || DIGIT_REGEX.test(part) ? '[' + part + ']' : (path ? '.' : '') + part);
	    }, '');
	  },
	  forEach: function (path, cb, thisArg) {
	    forEach(Array.isArray(path) ? path : split(path), cb, thisArg);
	  }
	};
	function normalizePath(path) {
	  return pathCache.get(path) || pathCache.set(path, split(path).map(function (part) {
	    return part.replace(CLEAN_QUOTES_REGEX, '$2');
	  }));
	}
	function split(path) {
	  return path.match(SPLIT_REGEX);
	}
	function forEach(parts, iter, thisArg) {
	  var len = parts.length,
	      part,
	      idx,
	      isArray,
	      isBracket;
	  for (idx = 0; idx < len; idx++) {
	    part = parts[idx];
	    if (part) {
	      if (shouldBeQuoted(part)) {
	        part = '"' + part + '"';
	      }
	      isBracket = isQuoted(part);
	      isArray = !isBracket && /^\d+$/.test(part);
	      iter.call(thisArg, part, isBracket, isArray, idx, parts);
	    }
	  }
	}
	function isQuoted(str) {
	  return typeof str === 'string' && str && ["'", '"'].indexOf(str.charAt(0)) !== -1;
	}
	function hasLeadingNumber(part) {
	  return part.match(LEAD_DIGIT_REGEX) && !part.match(DIGIT_REGEX);
	}
	function hasSpecialChars(part) {
	  return SPEC_CHAR_REGEX.test(part);
	}
	function shouldBeQuoted(part) {
	  return !isQuoted(part) && (hasLeadingNumber(part) || hasSpecialChars(part));
	}
	var propertyExpr_2 = propertyExpr.split;
	var propertyExpr_5 = propertyExpr.getter;
	var propertyExpr_7 = propertyExpr.forEach;

	var prefixes = {
	  context: '$',
	  value: '.'
	};
	var Reference = function () {
	  function Reference(key, options) {
	    if (options === void 0) {
	      options = {};
	    }
	    if (typeof key !== 'string') throw new TypeError('ref must be a string, got: ' + key);
	    this.key = key.trim();
	    if (key === '') throw new TypeError('ref must be a non-empty string');
	    this.isContext = this.key[0] === prefixes.context;
	    this.isValue = this.key[0] === prefixes.value;
	    this.isSibling = !this.isContext && !this.isValue;
	    var prefix = this.isContext ? prefixes.context : this.isValue ? prefixes.value : '';
	    this.path = this.key.slice(prefix.length);
	    this.getter = this.path && propertyExpr_5(this.path, true);
	    this.map = options.map;
	  }
	  var _proto = Reference.prototype;
	  _proto.getValue = function getValue(options) {
	    var result = this.isContext ? options.context : this.isValue ? options.value : options.parent;
	    if (this.getter) result = this.getter(result || {});
	    if (this.map) result = this.map(result);
	    return result;
	  };
	  _proto.cast = function cast(value, options) {
	    return this.getValue(_extends({}, options, {
	      value: value
	    }));
	  };
	  _proto.resolve = function resolve() {
	    return this;
	  };
	  _proto.describe = function describe() {
	    return {
	      type: 'ref',
	      key: this.key
	    };
	  };
	  _proto.toString = function toString() {
	    return "Ref(" + this.key + ")";
	  };
	  Reference.isRef = function isRef(value) {
	    return value && value.__isYupRef;
	  };
	  return Reference;
	}();
	Reference.prototype.__isYupRef = true;

	var formatError = ValidationError.formatError;
	var thenable = function thenable(p) {
	  return p && typeof p.then === 'function' && typeof p.catch === 'function';
	};
	function runTest(testFn, ctx, value, sync) {
	  var result = testFn.call(ctx, value);
	  if (!sync) return Promise.resolve(result);
	  if (thenable(result)) {
	    throw new Error("Validation test of type: \"" + ctx.type + "\" returned a Promise during a synchronous validate. " + "This test will finish after the validate call has returned");
	  }
	  return synchronousPromise_1.resolve(result);
	}
	function resolveParams(oldParams, newParams, resolve) {
	  return mapValues(_extends({}, oldParams, {}, newParams), resolve);
	}
	function createErrorFactory(_ref) {
	  var value = _ref.value,
	      label = _ref.label,
	      resolve = _ref.resolve,
	      originalValue = _ref.originalValue,
	      opts = _objectWithoutPropertiesLoose(_ref, ["value", "label", "resolve", "originalValue"]);
	  return function createError(_temp) {
	    var _ref2 = _temp === void 0 ? {} : _temp,
	        _ref2$path = _ref2.path,
	        path = _ref2$path === void 0 ? opts.path : _ref2$path,
	        _ref2$message = _ref2.message,
	        message = _ref2$message === void 0 ? opts.message : _ref2$message,
	        _ref2$type = _ref2.type,
	        type = _ref2$type === void 0 ? opts.name : _ref2$type,
	        params = _ref2.params;
	    params = _extends({
	      path: path,
	      value: value,
	      originalValue: originalValue,
	      label: label
	    }, resolveParams(opts.params, params, resolve));
	    return _extends(new ValidationError(formatError(message, params), value, path, type), {
	      params: params
	    });
	  };
	}
	function createValidation(options) {
	  var name = options.name,
	      message = options.message,
	      test = options.test,
	      params = options.params;
	  function validate(_ref3) {
	    var value = _ref3.value,
	        path = _ref3.path,
	        label = _ref3.label,
	        options = _ref3.options,
	        originalValue = _ref3.originalValue,
	        sync = _ref3.sync,
	        rest = _objectWithoutPropertiesLoose(_ref3, ["value", "path", "label", "options", "originalValue", "sync"]);
	    var parent = options.parent;
	    var resolve = function resolve(item) {
	      return Reference.isRef(item) ? item.getValue({
	        value: value,
	        parent: parent,
	        context: options.context
	      }) : item;
	    };
	    var createError = createErrorFactory({
	      message: message,
	      path: path,
	      value: value,
	      originalValue: originalValue,
	      params: params,
	      label: label,
	      resolve: resolve,
	      name: name
	    });
	    var ctx = _extends({
	      path: path,
	      parent: parent,
	      type: name,
	      createError: createError,
	      resolve: resolve,
	      options: options
	    }, rest);
	    return runTest(test, ctx, value, sync).then(function (validOrError) {
	      if (ValidationError.isError(validOrError)) throw validOrError;else if (!validOrError) throw createError();
	    });
	  }
	  validate.OPTIONS = options;
	  return validate;
	}

	var trim = function trim(part) {
	  return part.substr(0, part.length - 1).substr(1);
	};
	function getIn(schema, path, value, context) {
	  if (context === void 0) {
	    context = value;
	  }
	  var parent, lastPart, lastPartDebug;
	  if (!path) return {
	    parent: parent,
	    parentPath: path,
	    schema: schema
	  };
	  propertyExpr_7(path, function (_part, isBracket, isArray) {
	    var part = isBracket ? trim(_part) : _part;
	    schema = schema.resolve({
	      context: context,
	      parent: parent,
	      value: value
	    });
	    if (schema.innerType) {
	      var idx = isArray ? parseInt(part, 10) : 0;
	      if (value && idx >= value.length) {
	        throw new Error("Yup.reach cannot resolve an array item at index: " + _part + ", in the path: " + path + ". " + "because there is no value at that index. ");
	      }
	      parent = value;
	      value = value && value[idx];
	      schema = schema.innerType;
	    }
	    if (!isArray) {
	      if (!schema.fields || !schema.fields[part]) throw new Error("The schema does not contain the path: " + path + ". " + ("(failed at: " + lastPartDebug + " which is a type: \"" + schema._type + "\")"));
	      parent = value;
	      value = value && value[part];
	      schema = schema.fields[part];
	    }
	    lastPart = part;
	    lastPartDebug = isBracket ? '[' + _part + ']' : '.' + _part;
	  });
	  return {
	    schema: schema,
	    parent: parent,
	    parentPath: lastPart
	  };
	}
	var reach = function reach(obj, path, value, context) {
	  return getIn(obj, path, value, context).schema;
	};

	var RefSet = function () {
	  function RefSet() {
	    this.list = new Set();
	    this.refs = new Map();
	  }
	  var _proto = RefSet.prototype;
	  _proto.toArray = function toArray$1() {
	    return toArray(this.list).concat(toArray(this.refs.values()));
	  };
	  _proto.add = function add(value) {
	    Reference.isRef(value) ? this.refs.set(value.key, value) : this.list.add(value);
	  };
	  _proto.delete = function _delete(value) {
	    Reference.isRef(value) ? this.refs.delete(value.key) : this.list.delete(value);
	  };
	  _proto.has = function has(value, resolve) {
	    if (this.list.has(value)) return true;
	    var item,
	        values = this.refs.values();
	    while (item = values.next(), !item.done) {
	      if (resolve(item.value) === value) return true;
	    }
	    return false;
	  };
	  _proto.clone = function clone() {
	    var next = new RefSet();
	    next.list = new Set(this.list);
	    next.refs = new Map(this.refs);
	    return next;
	  };
	  _proto.merge = function merge(newItems, removeItems) {
	    var next = this.clone();
	    newItems.list.forEach(function (value) {
	      return next.add(value);
	    });
	    newItems.refs.forEach(function (value) {
	      return next.add(value);
	    });
	    removeItems.list.forEach(function (value) {
	      return next.delete(value);
	    });
	    removeItems.refs.forEach(function (value) {
	      return next.delete(value);
	    });
	    return next;
	  };
	  return RefSet;
	}();
	function SchemaType(options) {
	  var _this = this;
	  if (options === void 0) {
	    options = {};
	  }
	  if (!(this instanceof SchemaType)) return new SchemaType();
	  this._deps = [];
	  this._conditions = [];
	  this._options = {
	    abortEarly: true,
	    recursive: true
	  };
	  this._exclusive = Object.create(null);
	  this._whitelist = new RefSet();
	  this._blacklist = new RefSet();
	  this.tests = [];
	  this.transforms = [];
	  this.withMutation(function () {
	    _this.typeError(mixed.notType);
	  });
	  if (has(options, 'default')) this._defaultDefault = options.default;
	  this.type = options.type || 'mixed';
	  this._type = options.type || 'mixed';
	}
	var proto = SchemaType.prototype = {
	  __isYupSchema__: true,
	  constructor: SchemaType,
	  clone: function clone() {
	    var _this2 = this;
	    if (this._mutate) return this;
	    return cloneDeepWith(this, function (value) {
	      if (isSchema(value) && value !== _this2) return value;
	    });
	  },
	  label: function label(_label) {
	    var next = this.clone();
	    next._label = _label;
	    return next;
	  },
	  meta: function meta(obj) {
	    if (arguments.length === 0) return this._meta;
	    var next = this.clone();
	    next._meta = _extends(next._meta || {}, obj);
	    return next;
	  },
	  withMutation: function withMutation(fn) {
	    var before = this._mutate;
	    this._mutate = true;
	    var result = fn(this);
	    this._mutate = before;
	    return result;
	  },
	  concat: function concat(schema) {
	    if (!schema || schema === this) return this;
	    if (schema._type !== this._type && this._type !== 'mixed') throw new TypeError("You cannot `concat()` schema's of different types: " + this._type + " and " + schema._type);
	    var next = prependDeep(schema.clone(), this);
	    if (has(schema, '_default')) next._default = schema._default;
	    next.tests = this.tests;
	    next._exclusive = this._exclusive;
	    next._whitelist = this._whitelist.merge(schema._whitelist, schema._blacklist);
	    next._blacklist = this._blacklist.merge(schema._blacklist, schema._whitelist);
	    next.withMutation(function (next) {
	      schema.tests.forEach(function (fn) {
	        next.test(fn.OPTIONS);
	      });
	    });
	    return next;
	  },
	  isType: function isType(v) {
	    if (this._nullable && v === null) return true;
	    return !this._typeCheck || this._typeCheck(v);
	  },
	  resolve: function resolve(options) {
	    var schema = this;
	    if (schema._conditions.length) {
	      var conditions = schema._conditions;
	      schema = schema.clone();
	      schema._conditions = [];
	      schema = conditions.reduce(function (schema, condition) {
	        return condition.resolve(schema, options);
	      }, schema);
	      schema = schema.resolve(options);
	    }
	    return schema;
	  },
	  cast: function cast(value, options) {
	    if (options === void 0) {
	      options = {};
	    }
	    var resolvedSchema = this.resolve(_extends({}, options, {
	      value: value
	    }));
	    var result = resolvedSchema._cast(value, options);
	    if (value !== undefined && options.assert !== false && resolvedSchema.isType(result) !== true) {
	      var formattedValue = printValue(value);
	      var formattedResult = printValue(result);
	      throw new TypeError("The value of " + (options.path || 'field') + " could not be cast to a value " + ("that satisfies the schema type: \"" + resolvedSchema._type + "\". \n\n") + ("attempted value: " + formattedValue + " \n") + (formattedResult !== formattedValue ? "result of cast: " + formattedResult : ''));
	    }
	    return result;
	  },
	  _cast: function _cast(rawValue) {
	    var _this3 = this;
	    var value = rawValue === undefined ? rawValue : this.transforms.reduce(function (value, fn) {
	      return fn.call(_this3, value, rawValue);
	    }, rawValue);
	    if (value === undefined && has(this, '_default')) {
	      value = this.default();
	    }
	    return value;
	  },
	  _validate: function _validate(_value, options) {
	    var _this4 = this;
	    if (options === void 0) {
	      options = {};
	    }
	    var value = _value;
	    var originalValue = options.originalValue != null ? options.originalValue : _value;
	    var isStrict = this._option('strict', options);
	    var endEarly = this._option('abortEarly', options);
	    var sync = options.sync;
	    var path = options.path;
	    var label = this._label;
	    if (!isStrict) {
	      value = this._cast(value, _extends({
	        assert: false
	      }, options));
	    }
	    var validationParams = {
	      value: value,
	      path: path,
	      schema: this,
	      options: options,
	      label: label,
	      originalValue: originalValue,
	      sync: sync
	    };
	    var initialTests = [];
	    if (this._typeError) initialTests.push(this._typeError(validationParams));
	    if (this._whitelistError) initialTests.push(this._whitelistError(validationParams));
	    if (this._blacklistError) initialTests.push(this._blacklistError(validationParams));
	    return runValidations({
	      validations: initialTests,
	      endEarly: endEarly,
	      value: value,
	      path: path,
	      sync: sync
	    }).then(function (value) {
	      return runValidations({
	        path: path,
	        sync: sync,
	        value: value,
	        endEarly: endEarly,
	        validations: _this4.tests.map(function (fn) {
	          return fn(validationParams);
	        })
	      });
	    });
	  },
	  validate: function validate(value, options) {
	    if (options === void 0) {
	      options = {};
	    }
	    var schema = this.resolve(_extends({}, options, {
	      value: value
	    }));
	    return schema._validate(value, options);
	  },
	  validateSync: function validateSync(value, options) {
	    if (options === void 0) {
	      options = {};
	    }
	    var schema = this.resolve(_extends({}, options, {
	      value: value
	    }));
	    var result, err;
	    schema._validate(value, _extends({}, options, {
	      sync: true
	    })).then(function (r) {
	      return result = r;
	    }).catch(function (e) {
	      return err = e;
	    });
	    if (err) throw err;
	    return result;
	  },
	  isValid: function isValid(value, options) {
	    return this.validate(value, options).then(function () {
	      return true;
	    }).catch(function (err) {
	      if (err.name === 'ValidationError') return false;
	      throw err;
	    });
	  },
	  isValidSync: function isValidSync(value, options) {
	    try {
	      this.validateSync(value, options);
	      return true;
	    } catch (err) {
	      if (err.name === 'ValidationError') return false;
	      throw err;
	    }
	  },
	  getDefault: function getDefault(options) {
	    if (options === void 0) {
	      options = {};
	    }
	    var schema = this.resolve(options);
	    return schema.default();
	  },
	  default: function _default(def) {
	    if (arguments.length === 0) {
	      var defaultValue = has(this, '_default') ? this._default : this._defaultDefault;
	      return typeof defaultValue === 'function' ? defaultValue.call(this) : cloneDeepWith(defaultValue);
	    }
	    var next = this.clone();
	    next._default = def;
	    return next;
	  },
	  strict: function strict(isStrict) {
	    if (isStrict === void 0) {
	      isStrict = true;
	    }
	    var next = this.clone();
	    next._options.strict = isStrict;
	    return next;
	  },
	  _isPresent: function _isPresent(value) {
	    return value != null;
	  },
	  required: function required(message) {
	    if (message === void 0) {
	      message = mixed.required;
	    }
	    return this.test({
	      message: message,
	      name: 'required',
	      exclusive: true,
	      test: function test(value) {
	        return this.schema._isPresent(value);
	      }
	    });
	  },
	  notRequired: function notRequired() {
	    var next = this.clone();
	    next.tests = next.tests.filter(function (test) {
	      return test.OPTIONS.name !== 'required';
	    });
	    return next;
	  },
	  nullable: function nullable(isNullable) {
	    if (isNullable === void 0) {
	      isNullable = true;
	    }
	    var next = this.clone();
	    next._nullable = isNullable;
	    return next;
	  },
	  transform: function transform(fn) {
	    var next = this.clone();
	    next.transforms.push(fn);
	    return next;
	  },
	  test: function test() {
	    var opts;
	    if (arguments.length === 1) {
	      if (typeof (arguments.length <= 0 ? undefined : arguments[0]) === 'function') {
	        opts = {
	          test: arguments.length <= 0 ? undefined : arguments[0]
	        };
	      } else {
	        opts = arguments.length <= 0 ? undefined : arguments[0];
	      }
	    } else if (arguments.length === 2) {
	      opts = {
	        name: arguments.length <= 0 ? undefined : arguments[0],
	        test: arguments.length <= 1 ? undefined : arguments[1]
	      };
	    } else {
	      opts = {
	        name: arguments.length <= 0 ? undefined : arguments[0],
	        message: arguments.length <= 1 ? undefined : arguments[1],
	        test: arguments.length <= 2 ? undefined : arguments[2]
	      };
	    }
	    if (opts.message === undefined) opts.message = mixed.default;
	    if (typeof opts.test !== 'function') throw new TypeError('`test` is a required parameters');
	    var next = this.clone();
	    var validate = createValidation(opts);
	    var isExclusive = opts.exclusive || opts.name && next._exclusive[opts.name] === true;
	    if (opts.exclusive && !opts.name) {
	      throw new TypeError('Exclusive tests must provide a unique `name` identifying the test');
	    }
	    next._exclusive[opts.name] = !!opts.exclusive;
	    next.tests = next.tests.filter(function (fn) {
	      if (fn.OPTIONS.name === opts.name) {
	        if (isExclusive) return false;
	        if (fn.OPTIONS.test === validate.OPTIONS.test) return false;
	      }
	      return true;
	    });
	    next.tests.push(validate);
	    return next;
	  },
	  when: function when(keys, options) {
	    if (arguments.length === 1) {
	      options = keys;
	      keys = '.';
	    }
	    var next = this.clone(),
	        deps = [].concat(keys).map(function (key) {
	      return new Reference(key);
	    });
	    deps.forEach(function (dep) {
	      if (dep.isSibling) next._deps.push(dep.key);
	    });
	    next._conditions.push(new Condition(deps, options));
	    return next;
	  },
	  typeError: function typeError(message) {
	    var next = this.clone();
	    next._typeError = createValidation({
	      message: message,
	      name: 'typeError',
	      test: function test(value) {
	        if (value !== undefined && !this.schema.isType(value)) return this.createError({
	          params: {
	            type: this.schema._type
	          }
	        });
	        return true;
	      }
	    });
	    return next;
	  },
	  oneOf: function oneOf(enums, message) {
	    if (message === void 0) {
	      message = mixed.oneOf;
	    }
	    var next = this.clone();
	    enums.forEach(function (val) {
	      next._whitelist.add(val);
	      next._blacklist.delete(val);
	    });
	    next._whitelistError = createValidation({
	      message: message,
	      name: 'oneOf',
	      test: function test(value) {
	        if (value === undefined) return true;
	        var valids = this.schema._whitelist;
	        return valids.has(value, this.resolve) ? true : this.createError({
	          params: {
	            values: valids.toArray().join(', ')
	          }
	        });
	      }
	    });
	    return next;
	  },
	  notOneOf: function notOneOf(enums, message) {
	    if (message === void 0) {
	      message = mixed.notOneOf;
	    }
	    var next = this.clone();
	    enums.forEach(function (val) {
	      next._blacklist.add(val);
	      next._whitelist.delete(val);
	    });
	    next._blacklistError = createValidation({
	      message: message,
	      name: 'notOneOf',
	      test: function test(value) {
	        var invalids = this.schema._blacklist;
	        if (invalids.has(value, this.resolve)) return this.createError({
	          params: {
	            values: invalids.toArray().join(', ')
	          }
	        });
	        return true;
	      }
	    });
	    return next;
	  },
	  strip: function strip(_strip) {
	    if (_strip === void 0) {
	      _strip = true;
	    }
	    var next = this.clone();
	    next._strip = _strip;
	    return next;
	  },
	  _option: function _option(key, overrides) {
	    return has(overrides, key) ? overrides[key] : this._options[key];
	  },
	  describe: function describe() {
	    var next = this.clone();
	    return {
	      type: next._type,
	      meta: next._meta,
	      label: next._label,
	      tests: next.tests.map(function (fn) {
	        return {
	          name: fn.OPTIONS.name,
	          params: fn.OPTIONS.params
	        };
	      }).filter(function (n, idx, list) {
	        return list.findIndex(function (c) {
	          return c.name === n.name;
	        }) === idx;
	      })
	    };
	  },
	  defined: function defined(message) {
	    if (message === void 0) {
	      message = mixed.defined;
	    }
	    return this.nullable().test({
	      message: message,
	      name: 'defined',
	      exclusive: true,
	      test: function test(value) {
	        return value !== undefined;
	      }
	    });
	  }
	};
	var _loop = function _loop() {
	  var method = _arr[_i];
	  proto[method + "At"] = function (path, value, options) {
	    if (options === void 0) {
	      options = {};
	    }
	    var _getIn = getIn(this, path, value, options.context),
	        parent = _getIn.parent,
	        parentPath = _getIn.parentPath,
	        schema = _getIn.schema;
	    return schema[method](parent && parent[parentPath], _extends({}, options, {
	      parent: parent,
	      path: path
	    }));
	  };
	};
	for (var _i = 0, _arr = ['validate', 'validateSync']; _i < _arr.length; _i++) {
	  _loop();
	}
	for (var _i2 = 0, _arr2 = ['equals', 'is']; _i2 < _arr2.length; _i2++) {
	  var alias = _arr2[_i2];
	  proto[alias] = proto.oneOf;
	}
	for (var _i3 = 0, _arr3 = ['not', 'nope']; _i3 < _arr3.length; _i3++) {
	  var _alias = _arr3[_i3];
	  proto[_alias] = proto.notOneOf;
	}
	proto.optional = proto.notRequired;

	function inherits(ctor, superCtor, spec) {
	  ctor.prototype = Object.create(superCtor.prototype, {
	    constructor: {
	      value: ctor,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  _extends(ctor.prototype, spec);
	}

	function BooleanSchema() {
	  var _this = this;
	  if (!(this instanceof BooleanSchema)) return new BooleanSchema();
	  SchemaType.call(this, {
	    type: 'boolean'
	  });
	  this.withMutation(function () {
	    _this.transform(function (value) {
	      if (!this.isType(value)) {
	        if (/^(true|1)$/i.test(value)) return true;
	        if (/^(false|0)$/i.test(value)) return false;
	      }
	      return value;
	    });
	  });
	}
	inherits(BooleanSchema, SchemaType, {
	  _typeCheck: function _typeCheck(v) {
	    if (v instanceof Boolean) v = v.valueOf();
	    return typeof v === 'boolean';
	  }
	});

	var isAbsent = (function (value) {
	  return value == null;
	});

	var rEmail = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;
	var rUrl = /^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;
	var isTrimmed = function isTrimmed(value) {
	  return isAbsent(value) || value === value.trim();
	};
	function StringSchema() {
	  var _this = this;
	  if (!(this instanceof StringSchema)) return new StringSchema();
	  SchemaType.call(this, {
	    type: 'string'
	  });
	  this.withMutation(function () {
	    _this.transform(function (value) {
	      if (this.isType(value)) return value;
	      return value != null && value.toString ? value.toString() : value;
	    });
	  });
	}
	inherits(StringSchema, SchemaType, {
	  _typeCheck: function _typeCheck(value) {
	    if (value instanceof String) value = value.valueOf();
	    return typeof value === 'string';
	  },
	  _isPresent: function _isPresent(value) {
	    return SchemaType.prototype._cast.call(this, value) && value.length > 0;
	  },
	  length: function length(_length, message) {
	    if (message === void 0) {
	      message = string.length;
	    }
	    return this.test({
	      message: message,
	      name: 'length',
	      exclusive: true,
	      params: {
	        length: _length
	      },
	      test: function test(value) {
	        return isAbsent(value) || value.length === this.resolve(_length);
	      }
	    });
	  },
	  min: function min(_min, message) {
	    if (message === void 0) {
	      message = string.min;
	    }
	    return this.test({
	      message: message,
	      name: 'min',
	      exclusive: true,
	      params: {
	        min: _min
	      },
	      test: function test(value) {
	        return isAbsent(value) || value.length >= this.resolve(_min);
	      }
	    });
	  },
	  max: function max(_max, message) {
	    if (message === void 0) {
	      message = string.max;
	    }
	    return this.test({
	      name: 'max',
	      exclusive: true,
	      message: message,
	      params: {
	        max: _max
	      },
	      test: function test(value) {
	        return isAbsent(value) || value.length <= this.resolve(_max);
	      }
	    });
	  },
	  matches: function matches(regex, options) {
	    var excludeEmptyString = false;
	    var message;
	    var name;
	    if (options) {
	      if (typeof options === 'object') {
	        excludeEmptyString = options.excludeEmptyString;
	        message = options.message;
	        name = options.name;
	      } else {
	        message = options;
	      }
	    }
	    return this.test({
	      name: name || 'matches',
	      message: message || string.matches,
	      params: {
	        regex: regex
	      },
	      test: function test(value) {
	        return isAbsent(value) || value === '' && excludeEmptyString || value.search(regex) !== -1;
	      }
	    });
	  },
	  email: function email(message) {
	    if (message === void 0) {
	      message = string.email;
	    }
	    return this.matches(rEmail, {
	      name: 'email',
	      message: message,
	      excludeEmptyString: true
	    });
	  },
	  url: function url(message) {
	    if (message === void 0) {
	      message = string.url;
	    }
	    return this.matches(rUrl, {
	      name: 'url',
	      message: message,
	      excludeEmptyString: true
	    });
	  },
	  ensure: function ensure() {
	    return this.default('').transform(function (val) {
	      return val === null ? '' : val;
	    });
	  },
	  trim: function trim(message) {
	    if (message === void 0) {
	      message = string.trim;
	    }
	    return this.transform(function (val) {
	      return val != null ? val.trim() : val;
	    }).test({
	      message: message,
	      name: 'trim',
	      test: isTrimmed
	    });
	  },
	  lowercase: function lowercase(message) {
	    if (message === void 0) {
	      message = string.lowercase;
	    }
	    return this.transform(function (value) {
	      return !isAbsent(value) ? value.toLowerCase() : value;
	    }).test({
	      message: message,
	      name: 'string_case',
	      exclusive: true,
	      test: function test(value) {
	        return isAbsent(value) || value === value.toLowerCase();
	      }
	    });
	  },
	  uppercase: function uppercase(message) {
	    if (message === void 0) {
	      message = string.uppercase;
	    }
	    return this.transform(function (value) {
	      return !isAbsent(value) ? value.toUpperCase() : value;
	    }).test({
	      message: message,
	      name: 'string_case',
	      exclusive: true,
	      test: function test(value) {
	        return isAbsent(value) || value === value.toUpperCase();
	      }
	    });
	  }
	});

	var isNaN$1 = function isNaN(value) {
	  return value != +value;
	};
	function NumberSchema() {
	  var _this = this;
	  if (!(this instanceof NumberSchema)) return new NumberSchema();
	  SchemaType.call(this, {
	    type: 'number'
	  });
	  this.withMutation(function () {
	    _this.transform(function (value) {
	      var parsed = value;
	      if (typeof parsed === 'string') {
	        parsed = parsed.replace(/\s/g, '');
	        if (parsed === '') return NaN;
	        parsed = +parsed;
	      }
	      if (this.isType(parsed)) return parsed;
	      return parseFloat(parsed);
	    });
	  });
	}
	inherits(NumberSchema, SchemaType, {
	  _typeCheck: function _typeCheck(value) {
	    if (value instanceof Number) value = value.valueOf();
	    return typeof value === 'number' && !isNaN$1(value);
	  },
	  min: function min(_min, message) {
	    if (message === void 0) {
	      message = number.min;
	    }
	    return this.test({
	      message: message,
	      name: 'min',
	      exclusive: true,
	      params: {
	        min: _min
	      },
	      test: function test(value) {
	        return isAbsent(value) || value >= this.resolve(_min);
	      }
	    });
	  },
	  max: function max(_max, message) {
	    if (message === void 0) {
	      message = number.max;
	    }
	    return this.test({
	      message: message,
	      name: 'max',
	      exclusive: true,
	      params: {
	        max: _max
	      },
	      test: function test(value) {
	        return isAbsent(value) || value <= this.resolve(_max);
	      }
	    });
	  },
	  lessThan: function lessThan(less, message) {
	    if (message === void 0) {
	      message = number.lessThan;
	    }
	    return this.test({
	      message: message,
	      name: 'max',
	      exclusive: true,
	      params: {
	        less: less
	      },
	      test: function test(value) {
	        return isAbsent(value) || value < this.resolve(less);
	      }
	    });
	  },
	  moreThan: function moreThan(more, message) {
	    if (message === void 0) {
	      message = number.moreThan;
	    }
	    return this.test({
	      message: message,
	      name: 'min',
	      exclusive: true,
	      params: {
	        more: more
	      },
	      test: function test(value) {
	        return isAbsent(value) || value > this.resolve(more);
	      }
	    });
	  },
	  positive: function positive(msg) {
	    if (msg === void 0) {
	      msg = number.positive;
	    }
	    return this.moreThan(0, msg);
	  },
	  negative: function negative(msg) {
	    if (msg === void 0) {
	      msg = number.negative;
	    }
	    return this.lessThan(0, msg);
	  },
	  integer: function integer(message) {
	    if (message === void 0) {
	      message = number.integer;
	    }
	    return this.test({
	      name: 'integer',
	      message: message,
	      test: function test(val) {
	        return isAbsent(val) || Number.isInteger(val);
	      }
	    });
	  },
	  truncate: function truncate() {
	    return this.transform(function (value) {
	      return !isAbsent(value) ? value | 0 : value;
	    });
	  },
	  round: function round(method) {
	    var avail = ['ceil', 'floor', 'round', 'trunc'];
	    method = method && method.toLowerCase() || 'round';
	    if (method === 'trunc') return this.truncate();
	    if (avail.indexOf(method.toLowerCase()) === -1) throw new TypeError('Only valid options for round() are: ' + avail.join(', '));
	    return this.transform(function (value) {
	      return !isAbsent(value) ? Math[method](value) : value;
	    });
	  }
	});

	var isoReg = /^(\d{4}|[+\-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,\.](\d{1,}))?)?(?:(Z)|([+\-])(\d{2})(?::?(\d{2}))?)?)?$/;
	function parseIsoDate(date) {
	  var numericKeys = [1, 4, 5, 6, 7, 10, 11],
	      minutesOffset = 0,
	      timestamp,
	      struct;
	  if (struct = isoReg.exec(date)) {
	    for (var i = 0, k; k = numericKeys[i]; ++i) {
	      struct[k] = +struct[k] || 0;
	    }
	    struct[2] = (+struct[2] || 1) - 1;
	    struct[3] = +struct[3] || 1;
	    struct[7] = struct[7] ? String(struct[7]).substr(0, 3) : 0;
	    if ((struct[8] === undefined || struct[8] === '') && (struct[9] === undefined || struct[9] === '')) timestamp = +new Date(struct[1], struct[2], struct[3], struct[4], struct[5], struct[6], struct[7]);else {
	      if (struct[8] !== 'Z' && struct[9] !== undefined) {
	        minutesOffset = struct[10] * 60 + struct[11];
	        if (struct[9] === '+') minutesOffset = 0 - minutesOffset;
	      }
	      timestamp = Date.UTC(struct[1], struct[2], struct[3], struct[4], struct[5] + minutesOffset, struct[6], struct[7]);
	    }
	  } else timestamp = Date.parse ? Date.parse(date) : NaN;
	  return timestamp;
	}

	var invalidDate = new Date('');
	var isDate = function isDate(obj) {
	  return Object.prototype.toString.call(obj) === '[object Date]';
	};
	function DateSchema() {
	  var _this = this;
	  if (!(this instanceof DateSchema)) return new DateSchema();
	  SchemaType.call(this, {
	    type: 'date'
	  });
	  this.withMutation(function () {
	    _this.transform(function (value) {
	      if (this.isType(value)) return value;
	      value = parseIsoDate(value);
	      return !isNaN(value) ? new Date(value) : invalidDate;
	    });
	  });
	}
	inherits(DateSchema, SchemaType, {
	  _typeCheck: function _typeCheck(v) {
	    return isDate(v) && !isNaN(v.getTime());
	  },
	  min: function min(_min, message) {
	    if (message === void 0) {
	      message = date.min;
	    }
	    var limit = _min;
	    if (!Reference.isRef(limit)) {
	      limit = this.cast(_min);
	      if (!this._typeCheck(limit)) throw new TypeError('`min` must be a Date or a value that can be `cast()` to a Date');
	    }
	    return this.test({
	      message: message,
	      name: 'min',
	      exclusive: true,
	      params: {
	        min: _min
	      },
	      test: function test(value) {
	        return isAbsent(value) || value >= this.resolve(limit);
	      }
	    });
	  },
	  max: function max(_max, message) {
	    if (message === void 0) {
	      message = date.max;
	    }
	    var limit = _max;
	    if (!Reference.isRef(limit)) {
	      limit = this.cast(_max);
	      if (!this._typeCheck(limit)) throw new TypeError('`max` must be a Date or a value that can be `cast()` to a Date');
	    }
	    return this.test({
	      message: message,
	      name: 'max',
	      exclusive: true,
	      params: {
	        max: _max
	      },
	      test: function test(value) {
	        return isAbsent(value) || value <= this.resolve(limit);
	      }
	    });
	  }
	});

	function _taggedTemplateLiteralLoose(strings, raw) {
	  if (!raw) {
	    raw = strings.slice(0);
	  }
	  strings.raw = raw;
	  return strings;
	}

	function arrayReduce(array, iteratee, accumulator, initAccum) {
	  var index = -1,
	      length = array == null ? 0 : array.length;
	  if (initAccum && length) {
	    accumulator = array[++index];
	  }
	  while (++index < length) {
	    accumulator = iteratee(accumulator, array[index], index, array);
	  }
	  return accumulator;
	}

	function basePropertyOf(object) {
	  return function (key) {
	    return object == null ? undefined : object[key];
	  };
	}

	var deburredLetters = {
	  '\xc0': 'A',
	  '\xc1': 'A',
	  '\xc2': 'A',
	  '\xc3': 'A',
	  '\xc4': 'A',
	  '\xc5': 'A',
	  '\xe0': 'a',
	  '\xe1': 'a',
	  '\xe2': 'a',
	  '\xe3': 'a',
	  '\xe4': 'a',
	  '\xe5': 'a',
	  '\xc7': 'C',
	  '\xe7': 'c',
	  '\xd0': 'D',
	  '\xf0': 'd',
	  '\xc8': 'E',
	  '\xc9': 'E',
	  '\xca': 'E',
	  '\xcb': 'E',
	  '\xe8': 'e',
	  '\xe9': 'e',
	  '\xea': 'e',
	  '\xeb': 'e',
	  '\xcc': 'I',
	  '\xcd': 'I',
	  '\xce': 'I',
	  '\xcf': 'I',
	  '\xec': 'i',
	  '\xed': 'i',
	  '\xee': 'i',
	  '\xef': 'i',
	  '\xd1': 'N',
	  '\xf1': 'n',
	  '\xd2': 'O',
	  '\xd3': 'O',
	  '\xd4': 'O',
	  '\xd5': 'O',
	  '\xd6': 'O',
	  '\xd8': 'O',
	  '\xf2': 'o',
	  '\xf3': 'o',
	  '\xf4': 'o',
	  '\xf5': 'o',
	  '\xf6': 'o',
	  '\xf8': 'o',
	  '\xd9': 'U',
	  '\xda': 'U',
	  '\xdb': 'U',
	  '\xdc': 'U',
	  '\xf9': 'u',
	  '\xfa': 'u',
	  '\xfb': 'u',
	  '\xfc': 'u',
	  '\xdd': 'Y',
	  '\xfd': 'y',
	  '\xff': 'y',
	  '\xc6': 'Ae',
	  '\xe6': 'ae',
	  '\xde': 'Th',
	  '\xfe': 'th',
	  '\xdf': 'ss',
	  '\u0100': 'A',
	  '\u0102': 'A',
	  '\u0104': 'A',
	  '\u0101': 'a',
	  '\u0103': 'a',
	  '\u0105': 'a',
	  '\u0106': 'C',
	  '\u0108': 'C',
	  '\u010a': 'C',
	  '\u010c': 'C',
	  '\u0107': 'c',
	  '\u0109': 'c',
	  '\u010b': 'c',
	  '\u010d': 'c',
	  '\u010e': 'D',
	  '\u0110': 'D',
	  '\u010f': 'd',
	  '\u0111': 'd',
	  '\u0112': 'E',
	  '\u0114': 'E',
	  '\u0116': 'E',
	  '\u0118': 'E',
	  '\u011a': 'E',
	  '\u0113': 'e',
	  '\u0115': 'e',
	  '\u0117': 'e',
	  '\u0119': 'e',
	  '\u011b': 'e',
	  '\u011c': 'G',
	  '\u011e': 'G',
	  '\u0120': 'G',
	  '\u0122': 'G',
	  '\u011d': 'g',
	  '\u011f': 'g',
	  '\u0121': 'g',
	  '\u0123': 'g',
	  '\u0124': 'H',
	  '\u0126': 'H',
	  '\u0125': 'h',
	  '\u0127': 'h',
	  '\u0128': 'I',
	  '\u012a': 'I',
	  '\u012c': 'I',
	  '\u012e': 'I',
	  '\u0130': 'I',
	  '\u0129': 'i',
	  '\u012b': 'i',
	  '\u012d': 'i',
	  '\u012f': 'i',
	  '\u0131': 'i',
	  '\u0134': 'J',
	  '\u0135': 'j',
	  '\u0136': 'K',
	  '\u0137': 'k',
	  '\u0138': 'k',
	  '\u0139': 'L',
	  '\u013b': 'L',
	  '\u013d': 'L',
	  '\u013f': 'L',
	  '\u0141': 'L',
	  '\u013a': 'l',
	  '\u013c': 'l',
	  '\u013e': 'l',
	  '\u0140': 'l',
	  '\u0142': 'l',
	  '\u0143': 'N',
	  '\u0145': 'N',
	  '\u0147': 'N',
	  '\u014a': 'N',
	  '\u0144': 'n',
	  '\u0146': 'n',
	  '\u0148': 'n',
	  '\u014b': 'n',
	  '\u014c': 'O',
	  '\u014e': 'O',
	  '\u0150': 'O',
	  '\u014d': 'o',
	  '\u014f': 'o',
	  '\u0151': 'o',
	  '\u0154': 'R',
	  '\u0156': 'R',
	  '\u0158': 'R',
	  '\u0155': 'r',
	  '\u0157': 'r',
	  '\u0159': 'r',
	  '\u015a': 'S',
	  '\u015c': 'S',
	  '\u015e': 'S',
	  '\u0160': 'S',
	  '\u015b': 's',
	  '\u015d': 's',
	  '\u015f': 's',
	  '\u0161': 's',
	  '\u0162': 'T',
	  '\u0164': 'T',
	  '\u0166': 'T',
	  '\u0163': 't',
	  '\u0165': 't',
	  '\u0167': 't',
	  '\u0168': 'U',
	  '\u016a': 'U',
	  '\u016c': 'U',
	  '\u016e': 'U',
	  '\u0170': 'U',
	  '\u0172': 'U',
	  '\u0169': 'u',
	  '\u016b': 'u',
	  '\u016d': 'u',
	  '\u016f': 'u',
	  '\u0171': 'u',
	  '\u0173': 'u',
	  '\u0174': 'W',
	  '\u0175': 'w',
	  '\u0176': 'Y',
	  '\u0177': 'y',
	  '\u0178': 'Y',
	  '\u0179': 'Z',
	  '\u017b': 'Z',
	  '\u017d': 'Z',
	  '\u017a': 'z',
	  '\u017c': 'z',
	  '\u017e': 'z',
	  '\u0132': 'IJ',
	  '\u0133': 'ij',
	  '\u0152': 'Oe',
	  '\u0153': 'oe',
	  '\u0149': "'n",
	  '\u017f': 's'
	};
	var deburrLetter = basePropertyOf(deburredLetters);

	var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
	var rsComboMarksRange$2 = '\\u0300-\\u036f',
	    reComboHalfMarksRange$2 = '\\ufe20-\\ufe2f',
	    rsComboSymbolsRange$2 = '\\u20d0-\\u20ff',
	    rsComboRange$2 = rsComboMarksRange$2 + reComboHalfMarksRange$2 + rsComboSymbolsRange$2;
	var rsCombo$1 = '[' + rsComboRange$2 + ']';
	var reComboMark = RegExp(rsCombo$1, 'g');
	function deburr(string) {
	  string = toString(string);
	  return string && string.replace(reLatin, deburrLetter).replace(reComboMark, '');
	}

	var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
	function asciiWords(string) {
	  return string.match(reAsciiWord) || [];
	}

	var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
	function hasUnicodeWord(string) {
	  return reHasUnicodeWord.test(string);
	}

	var rsAstralRange$2 = '\\ud800-\\udfff',
	    rsComboMarksRange$3 = '\\u0300-\\u036f',
	    reComboHalfMarksRange$3 = '\\ufe20-\\ufe2f',
	    rsComboSymbolsRange$3 = '\\u20d0-\\u20ff',
	    rsComboRange$3 = rsComboMarksRange$3 + reComboHalfMarksRange$3 + rsComboSymbolsRange$3,
	    rsDingbatRange = '\\u2700-\\u27bf',
	    rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff',
	    rsMathOpRange = '\\xac\\xb1\\xd7\\xf7',
	    rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
	    rsPunctuationRange = '\\u2000-\\u206f',
	    rsSpaceRange = ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
	    rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
	    rsVarRange$2 = '\\ufe0e\\ufe0f',
	    rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;
	var rsApos = "['\u2019]",
	    rsBreak = '[' + rsBreakRange + ']',
	    rsCombo$2 = '[' + rsComboRange$3 + ']',
	    rsDigits = '\\d+',
	    rsDingbat = '[' + rsDingbatRange + ']',
	    rsLower = '[' + rsLowerRange + ']',
	    rsMisc = '[^' + rsAstralRange$2 + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + ']',
	    rsFitz$1 = '\\ud83c[\\udffb-\\udfff]',
	    rsModifier$1 = '(?:' + rsCombo$2 + '|' + rsFitz$1 + ')',
	    rsNonAstral$1 = '[^' + rsAstralRange$2 + ']',
	    rsRegional$1 = '(?:\\ud83c[\\udde6-\\uddff]){2}',
	    rsSurrPair$1 = '[\\ud800-\\udbff][\\udc00-\\udfff]',
	    rsUpper = '[' + rsUpperRange + ']',
	    rsZWJ$2 = '\\u200d';
	var rsMiscLower = '(?:' + rsLower + '|' + rsMisc + ')',
	    rsMiscUpper = '(?:' + rsUpper + '|' + rsMisc + ')',
	    rsOptContrLower = '(?:' + rsApos + '(?:d|ll|m|re|s|t|ve))?',
	    rsOptContrUpper = '(?:' + rsApos + '(?:D|LL|M|RE|S|T|VE))?',
	    reOptMod$1 = rsModifier$1 + '?',
	    rsOptVar$1 = '[' + rsVarRange$2 + ']?',
	    rsOptJoin$1 = '(?:' + rsZWJ$2 + '(?:' + [rsNonAstral$1, rsRegional$1, rsSurrPair$1].join('|') + ')' + rsOptVar$1 + reOptMod$1 + ')*',
	    rsOrdLower = '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])',
	    rsOrdUpper = '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])',
	    rsSeq$1 = rsOptVar$1 + reOptMod$1 + rsOptJoin$1,
	    rsEmoji = '(?:' + [rsDingbat, rsRegional$1, rsSurrPair$1].join('|') + ')' + rsSeq$1;
	var reUnicodeWord = RegExp([rsUpper + '?' + rsLower + '+' + rsOptContrLower + '(?=' + [rsBreak, rsUpper, '$'].join('|') + ')', rsMiscUpper + '+' + rsOptContrUpper + '(?=' + [rsBreak, rsUpper + rsMiscLower, '$'].join('|') + ')', rsUpper + '?' + rsMiscLower + '+' + rsOptContrLower, rsUpper + '+' + rsOptContrUpper, rsOrdUpper, rsOrdLower, rsDigits, rsEmoji].join('|'), 'g');
	function unicodeWords(string) {
	  return string.match(reUnicodeWord) || [];
	}

	function words(string, pattern, guard) {
	  string = toString(string);
	  pattern = guard ? undefined : pattern;
	  if (pattern === undefined) {
	    return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
	  }
	  return string.match(pattern) || [];
	}

	var rsApos$1 = "['\u2019]";
	var reApos = RegExp(rsApos$1, 'g');
	function createCompounder(callback) {
	  return function (string) {
	    return arrayReduce(words(deburr(string).replace(reApos, '')), callback, '');
	  };
	}

	var snakeCase = createCompounder(function (result, word, index) {
	  return result + (index ? '_' : '') + word.toLowerCase();
	});

	function baseSlice(array, start, end) {
	  var index = -1,
	      length = array.length;
	  if (start < 0) {
	    start = -start > length ? 0 : length + start;
	  }
	  end = end > length ? length : end;
	  if (end < 0) {
	    end += length;
	  }
	  length = start > end ? 0 : end - start >>> 0;
	  start >>>= 0;
	  var result = Array(length);
	  while (++index < length) {
	    result[index] = array[index + start];
	  }
	  return result;
	}

	function castSlice(array, start, end) {
	  var length = array.length;
	  end = end === undefined ? length : end;
	  return !start && end >= length ? array : baseSlice(array, start, end);
	}

	function createCaseFirst(methodName) {
	  return function (string) {
	    string = toString(string);
	    var strSymbols = hasUnicode(string) ? stringToArray(string) : undefined;
	    var chr = strSymbols ? strSymbols[0] : string.charAt(0);
	    var trailing = strSymbols ? castSlice(strSymbols, 1).join('') : string.slice(1);
	    return chr[methodName]() + trailing;
	  };
	}

	var upperFirst = createCaseFirst('toUpperCase');

	function capitalize(string) {
	  return upperFirst(toString(string).toLowerCase());
	}

	var camelCase = createCompounder(function (result, word, index) {
	  word = word.toLowerCase();
	  return result + (index ? capitalize(word) : word);
	});

	function mapKeys(object, iteratee) {
	  var result = {};
	  iteratee = baseIteratee(iteratee);
	  baseForOwn(object, function (value, key, object) {
	    baseAssignValue(result, iteratee(value, key, object), value);
	  });
	  return result;
	}

	var toposort_1 = function (edges) {
	  return toposort(uniqueNodes(edges), edges);
	};
	var array$1 = toposort;
	function toposort(nodes, edges) {
	  var cursor = nodes.length,
	      sorted = new Array(cursor),
	      visited = {},
	      i = cursor
	  ,
	      outgoingEdges = makeOutgoingEdges(edges),
	      nodesHash = makeNodesHash(nodes);
	  edges.forEach(function (edge) {
	    if (!nodesHash.has(edge[0]) || !nodesHash.has(edge[1])) {
	      throw new Error('Unknown node. There is an unknown node in the supplied edges.');
	    }
	  });
	  while (i--) {
	    if (!visited[i]) visit(nodes[i], i, new Set());
	  }
	  return sorted;
	  function visit(node, i, predecessors) {
	    if (predecessors.has(node)) {
	      var nodeRep;
	      try {
	        nodeRep = ", node was:" + JSON.stringify(node);
	      } catch (e) {
	        nodeRep = "";
	      }
	      throw new Error('Cyclic dependency' + nodeRep);
	    }
	    if (!nodesHash.has(node)) {
	      throw new Error('Found unknown node. Make sure to provided all involved nodes. Unknown node: ' + JSON.stringify(node));
	    }
	    if (visited[i]) return;
	    visited[i] = true;
	    var outgoing = outgoingEdges.get(node) || new Set();
	    outgoing = Array.from(outgoing);
	    if (i = outgoing.length) {
	      predecessors.add(node);
	      do {
	        var child = outgoing[--i];
	        visit(child, nodesHash.get(child), predecessors);
	      } while (i);
	      predecessors.delete(node);
	    }
	    sorted[--cursor] = node;
	  }
	}
	function uniqueNodes(arr) {
	  var res = new Set();
	  for (var i = 0, len = arr.length; i < len; i++) {
	    var edge = arr[i];
	    res.add(edge[0]);
	    res.add(edge[1]);
	  }
	  return Array.from(res);
	}
	function makeOutgoingEdges(arr) {
	  var edges = new Map();
	  for (var i = 0, len = arr.length; i < len; i++) {
	    var edge = arr[i];
	    if (!edges.has(edge[0])) edges.set(edge[0], new Set());
	    if (!edges.has(edge[1])) edges.set(edge[1], new Set());
	    edges.get(edge[0]).add(edge[1]);
	  }
	  return edges;
	}
	function makeNodesHash(arr) {
	  var res = new Map();
	  for (var i = 0, len = arr.length; i < len; i++) {
	    res.set(arr[i], i);
	  }
	  return res;
	}
	toposort_1.array = array$1;

	function sortFields(fields, excludes) {
	  if (excludes === void 0) {
	    excludes = [];
	  }
	  var edges = [],
	      nodes = [];
	  function addNode(depPath, key) {
	    var node = propertyExpr_2(depPath)[0];
	    if (!~nodes.indexOf(node)) nodes.push(node);
	    if (!~excludes.indexOf(key + "-" + node)) edges.push([key, node]);
	  }
	  for (var key in fields) {
	    if (has(fields, key)) {
	      var value = fields[key];
	      if (!~nodes.indexOf(key)) nodes.push(key);
	      if (Reference.isRef(value) && value.isSibling) addNode(value.path, key);else if (isSchema(value) && value._deps) value._deps.forEach(function (path) {
	        return addNode(path, key);
	      });
	    }
	  }
	  return toposort_1.array(nodes, edges).reverse();
	}

	function findIndex(arr, err) {
	  var idx = Infinity;
	  arr.some(function (key, ii) {
	    if (err.path.indexOf(key) !== -1) {
	      idx = ii;
	      return true;
	    }
	  });
	  return idx;
	}
	function sortByKeyOrder(fields) {
	  var keys = Object.keys(fields);
	  return function (a, b) {
	    return findIndex(keys, a) - findIndex(keys, b);
	  };
	}

	function makePath(strings) {
	  for (var _len = arguments.length, values = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    values[_key - 1] = arguments[_key];
	  }
	  var path = strings.reduce(function (str, next) {
	    var value = values.shift();
	    return str + (value == null ? '' : value) + next;
	  });
	  return path.replace(/^\./, '');
	}

	function _templateObject3() {
	  var data = _taggedTemplateLiteralLoose(["", "[\"", "\"]"]);
	  _templateObject3 = function _templateObject3() {
	    return data;
	  };
	  return data;
	}
	function _templateObject2() {
	  var data = _taggedTemplateLiteralLoose(["", ".", ""]);
	  _templateObject2 = function _templateObject2() {
	    return data;
	  };
	  return data;
	}
	function _templateObject() {
	  var data = _taggedTemplateLiteralLoose(["", ".", ""]);
	  _templateObject = function _templateObject() {
	    return data;
	  };
	  return data;
	}
	var isObject$2 = function isObject(obj) {
	  return Object.prototype.toString.call(obj) === '[object Object]';
	};
	var promise$1 = function promise(sync) {
	  return sync ? synchronousPromise_1 : Promise;
	};
	function unknown(ctx, value) {
	  var known = Object.keys(ctx.fields);
	  return Object.keys(value).filter(function (key) {
	    return known.indexOf(key) === -1;
	  });
	}
	function ObjectSchema(spec) {
	  var _this2 = this;
	  if (!(this instanceof ObjectSchema)) return new ObjectSchema(spec);
	  SchemaType.call(this, {
	    type: 'object',
	    default: function _default() {
	      var _this = this;
	      if (!this._nodes.length) return undefined;
	      var dft = {};
	      this._nodes.forEach(function (key) {
	        dft[key] = _this.fields[key].default ? _this.fields[key].default() : undefined;
	      });
	      return dft;
	    }
	  });
	  this.fields = Object.create(null);
	  this._nodes = [];
	  this._excludedEdges = [];
	  this.withMutation(function () {
	    _this2.transform(function coerce(value) {
	      if (typeof value === 'string') {
	        try {
	          value = JSON.parse(value);
	        } catch (err) {
	          value = null;
	        }
	      }
	      if (this.isType(value)) return value;
	      return null;
	    });
	    if (spec) {
	      _this2.shape(spec);
	    }
	  });
	}
	inherits(ObjectSchema, SchemaType, {
	  _typeCheck: function _typeCheck(value) {
	    return isObject$2(value) || typeof value === 'function';
	  },
	  _cast: function _cast(_value, options) {
	    var _this3 = this;
	    if (options === void 0) {
	      options = {};
	    }
	    var value = SchemaType.prototype._cast.call(this, _value, options);
	    if (value === undefined) return this.default();
	    if (!this._typeCheck(value)) return value;
	    var fields = this.fields;
	    var strip = this._option('stripUnknown', options) === true;
	    var props = this._nodes.concat(Object.keys(value).filter(function (v) {
	      return _this3._nodes.indexOf(v) === -1;
	    }));
	    var intermediateValue = {};
	    var innerOptions = _extends({}, options, {
	      parent: intermediateValue,
	      __validating: false
	    });
	    var isChanged = false;
	    props.forEach(function (prop) {
	      var field = fields[prop];
	      var exists = has(value, prop);
	      if (field) {
	        var fieldValue;
	        var strict = field._options && field._options.strict;
	        innerOptions.path = makePath(_templateObject(), options.path, prop);
	        innerOptions.value = value[prop];
	        field = field.resolve(innerOptions);
	        if (field._strip === true) {
	          isChanged = isChanged || prop in value;
	          return;
	        }
	        fieldValue = !options.__validating || !strict ? field.cast(value[prop], innerOptions) : value[prop];
	        if (fieldValue !== undefined) intermediateValue[prop] = fieldValue;
	      } else if (exists && !strip) intermediateValue[prop] = value[prop];
	      if (intermediateValue[prop] !== value[prop]) isChanged = true;
	    });
	    return isChanged ? intermediateValue : value;
	  },
	  _validate: function _validate(_value, opts) {
	    var _this4 = this;
	    if (opts === void 0) {
	      opts = {};
	    }
	    var endEarly, recursive;
	    var sync = opts.sync;
	    var errors = [];
	    var originalValue = opts.originalValue != null ? opts.originalValue : _value;
	    endEarly = this._option('abortEarly', opts);
	    recursive = this._option('recursive', opts);
	    opts = _extends({}, opts, {
	      __validating: true,
	      originalValue: originalValue
	    });
	    return SchemaType.prototype._validate.call(this, _value, opts).catch(propagateErrors(endEarly, errors)).then(function (value) {
	      if (!recursive || !isObject$2(value)) {
	        if (errors.length) throw errors[0];
	        return value;
	      }
	      originalValue = originalValue || value;
	      var validations = _this4._nodes.map(function (key) {
	        var path = key.indexOf('.') === -1 ? makePath(_templateObject2(), opts.path, key) : makePath(_templateObject3(), opts.path, key);
	        var field = _this4.fields[key];
	        var innerOptions = _extends({}, opts, {
	          path: path,
	          parent: value,
	          originalValue: originalValue[key]
	        });
	        if (field && field.validate) {
	          innerOptions.strict = true;
	          return field.validate(value[key], innerOptions);
	        }
	        return promise$1(sync).resolve(true);
	      });
	      return runValidations({
	        sync: sync,
	        validations: validations,
	        value: value,
	        errors: errors,
	        endEarly: endEarly,
	        path: opts.path,
	        sort: sortByKeyOrder(_this4.fields)
	      });
	    });
	  },
	  concat: function concat(schema) {
	    var next = SchemaType.prototype.concat.call(this, schema);
	    next._nodes = sortFields(next.fields, next._excludedEdges);
	    return next;
	  },
	  shape: function shape(schema, excludes) {
	    if (excludes === void 0) {
	      excludes = [];
	    }
	    var next = this.clone();
	    var fields = _extends(next.fields, schema);
	    next.fields = fields;
	    if (excludes.length) {
	      if (!Array.isArray(excludes[0])) excludes = [excludes];
	      var keys = excludes.map(function (_ref) {
	        var first = _ref[0],
	            second = _ref[1];
	        return first + "-" + second;
	      });
	      next._excludedEdges = next._excludedEdges.concat(keys);
	    }
	    next._nodes = sortFields(fields, next._excludedEdges);
	    return next;
	  },
	  from: function from(_from, to, alias) {
	    var fromGetter = propertyExpr_5(_from, true);
	    return this.transform(function (obj) {
	      if (obj == null) return obj;
	      var newObj = obj;
	      if (has(obj, _from)) {
	        newObj = _extends({}, obj);
	        if (!alias) delete newObj[_from];
	        newObj[to] = fromGetter(obj);
	      }
	      return newObj;
	    });
	  },
	  noUnknown: function noUnknown(noAllow, message) {
	    if (noAllow === void 0) {
	      noAllow = true;
	    }
	    if (message === void 0) {
	      message = object.noUnknown;
	    }
	    if (typeof noAllow === 'string') {
	      message = noAllow;
	      noAllow = true;
	    }
	    var next = this.test({
	      name: 'noUnknown',
	      exclusive: true,
	      message: message,
	      test: function test(value) {
	        if (value == null) return true;
	        var unknownKeys = unknown(this.schema, value);
	        return !noAllow || unknownKeys.length === 0 || this.createError({
	          params: {
	            unknown: unknownKeys.join(', ')
	          }
	        });
	      }
	    });
	    next._options.stripUnknown = noAllow;
	    return next;
	  },
	  unknown: function unknown(allow, message) {
	    if (allow === void 0) {
	      allow = true;
	    }
	    if (message === void 0) {
	      message = object.noUnknown;
	    }
	    return this.noUnknown(!allow, message);
	  },
	  transformKeys: function transformKeys(fn) {
	    return this.transform(function (obj) {
	      return obj && mapKeys(obj, function (_, key) {
	        return fn(key);
	      });
	    });
	  },
	  camelCase: function camelCase$1() {
	    return this.transformKeys(camelCase);
	  },
	  snakeCase: function snakeCase$1() {
	    return this.transformKeys(snakeCase);
	  },
	  constantCase: function constantCase() {
	    return this.transformKeys(function (key) {
	      return snakeCase(key).toUpperCase();
	    });
	  },
	  describe: function describe() {
	    var base = SchemaType.prototype.describe.call(this);
	    base.fields = mapValues(this.fields, function (value) {
	      return value.describe();
	    });
	    return base;
	  }
	});

	function _templateObject2$1() {
	  var data = _taggedTemplateLiteralLoose(["", "[", "]"]);
	  _templateObject2$1 = function _templateObject2() {
	    return data;
	  };
	  return data;
	}
	function _templateObject$1() {
	  var data = _taggedTemplateLiteralLoose(["", "[", "]"]);
	  _templateObject$1 = function _templateObject() {
	    return data;
	  };
	  return data;
	}
	function ArraySchema(type) {
	  var _this = this;
	  if (!(this instanceof ArraySchema)) return new ArraySchema(type);
	  SchemaType.call(this, {
	    type: 'array'
	  });
	  this._subType = undefined;
	  this.innerType = undefined;
	  this.withMutation(function () {
	    _this.transform(function (values) {
	      if (typeof values === 'string') try {
	        values = JSON.parse(values);
	      } catch (err) {
	        values = null;
	      }
	      return this.isType(values) ? values : null;
	    });
	    if (type) _this.of(type);
	  });
	}
	inherits(ArraySchema, SchemaType, {
	  _typeCheck: function _typeCheck(v) {
	    return Array.isArray(v);
	  },
	  _cast: function _cast(_value, _opts) {
	    var _this2 = this;
	    var value = SchemaType.prototype._cast.call(this, _value, _opts);
	    if (!this._typeCheck(value) || !this.innerType) return value;
	    var isChanged = false;
	    var castArray = value.map(function (v, idx) {
	      var castElement = _this2.innerType.cast(v, _extends({}, _opts, {
	        path: makePath(_templateObject$1(), _opts.path, idx)
	      }));
	      if (castElement !== v) {
	        isChanged = true;
	      }
	      return castElement;
	    });
	    return isChanged ? castArray : value;
	  },
	  _validate: function _validate(_value, options) {
	    var _this3 = this;
	    if (options === void 0) {
	      options = {};
	    }
	    var errors = [];
	    var sync = options.sync;
	    var path = options.path;
	    var innerType = this.innerType;
	    var endEarly = this._option('abortEarly', options);
	    var recursive = this._option('recursive', options);
	    var originalValue = options.originalValue != null ? options.originalValue : _value;
	    return SchemaType.prototype._validate.call(this, _value, options).catch(propagateErrors(endEarly, errors)).then(function (value) {
	      if (!recursive || !innerType || !_this3._typeCheck(value)) {
	        if (errors.length) throw errors[0];
	        return value;
	      }
	      originalValue = originalValue || value;
	      var validations = value.map(function (item, idx) {
	        var path = makePath(_templateObject2$1(), options.path, idx);
	        var innerOptions = _extends({}, options, {
	          path: path,
	          strict: true,
	          parent: value,
	          originalValue: originalValue[idx]
	        });
	        if (innerType.validate) return innerType.validate(item, innerOptions);
	        return true;
	      });
	      return runValidations({
	        sync: sync,
	        path: path,
	        value: value,
	        errors: errors,
	        endEarly: endEarly,
	        validations: validations
	      });
	    });
	  },
	  _isPresent: function _isPresent(value) {
	    return SchemaType.prototype._cast.call(this, value) && value.length > 0;
	  },
	  of: function of(schema) {
	    var next = this.clone();
	    if (schema !== false && !isSchema(schema)) throw new TypeError('`array.of()` sub-schema must be a valid yup schema, or `false` to negate a current sub-schema. ' + 'not: ' + printValue(schema));
	    next._subType = schema;
	    next.innerType = schema;
	    return next;
	  },
	  min: function min(_min, message) {
	    message = message || array.min;
	    return this.test({
	      message: message,
	      name: 'min',
	      exclusive: true,
	      params: {
	        min: _min
	      },
	      test: function test(value) {
	        return isAbsent(value) || value.length >= this.resolve(_min);
	      }
	    });
	  },
	  max: function max(_max, message) {
	    message = message || array.max;
	    return this.test({
	      message: message,
	      name: 'max',
	      exclusive: true,
	      params: {
	        max: _max
	      },
	      test: function test(value) {
	        return isAbsent(value) || value.length <= this.resolve(_max);
	      }
	    });
	  },
	  ensure: function ensure() {
	    var _this4 = this;
	    return this.default(function () {
	      return [];
	    }).transform(function (val, original) {
	      if (_this4._typeCheck(val)) return val;
	      return original == null ? [] : [].concat(original);
	    });
	  },
	  compact: function compact(rejector) {
	    var reject = !rejector ? function (v) {
	      return !!v;
	    } : function (v, i, a) {
	      return !rejector(v, i, a);
	    };
	    return this.transform(function (values) {
	      return values != null ? values.filter(reject) : values;
	    });
	  },
	  describe: function describe() {
	    var base = SchemaType.prototype.describe.call(this);
	    if (this.innerType) base.innerType = this.innerType.describe();
	    return base;
	  }
	});

	function useValidation (schema) {
	  var _useState = react.useState([]),
	      errors = _useState[0],
	      setErrors = _useState[1];
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
	      var slice = reach(schema, name);
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

	var index = {
	  useModel: useModel,
	  useValidation: useValidation
	};

	return index;

})));

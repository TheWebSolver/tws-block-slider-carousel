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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

module.exports = _defineProperty;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/React/cjs/react.development.js":
/*!*****************************************************!*\
  !*** ./node_modules/React/cjs/react.development.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.14.0
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

var _assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");
var checkPropTypes = __webpack_require__(/*! prop-types/checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var ReactVersion = '16.14.0';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;
var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

/**
 * Keeps track of the current dispatcher.
 */
var ReactCurrentDispatcher = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

/**
 * Keeps track of the current batch's configuration such as how long an update
 * should suspend for if it needs to.
 */
var ReactCurrentBatchConfig = {
  suspense: null
};

/**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */
var ReactCurrentOwner = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

var BEFORE_SLASH_RE = /^(.*)[\\\/]/;
function describeComponentFrame (name, source, ownerName) {
  var sourceInfo = '';

  if (source) {
    var path = source.fileName;
    var fileName = path.replace(BEFORE_SLASH_RE, '');

    {
      // In DEV, include code for a common special case:
      // prefer "folder/index.js" instead of just "index.js".
      if (/^index\./.test(fileName)) {
        var match = path.match(BEFORE_SLASH_RE);

        if (match) {
          var pathBeforeSlash = match[1];

          if (pathBeforeSlash) {
            var folderName = pathBeforeSlash.replace(BEFORE_SLASH_RE, '');
            fileName = folderName + '/' + fileName;
          }
        }
      }
    }

    sourceInfo = ' (at ' + fileName + ':' + source.lineNumber + ')';
  } else if (ownerName) {
    sourceInfo = ' (created by ' + ownerName + ')';
  }

  return '\n    in ' + (name || 'Unknown') + sourceInfo;
}

var Resolved = 1;
function refineResolvedLazyComponent(lazyComponent) {
  return lazyComponent._status === Resolved ? lazyComponent._result : null;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case REACT_FRAGMENT_TYPE:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case REACT_PROFILER_TYPE:
      return "Profiler";

    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';

    case REACT_SUSPENSE_TYPE:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        return 'Context.Consumer';

      case REACT_PROVIDER_TYPE:
        return 'Context.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        return getComponentName(type.type);

      case REACT_BLOCK_TYPE:
        return getComponentName(type.render);

      case REACT_LAZY_TYPE:
        {
          var thenable = type;
          var resolvedThenable = refineResolvedLazyComponent(thenable);

          if (resolvedThenable) {
            return getComponentName(resolvedThenable);
          }

          break;
        }
    }
  }

  return null;
}

var ReactDebugCurrentFrame = {};
var currentlyValidatingElement = null;
function setCurrentlyValidatingElement(element) {
  {
    currentlyValidatingElement = element;
  }
}

{
  // Stack implementation injected by the current renderer.
  ReactDebugCurrentFrame.getCurrentStack = null;

  ReactDebugCurrentFrame.getStackAddendum = function () {
    var stack = ''; // Add an extra top frame while an element is being validated

    if (currentlyValidatingElement) {
      var name = getComponentName(currentlyValidatingElement.type);
      var owner = currentlyValidatingElement._owner;
      stack += describeComponentFrame(name, currentlyValidatingElement._source, owner && getComponentName(owner.type));
    } // Delegate to the injected renderer-specific implementation


    var impl = ReactDebugCurrentFrame.getCurrentStack;

    if (impl) {
      stack += impl() || '';
    }

    return stack;
  };
}

/**
 * Used by act() to track whether you're inside an act() scope.
 */
var IsSomeRendererActing = {
  current: false
};

var ReactSharedInternals = {
  ReactCurrentDispatcher: ReactCurrentDispatcher,
  ReactCurrentBatchConfig: ReactCurrentBatchConfig,
  ReactCurrentOwner: ReactCurrentOwner,
  IsSomeRendererActing: IsSomeRendererActing,
  // Used by renderers to avoid bundling object-assign twice in UMD bundles:
  assign: _assign
};

{
  _assign(ReactSharedInternals, {
    // These should not be included in production.
    ReactDebugCurrentFrame: ReactDebugCurrentFrame,
    // Shim for React DOM 16.0.0 which still destructured (but not used) this.
    // TODO: remove in React 17.0.
    ReactComponentTreeHook: {}
  });
}

// by calls to these methods by a Babel plugin.
//
// In PROD (or in packages without access to React internals),
// they are left as they are instead.

function warn(format) {
  {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    printWarning('warn', format, args);
  }
}
function error(format) {
  {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    printWarning('error', format, args);
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var hasExistingStack = args.length > 0 && typeof args[args.length - 1] === 'string' && args[args.length - 1].indexOf('\n    in') === 0;

    if (!hasExistingStack) {
      var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
      var stack = ReactDebugCurrentFrame.getStackAddendum();

      if (stack !== '') {
        format += '%s';
        args = args.concat([stack]);
      }
    }

    var argsWithFormat = args.map(function (item) {
      return '' + item;
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      var argIndex = 0;
      var message = 'Warning: ' + format.replace(/%s/g, function () {
        return args[argIndex++];
      });
      throw new Error(message);
    } catch (x) {}
  }
}

var didWarnStateUpdateForUnmountedComponent = {};

function warnNoop(publicInstance, callerName) {
  {
    var _constructor = publicInstance.constructor;
    var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
    var warningKey = componentName + "." + callerName;

    if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
      return;
    }

    error("Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);

    didWarnStateUpdateForUnmountedComponent[warningKey] = true;
  }
}
/**
 * This is the abstract API for an update queue.
 */


var ReactNoopUpdateQueue = {
  /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function (publicInstance) {
    return false;
  },

  /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueForceUpdate: function (publicInstance, callback, callerName) {
    warnNoop(publicInstance, 'forceUpdate');
  },

  /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
    warnNoop(publicInstance, 'replaceState');
  },

  /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} Name of the calling function in the public API.
   * @internal
   */
  enqueueSetState: function (publicInstance, partialState, callback, callerName) {
    warnNoop(publicInstance, 'setState');
  }
};

var emptyObject = {};

{
  Object.freeze(emptyObject);
}
/**
 * Base class helpers for the updating state of a component.
 */


function Component(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the
  // renderer.

  this.updater = updater || ReactNoopUpdateQueue;
}

Component.prototype.isReactComponent = {};
/**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */

Component.prototype.setState = function (partialState, callback) {
  if (!(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null)) {
    {
      throw Error( "setState(...): takes an object of state variables to update or a function which returns an object of state variables." );
    }
  }

  this.updater.enqueueSetState(this, partialState, callback, 'setState');
};
/**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */


Component.prototype.forceUpdate = function (callback) {
  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
};
/**
 * Deprecated APIs. These APIs used to exist on classic React classes but since
 * we would like to deprecate them, we're not going to move them over to this
 * modern base class. Instead, we define a getter that warns if it's accessed.
 */


{
  var deprecatedAPIs = {
    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
  };

  var defineDeprecationWarning = function (methodName, info) {
    Object.defineProperty(Component.prototype, methodName, {
      get: function () {
        warn('%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);

        return undefined;
      }
    });
  };

  for (var fnName in deprecatedAPIs) {
    if (deprecatedAPIs.hasOwnProperty(fnName)) {
      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    }
  }
}

function ComponentDummy() {}

ComponentDummy.prototype = Component.prototype;
/**
 * Convenience component with default shallow equality check for sCU.
 */

function PureComponent(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject;
  this.updater = updater || ReactNoopUpdateQueue;
}

var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
pureComponentPrototype.constructor = PureComponent; // Avoid an extra prototype jump for these methods.

_assign(pureComponentPrototype, Component.prototype);

pureComponentPrototype.isPureReactComponent = true;

// an immutable object with a single mutable value
function createRef() {
  var refObject = {
    current: null
  };

  {
    Object.seal(refObject);
  }

  return refObject;
}

var hasOwnProperty = Object.prototype.hasOwnProperty;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function defineKeyPropWarningGetter(props, displayName) {
  var warnAboutAccessingKey = function () {
    {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
      }
    }
  };

  warnAboutAccessingKey.isReactWarning = true;
  Object.defineProperty(props, 'key', {
    get: warnAboutAccessingKey,
    configurable: true
  });
}

function defineRefPropWarningGetter(props, displayName) {
  var warnAboutAccessingRef = function () {
    {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
      }
    }
  };

  warnAboutAccessingRef.isReactWarning = true;
  Object.defineProperty(props, 'ref', {
    get: warnAboutAccessingRef,
    configurable: true
  });
}

function warnIfStringRefCannotBeAutoConverted(config) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
      var componentName = getComponentName(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://fb.me/react-strict-mode-string-ref', getComponentName(ReactCurrentOwner.current.type), config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * Create and return a new ReactElement of the given type.
 * See https://reactjs.org/docs/react-api.html#createelement
 */

function createElement(type, config, children) {
  var propName; // Reserved names are extracted

  var props = {};
  var key = null;
  var ref = null;
  var self = null;
  var source = null;

  if (config != null) {
    if (hasValidRef(config)) {
      ref = config.ref;

      {
        warnIfStringRefCannotBeAutoConverted(config);
      }
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    self = config.__self === undefined ? null : config.__self;
    source = config.__source === undefined ? null : config.__source; // Remaining properties are added to a new props object

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    {
      if (Object.freeze) {
        Object.freeze(childArray);
      }
    }

    props.children = childArray;
  } // Resolve default props


  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;

    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }

  {
    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }
  }

  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
}
function cloneAndReplaceKey(oldElement, newKey) {
  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
  return newElement;
}
/**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://reactjs.org/docs/react-api.html#cloneelement
 */

function cloneElement(element, config, children) {
  if (!!(element === null || element === undefined)) {
    {
      throw Error( "React.cloneElement(...): The argument must be a React element, but you passed " + element + "." );
    }
  }

  var propName; // Original props are copied

  var props = _assign({}, element.props); // Reserved names are extracted


  var key = element.key;
  var ref = element.ref; // Self is preserved since the owner is preserved.

  var self = element._self; // Source is preserved since cloneElement is unlikely to be targeted by a
  // transpiler, and the original source is probably a better indicator of the
  // true owner.

  var source = element._source; // Owner will be preserved, unless ref is overridden

  var owner = element._owner;

  if (config != null) {
    if (hasValidRef(config)) {
      // Silently steal the ref from the parent.
      ref = config.ref;
      owner = ReactCurrentOwner.current;
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    } // Remaining properties override existing props


    var defaultProps;

    if (element.type && element.type.defaultProps) {
      defaultProps = element.type.defaultProps;
    }

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        if (config[propName] === undefined && defaultProps !== undefined) {
          // Resolve default props
          props[propName] = defaultProps[propName];
        } else {
          props[propName] = config[propName];
        }
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    props.children = childArray;
  }

  return ReactElement(element.type, key, ref, self, source, owner, props);
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */

function isValidElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}

var SEPARATOR = '.';
var SUBSEPARATOR = ':';
/**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */

function escape(key) {
  var escapeRegex = /[=:]/g;
  var escaperLookup = {
    '=': '=0',
    ':': '=2'
  };
  var escapedString = ('' + key).replace(escapeRegex, function (match) {
    return escaperLookup[match];
  });
  return '$' + escapedString;
}
/**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */


var didWarnAboutMaps = false;
var userProvidedKeyEscapeRegex = /\/+/g;

function escapeUserProvidedKey(text) {
  return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
}

var POOL_SIZE = 10;
var traverseContextPool = [];

function getPooledTraverseContext(mapResult, keyPrefix, mapFunction, mapContext) {
  if (traverseContextPool.length) {
    var traverseContext = traverseContextPool.pop();
    traverseContext.result = mapResult;
    traverseContext.keyPrefix = keyPrefix;
    traverseContext.func = mapFunction;
    traverseContext.context = mapContext;
    traverseContext.count = 0;
    return traverseContext;
  } else {
    return {
      result: mapResult,
      keyPrefix: keyPrefix,
      func: mapFunction,
      context: mapContext,
      count: 0
    };
  }
}

function releaseTraverseContext(traverseContext) {
  traverseContext.result = null;
  traverseContext.keyPrefix = null;
  traverseContext.func = null;
  traverseContext.context = null;
  traverseContext.count = 0;

  if (traverseContextPool.length < POOL_SIZE) {
    traverseContextPool.push(traverseContext);
  }
}
/**
 * @param {?*} children Children tree container.
 * @param {!string} nameSoFar Name of the key path so far.
 * @param {!function} callback Callback to invoke with each child found.
 * @param {?*} traverseContext Used to pass information throughout the traversal
 * process.
 * @return {!number} The number of children in this subtree.
 */


function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
  var type = typeof children;

  if (type === 'undefined' || type === 'boolean') {
    // All of the above are perceived as null.
    children = null;
  }

  var invokeCallback = false;

  if (children === null) {
    invokeCallback = true;
  } else {
    switch (type) {
      case 'string':
      case 'number':
        invokeCallback = true;
        break;

      case 'object':
        switch (children.$$typeof) {
          case REACT_ELEMENT_TYPE:
          case REACT_PORTAL_TYPE:
            invokeCallback = true;
        }

    }
  }

  if (invokeCallback) {
    callback(traverseContext, children, // If it's the only child, treat the name as if it was wrapped in an array
    // so that it's consistent if the number of children grows.
    nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
    return 1;
  }

  var child;
  var nextName;
  var subtreeCount = 0; // Count of children found in the current subtree.

  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + getComponentKey(child, i);
      subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
    }
  } else {
    var iteratorFn = getIteratorFn(children);

    if (typeof iteratorFn === 'function') {

      {
        // Warn about using Maps as children
        if (iteratorFn === children.entries) {
          if (!didWarnAboutMaps) {
            warn('Using Maps as children is deprecated and will be removed in ' + 'a future major release. Consider converting children to ' + 'an array of keyed ReactElements instead.');
          }

          didWarnAboutMaps = true;
        }
      }

      var iterator = iteratorFn.call(children);
      var step;
      var ii = 0;

      while (!(step = iterator.next()).done) {
        child = step.value;
        nextName = nextNamePrefix + getComponentKey(child, ii++);
        subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
      }
    } else if (type === 'object') {
      var addendum = '';

      {
        addendum = ' If you meant to render a collection of children, use an array ' + 'instead.' + ReactDebugCurrentFrame.getStackAddendum();
      }

      var childrenString = '' + children;

      {
        {
          throw Error( "Objects are not valid as a React child (found: " + (childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString) + ")." + addendum );
        }
      }
    }
  }

  return subtreeCount;
}
/**
 * Traverses children that are typically specified as `props.children`, but
 * might also be specified through attributes:
 *
 * - `traverseAllChildren(this.props.children, ...)`
 * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
 *
 * The `traverseContext` is an optional argument that is passed through the
 * entire traversal. It can be used to store accumulations or anything else that
 * the callback might find relevant.
 *
 * @param {?*} children Children tree object.
 * @param {!function} callback To invoke upon traversing each child.
 * @param {?*} traverseContext Context for traversal.
 * @return {!number} The number of children in this subtree.
 */


function traverseAllChildren(children, callback, traverseContext) {
  if (children == null) {
    return 0;
  }

  return traverseAllChildrenImpl(children, '', callback, traverseContext);
}
/**
 * Generate a key string that identifies a component within a set.
 *
 * @param {*} component A component that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */


function getComponentKey(component, index) {
  // Do some typechecking here since we call this blindly. We want to ensure
  // that we don't block potential future ES APIs.
  if (typeof component === 'object' && component !== null && component.key != null) {
    // Explicit key
    return escape(component.key);
  } // Implicit key determined by the index in the set


  return index.toString(36);
}

function forEachSingleChild(bookKeeping, child, name) {
  var func = bookKeeping.func,
      context = bookKeeping.context;
  func.call(context, child, bookKeeping.count++);
}
/**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */


function forEachChildren(children, forEachFunc, forEachContext) {
  if (children == null) {
    return children;
  }

  var traverseContext = getPooledTraverseContext(null, null, forEachFunc, forEachContext);
  traverseAllChildren(children, forEachSingleChild, traverseContext);
  releaseTraverseContext(traverseContext);
}

function mapSingleChildIntoContext(bookKeeping, child, childKey) {
  var result = bookKeeping.result,
      keyPrefix = bookKeeping.keyPrefix,
      func = bookKeeping.func,
      context = bookKeeping.context;
  var mappedChild = func.call(context, child, bookKeeping.count++);

  if (Array.isArray(mappedChild)) {
    mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, function (c) {
      return c;
    });
  } else if (mappedChild != null) {
    if (isValidElement(mappedChild)) {
      mappedChild = cloneAndReplaceKey(mappedChild, // Keep both the (mapped) and old keys if they differ, just as
      // traverseAllChildren used to do for objects as children
      keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);
    }

    result.push(mappedChild);
  }
}

function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
  var escapedPrefix = '';

  if (prefix != null) {
    escapedPrefix = escapeUserProvidedKey(prefix) + '/';
  }

  var traverseContext = getPooledTraverseContext(array, escapedPrefix, func, context);
  traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
  releaseTraverseContext(traverseContext);
}
/**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenmap
 *
 * The provided mapFunction(child, key, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */


function mapChildren(children, func, context) {
  if (children == null) {
    return children;
  }

  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, func, context);
  return result;
}
/**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrencount
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */


function countChildren(children) {
  return traverseAllChildren(children, function () {
    return null;
  }, null);
}
/**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
 */


function toArray(children) {
  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, function (child) {
    return child;
  });
  return result;
}
/**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenonly
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */


function onlyChild(children) {
  if (!isValidElement(children)) {
    {
      throw Error( "React.Children.only expected to receive a single React element child." );
    }
  }

  return children;
}

function createContext(defaultValue, calculateChangedBits) {
  if (calculateChangedBits === undefined) {
    calculateChangedBits = null;
  } else {
    {
      if (calculateChangedBits !== null && typeof calculateChangedBits !== 'function') {
        error('createContext: Expected the optional second argument to be a ' + 'function. Instead received: %s', calculateChangedBits);
      }
    }
  }

  var context = {
    $$typeof: REACT_CONTEXT_TYPE,
    _calculateChangedBits: calculateChangedBits,
    // As a workaround to support multiple concurrent renderers, we categorize
    // some renderers as primary and others as secondary. We only expect
    // there to be two concurrent renderers at most: React Native (primary) and
    // Fabric (secondary); React DOM (primary) and React ART (secondary).
    // Secondary renderers store their context values on separate fields.
    _currentValue: defaultValue,
    _currentValue2: defaultValue,
    // Used to track how many concurrent renderers this context currently
    // supports within in a single renderer. Such as parallel server rendering.
    _threadCount: 0,
    // These are circular
    Provider: null,
    Consumer: null
  };
  context.Provider = {
    $$typeof: REACT_PROVIDER_TYPE,
    _context: context
  };
  var hasWarnedAboutUsingNestedContextConsumers = false;
  var hasWarnedAboutUsingConsumerProvider = false;

  {
    // A separate object, but proxies back to the original context object for
    // backwards compatibility. It has a different $$typeof, so we can properly
    // warn for the incorrect usage of Context as a Consumer.
    var Consumer = {
      $$typeof: REACT_CONTEXT_TYPE,
      _context: context,
      _calculateChangedBits: context._calculateChangedBits
    }; // $FlowFixMe: Flow complains about not setting a value, which is intentional here

    Object.defineProperties(Consumer, {
      Provider: {
        get: function () {
          if (!hasWarnedAboutUsingConsumerProvider) {
            hasWarnedAboutUsingConsumerProvider = true;

            error('Rendering <Context.Consumer.Provider> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Provider> instead?');
          }

          return context.Provider;
        },
        set: function (_Provider) {
          context.Provider = _Provider;
        }
      },
      _currentValue: {
        get: function () {
          return context._currentValue;
        },
        set: function (_currentValue) {
          context._currentValue = _currentValue;
        }
      },
      _currentValue2: {
        get: function () {
          return context._currentValue2;
        },
        set: function (_currentValue2) {
          context._currentValue2 = _currentValue2;
        }
      },
      _threadCount: {
        get: function () {
          return context._threadCount;
        },
        set: function (_threadCount) {
          context._threadCount = _threadCount;
        }
      },
      Consumer: {
        get: function () {
          if (!hasWarnedAboutUsingNestedContextConsumers) {
            hasWarnedAboutUsingNestedContextConsumers = true;

            error('Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
          }

          return context.Consumer;
        }
      }
    }); // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty

    context.Consumer = Consumer;
  }

  {
    context._currentRenderer = null;
    context._currentRenderer2 = null;
  }

  return context;
}

function lazy(ctor) {
  var lazyType = {
    $$typeof: REACT_LAZY_TYPE,
    _ctor: ctor,
    // React uses these fields to store the result.
    _status: -1,
    _result: null
  };

  {
    // In production, this would just set it on the object.
    var defaultProps;
    var propTypes;
    Object.defineProperties(lazyType, {
      defaultProps: {
        configurable: true,
        get: function () {
          return defaultProps;
        },
        set: function (newDefaultProps) {
          error('React.lazy(...): It is not supported to assign `defaultProps` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          defaultProps = newDefaultProps; // Match production behavior more closely:

          Object.defineProperty(lazyType, 'defaultProps', {
            enumerable: true
          });
        }
      },
      propTypes: {
        configurable: true,
        get: function () {
          return propTypes;
        },
        set: function (newPropTypes) {
          error('React.lazy(...): It is not supported to assign `propTypes` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          propTypes = newPropTypes; // Match production behavior more closely:

          Object.defineProperty(lazyType, 'propTypes', {
            enumerable: true
          });
        }
      }
    });
  }

  return lazyType;
}

function forwardRef(render) {
  {
    if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
      error('forwardRef requires a render function but received a `memo` ' + 'component. Instead of forwardRef(memo(...)), use ' + 'memo(forwardRef(...)).');
    } else if (typeof render !== 'function') {
      error('forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render);
    } else {
      if (render.length !== 0 && render.length !== 2) {
        error('forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.');
      }
    }

    if (render != null) {
      if (render.defaultProps != null || render.propTypes != null) {
        error('forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?');
      }
    }
  }

  return {
    $$typeof: REACT_FORWARD_REF_TYPE,
    render: render
  };
}

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function memo(type, compare) {
  {
    if (!isValidElementType(type)) {
      error('memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : typeof type);
    }
  }

  return {
    $$typeof: REACT_MEMO_TYPE,
    type: type,
    compare: compare === undefined ? null : compare
  };
}

function resolveDispatcher() {
  var dispatcher = ReactCurrentDispatcher.current;

  if (!(dispatcher !== null)) {
    {
      throw Error( "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://fb.me/react-invalid-hook-call for tips about how to debug and fix this problem." );
    }
  }

  return dispatcher;
}

function useContext(Context, unstable_observedBits) {
  var dispatcher = resolveDispatcher();

  {
    if (unstable_observedBits !== undefined) {
      error('useContext() second argument is reserved for future ' + 'use in React. Passing it is not supported. ' + 'You passed: %s.%s', unstable_observedBits, typeof unstable_observedBits === 'number' && Array.isArray(arguments[2]) ? '\n\nDid you call array.map(useContext)? ' + 'Calling Hooks inside a loop is not supported. ' + 'Learn more at https://fb.me/rules-of-hooks' : '');
    } // TODO: add a more generic warning for invalid values.


    if (Context._context !== undefined) {
      var realContext = Context._context; // Don't deduplicate because this legitimately causes bugs
      // and nobody should be using this in existing code.

      if (realContext.Consumer === Context) {
        error('Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' + 'removed in a future major release. Did you mean to call useContext(Context) instead?');
      } else if (realContext.Provider === Context) {
        error('Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');
      }
    }
  }

  return dispatcher.useContext(Context, unstable_observedBits);
}
function useState(initialState) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useState(initialState);
}
function useReducer(reducer, initialArg, init) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useReducer(reducer, initialArg, init);
}
function useRef(initialValue) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useRef(initialValue);
}
function useEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useEffect(create, deps);
}
function useLayoutEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useLayoutEffect(create, deps);
}
function useCallback(callback, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useCallback(callback, deps);
}
function useMemo(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useMemo(create, deps);
}
function useImperativeHandle(ref, create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useImperativeHandle(ref, create, deps);
}
function useDebugValue(value, formatterFn) {
  {
    var dispatcher = resolveDispatcher();
    return dispatcher.useDebugValue(value, formatterFn);
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}

function getDeclarationErrorAddendum() {
  if (ReactCurrentOwner.current) {
    var name = getComponentName(ReactCurrentOwner.current.type);

    if (name) {
      return '\n\nCheck the render method of `' + name + '`.';
    }
  }

  return '';
}

function getSourceInfoErrorAddendum(source) {
  if (source !== undefined) {
    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
    var lineNumber = source.lineNumber;
    return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
  }

  return '';
}

function getSourceInfoErrorAddendumForProps(elementProps) {
  if (elementProps !== null && elementProps !== undefined) {
    return getSourceInfoErrorAddendum(elementProps.__source);
  }

  return '';
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  var info = getDeclarationErrorAddendum();

  if (!info) {
    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

    if (parentName) {
      info = "\n\nCheck the top-level render call using <" + parentName + ">.";
    }
  }

  return info;
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  if (!element._store || element._store.validated || element.key != null) {
    return;
  }

  element._store.validated = true;
  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

  if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
    return;
  }

  ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
  // property, it may be the creator of the child that's responsible for
  // assigning it a key.

  var childOwner = '';

  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
    // Give the component that originally created this child.
    childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
  }

  setCurrentlyValidatingElement(element);

  {
    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://fb.me/react-warning-keys for more information.', currentComponentErrorInfo, childOwner);
  }

  setCurrentlyValidatingElement(null);
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  if (typeof node !== 'object') {
    return;
  }

  if (Array.isArray(node)) {
    for (var i = 0; i < node.length; i++) {
      var child = node[i];

      if (isValidElement(child)) {
        validateExplicitKey(child, parentType);
      }
    }
  } else if (isValidElement(node)) {
    // This element was passed in a valid location.
    if (node._store) {
      node._store.validated = true;
    }
  } else if (node) {
    var iteratorFn = getIteratorFn(node);

    if (typeof iteratorFn === 'function') {
      // Entry iterators used to provide implicit keys,
      // but now we print a separate warning for them later.
      if (iteratorFn !== node.entries) {
        var iterator = iteratorFn.call(node);
        var step;

        while (!(step = iterator.next()).done) {
          if (isValidElement(step.value)) {
            validateExplicitKey(step.value, parentType);
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var name = getComponentName(type);
    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      setCurrentlyValidatingElement(element);
      checkPropTypes(propTypes, element.props, 'prop', name, ReactDebugCurrentFrame.getStackAddendum);
      setCurrentlyValidatingElement(null);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true;

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    setCurrentlyValidatingElement(fragment);
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        break;
      }
    }

    if (fragment.ref !== null) {
      error('Invalid attribute `ref` supplied to `React.Fragment`.');
    }

    setCurrentlyValidatingElement(null);
  }
}
function createElementWithValidation(type, props, children) {
  var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
  // succeed and there will likely be errors in render.

  if (!validType) {
    var info = '';

    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
      info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
    }

    var sourceInfo = getSourceInfoErrorAddendumForProps(props);

    if (sourceInfo) {
      info += sourceInfo;
    } else {
      info += getDeclarationErrorAddendum();
    }

    var typeString;

    if (type === null) {
      typeString = 'null';
    } else if (Array.isArray(type)) {
      typeString = 'array';
    } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
      typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
      info = ' Did you accidentally export a JSX literal instead of a component?';
    } else {
      typeString = typeof type;
    }

    {
      error('React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }
  }

  var element = createElement.apply(this, arguments); // The result can be nullish if a mock or a custom function is used.
  // TODO: Drop this when these are no longer allowed as the type argument.

  if (element == null) {
    return element;
  } // Skip key warning if the type isn't valid since our key validation logic
  // doesn't expect a non-string/function type and can throw confusing errors.
  // We don't want exception behavior to differ between dev and prod.
  // (Rendering will throw with a helpful message and as soon as the type is
  // fixed, the key warnings will appear.)


  if (validType) {
    for (var i = 2; i < arguments.length; i++) {
      validateChildKeys(arguments[i], type);
    }
  }

  if (type === REACT_FRAGMENT_TYPE) {
    validateFragmentProps(element);
  } else {
    validatePropTypes(element);
  }

  return element;
}
var didWarnAboutDeprecatedCreateFactory = false;
function createFactoryWithValidation(type) {
  var validatedFactory = createElementWithValidation.bind(null, type);
  validatedFactory.type = type;

  {
    if (!didWarnAboutDeprecatedCreateFactory) {
      didWarnAboutDeprecatedCreateFactory = true;

      warn('React.createFactory() is deprecated and will be removed in ' + 'a future major release. Consider using JSX ' + 'or use React.createElement() directly instead.');
    } // Legacy hook: remove it


    Object.defineProperty(validatedFactory, 'type', {
      enumerable: false,
      get: function () {
        warn('Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');

        Object.defineProperty(this, 'type', {
          value: type
        });
        return type;
      }
    });
  }

  return validatedFactory;
}
function cloneElementWithValidation(element, props, children) {
  var newElement = cloneElement.apply(this, arguments);

  for (var i = 2; i < arguments.length; i++) {
    validateChildKeys(arguments[i], newElement.type);
  }

  validatePropTypes(newElement);
  return newElement;
}

{

  try {
    var frozenObject = Object.freeze({});
    var testMap = new Map([[frozenObject, null]]);
    var testSet = new Set([frozenObject]); // This is necessary for Rollup to not consider these unused.
    // https://github.com/rollup/rollup/issues/1771
    // TODO: we can remove these if Rollup fixes the bug.

    testMap.set(0, 0);
    testSet.add(0);
  } catch (e) {
  }
}

var createElement$1 =  createElementWithValidation ;
var cloneElement$1 =  cloneElementWithValidation ;
var createFactory =  createFactoryWithValidation ;
var Children = {
  map: mapChildren,
  forEach: forEachChildren,
  count: countChildren,
  toArray: toArray,
  only: onlyChild
};

exports.Children = Children;
exports.Component = Component;
exports.Fragment = REACT_FRAGMENT_TYPE;
exports.Profiler = REACT_PROFILER_TYPE;
exports.PureComponent = PureComponent;
exports.StrictMode = REACT_STRICT_MODE_TYPE;
exports.Suspense = REACT_SUSPENSE_TYPE;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
exports.cloneElement = cloneElement$1;
exports.createContext = createContext;
exports.createElement = createElement$1;
exports.createFactory = createFactory;
exports.createRef = createRef;
exports.forwardRef = forwardRef;
exports.isValidElement = isValidElement;
exports.lazy = lazy;
exports.memo = memo;
exports.useCallback = useCallback;
exports.useContext = useContext;
exports.useDebugValue = useDebugValue;
exports.useEffect = useEffect;
exports.useImperativeHandle = useImperativeHandle;
exports.useLayoutEffect = useLayoutEffect;
exports.useMemo = useMemo;
exports.useReducer = useReducer;
exports.useRef = useRef;
exports.useState = useState;
exports.version = ReactVersion;
  })();
}


/***/ }),

/***/ "./node_modules/React/index.js":
/*!*************************************!*\
  !*** ./node_modules/React/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react.development.js */ "./node_modules/React/cjs/react.development.js");
}


/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./src/filters sync recursive index\\.js$":
/*!*************************************!*\
  !*** ./src/filters sync index\.js$ ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./slider/index.js": "./src/filters/slider/index.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	var module = __webpack_require__(id);
	return module;
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/filters sync recursive index\\.js$";

/***/ }),

/***/ "./src/filters/slider/controller/props.js":
/*!************************************************!*\
  !*** ./src/filters/slider/controller/props.js ***!
  \************************************************/
/*! exports provided: eligibleBlocks, sliderEffects, sliderCarouselAttributes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eligibleBlocks", function() { return eligibleBlocks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sliderEffects", function() { return sliderEffects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sliderCarouselAttributes", function() { return sliderCarouselAttributes; });
/**
 * Slider Carousel Filter
 *
 * @package TheWebSolver\Core\Blocks_Filter\Slider_Carousel
 *
 * -----------------------------------
 * DEVELOPED-MAINTAINED-SUPPPORTED BY
 * -----------------------------------
 * ███║     ███╗   ████████████████
 * ███║     ███║   ═════════██████╗
 * ███║     ███║        ╔══█████═╝
 *  ████████████║      ╚═█████
 * ███║═════███║      █████╗
 * ███║     ███║    █████═╝
 * ███║     ███║   ████████████████╗
 * ╚═╝      ╚═╝    ═══════════════╝
 */
var __ = wp.i18n.__;
/**
 * WordPress core blocks which can be used as slider carousel.
 *
 * The blocks are imported from localized script.
 *
 * @see tws_bfsc_init()
 * @filesource tws-blocks-slider-carousel\tws-block-slider-carousel.php
 */

var eligibleBlocks = twsSliderCarousel.blocks;
/**
 * Various slider effects.
 */

var sliderEffects = [{
  label: __('Slide', 'tws-blockfilter'),
  value: 'slide'
}, {
  label: __('Fade', 'tws-blockfilter'),
  value: 'fade'
}, {
  label: __('Cube', 'tws-blockfilter'),
  value: 'cube'
}, {
  label: __('Cover Flow', 'tws-blockfilter'),
  value: 'coverflow'
}, {
  label: __('Flip', 'tws-blockfilter'),
  value: 'flip'
}];
/**
 * New attributes to assign to containers defined in "eligibleBlocks".
 */

var sliderCarouselAttributes = {
  sliderEnabled: {
    type: 'boolean',
    default: false
  },
  defaultSlideNumber: {
    type: 'number',
    default: 1
  },
  defaultSpace: {
    type: 'number',
    default: 8
  },
  defaultEnabled: {
    type: 'boolean',
    default: true
  },
  slideEffect: {
    type: 'string',
    default: 'slide'
  },
  slideDirection: {
    type: 'string',
    default: 'horizontal'
  },
  loopSlides: {
    type: 'boolean',
    default: false
  },
  autoHeight: {
    type: 'boolean',
    default: false
  },
  wrapperElement: {
    type: 'string',
    default: 'div.wp-block-columns'
  },
  slideElement: {
    type: 'string',
    default: 'div.wp-block-column'
  },
  removeWrapperClass: {
    type: 'boolean',
    default: false
  },
  removeSlideClass: {
    type: 'boolean',
    default: false
  },
  wrapperClassNameToRemove: {
    type: 'string',
    default: 'wp-block-columns'
  },
  slideClassNameToRemove: {
    type: 'string',
    default: 'wp-block-column'
  },
  enableInteraction: {
    type: 'boolean',
    default: true
  },
  enableBullets: {
    type: 'boolean',
    default: false
  },
  bulletClickable: {
    type: 'boolean',
    default: false
  },
  bulletDynamic: {
    type: 'boolean',
    default: false
  },
  bulletRender: {
    type: 'string',
    default: ''
  },
  enableArrows: {
    type: 'boolean',
    default: true
  },
  enableBreakpoints: {
    type: 'boolean',
    default: false
  },
  enableOneBreakpoint: {
    type: 'boolean',
    default: true
  },
  breakOnePixels: {
    type: 'number',
    default: 320
  },
  breakOneSlides: {
    type: 'number',
    default: 1
  },
  breakOneSpace: {
    type: 'number',
    default: 8
  },
  breakOneEnabled: {
    type: 'boolean',
    default: true
  },
  enableTwoBreakpoint: {
    type: 'boolean',
    default: true
  },
  breakTwoPixels: {
    type: 'number',
    default: 600
  },
  breakTwoSlides: {
    type: 'number',
    default: 2
  },
  breakTwoSpace: {
    type: 'number',
    default: 16
  },
  breakTwoEnabled: {
    type: 'boolean',
    default: true
  },
  enableThreeBreakpoint: {
    type: 'boolean',
    default: true
  },
  breakThreePixels: {
    type: 'number',
    default: 768
  },
  breakThreeSlides: {
    type: 'number',
    default: 3
  },
  breakThreeSpace: {
    type: 'number',
    default: 24
  },
  breakThreeEnabled: {
    type: 'boolean',
    default: true
  },
  enableFourBreakpoint: {
    type: 'boolean',
    default: true
  },
  breakFourPixels: {
    type: 'number',
    default: 1024
  },
  breakFourSlides: {
    type: 'number',
    default: 4
  },
  breakFourSpace: {
    type: 'number',
    default: 32
  },
  breakFourEnabled: {
    type: 'boolean',
    default: true
  }
};

/***/ }),

/***/ "./src/filters/slider/index.js":
/*!*************************************!*\
  !*** ./src/filters/slider/index.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_inspector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view/inspector */ "./src/filters/slider/view/inspector.js");
/* harmony import */ var _view_save__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view/save */ "./src/filters/slider/view/save.js");
/* harmony import */ var _controller_props__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controller/props */ "./src/filters/slider/controller/props.js");
/**
 * Slider Carousel Filter
 *
 * @package TheWebSolver\Core\Blocks_Filter\Slider_Carousel
 *
 * -----------------------------------
 * DEVELOPED-MAINTAINED-SUPPPORTED BY
 * -----------------------------------
 * ███║     ███╗   ████████████████
 * ███║     ███║   ═════════██████╗
 * ███║     ███║        ╔══█████═╝
 *  ████████████║      ╚═█████
 * ███║═════███║      █████╗
 * ███║     ███║    █████═╝
 * ███║     ███║   ████████████████╗
 * ╚═╝      ╚═╝    ═══════════════╝
 */



var addFilter = wp.hooks.addFilter;
var _lodash = lodash,
    assign = _lodash.assign;
/**
 * Add data attributes to slider carousel container blocks.
 *
 * @param {object} block Current block block.
 * @param {string} name Name of the block.
 *
 * @returns {object} Modified block block.
 */

var addDataAttributes = function addDataAttributes(block, name) {
  // Bail early if not slider Carousel container.
  if (!_controller_props__WEBPACK_IMPORTED_MODULE_2__["eligibleBlocks"].includes(name)) {
    return block;
  }

  block.attributes = assign(block.attributes, _controller_props__WEBPACK_IMPORTED_MODULE_2__["sliderCarouselAttributes"]);
  return block;
}; // Modify the core Blocks.


addFilter('blocks.registerBlockType', 'tws/sliderCarousel/register', addDataAttributes); // Add controls to inspector panel.

addFilter('editor.BlockEdit', 'tws/sliderCarousel/edit', _view_inspector__WEBPACK_IMPORTED_MODULE_0__["default"]); // Add data attributes to container block element on save.

addFilter('blocks.getSaveContent.extraProps', 'tws/sliderCarousel/save', _view_save__WEBPACK_IMPORTED_MODULE_1__["default"]);

/***/ }),

/***/ "./src/filters/slider/view/inspector.js":
/*!**********************************************!*\
  !*** ./src/filters/slider/view/inspector.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var React__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! React */ "./node_modules/React/index.js");
/* harmony import */ var React__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(React__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _controller_props__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controller/props */ "./src/filters/slider/controller/props.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);


/**
 * Slider Carousel Filter
 *
 * @package TheWebSolver\Core\Blocks_Filter\Slider_Carousel
 *
 * -----------------------------------
 * DEVELOPED-MAINTAINED-SUPPPORTED BY
 * -----------------------------------
 * ███║     ███╗   ████████████████
 * ███║     ███║   ═════════██████╗
 * ███║     ███║        ╔══█████═╝
 *  ████████████║      ╚═█████
 * ███║═════███║      █████╗
 * ███║     ███║    █████═╝
 * ███║     ███║   ████████████████╗
 * ╚═╝      ╚═╝    ═══════════════╝
 */



var createHigherOrderComponent = wp.compose.createHigherOrderComponent;
var Fragment = wp.element.Fragment;
var InspectorControls = wp.blockEditor.InspectorControls;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    Panel = _wp$components.Panel,
    ToggleControl = _wp$components.ToggleControl,
    TextControl = _wp$components.TextControl,
    SelectControl = _wp$components.SelectControl,
    BaseControl = _wp$components.BaseControl,
    Button = _wp$components.Button,
    ButtonGroup = _wp$components.ButtonGroup;
var __ = wp.i18n.__;
/**
 * Create HOC to add custom attributes to the slider carousel.
 */

/* harmony default export */ __webpack_exports__["default"] = (createHigherOrderComponent(function (BlockEdit) {
  // eslint-disable-next-line react/display-name
  return function (props) {
    // Bail early if not slider Carousel container.
    if (!_controller_props__WEBPACK_IMPORTED_MODULE_2__["eligibleBlocks"].includes(props.name)) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BlockEdit, props);
    }

    var _props$attributes = props.attributes,
        sliderEnabled = _props$attributes.sliderEnabled,
        defaultEnabled = _props$attributes.defaultEnabled,
        defaultSlideNumber = _props$attributes.defaultSlideNumber,
        defaultSpace = _props$attributes.defaultSpace,
        wrapperElement = _props$attributes.wrapperElement,
        slideElement = _props$attributes.slideElement,
        slideEffect = _props$attributes.slideEffect,
        slideDirection = _props$attributes.slideDirection,
        loopSlides = _props$attributes.loopSlides,
        autoHeight = _props$attributes.autoHeight,
        removeWrapperClass = _props$attributes.removeWrapperClass,
        removeSlideClass = _props$attributes.removeSlideClass,
        wrapperClassNameToRemove = _props$attributes.wrapperClassNameToRemove,
        slideClassNameToRemove = _props$attributes.slideClassNameToRemove,
        enableInteraction = _props$attributes.enableInteraction,
        enableBullets = _props$attributes.enableBullets,
        bulletClickable = _props$attributes.bulletClickable,
        bulletDynamic = _props$attributes.bulletDynamic,
        bulletRender = _props$attributes.bulletRender,
        enableArrows = _props$attributes.enableArrows,
        enableBreakpoints = _props$attributes.enableBreakpoints,
        enableOneBreakpoint = _props$attributes.enableOneBreakpoint,
        breakOnePixels = _props$attributes.breakOnePixels,
        breakOneSlides = _props$attributes.breakOneSlides,
        breakOneSpace = _props$attributes.breakOneSpace,
        breakOneEnabled = _props$attributes.breakOneEnabled,
        enableTwoBreakpoint = _props$attributes.enableTwoBreakpoint,
        breakTwoPixels = _props$attributes.breakTwoPixels,
        breakTwoSlides = _props$attributes.breakTwoSlides,
        breakTwoSpace = _props$attributes.breakTwoSpace,
        breakTwoEnabled = _props$attributes.breakTwoEnabled,
        enableThreeBreakpoint = _props$attributes.enableThreeBreakpoint,
        breakThreePixels = _props$attributes.breakThreePixels,
        breakThreeSlides = _props$attributes.breakThreeSlides,
        breakThreeSpace = _props$attributes.breakThreeSpace,
        breakThreeEnabled = _props$attributes.breakThreeEnabled,
        enableFourBreakpoint = _props$attributes.enableFourBreakpoint,
        breakFourPixels = _props$attributes.breakFourPixels,
        breakFourSlides = _props$attributes.breakFourSlides,
        breakFourSpace = _props$attributes.breakFourSpace,
        breakFourEnabled = _props$attributes.breakFourEnabled;
    /**
     * On the frontend, when parsing post's blocks, the attributes set here will be
     * displayed as values under key "attrs". However, it may only show the
     * attributes in a key/value pair if the attribute's default value is changed.
     *
     * USE CASE FOR CONVERTING BLOCK INTO SLIDER CAROUSEL:
     * ---------------------------------------------------
     * On the frontend, the PHP function "parse_blocks()" is used to verify
     * whether a given block is used as a slider carousel or not.
     * Loop over all blocks and get the {$block['attrs']} value in an array.
     * This array value will contain attributes set here using "props.setAttributes()".
     * However, all attributes may not get displayed on the PHP side.
     *
     * So, it is important to verify whether a given block is converted to slider
     * using the "isset()" as well as attribute value.
     *
     * For eg: to check whether a group block is converted to slider or not, use this:
     * if( isset( $block['attrs']['sliderEnabled'] ) && block['attrs']['sliderEnabled'] ) {
     *  // This {$block} has slider enabled, enqueue frontend styles and scripts.
     * }
     */

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BlockEdit, props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
      className: "tws-slider-carousel__enable tws-blockfilter__toggle",
      label: __('Enable Slider Carousel', 'tws-blockfilter'),
      help: sliderEnabled ? __('This block will be converted to a slider. It can only be previewed on frontend', 'tws-blockfilter') : __('This block is not a slider', 'tws-blockfilter'),
      checked: sliderEnabled,
      onChange: function onChange() {
        return props.setAttributes({
          sliderEnabled: !sliderEnabled
        });
      }
    }), sliderEnabled && // Main toggle controls.
    Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
      className: "tws-slider-carousel__enable-slider tws-blockfilter__toggle",
      label: __('Enable interactions', 'tws-blockfilter'),
      help: defaultEnabled ? __('Will respond to all events/interactions', 'tws-blockfilter') : __("Won't respond to any event/interaction", 'tws-blockfilter'),
      checked: defaultEnabled,
      onChange: function onChange() {
        return props.setAttributes({
          defaultEnabled: !defaultEnabled
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
      className: "tws-slider-carousel__enable-interaction tws-blockfilter__toggle",
      label: __('Allow Touch Move', 'tws-blockfilter'),
      help: enableInteraction ? __('Enable slider interact with touch, drag, etc.', 'tws-blockfilter') : __('Disable slider touch interaction. Useful in case where only bullet/arrow navigation is preferred', 'tws-blockfilter'),
      checked: enableInteraction,
      onChange: function onChange() {
        return props.setAttributes({
          enableInteraction: !enableInteraction
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
      className: "tws-slider-carousel__enable-bullets tws-blockfilter__toggle",
      label: __('Show bullet pagination', 'tws-blockfilter'),
      help: enableBullets ? __('Enable slider carousel bullet navigation controls. Set each breakpoint details in PanelBody "Bullet Options"', 'tws-blockfilter') : __('Disable bullet navigation controls', 'tws-blockfilter'),
      checked: enableBullets,
      onChange: function onChange() {
        return props.setAttributes({
          enableBullets: !enableBullets
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
      className: "tws-slider-carousel__enable-arrows tws-blockfilter__toggle",
      label: __('Show arrow navigation', 'tws-blockfilter'),
      help: enableArrows ? __('Enable slider carousel arrow navigation controls. Set each breakpoint details in PanelBody "Arrow Options"', 'tws-blockfilter') : __('Disable arrow navigation controls', 'tws-blockfilter'),
      checked: enableArrows,
      onChange: function onChange() {
        return props.setAttributes({
          enableArrows: !enableArrows
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
      className: "tws-slider-carousel__enable-breakpoint tws-blockfilter__toggle",
      label: __('Make slider responsive', 'tws-blockfilter'),
      help: enableBreakpoints ? __('Enable slider carousel breakpoint and makes slides responsive. Set each breakpoint details in PanelBody "Slider Breakpoints"', 'tws-blockfilter') : __('Disable slider breakpoint', 'tws-blockfilter'),
      checked: enableBreakpoints,
      onChange: function onChange() {
        return props.setAttributes({
          enableBreakpoints: !enableBreakpoints
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      title: __('Slider Default Options', 'tws-blockfilter'),
      initialOpen: false,
      className: "tws-slider-carousel__panelBody"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["__experimentalNumberControl"], {
      label: __('Number of slides to show', 'tws-blockfilter'),
      className: "components-base-control",
      dragDirection: "e",
      dragThreshold: 1,
      labelPosition: "top",
      step: 1,
      value: defaultSlideNumber,
      onChange: function onChange(value) {
        return props.setAttributes({
          defaultSlideNumber: value
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["__experimentalNumberControl"], {
      label: __('Gap (margins) between slides', 'tws-blockfilter'),
      className: "components-base-control",
      dragDirection: "e",
      dragThreshold: 1,
      labelPosition: "top",
      step: 1,
      value: defaultSpace,
      onChange: function onChange(value) {
        return props.setAttributes({
          defaultSpace: value
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
      label: __('Slide Effect', 'tws-blockfilter'),
      labelPosition: "top",
      value: slideEffect,
      options: _controller_props__WEBPACK_IMPORTED_MODULE_2__["sliderEffects"],
      onChange: function onChange(value) {
        return props.setAttributes({
          slideEffect: value
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BaseControl, {
      help: __('Select sliding direction for the slides.', 'tws-blockfilter')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BaseControl.VisualLabel, null, __('Slide Direction', 'tws-blockfilter')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ButtonGroup, {
      "aria-label": __('Slide Direction', 'tws-blockfilter'),
      className: "tws-sliderCarousel__slide-direction"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
      isSecondary: slideDirection === 'vertical',
      isPrimary: slideDirection === 'horizontal',
      "aria-pressed": slideDirection === 'horizontal',
      onClick: function onClick() {
        return props.setAttributes({
          slideDirection: 'horizontal'
        });
      }
    }, __('Horizontal', 'tws-blockfilter')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
      isSecondary: slideDirection === 'horizontal',
      isPrimary: slideDirection === 'vertical',
      "aria-pressed": slideDirection === 'vertical',
      onClick: function onClick() {
        return props.setAttributes({
          slideDirection: 'vertical'
        });
      }
    }, __('Vertical', 'tws-blockfilter')))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
      className: "tws-slider-carousel__loop-slide tws-blockfilter__toggle-inner",
      label: __('Loop slides', 'tws-blockfilter'),
      help: loopSlides ? __('Will loop the slides continuously', 'tws-blockfilter') : __("Won't loop the slides", 'tws-blockfilter'),
      checked: loopSlides,
      onChange: function onChange() {
        return props.setAttributes({
          loopSlides: !loopSlides
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
      className: "tws-slider-carousel__auto-height tws-blockfilter__toggle-inner",
      label: __('Auto Height', 'tws-blockfilter'),
      help: autoHeight ? __('Container height adjust to the slide height', 'tws-blockfilter') : __("Won't adjust container to the slide height", 'tws-blockfilter'),
      checked: autoHeight,
      onChange: function onChange() {
        return props.setAttributes({
          autoHeight: !autoHeight
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
      label: "Wrapper Element",
      value: wrapperElement || '',
      onChange: function onChange(value) {
        return props.setAttributes({
          wrapperElement: value
        });
      },
      help: __('The wrapper element is an element that contains one or more slides. Best used with WordPress Columns Block.', 'tws-blockfilter')
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
      label: "Slide Element",
      value: slideElement || '',
      onChange: function onChange(value) {
        return props.setAttributes({
          slideElement: value
        });
      },
      help: __("The slide element is an element that will be a single slide container. Best used with WordPress Columns' column Block.", 'tws-blockfilter')
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
      className: "tws-slider-carousel__remove-wrapper-class tws-blockfilter__toggle-inner",
      label: __('Remove default wrapper class', 'tws-blockfilter'),
      help: removeWrapperClass ? __('Remove classes from the slider wrapper', 'tws-blockfilter') : __("Won't remove any slider wrapper class", 'tws-blockfilter'),
      checked: removeWrapperClass,
      onChange: function onChange() {
        return props.setAttributes({
          removeWrapperClass: !removeWrapperClass
        });
      }
    }), removeWrapperClass && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
      value: wrapperClassNameToRemove || '',
      onChange: function onChange(value) {
        return props.setAttributes({
          wrapperClassNameToRemove: value
        });
      },
      help: __('Enter default classnames applied to slides wrapper element to be removed once slider is initialized. This is to prevent WordPress default and/or theme styling interference with slider. Separate multiple classes with spaces.', 'tws-blockfilter')
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
      className: "tws-slider-carousel__remove-slide-class tws-blockfilter__toggle-inner",
      label: __('Remove default slide class', 'tws-blockfilter'),
      help: removeSlideClass ? __('Remove classes from each slide element', 'tws-blockfilter') : __("Won't remove any slide class", 'tws-blockfilter'),
      checked: removeSlideClass,
      onChange: function onChange() {
        return props.setAttributes({
          removeSlideClass: !removeSlideClass
        });
      }
    }), removeSlideClass && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
      value: slideClassNameToRemove || '',
      onChange: function onChange(value) {
        return props.setAttributes({
          slideClassNameToRemove: value
        });
      },
      help: __('Enter default classnames applied to each slide element to be removed once slider is initialized. This is to prevent WordPress default and/or theme styling interference with slider. Separate multiple classes with spaces.', 'tws-blockfilter')
    })), enableBullets && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      title: __('Slider Bullet Options', 'tws-blockfilter'),
      initialOpen: false,
      className: "tws-slider-carousel__panelBody"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
      className: "tws-slider-carousel__bulletOptions tws-blockfilter__toggle-inner",
      label: __('Make bullets clickable', 'tws-blockfilter'),
      help: bulletClickable ? __('Clicking bullet will change slide', 'tws-blockfilter') : __("Clicking bullet won't change slide", 'tws-blockfilter'),
      checked: bulletClickable,
      onChange: function onChange() {
        return props.setAttributes({
          bulletClickable: !bulletClickable
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
      className: "tws-slider-carousel__bulletOptions tws-blockfilter__toggle-inner",
      label: __('Make bullets dynamic', 'tws-blockfilter'),
      help: bulletDynamic ? __('Keep only few bullets visible', 'tws-blockfilter') : __('Keep all bullets visible', 'tws-blockfilter'),
      checked: bulletDynamic,
      onChange: function onChange() {
        return props.setAttributes({
          bulletDynamic: !bulletDynamic
        });
      }
    }), !bulletDynamic && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
      label: __('Enter render callback for bullets separated by comma. The number of values enter here must match the total number of slides.', 'tws-blockfilter'),
      value: bulletRender || '',
      onChange: function onChange(value) {
        return props.setAttributes({
          bulletRender: value
        });
      }
    })), enableBreakpoints && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      title: __('Slider Breakpoints', 'tws-blockfilter'),
      initialOpen: false,
      className: "tws-slider-carousel__panelBody"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
      className: "tws-slider-carousel__enable-first-breakpoint tws-blockfilter__toggle-inner",
      label: __('Enable first breakpoint', 'tws-blockfilter'),
      help: __('(mobile device portrait)', 'tws-blockfilter'),
      checked: enableOneBreakpoint,
      onChange: function onChange() {
        return props.setAttributes({
          enableOneBreakpoint: !enableOneBreakpoint
        });
      }
    }), enableOneBreakpoint && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Panel, {
      className: "tws-slider-carousel__panel"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["__experimentalNumberControl"], {
      label: __('Enter window width (in px)', 'tws-blockfilter'),
      dragDirection: "e",
      dragThreshold: 10,
      labelPosition: "top",
      isShiftStepEnabled: true,
      step: 5,
      shiftStep: 50,
      value: breakOnePixels,
      onChange: function onChange(value) {
        return props.setAttributes({
          breakOnePixels: value
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["__experimentalNumberControl"], {
      label: __('Number of slides to show', 'tws-blockfilter'),
      dragDirection: "e",
      dragThreshold: 1,
      labelPosition: "top",
      step: 1,
      value: breakOneSlides,
      onChange: function onChange(value) {
        return props.setAttributes({
          breakOneSlides: value
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["__experimentalNumberControl"], {
      label: __('Gap (margins) between slides', 'tws-blockfilter'),
      dragDirection: "e",
      dragThreshold: 1,
      labelPosition: "top",
      step: 1,
      value: breakOneSpace,
      onChange: function onChange(value) {
        return props.setAttributes({
          breakOneSpace: value
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
      className: "tws-slider-carousel__enable-slider tws-blockfilter__toggle-inner-2",
      label: __('Enable interactions', 'tws-blockfilter'),
      help: breakOneEnabled ? __('Will respond to all events/interactions', 'tws-blockfilter') : __("Won't respond to any event/interaction", 'tws-blockfilter'),
      checked: breakOneEnabled,
      onChange: function onChange() {
        return props.setAttributes({
          breakOneEnabled: !breakOneEnabled
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
      className: "tws-slider-carousel__enable-second-breakpoint tws-blockfilter__toggle-inner",
      label: __('Enable second breakpoint', 'tws-blockfilter'),
      help: __('(Mobile device ladscape/phablet)', 'tws-blockfilter'),
      checked: enableTwoBreakpoint,
      onChange: function onChange() {
        return props.setAttributes({
          enableTwoBreakpoint: !enableTwoBreakpoint
        });
      }
    }), enableTwoBreakpoint && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Panel, {
      className: "tws-slider-carousel__panel"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["__experimentalNumberControl"], {
      label: __('Enter window width (in px)', 'tws-blockfilter'),
      dragDirection: "e",
      dragThreshold: 10,
      labelPosition: "top",
      isShiftStepEnabled: true,
      step: 5,
      shiftStep: 50,
      value: breakTwoPixels,
      onChange: function onChange(value) {
        return props.setAttributes({
          breakTwoPixels: value
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["__experimentalNumberControl"], {
      label: __('Number of slides to show', 'tws-blockfilter'),
      dragDirection: "e",
      dragThreshold: 1,
      labelPosition: "top",
      step: 1,
      value: breakTwoSlides,
      onChange: function onChange(value) {
        return props.setAttributes({
          breakTwoSlides: value
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["__experimentalNumberControl"], {
      label: __('Gap (margins) between slides', 'tws-blockfilter'),
      dragDirection: "e",
      dragThreshold: 8,
      labelPosition: "top",
      step: 2,
      value: breakTwoSpace,
      onChange: function onChange(value) {
        return props.setAttributes({
          breakTwoSpace: value
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
      className: "tws-slider-carousel__enable-slider tws-blockfilter__toggle-inner-2",
      label: __('Enable interactions', 'tws-blockfilter'),
      help: breakTwoEnabled ? __('Will respond to all events/interactions', 'tws-blockfilter') : __("Won't respond to any event/interaction", 'tws-blockfilter'),
      checked: breakTwoEnabled,
      onChange: function onChange() {
        return props.setAttributes({
          breakTwoEnabled: !breakTwoEnabled
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
      className: "tws-slider-carousel__enable-third-breakpoint tws-blockfilter__toggle-inner",
      label: __('Enable third breakpoint', 'tws-blockfilter'),
      help: __('(tablet portrait)', 'tws-blockfilter'),
      checked: enableThreeBreakpoint,
      onChange: function onChange() {
        return props.setAttributes({
          enableThreeBreakpoint: !enableThreeBreakpoint
        });
      }
    }), enableThreeBreakpoint && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Panel, {
      className: "tws-slider-carousel__panel"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["__experimentalNumberControl"], {
      label: __('Enter window width (in px)', 'tws-blockfilter'),
      dragDirection: "e",
      dragThreshold: 10,
      labelPosition: "top",
      isShiftStepEnabled: true,
      step: 5,
      shiftStep: 50,
      value: breakThreePixels,
      onChange: function onChange(value) {
        return props.setAttributes({
          breakThreePixels: value
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["__experimentalNumberControl"], {
      label: __('Number of slides to show', 'tws-blockfilter'),
      dragDirection: "e",
      dragThreshold: 1,
      labelPosition: "top",
      step: 1,
      value: breakThreeSlides,
      onChange: function onChange(value) {
        return props.setAttributes({
          breakThreeSlides: value
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["__experimentalNumberControl"], {
      label: __('Gap (margins) between slides', 'tws-blockfilter'),
      dragDirection: "e",
      dragThreshold: 3,
      labelPosition: "top",
      step: 1,
      value: breakThreeSpace,
      onChange: function onChange(value) {
        return props.setAttributes({
          breakThreeSpace: value
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
      className: "tws-slider-carousel__enable-slider tws-blockfilter__toggle-inner-2",
      label: __('Enable interactions', 'tws-blockfilter'),
      help: breakThreeEnabled ? __('Will respond to all events/interactions', 'tws-blockfilter') : __("Won't respond to any event/interaction", 'tws-blockfilter'),
      checked: breakThreeEnabled,
      onChange: function onChange() {
        return props.setAttributes({
          breakThreeEnabled: !breakThreeEnabled
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
      className: "tws-slider-carousel__enable-four-breakpoint tws-blockfilter__toggle-inner",
      label: __('Enable forth breakpoint', 'tws-blockfilter'),
      help: __('(Tablet landspace/laptop)', 'tws-blockfilter'),
      checked: enableFourBreakpoint,
      onChange: function onChange() {
        return props.setAttributes({
          enableFourBreakpoint: !enableFourBreakpoint
        });
      }
    }), enableFourBreakpoint && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Panel, {
      className: "tws-slider-carousel__panel"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["__experimentalNumberControl"], {
      label: __('Enter window width (in px)', 'tws-blockfilter'),
      dragDirection: "e",
      dragThreshold: 10,
      labelPosition: "top",
      isShiftStepEnabled: true,
      step: 5,
      shiftStep: 50,
      value: breakFourPixels,
      onChange: function onChange(value) {
        return props.setAttributes({
          breakFourPixels: value
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["__experimentalNumberControl"], {
      label: __('Number of slides to show', 'tws-blockfilter'),
      dragDirection: "e",
      dragThreshold: 1,
      labelPosition: "top",
      step: 1,
      value: breakFourSlides,
      onChange: function onChange(value) {
        return props.setAttributes({
          breakFourSlides: value
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["__experimentalNumberControl"], {
      label: __('Gap (margins) between slides', 'tws-blockfilter'),
      dragDirection: "e",
      dragThreshold: 8,
      labelPosition: "top",
      step: 2,
      value: breakFourSpace,
      onChange: function onChange(value) {
        return props.setAttributes({
          breakFourSpace: value
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
      className: "tws-slider-carousel__enable-slider tws-blockfilter__toggle-inner-2",
      label: __('Enable interactions', 'tws-blockfilter'),
      help: breakFourEnabled ? __('Will respond to all events/interactions', 'tws-blockfilter') : __("Won't respond to any event/interaction", 'tws-blockfilter'),
      checked: breakFourEnabled,
      onChange: function onChange() {
        return props.setAttributes({
          breakFourEnabled: !breakFourEnabled
        });
      }
    }))))));
  };
}, 'withSliderCarouselControls'));

/***/ }),

/***/ "./src/filters/slider/view/save.js":
/*!*****************************************!*\
  !*** ./src/filters/slider/view/save.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _controller_props__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controller/props */ "./src/filters/slider/controller/props.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Slider Carousel Filter
 *
 * @package TheWebSolver\Core\Blocks_Filter\Slider_Carousel
 *
 * -----------------------------------
 * DEVELOPED-MAINTAINED-SUPPPORTED BY
 * -----------------------------------
 * ███║     ███╗   ████████████████
 * ███║     ███║   ═════════██████╗
 * ███║     ███║        ╔══█████═╝
 *  ████████████║      ╚═█████
 * ███║═════███║      █████╗
 * ███║     ███║    █████═╝
 * ███║     ███║   ████████████████╗
 * ╚═╝      ╚═╝    ═══════════════╝
 */

var _lodash = lodash,
    assign = _lodash.assign;
/**
 * Adds data attributes for slider carousel containers.
 *
 * @param {object} props Props of save element.
 * @param {object} blockType Block type information.
 * @param {object} attributes Attributes of block.
 *
 * @returns {object} The modified container properties.
 */

/* harmony default export */ __webpack_exports__["default"] = (function (props, blockType, attributes) {
  // Bail early if not slider Carousel container.
  if (!_controller_props__WEBPACK_IMPORTED_MODULE_1__["eligibleBlocks"].includes(blockType.name)) {
    return props;
  }

  var sliderEnabled = attributes.sliderEnabled,
      defaultEnabled = attributes.defaultEnabled,
      defaultSlideNumber = attributes.defaultSlideNumber,
      defaultSpace = attributes.defaultSpace,
      wrapperElement = attributes.wrapperElement,
      slideElement = attributes.slideElement,
      slideEffect = attributes.slideEffect,
      slideDirection = attributes.slideDirection,
      loopSlides = attributes.loopSlides,
      autoHeight = attributes.autoHeight,
      removeWrapperClass = attributes.removeWrapperClass,
      removeSlideClass = attributes.removeSlideClass,
      wrapperClassNameToRemove = attributes.wrapperClassNameToRemove,
      slideClassNameToRemove = attributes.slideClassNameToRemove,
      enableInteraction = attributes.enableInteraction,
      enableBullets = attributes.enableBullets,
      bulletClickable = attributes.bulletClickable,
      bulletDynamic = attributes.bulletDynamic,
      bulletRender = attributes.bulletRender,
      enableArrows = attributes.enableArrows,
      enableBreakpoints = attributes.enableBreakpoints,
      enableOneBreakpoint = attributes.enableOneBreakpoint,
      breakOnePixels = attributes.breakOnePixels,
      breakOneSlides = attributes.breakOneSlides,
      breakOneSpace = attributes.breakOneSpace,
      breakOneEnabled = attributes.breakOneEnabled,
      enableTwoBreakpoint = attributes.enableTwoBreakpoint,
      breakTwoPixels = attributes.breakTwoPixels,
      breakTwoSlides = attributes.breakTwoSlides,
      breakTwoSpace = attributes.breakTwoSpace,
      breakTwoEnabled = attributes.breakTwoEnabled,
      enableThreeBreakpoint = attributes.enableThreeBreakpoint,
      breakThreePixels = attributes.breakThreePixels,
      breakThreeSlides = attributes.breakThreeSlides,
      breakThreeSpace = attributes.breakThreeSpace,
      breakThreeEnabled = attributes.breakThreeEnabled,
      enableFourBreakpoint = attributes.enableFourBreakpoint,
      breakFourPixels = attributes.breakFourPixels,
      breakFourSlides = attributes.breakFourSlides,
      breakFourSpace = attributes.breakFourSpace,
      breakFourEnabled = attributes.breakFourEnabled;
  var $defaults = {
    enabled: defaultEnabled,
    slidesPerView: defaultSlideNumber,
    spaceBetween: defaultSpace,
    allowTouchMove: enableInteraction,
    effect: slideEffect,
    direction: slideDirection,
    loop: loopSlides,
    autoHeight: autoHeight
  },
      $removeWrapper = removeWrapperClass ? wrapperClassNameToRemove : '',
      $removeSlide = removeSlideClass ? slideClassNameToRemove : '',
      $bulletOptions = sliderEnabled ? {
    enabled: enableBullets,
    clickable: bulletClickable,
    render: bulletDynamic ? '' : bulletRender,
    dynamicBullets: bulletDynamic
  } : {},
      $arrowOptions = sliderEnabled ? {
    enabled: enableArrows
  } : {},
      $one = {
    slidesPerView: breakOneEnabled ? breakOneSlides : 9999,
    // prevent stuck on transform.
    spaceBetween: breakOneSpace,
    enabled: breakOneEnabled
  },
      $two = {
    slidesPerView: breakTwoEnabled ? breakTwoSlides : 9999,
    // prevent stuck on transform.
    spaceBetween: breakTwoSpace,
    enabled: breakTwoEnabled
  },
      $three = {
    slidesPerView: breakThreeEnabled ? breakThreeSlides : 9999,
    // prevent stuck on transform.
    spaceBetween: breakThreeSpace,
    enabled: breakThreeEnabled
  },
      $four = {
    slidesPerView: breakFourEnabled ? breakFourSlides : 9999,
    // prevent stuck on transform.
    spaceBetween: breakFourSpace,
    enabled: breakFourEnabled
  },
      $breakpoints = {};

  if (enableBreakpoints) {
    if (enableOneBreakpoint) {
      $breakpoints[breakOnePixels] = $one;
    }

    if (enableTwoBreakpoint) {
      $breakpoints[breakTwoPixels] = $two;
    }

    if (enableThreeBreakpoint) {
      $breakpoints[breakThreePixels] = $three;
    }

    if (enableFourBreakpoint) {
      $breakpoints[breakFourPixels] = $four;
    }
  }

  assign(props, _objectSpread({}, sliderEnabled && {
    className: "".concat(props.className, " tws-block__sliderCarousel"),
    'data-sliderdefault': JSON.stringify($defaults),
    'data-wrapper': wrapperElement,
    'data-slide': slideElement,
    'data-wrapperclass': $removeWrapper,
    'data-slideclass': $removeSlide,
    'data-bulletcontrol': JSON.stringify($bulletOptions),
    'data-arrowcontrol': JSON.stringify($arrowOptions),
    'data-breakpoints': JSON.stringify($breakpoints)
  })); // Get the above applied data in browser console.
  // console.log(props);

  return props;
});

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Slider Carousel Filter
 *
 * @package TheWebSolver\Core\Blocks_Filter
 *
 * -----------------------------------
 * DEVELOPED-MAINTAINED-SUPPPORTED BY
 * -----------------------------------
 * ███║     ███╗   ████████████████
 * ███║     ███║   ═════════██████╗
 * ███║     ███║        ╔══█████═╝
 *  ████████████║      ╚═█████
 * ███║═════███║      █████╗
 * ███║     ███║    █████═╝
 * ███║     ███║   ████████████████╗
 * ╚═╝      ╚═╝    ═══════════════╝
 */

/**
 * Gets all filters `index.js` files and imports them.
 *
 * @param {Function} request function `webpackContext()` to request
 *                           all `index.js` file found inside `src/filters` directory.
 */
var importAll = function importAll(request) {
  request.keys().forEach(request);
}; // Modified blocks using filters.


importAll(__webpack_require__("./src/filters sync recursive index\\.js$"));

/***/ }),

/***/ "@wordpress/components":
/*!*********************************************!*\
  !*** external {"this":["wp","components"]} ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var registerBlockType = wp.blocks.registerBlockType;\nvar _wp$editor = wp.editor,\n    RichText = _wp$editor.RichText,\n    InspectorControls = _wp$editor.InspectorControls,\n    MediaUpload = _wp$editor.MediaUpload;\nregisterBlockType('personofnote/image-switcher', {\n  title: 'Image Switcher',\n  icon: 'format-image',\n  category: 'common',\n  attributes: {\n    backgroundImage: {\n      type: 'string',\n      defult: null\n    },\n    backgroundImage1: {\n      type: 'string',\n      defult: null\n    }\n  },\n  edit: function edit(props) {\n    var setAttributes = props.setAttributes,\n        attributes = props.attributes,\n        className = props.className,\n        focus = props.focus;\n    var backgroundImage = attributes.backgroundImage;\n    var backgroundImage1 = attributes.backgroundImage1;\n    return [React.createElement(InspectorControls, null, React.createElement(\"div\", null, React.createElement(\"strong\", null, \"Select a background image:\"), React.createElement(MediaUpload, {\n      onSelect: function onSelect(imageObject) {\n        return setAttributes({\n          backgroundImage: imageObject.sizes.full.url\n        });\n      },\n      type: \"image\",\n      value: backgroundImage,\n      render: function render(_ref) {\n        var open = _ref.open;\n        return React.createElement(\"button\", {\n          onClick: open\n        }, \"Upload Image\");\n      }\n    })), React.createElement(\"div\", null, React.createElement(\"strong\", null, \"Select a second background image:\"), React.createElement(MediaUpload, {\n      onSelect: function onSelect(imageObject) {\n        return setAttributes({\n          backgroundImage1: imageObject.sizes.full.url\n        });\n      },\n      type: \"image\",\n      value: backgroundImage1,\n      render: function render(_ref2) {\n        var open = _ref2.open;\n        return React.createElement(\"button\", {\n          onClick: open\n        }, \"Upload Image\");\n      }\n    }))), //HTML div\n    React.createElement(\"div\", {\n      className: className\n    }, React.createElement(\"div\", {\n      className: \"image-visible\",\n      style: {\n        backgroundImage: \"url(\".concat(backgroundImage, \")\"),\n        backgroundSize: 'cover',\n        backgroundPosition: 'center'\n      }\n    }), React.createElement(\"div\", {\n      className: \"image-hover\",\n      style: {\n        backgroundImage: \"url(\".concat(backgroundImage1, \")\"),\n        backgroundSize: 'cover',\n        backgroundPosition: 'center'\n      }\n    }))];\n  },\n  save: function save(props) {\n    var attributes = props.attributes,\n        className = props.className;\n    var _props$attributes = props.attributes,\n        backgroundImage = _props$attributes.backgroundImage,\n        backgroundImage1 = _props$attributes.backgroundImage1;\n    return React.createElement(\"div\", {\n      className: className\n    }, React.createElement(\"div\", {\n      className: \"image-visible\",\n      style: {\n        backgroundImage: \"url(\".concat(backgroundImage, \")\"),\n        backgroundSize: 'cover',\n        backgroundPosition: 'center'\n      }\n    }), React.createElement(\"div\", {\n      className: \"image-hover\",\n      style: {\n        backgroundImage: \"url(\".concat(backgroundImage1, \")\"),\n        backgroundSize: 'cover',\n        backgroundPosition: 'center'\n      }\n    }));\n  }\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });
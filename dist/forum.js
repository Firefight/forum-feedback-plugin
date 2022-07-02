module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./forum.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./forum.js":
/*!******************!*\
  !*** ./forum.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_js_settingsOverride__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/js/settingsOverride */ "./src/js/settingsOverride.js");
/* empty/unused harmony star reexport *//* harmony import */ var _src_js_Discussion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/js/Discussion */ "./src/js/Discussion.js");
/* empty/unused harmony star reexport */


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  Object(_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./src/js/Discussion.js":
/*!******************************!*\
  !*** ./src/js/Discussion.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_forum_components_DiscussionListItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/components/DiscussionListItem */ "flarum/forum/components/DiscussionListItem");
/* harmony import */ var flarum_forum_components_DiscussionListItem__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_DiscussionListItem__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/components/Link */ "flarum/common/components/Link");
/* harmony import */ var flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_common_helpers_avatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/common/helpers/avatar */ "flarum/common/helpers/avatar");
/* harmony import */ var flarum_common_helpers_avatar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_avatar__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/common/helpers/listItems */ "flarum/common/helpers/listItems");
/* harmony import */ var flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var flarum_common_helpers_highlight__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/common/helpers/highlight */ "flarum/common/helpers/highlight");
/* harmony import */ var flarum_common_helpers_highlight__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_highlight__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! flarum/common/helpers/icon */ "flarum/common/helpers/icon");
/* harmony import */ var flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var flarum_common_utils_humanTime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! flarum/common/utils/humanTime */ "flarum/common/utils/humanTime");
/* harmony import */ var flarum_common_utils_humanTime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_humanTime__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! flarum/common/utils/ItemList */ "flarum/common/utils/ItemList");
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var flarum_common_utils_abbreviateNumber__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! flarum/common/utils/abbreviateNumber */ "flarum/common/utils/abbreviateNumber");
/* harmony import */ var flarum_common_utils_abbreviateNumber__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_abbreviateNumber__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var flarum_common_components_Dropdown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! flarum/common/components/Dropdown */ "flarum/common/components/Dropdown");
/* harmony import */ var flarum_common_components_Dropdown__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Dropdown__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var flarum_TerminalPost__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! flarum/TerminalPost */ "flarum/TerminalPost");
/* harmony import */ var flarum_TerminalPost__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(flarum_TerminalPost__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var flarum_common_utils_SubtreeRetainer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! flarum/common/utils/SubtreeRetainer */ "flarum/common/utils/SubtreeRetainer");
/* harmony import */ var flarum_common_utils_SubtreeRetainer__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_SubtreeRetainer__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var flarum_utils_DiscussionControls__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! flarum/utils/DiscussionControls */ "flarum/utils/DiscussionControls");
/* harmony import */ var flarum_utils_DiscussionControls__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_DiscussionControls__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var flarum_utils_slidable__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! flarum/utils/slidable */ "flarum/utils/slidable");
/* harmony import */ var flarum_utils_slidable__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_slidable__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! flarum/common/utils/classList */ "flarum/common/utils/classList");
/* harmony import */ var flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var flarum_common_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! flarum/common/components/DiscussionPage */ "flarum/common/components/DiscussionPage");
/* harmony import */ var flarum_common_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var flarum_common_utils_escapeRegExp__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! flarum/common/utils/escapeRegExp */ "flarum/common/utils/escapeRegExp");
/* harmony import */ var flarum_common_utils_escapeRegExp__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_escapeRegExp__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! flarum/common/components/Tooltip */ "flarum/common/components/Tooltip");
/* harmony import */ var flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_20__);






















flarum_forum_components_DiscussionListItem__WEBPACK_IMPORTED_MODULE_1___default.a.prototype.view = function () {
  var discussion = this.attrs.discussion;
  var reportData = this.attrs.discussion.data.attributes.report_data;
  var user = discussion.user();
  var isUnread = discussion.isUnread();
  var isRead = discussion.isRead();
  var jumpTo = 0;
  var controls = flarum_utils_DiscussionControls__WEBPACK_IMPORTED_MODULE_15___default.a.controls(discussion, this).toArray();
  var attrs = this.elementAttrs();

  if (this.attrs.params.q) {
    var post = discussion.mostRelevantPost();

    if (post) {
      jumpTo = post.number();
    }

    var phrase = flarum_common_utils_escapeRegExp__WEBPACK_IMPORTED_MODULE_19___default()(this.attrs.params.q);
    this.highlightRegExp = new RegExp(phrase + '|' + phrase.trim().replace(/\s+/g, '|'), 'gi');
  } else {
    jumpTo = Math.min(discussion.lastPostNumber(), (discussion.lastReadPostNumber() || 0) + 1);
  }

  console.log(this);

  if (reportData === undefined || this.thin) {
    return m("div", attrs, controls.length > 0 && flarum_common_components_Dropdown__WEBPACK_IMPORTED_MODULE_12___default.a.component({
      icon: 'fas fa-ellipsis-v',
      className: 'DiscussionListItem-controls',
      buttonClassName: 'Button Button--icon Button--flat Slidable-underneath Slidable-underneath--right',
      accessibleToggleLabel: flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('core.forum.discussion_controls.toggle_dropdown_accessible_label')
    }, controls), m("span", {
      className: 'Slidable-underneath Slidable-underneath--left Slidable-underneath--elastic' + (isUnread ? '' : ' disabled'),
      onclick: this.markAsRead.bind(this)
    }, flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_8___default()('fas fa-check')), m("div", {
      className: flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_17___default()('DiscussionListItem-content', 'Slidable-content', {
        unread: isUnread,
        read: isRead
      })
    }, m(flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_20___default.a, {
      text: flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('core.forum.discussion_list.started_text', {
        user: user,
        ago: flarum_common_utils_humanTime__WEBPACK_IMPORTED_MODULE_9___default()(discussion.createdAt())
      }),
      position: "right"
    }, m(flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      className: "DiscussionListItem-author",
      href: user ? flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default.a.route.user(user) : '#'
    }, flarum_common_helpers_avatar__WEBPACK_IMPORTED_MODULE_5___default()(user, {
      title: ''
    }))), m("ul", {
      className: "DiscussionListItem-badges badges"
    }, flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_6___default()(discussion.badges().toArray())), m(flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default.a.route.discussion(discussion, jumpTo),
      className: "DiscussionListItem-main"
    }, m("h3", {
      className: "DiscussionListItem-title"
    }, flarum_common_helpers_highlight__WEBPACK_IMPORTED_MODULE_7___default()(discussion.title(), this.highlightRegExp)), "hi", m("ul", {
      className: "DiscussionListItem-info"
    }, flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_6___default()(this.infoItems().toArray()))), this.replyCountItem()));
  } else {
    var discussionColor = 'green';

    switch (reportData.mood) {
      case 1:
        discussionColor = 'amber';
        break;

      case 2:
        discussionColor = 'red';
        break;
    }

    return m("div", Object.assign({}, attrs, {
      className: ['DiscussionListWithReport', "DiscussionListSidebar-" + discussionColor].join(' ')
    }), m("div", null, m("div", {
      className: flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_17___default()('DiscussionListItem-content', 'Slidable-content', {
        unread: isUnread,
        read: isRead
      })
    }, m(flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_20___default.a, {
      text: flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('core.forum.discussion_list.started_text', {
        user: user,
        ago: flarum_common_utils_humanTime__WEBPACK_IMPORTED_MODULE_9___default()(discussion.createdAt())
      }),
      position: "right"
    }, m("img", {
      width: 70,
      height: 70,
      src: "https://visage.surgeplay.com/head/" + reportData.uuid
    })), m("div", null, m("div", null, flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_6___default()(this.infoItems().toArray()[0]), this.replyCountItem()), m("div", null, m(flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default.a.route.discussion(discussion, jumpTo),
      classList: "DiscussionListItem-main"
    }, m("h3", {
      "class": "DiscussionListItem-title"
    }, flarum_common_helpers_highlight__WEBPACK_IMPORTED_MODULE_7___default()(discussion.title(), this.highlightRegExp))), m("div", {
      className: "overlay"
    }))), controls.length > 0 && flarum_common_components_Dropdown__WEBPACK_IMPORTED_MODULE_12___default.a.component({
      icon: 'fas fa-ellipsis-v',
      className: 'DiscussionListItem-controls',
      buttonClassName: 'Button Button--icon Button--flat Slidable-underneath Slidable-underneath--right',
      accessibleToggleLabel: flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('core.forum.discussion_controls.toggle_dropdown_accessible_label')
    }, controls)), m("ul", {
      className: "DiscussionListItem-info"
    }, flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_6___default()(this.infoItems().toArray()[1]))), m("img", {
      src: reportData.image_url
    }));
  }
};

Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_forum_components_DiscussionListItem__WEBPACK_IMPORTED_MODULE_1___default.a.prototype, 'oncreate', function (_, vnode) {
  if (this.attrs.thin === undefined) {
    this.subtree.data.thin = this.element.clientWidth < 820;
  }
});

/***/ }),

/***/ "./src/js/settingsOverride.js":
/*!************************************!*\
  !*** ./src/js/settingsOverride.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_forum_components_SettingsPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/forum/components/SettingsPage */ "flarum/forum/components/SettingsPage");
/* harmony import */ var flarum_forum_components_SettingsPage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_SettingsPage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_3__);





var KeyGenerator = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(KeyGenerator, _Component);

  function KeyGenerator() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = KeyGenerator.prototype;

  _proto.view = function view() {
    return m("li", null, m("legend", null, "Bind Minecraft account to Firefight Forums"), m("p", null, "To bind your Minecraft account to the Firefight Forums, press the button to obtain a code that will last for", m("b", null, " " + Math.floor(app.forum.attribute('VerificationCodeTimeout') / (1000 * 60)) + " "), "minutes that you can then submit on the firefight minecraft server using the", m("b", null, m("code", null, " " + app.forum.attribute('bindCommand') + " ")), "command"), m("button", {
      className: "Button"
    }, "Bind Account"));
  };

  return KeyGenerator;
}(flarum_common_Component__WEBPACK_IMPORTED_MODULE_3___default.a);

var BoundAccounts = /*#__PURE__*/function (_Component2) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(BoundAccounts, _Component2);

  function BoundAccounts() {
    return _Component2.apply(this, arguments) || this;
  }

  var _proto2 = BoundAccounts.prototype;

  _proto2.view = function view() {
    return m("li", null, m("legend", null, "Bound Minecraft Accounts"), m("p", null, "TODO: Table of minecraft accounts with remove option"));
  };

  return BoundAccounts;
}(flarum_common_Component__WEBPACK_IMPORTED_MODULE_3___default.a);

Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__["extend"])(flarum_forum_components_SettingsPage__WEBPACK_IMPORTED_MODULE_2___default.a.prototype, 'settingsItems', function (items) {
  items.add('keyGenerator', m(KeyGenerator, null)).add('boundAccounts', m(BoundAccounts, null));
});

/***/ }),

/***/ "flarum/TerminalPost":
/*!*****************************************************!*\
  !*** external "flarum.core.compat['TerminalPost']" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['TerminalPost'];

/***/ }),

/***/ "flarum/common/Component":
/*!*********************************************************!*\
  !*** external "flarum.core.compat['common/Component']" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/Component'];

/***/ }),

/***/ "flarum/common/components/DiscussionPage":
/*!*************************************************************************!*\
  !*** external "flarum.core.compat['common/components/DiscussionPage']" ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/DiscussionPage'];

/***/ }),

/***/ "flarum/common/components/Dropdown":
/*!*******************************************************************!*\
  !*** external "flarum.core.compat['common/components/Dropdown']" ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/Dropdown'];

/***/ }),

/***/ "flarum/common/components/Link":
/*!***************************************************************!*\
  !*** external "flarum.core.compat['common/components/Link']" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/Link'];

/***/ }),

/***/ "flarum/common/components/Tooltip":
/*!******************************************************************!*\
  !*** external "flarum.core.compat['common/components/Tooltip']" ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/Tooltip'];

/***/ }),

/***/ "flarum/common/extend":
/*!******************************************************!*\
  !*** external "flarum.core.compat['common/extend']" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/extend'];

/***/ }),

/***/ "flarum/common/helpers/avatar":
/*!**************************************************************!*\
  !*** external "flarum.core.compat['common/helpers/avatar']" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/helpers/avatar'];

/***/ }),

/***/ "flarum/common/helpers/highlight":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/helpers/highlight']" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/helpers/highlight'];

/***/ }),

/***/ "flarum/common/helpers/icon":
/*!************************************************************!*\
  !*** external "flarum.core.compat['common/helpers/icon']" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/helpers/icon'];

/***/ }),

/***/ "flarum/common/helpers/listItems":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/helpers/listItems']" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/helpers/listItems'];

/***/ }),

/***/ "flarum/common/utils/ItemList":
/*!**************************************************************!*\
  !*** external "flarum.core.compat['common/utils/ItemList']" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/utils/ItemList'];

/***/ }),

/***/ "flarum/common/utils/SubtreeRetainer":
/*!*********************************************************************!*\
  !*** external "flarum.core.compat['common/utils/SubtreeRetainer']" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/utils/SubtreeRetainer'];

/***/ }),

/***/ "flarum/common/utils/abbreviateNumber":
/*!**********************************************************************!*\
  !*** external "flarum.core.compat['common/utils/abbreviateNumber']" ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/utils/abbreviateNumber'];

/***/ }),

/***/ "flarum/common/utils/classList":
/*!***************************************************************!*\
  !*** external "flarum.core.compat['common/utils/classList']" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/utils/classList'];

/***/ }),

/***/ "flarum/common/utils/escapeRegExp":
/*!******************************************************************!*\
  !*** external "flarum.core.compat['common/utils/escapeRegExp']" ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/utils/escapeRegExp'];

/***/ }),

/***/ "flarum/common/utils/humanTime":
/*!***************************************************************!*\
  !*** external "flarum.core.compat['common/utils/humanTime']" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/utils/humanTime'];

/***/ }),

/***/ "flarum/forum/app":
/*!**************************************************!*\
  !*** external "flarum.core.compat['forum/app']" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['forum/app'];

/***/ }),

/***/ "flarum/forum/components/DiscussionListItem":
/*!****************************************************************************!*\
  !*** external "flarum.core.compat['forum/components/DiscussionListItem']" ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['forum/components/DiscussionListItem'];

/***/ }),

/***/ "flarum/forum/components/SettingsPage":
/*!**********************************************************************!*\
  !*** external "flarum.core.compat['forum/components/SettingsPage']" ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['forum/components/SettingsPage'];

/***/ }),

/***/ "flarum/utils/DiscussionControls":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['utils/DiscussionControls']" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['utils/DiscussionControls'];

/***/ }),

/***/ "flarum/utils/slidable":
/*!*******************************************************!*\
  !*** external "flarum.core.compat['utils/slidable']" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['utils/slidable'];

/***/ })

/******/ });
//# sourceMappingURL=forum.js.map
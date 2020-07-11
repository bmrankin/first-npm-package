"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default(ms) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, ms);
  });
};

exports["default"] = _default;
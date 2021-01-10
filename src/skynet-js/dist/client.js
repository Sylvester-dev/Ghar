"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SkynetClient = void 0;

var _utils = require("./utils.js");

class SkynetClient {
  constructor(portalUrl = null) {
    if (portalUrl === null) {
      portalUrl = (0, _utils.defaultPortalUrl)();
    }

    this.portalUrl = portalUrl;
  }

}

exports.SkynetClient = SkynetClient;
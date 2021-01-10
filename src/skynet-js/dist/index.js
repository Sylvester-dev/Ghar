"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "SkynetClient", {
  enumerable: true,
  get: function () {
    return _client.SkynetClient;
  }
});
Object.defineProperty(exports, "defaultPortalUrl", {
  enumerable: true,
  get: function () {
    return _utils.defaultPortalUrl;
  }
});
Object.defineProperty(exports, "defaultSkynetPortalUrl", {
  enumerable: true,
  get: function () {
    return _utils.defaultSkynetPortalUrl;
  }
});
Object.defineProperty(exports, "getRelativeFilePath", {
  enumerable: true,
  get: function () {
    return _utils.getRelativeFilePath;
  }
});
Object.defineProperty(exports, "getRootDirectory", {
  enumerable: true,
  get: function () {
    return _utils.getRootDirectory;
  }
});
Object.defineProperty(exports, "parseSkylink", {
  enumerable: true,
  get: function () {
    return _utils.parseSkylink;
  }
});

var _client = require("./client.js");

require("./download.js");

require("./upload.js");

var _utils = require("./utils.js");
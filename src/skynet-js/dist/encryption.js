"use strict";

var _utils = require("./utils.js");

/* eslint-disable no-unused-vars */
const defaultAddSkykeyOptions = { ...(0, _utils.defaultOptions)("/skynet/addskykey")
};
const defaultCreateSkykeyOptions = { ...(0, _utils.defaultOptions)("/skynet/createskykey")
};
const defaultGetSkykeyOptions = { ...(0, _utils.defaultOptions)("/skynet/skykey")
};
const defaultGetSkykeysOptions = { ...(0, _utils.defaultOptions)("/skynet/skykeys")
};

_utils.SkynetClient.prototype.addSkykey = async function (skykey, customOptions = {}) {
  throw new Error("Unimplemented");
};

_utils.SkynetClient.prototype.createSkykey = async function (skykeyName, skykeyType, customOptions = {}) {
  throw new Error("Unimplemented");
};

_utils.SkynetClient.prototype.getSkykeyById = async function (skykeyId, customOptions = {}) {
  throw new Error("Unimplemented");
};

_utils.SkynetClient.prototype.getSkykeyByName = async function (skykeyName, customOptions = {}) {
  throw new Error("Unimplemented");
};

_utils.SkynetClient.prototype.getSkykeys = async function getSkykeys(customOptions = {}) {
  throw new Error("Unimplemented");
};
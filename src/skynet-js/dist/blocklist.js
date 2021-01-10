"use strict";

var _utils = require("./utils.js");

/* eslint-disable no-unused-vars */
const defaultGetBlocklistOptions = { ...(0, _utils.defaultOptions)("/skynet/blocklist")
};
const defaultUpdateBlocklistOptions = { ...(0, _utils.defaultOptions)("/skynet/blocklist")
};

_utils.SkynetClient.prototype.getBlocklist = async function (customOptions = {}) {
  const opts = { ...defaultGetBlocklistOptions,
    ...customOptions
  };
  throw new Error("Unimplemented");
};

_utils.SkynetClient.prototype.updateBlocklist = async function (additions, removals, customOptions = {}) {
  const opts = { ...defaultUpdateBlocklistOptions,
    ...customOptions
  };
  throw new Error("Unimplemented");
};
"use strict";

var _utils = require("./utils.js");

/* eslint-disable no-unused-vars */
const defaultConvertOptions = { ...(0, _utils.defaultOptions)("/skynet/skyfile")
};

_utils.SkynetClient.prototype.convert = async function (srcSiaPath, destSiaPath, customOptions = {}) {
  const opts = { ...defaultConvertOptions,
    ...customOptions
  };
  throw new Error("Unimplemented");
};
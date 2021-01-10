"use strict";

var _utils = require("./utils.js");

/* eslint-disable no-unused-vars */
const defaultGetStatsOptions = { ...(0, _utils.defaultOptions)("/skynet/stats")
};

_utils.SkynetClient.prototype.getStats = async function (customOptions = {}) {
  const opts = { ...defaultGetStatsOptions,
    ...customOptions
  };
  throw new Error("Unimplemented");
};
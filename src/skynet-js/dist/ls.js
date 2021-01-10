"use strict";

var _utils = require("./utils.js");

/* eslint-disable no-unused-vars */
const defaultLsOptions = { ...(0, _utils.defaultOptions)(""),
  endpointPathLsDir: "/renter/dir",
  endpointPathLsFile: "/renter/file"
};

_utils.SkynetClient.prototype.ls = async function (customOptions = {}) {
  const opts = { ...defaultLsOptions,
    ...customOptions
  };
  throw new Error("Unimplemented");
};
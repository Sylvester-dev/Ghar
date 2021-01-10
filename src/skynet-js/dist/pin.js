"use strict";

var _utils = require("./utils.js");

/* eslint-disable no-unused-vars */
const defaultPinOptions = { ...(0, _utils.defaultOptions)("/skynet/pin")
};
const defaultUnpinOptions = { ...(0, _utils.defaultOptions)(""),
  endpointPathUnpinDir: "/renter/dir",
  endpointPathUnpinFile: "/renter/delete"
};

_utils.SkynetClient.prototype.pin = async function (skylink, destSiaPath, customOptions = {}) {
  const opts = { ...defaultPinOptions,
    ...customOptions
  };
  throw new Error("Unimplemented");
};

_utils.SkynetClient.prototype.unpin = async function (siaPath, customOptions = {}) {
  const opts = { ...defaultUnpinOptions,
    ...customOptions
  };
  throw new Error("Unimplemented");
};
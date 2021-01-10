"use strict";

var _utils = require("./utils.js");

/* eslint-disable no-unused-vars */
const defaultGetPortalsOptions = { ...(0, _utils.defaultOptions)("/skynet/portals")
};
const defaultUpdatePortalsOptions = { ...(0, _utils.defaultOptions)("/skynet/portals")
};

_utils.SkynetClient.prototype.getPortal = async function (customOptions = {}) {
  const opts = { ...defaultGetPortalsOptions,
    ...customOptions
  };
  throw new Error("Unimplemented");
};

_utils.SkynetClient.prototype.updatePortals = async function (additions, removals, customOptions = {}) {
  const opts = { ...defaultUpdatePortalsOptions,
    ...customOptions
  };
  throw new Error("Unimplemented");
};
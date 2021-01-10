"use strict";

var _client = require("./client.js");

var _utils = require("./utils.js");

/* eslint-disable no-unused-vars */
const defaultDownloadOptions = { ...(0, _utils.defaultOptions)("/")
};

_client.SkynetClient.prototype.download = function (skylink, customOptions = {}) {
  const opts = { ...defaultDownloadOptions,
    ...customOptions,
    download: true
  };
  const url = this.getDownloadUrl(skylink, opts);
  window.open(url, "_blank");
};

_client.SkynetClient.prototype.getDownloadUrl = function (skylink, customOptions = {}) {
  const opts = { ...defaultDownloadOptions,
    ...customOptions
  };
  const query = opts.download ? {
    attachment: true
  } : {};
  return (0, _utils.makeUrlWithSkylink)(this.portalUrl, opts.endpointPath, skylink, query);
};

_client.SkynetClient.prototype.metadata = function (skylink, customOptions = {}) {
  const opts = { ...defaultDownloadOptions,
    ...customOptions
  };
  throw new Error("Unimplemented");
};

_client.SkynetClient.prototype.open = function (skylink, customOptions = {}) {
  const opts = { ...defaultDownloadOptions,
    ...customOptions
  };
  const url = (0, _utils.makeUrlWithSkylink)(this.portalUrl, opts.endpointPath, skylink);
  window.open(url, "_blank");
};
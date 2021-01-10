"use strict";

var _axios = _interopRequireDefault(require("axios"));

var _client = require("./client.js");

var _utils = require("./utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const defaultUploadOptions = { ...(0, _utils.defaultOptions)("/skynet/skyfile"),
  portalFileFieldname: "file",
  portalDirectoryFileFieldname: "files[]" // TODO:
  // customFilename: "",

};

_client.SkynetClient.prototype.upload = async function (file, customOptions = {}) {
  const opts = { ...defaultUploadOptions,
    ...customOptions
  };
  const formData = new FormData();
  formData.append(opts.portalFileFieldname, ensureFileObjectConsistency(file));
  const url = (0, _utils.makeUrl)(this.portalUrl, opts.endpointPath);
  const {
    data
  } = await _axios.default.post(url, formData, opts.onUploadProgress && {
    onUploadProgress: ({
      loaded,
      total
    }) => {
      const progress = loaded / total;
      opts.onUploadProgress(progress, {
        loaded,
        total
      });
    }
  });
  return data;
};
/**
 * Uploads a local directory to Skynet.
 * @param {Object} directory - File objects to upload, indexed by their path strings.
 * @param {string} filename - The name of the directory.
 * @param {Object} [customOptions={}] - Additional settings that can optionally be set.
 * @param {string} [customOptions.endpointPath="/skynet/skyfile"] - The relative URL path of the portal endpoint to contact.
 * @param {string} [customOptions.portalDirectoryfilefieldname="files[]"] - The fieldName for directory files on the portal.
 */


_client.SkynetClient.prototype.uploadDirectory = async function (directory, filename, customOptions = {}) {
  const opts = { ...defaultUploadOptions,
    ...customOptions
  };
  const formData = new FormData();
  Object.entries(directory).forEach(([path, file]) => {
    formData.append(opts.portalDirectoryFileFieldname, ensureFileObjectConsistency(file), path);
  });
  const url = (0, _utils.makeUrl)(this.portalUrl, opts.endpointPath, {
    filename
  });
  const {
    data
  } = await _axios.default.post(url, formData, opts.onUploadProgress && {
    onUploadProgress: ({
      loaded,
      total
    }) => {
      const progress = loaded / total;
      opts.onUploadProgress(progress, {
        loaded,
        total
      });
    }
  });
  return data;
};
/**
 * Sometimes file object might have had the type property defined manually with
 * Object.defineProperty and some browsers (namely firefox) can have problems
 * reading it after the file has been appended to form data. To overcome this,
 * we recreate the file object using native File constructor with a type defined
 * as a constructor argument.
 * Related issue: https://github.com/NebulousLabs/skynet-webportal/issues/290
 */


function ensureFileObjectConsistency(file) {
  return new File([file], file.name, {
    type: file.type
  });
}
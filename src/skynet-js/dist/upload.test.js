"use strict";

var _axios = _interopRequireDefault(require("axios"));

var _index = require("./index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

jest.mock("axios");
const portalUrl = _index.defaultSkynetPortalUrl;
const client = new _index.SkynetClient(portalUrl);
const skylink = "XABvi7JtJbQSMAcDwnUnmp2FKDPjg8_tTTFP4BwMSxVdEg";
describe("uploadFile", () => {
  const filename = "bar.txt";
  const file = new File(["foo"], filename, {
    type: "text/plain"
  });
  beforeEach(() => {
    _axios.default.post.mockResolvedValue({
      data: {
        skylink
      }
    });
  });
  it("should send post request with FormData", () => {
    client.upload(file, {});
    expect(_axios.default.post).toHaveBeenCalledWith(`${portalUrl}/skynet/skyfile`, expect.any(FormData), // TODO: Inspect data contents.
    undefined);
  });
  it("should send register onUploadProgress callback if defined", () => {
    const newPortal = "https://my-portal.net";
    const client = new _index.SkynetClient(newPortal);
    client.upload(file, {
      onUploadProgress: jest.fn()
    });
    expect(_axios.default.post).toHaveBeenCalledWith(`${newPortal}/skynet/skyfile`, expect.any(FormData), // TODO: Inspect data contents.
    {
      onUploadProgress: expect.any(Function)
    });
  });
  it("should send base-64 authentication password if provided", () => {
    client.upload(file, {
      APIKey: "foobar"
    });
    expect(_axios.default.post).toHaveBeenCalledWith(`${portalUrl}/skynet/skyfile`, expect.any(FormData), // TODO: Inspect data contents.
    undefined);
  });
  it("should return skylink on success", async () => {
    const data = await client.upload(file);
    expect(data).toEqual({
      skylink
    });
  });
});
describe("uploadDirectory", () => {
  const blob = new Blob([], {
    type: "image/jpeg"
  });
  const filename = "i-am-root";
  const directory = {
    "i-am-not/file1.jpeg": new File([blob], "i-am-not/file1.jpeg"),
    "i-am-not/file2.jpeg": new File([blob], "i-am-not/file2.jpeg"),
    "i-am-not/me-neither/file3.jpeg": new File([blob], "i-am-not/me-neither/file3.jpeg")
  };
  beforeEach(() => {
    _axios.default.post.mockResolvedValue({
      data: {
        skylink
      }
    });
  });
  it("should send post request with FormData", () => {
    client.uploadDirectory(directory, filename);
    expect(_axios.default.post).toHaveBeenCalledWith(`${portalUrl}/skynet/skyfile?filename=${filename}`, expect.any(FormData), // TODO: Inspect data contents.
    undefined);
  });
  it("should send register onUploadProgress callback if defined", () => {
    client.uploadDirectory(directory, filename, {
      onUploadProgress: jest.fn()
    });
    expect(_axios.default.post).toHaveBeenCalledWith(`${portalUrl}/skynet/skyfile?filename=${filename}`, expect.any(FormData), {
      onUploadProgress: expect.any(Function)
    });
  });
  it("should return single skylink on success", async () => {
    const data = await client.uploadDirectory(directory, filename);
    expect(data).toEqual({
      skylink
    });
  });
});
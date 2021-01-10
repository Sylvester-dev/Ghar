"use strict";

var _utils = require("./utils");

const portalUrl = _utils.defaultSkynetPortalUrl;
const skylink = "XABvi7JtJbQSMAcDwnUnmp2FKDPjg8_tTTFP4BwMSxVdEg";
const validSkylinkVariations = [skylink, `sia:${skylink}`, `sia://${skylink}`, `${portalUrl}/${skylink}`, `${portalUrl}/${skylink}/foo/bar`, `${portalUrl}/${skylink}?foo=bar`];
describe("makeUrl", () => {
  it("should return correctly formed URLs", () => {
    expect((0, _utils.makeUrl)(portalUrl, "/")).toEqual(`${portalUrl}/`);
    expect((0, _utils.makeUrl)(portalUrl, "/", {
      attachment: true
    })).toEqual(`${portalUrl}/?attachment=true`);
    expect((0, _utils.makeUrl)(portalUrl, "/skynet")).toEqual(`${portalUrl}/skynet`);
    expect((0, _utils.makeUrl)(portalUrl, "/skynet/")).toEqual(`${portalUrl}/skynet/`);
    expect((0, _utils.makeUrl)(portalUrl, "/skynet/", {
      foo: 1,
      bar: 2
    })).toEqual(`${portalUrl}/skynet/?foo=1&bar=2`);
    expect((0, _utils.makeUrlWithSkylink)(portalUrl, "/", skylink)).toEqual(`${portalUrl}/${skylink}`);
    expect((0, _utils.makeUrlWithSkylink)(portalUrl, "/skynet", skylink)).toEqual(`${portalUrl}/skynet/${skylink}`);
    expect((0, _utils.makeUrlWithSkylink)(portalUrl, "/skynet/", skylink)).toEqual(`${portalUrl}/skynet/${skylink}`);
  });
});
describe("parseSkylink", () => {
  it("should correctly parse skylink out of different strings", () => {
    validSkylinkVariations.forEach(input => {
      expect((0, _utils.parseSkylink)(input)).toEqual(skylink);
    });
  });
  it("should throw on invalid skylink", () => {
    expect(() => (0, _utils.parseSkylink)()).toThrowError("Could not extract skylink from ''");
    expect(() => (0, _utils.parseSkylink)(123)).toThrowError("Skylink has to be a string, number provided");
    expect(() => (0, _utils.parseSkylink)("123")).toThrowError("Could not extract skylink from '123'");
  });
});
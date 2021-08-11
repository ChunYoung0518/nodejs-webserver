const appMock = require("./app");
require("./index.js");

jest.mock("./app");

describe("inde.js -- app entry", () => {
    it(`should call app.listen method`, () => {
        expect(appMock.listen).toHaveBeenCalled();
    });
});
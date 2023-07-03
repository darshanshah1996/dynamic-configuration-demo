import { expect as chaiExpect } from "chai";

describe("Youtube Homepage", () => {
  it("should have correct title", async () => {
    await browser.url("https://www.youtube.com/");

    const pageTitle = await browser.getTitle();

    chaiExpect(pageTitle).to.equal("YouTube");
  });
});

import { expect as chaiExpect } from "chai";

describe("Google Homepage", () => {
  it("should have correct title", async () => {
    await browser.url("https://www.google.com/");

    const pageTitle = await browser.getTitle();

    chaiExpect(pageTitle).to.equal("Google");
  });
});

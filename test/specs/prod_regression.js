import { expect as chaiExpect } from "chai";

describe("Facebook Homepage", () => {
  it("should have correct title", async () => {
    await browser.url("https://www.facebook.com/");

    const pageTitle = await browser.getTitle();

    chaiExpect(pageTitle).to.equal("Facebook – log in or sign up");
  });
});

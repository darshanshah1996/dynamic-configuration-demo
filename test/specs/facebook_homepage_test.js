import { expect as chaiExpect } from "chai";

describe("Facebook Homepage", () => {
  it("should have correct title", async () => {
    await browser.url("https://www.facebook.com/");

    const pageTitle = await browser.getTitle();

    chaiExpect(pageTitle).to.equal("Facebook – log in or sign up");
  });

  it(`should have a link to 'Create a Page'`, async () => {
    const createPageLink = $(`//a[text()='Create a Page']`);

    await expect(createPageLink).toBeDisplayed();
    await expect(createPageLink).toHaveAttribute(
      "href",
      "/pages/create/?ref_type=registration_form"
    );
  });
});

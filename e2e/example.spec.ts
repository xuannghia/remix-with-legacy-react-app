import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test.describe("Home page", () => {
  test("Should have a heading title", async ({ page }) => {
    const heading = page.getByRole("heading");
    await expect(heading).toHaveText("Home page");
  });

  test("Should navigate to about page", async ({ page }) => {
    const link = page.getByRole("link", { name: /About/i });
    await link.click();
    await expect(page).toHaveURL(/.*\/about/);
    const heading = page.getByRole("heading");
    await expect(heading).toHaveText("About page");
  });

  test("Should navigate to Remix page", async ({ page }) => {
    const link = page.getByRole("link", { name: /Remix/i });
    await link.click();
    await expect(page).toHaveURL(/.*\/remix/);
    const heading = page.getByRole("heading");
    await expect(heading).toHaveText("This is Remix page");
  });

  test("Should working with sharing context Remix & React app", async ({
    page,
  }) => {
    const counter = page.getByTestId("counter");
    const button = page.getByRole("button", { name: /Increase/i });
    await expect(counter).toHaveText("0");
    await button.click();
    await expect(counter).toHaveText("1");
    const link = page.getByRole("link", { name: /Remix/i });
    await link.click();
    const buttonRemix = page.getByRole("button", { name: /Increase/i });
    const counterRemix = page.getByTestId("counter");
    await expect(counterRemix).toHaveText("1");
    await buttonRemix.click();
    await expect(counterRemix).toHaveText("2");
  });
});

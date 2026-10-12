const { test, expect } = require("playwright/test")

test('First e2e', async ({ page }) => {

   const prodName = "iphone 13 pro";

   await page.goto("https://rahulshettyacademy.com/client");

   await expect(page).toHaveTitle("Let's Shop");

   await page.locator("#userEmail").fill("qa1test@gmail.com");
   await page.locator("[type='password']").fill("qatest@gmail.coM1");
   await page.locator("form input:nth-child(3)").click();
   await page.waitForLoadState('networkidle')

   await page.locator('p', { hasText: 'Automation Practice' }).waitFor();

   const len = (await page.locator(".card-body").allTextContents()).length
   console.log(len)

   for (let i = 0; i < len; i++) {
      if (await page.locator(".card-body").nth(i).locator("h5 b").textContent() === prodName) {
         await page.locator(".card-body").nth(i).locator("button", { hasText: "Add To Cart" }).click();
      }
   }

   await page.locator('li button', { hasText: 'Cart' }).click();

   await expect(page.locator('.heading h1')).toHaveText('My Cart')
   await expect(page.locator('.cartSection h3')).toHaveText(prodName)

   await page.locator('li button', { hasText: 'Checkout' }).click()

   await page.locator('input[placeholder="Select Country"]').pressSequentially('ind', { delay: 500 })

   await page.getByText(' India', { exact: true }).click();

   await page.locator('a.action__submit').click();

   expect(page.locator('h1.hero-primary')).toHaveText(' Thankyou for the order. ')
   await page.pause();

});






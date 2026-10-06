const {test, expect } = require("playwright/test")

test('First e2e', async ( {page} )=>{

   await page.goto("https://rahulshettyacademy.com/client");

   await expect(page).toHaveTitle("Let's Shop");

})






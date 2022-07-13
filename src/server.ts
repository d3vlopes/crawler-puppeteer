import express, { Request, Response } from 'express'
import puppeteer from 'puppeteer'

import 'dotenv/config'

const app = express()

app.use(express.json())

app.get('/', async (req: Request, res: Response) => {
  res.send('Hello World!')
})

const initialisePuppeteer = async () => {
  const browser = await puppeteer.launch()

  const page = await browser.newPage()

  await page.goto(process.env.SITE_URL as string)

  setTimeout(async () => {
    await page.waitForSelector('form[class="form ng-untouched ng-pristine ng-invalid"]')

    await page.type('input[id="mat-input-0"]', 'John Doe')
    await page.type('input[id="mat-input-1"]', '19091994')
    await page.type('input[id="mat-input-2"]', '42123467022')
    await page.type('input[id="mat-input-3"]', 'johndoe@gmail.com')
    await page.type('input[id="mat-input-5"]', 'johndoe9999')
    await page.type('input[id="mat-input-6"]', 'L10203040')
    await page.type('input[id="mat-input-7"]', 'L10203040')

    // await page.click('span[class="terms"]')
    // await page.click('button[type="submit"]')

    setTimeout(async() => {
      await page.screenshot({path: 'example.png'});
    }, 2000)
  }, 5000)

}

app.listen(process.env.PORT || 3333, () => {
  initialisePuppeteer()
  console.log('Server is running')
})
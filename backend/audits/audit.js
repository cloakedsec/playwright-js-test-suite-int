const { chromium } = require('playwright');

async function runAudit(url) {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto(url);

  const title = await page.title();
  let metaDescription = 'No description';
  try {
    metaDescription = await page.$eval(
      'meta[name="description"]',
      (el) => el.content
    );
  } catch (e) {}

  await browser.close();

  return `
    <html>
      <body>
        <h1>Audit Report for ${url}</h1>
        <p><strong>Title:</strong> ${title}</p>
        <p><strong>Description:</strong> ${metaDescription}</p>
      </body>
    </html>
  `;
}

module.exports = { runAudit };

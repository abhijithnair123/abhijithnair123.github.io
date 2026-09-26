const puppeteer = require('puppeteer-core');
const path = require('path');
const fs = require('fs');

async function exportResume() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
  const execPath = fs.existsSync(chromePath) ? chromePath : edgePath;

  console.log('Using browser executable:', execPath);

  const browser = await puppeteer.launch({
    executablePath: execPath,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu'],
    headless: true,
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 1600 });
  
  console.log('Navigating to http://localhost:3000/resume...');
  await page.goto('http://localhost:3000/resume', { waitUntil: 'networkidle0' });

  const pdfPath = path.resolve(__dirname, '../public/abhijith.pdf');
  await page.pdf({
    path: pdfPath,
    format: 'A4',
    printBackground: true,
    preferCSSPageSize: true,
  });

  await browser.close();
  console.log('Successfully exported pixel-perfect executive resume to:', pdfPath);
}

exportResume().catch((err) => {
  console.error('Error generating PDF:', err);
  process.exit(1);
});

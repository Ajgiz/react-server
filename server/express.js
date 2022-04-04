const express = require("express");
const bodyParser = require("body-parser");
require("ignore-styles");
require("@babel/register");
const React = require("react");
const ReactDOMServer = require("react-dom/server");
const path = require("path");
const { App } = require("../src/app");
const puppeteer = require("puppeteer");
console.log("sasfasf");
const app = express();
const cors = require("cors");
const fs = require("fs");
/* App Config */
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

app.use(express.json());
app.get("/", express.static(path.resolve(__dirname, "assets/")));
app.use(cors({ origin: "http://localhost:3000" }));

app.post("/", async (req, res) => {
  const html = ReactDOMServer.renderToString(
    <App size={{ width: "1000px", height: "760px" }} />
  );
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const pathPDF =path.resolve(__dirname,'assets','2321.pdf')
  await page.setContent(html);
  await page.emulateMediaType("screen");
  await page.pdf({
    path:pathPDF,
    format: "a4",
    printBackground: true,
  });
  await browser.close();
  res.sendStatus(200)
});

let port = 5000;
app.listen(port, () => {
  console.log(
    `Server initialized on: http://localhost:${port} // ${new Date()}`
  );
});

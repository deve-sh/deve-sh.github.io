const fs = require("fs")

const generateSitemap = () => {
  const urls = [
    "https://devesh.tech",
    "https://devesh.tech/work",
    "https://devesh.tech/resume",
    "https://devesh.tech/about",
    "https://devesh.tech/contact",
    "https://blog.devesh.tech",
  ]

  let modifiedTime = JSON.stringify(new Date()).replace(/"/g, "")

  let sitemapXML = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">`
  for (let i = 0; i < urls.length; i++) {
    sitemapXML += `\n<url>
      <loc>${urls[i]}</loc>
      <lastmod>${modifiedTime}</lastmod>
      <priority>1.00</priority>
  </url>`
  }
  sitemapXML += `\n</urlset>`
  fs.writeFileSync("./public/sitemap.xml", sitemapXML)
}

generateSitemap()

import fs from 'fs';
import { SITE_URL } from '../constants';
import { getAll } from '../utils/getContent';

const pages = [''];

fs.readdirSync('src/routes').map(file => {
  file = file.split('.')[0];
  if (
    file.charAt(0) !== '_' &&
    file !== 'sitemap' &&
    file !== 'index' &&
    file !== 'robots'
  ) {
    pages.push(file);
  }
});

const render = (rootPages, subPages) => `<?xml version="1.0" encoding="UTF-8" ?>
<urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  ${rootPages.map(page => `
    <url><loc>${SITE_URL}${page}</loc><priority>0.85</priority></url>
  `).join('\n')}
  ${subPages.map(page =>`
    <url>
      <loc>${SITE_URL}${page}</loc>
      <priority>0.69</priority>
    </url>
  `).join('\n')}
</urlset>
`;

export async function get(_, res) {
  res.setHeader('Cache-Control', `max-age=0, s-max-age=${600}`); // 10 minutes
  res.setHeader('Content-Type', 'application/rss+xml');
  const sitemap = render(pages, [
    ...getAll('content/projects').map(x => `project/${x.slug}`),
    ...getAll('content/blog').map(x => `blog/${x.slug}`)
  ]);
  res.end(sitemap);
}
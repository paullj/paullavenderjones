import { SITE_URL } from '../constants';

const rules = {
  'User-agent': '*',
  Sitemap: `${SITE_URL}sitemap.xml`,
  Host: SITE_URL,
};

export function get(req, res) {
  res.setHeader('Content-Type', 'text/plain');
  const content = Object.keys(rules).reduce(
    (acc, next) => (acc += `${next}: ${rules[next]}\n`),
    ''
  );

  res.end(content);
}

import { getPosts } from './_posts';

export function get(req, res) {
  res.writeHead(200, {
    "Content-Type": "application/json"
  });
  const posts = getPosts();
  res.end(JSON.stringify(posts));
}

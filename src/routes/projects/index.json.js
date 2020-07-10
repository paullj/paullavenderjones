
import { getProjects } from './_projects';

export function get(req, res) {
  res.writeHead(200, {
    "Content-Type": "application/json"
  });
  const posts = getProjects();
  res.end(JSON.stringify(posts));
}

import { getAll } from '../../utils/getContent';
import { format } from 'date-fns';

export function get(req, res) {
  res.writeHead(200, {
    "Content-Type": "application/json"
  });
  const posts = getAll('content/blog').map(post => ({
    ...post,
    date: post.published ? format(post.published, 'EEEE do MMMM yyyy') : 'n/a',
  }));
  res.end(JSON.stringify(posts));
}

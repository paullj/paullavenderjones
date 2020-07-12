import { getAll } from '../../utils/getContent';
import { format } from 'date-fns';


export function get(req, res) {
  res.writeHead(200, {
    "Content-Type": "application/json"
  });
  let tags = {};
  const posts = getAll('content/blog').map((post, i) => {
    (post.tags || '').split(',').map(s => s.trim()).forEach(key => {
      tags[key] = tags[key] || [];
      tags[key].push(i)
    });

    return {
      ...post,
      date: post.published ? format(post.published, 'EEEE do MMMM yyyy') : 'n/a',
    }
  });
  res.end(JSON.stringify({
    tags,
    posts
  }));
}


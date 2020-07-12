import { getAll } from '../../utils/getContent';
import { format } from 'date-fns';

export function get(req, res) {
  res.writeHead(200, {
    "Content-Type": "application/json"
  });
  const articles = getAll('content/articles').map(article => ({
    ...article,
    date: article.date ? format(article.date, 'EEEE do MMMM yyyy') : 'No date.'
  }));
  res.end(JSON.stringify(articles));
}

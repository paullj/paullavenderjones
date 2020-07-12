import { getAll } from '../../utils/getContent';
import { format } from 'date-fns';

export function get(req, res) {
  res.writeHead(200, {
    "Content-Type": "application/json"
  });
  const projects = getAll('content/projects').map(project => ({
    ...project,
    date: project.published ? format(project.published, 'MMMM yyyy') : 'n/a'
  }))
  res.end(JSON.stringify(projects));
}

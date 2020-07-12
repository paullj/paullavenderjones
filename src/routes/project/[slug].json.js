import snarkdown from 'snarkdown';
import { format } from 'date-fns'

import { getOne } from '../../utils/getContent';

import { parseFrontmatter } from '../../utils/parseFrontmatter';
import { replaceEmbed } from '../../utils/replaceEmbed';
import { replaceHighlight } from '../../utils/replaceHighlight';

export const get = async (req, res, next) => {
	const { slug } = req.params;

	const project = getOne('content/projects', slug);

	const { metadata, body } = parseFrontmatter(project);
	const embeded = await replaceEmbed(body);
	const highlighted = replaceHighlight(embeded);
	const content = snarkdown(highlighted);

	if (content) {
		res.writeHead(200, {
			"Content-Type": "application/json"
		});

		res.end(JSON.stringify({
      ...metadata,
      date: metadata.date ? format(new Date(metadata.date), 'MMMM yyyy') : 'No date.',
      content,
    }));
	} else {
		res.writeHead(404, {
		  "Content-Type": "application/json"
		});

		res.end(
			JSON.stringify({
				message: `Not found`
			})
		);
	}
}
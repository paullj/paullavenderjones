import snarkdown from 'snarkdown';
import { format } from 'date-fns'

import { getProject } from './_projects';
import { parseFrontmatter } from '../../utils/parseFrontmatter';
import { replaceEmbed } from '../../utils/replaceEmbed';
import { replaceHighlight } from '../../utils/replaceHighlight';

export const get = async (req, res, next) => {
	const { slug } = req.params;

	const post = getProject(slug);

	const { metadata, body } = parseFrontmatter(post);
	const embeded = await replaceEmbed(body);
	const highlighted = replaceHighlight(embeded);
	const content = snarkdown(highlighted);

	if (content) {
		res.writeHead(200, {
			"Content-Type": "application/json"
		});

		res.end(JSON.stringify({
      ...metadata,
      date: format(new Date(metadata.date), "MMMM yyyy"),
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
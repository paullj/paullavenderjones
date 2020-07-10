import { getPost } from './_posts';

import snarkdown from 'snarkdown'
import { parseFrontmatter } from '../../utils/parseFrontmatter';

export function get(req, res, next) {
	const { slug } = req.params;

	const post = getPost(slug);

	const { attributes, body } = parseFrontmatter(post);
	const content = snarkdown(body);

	if (content) {
		res.writeHead(200, {
			"Content-Type": "application/json"
		});

		res.end(JSON.stringify({ content, ...attributes }));
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
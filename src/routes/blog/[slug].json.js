import snarkdown from 'snarkdown';
import { format } from 'date-fns'

import { getOne, getAll } from '../../utils/getContent';
import { getReadingTime } from '../../utils/getReadingTime';
import { parseFrontmatter } from '../../utils/parseFrontmatter';
import { replaceEmbed } from '../../utils/replaceEmbed';
import { replaceHighlight } from '../../utils/replaceHighlight';

export const get = async (req, res, next) => {
	const { slug } = req.params;

	const post = getOne('content/blog', slug);

	const { metadata, body } = parseFrontmatter(post);
	const embeded = await replaceEmbed(body);
	const highlighted = replaceHighlight(embeded);
	const content = snarkdown(highlighted);

	let prevArticle = null
  let nextArticle = null
  const posts = getAll('content/blog')
  let currentIndex = -1;
  posts.forEach((article, i) => {
    if(article.slug === slug) {
      currentIndex = i;
    }
  })
  if(currentIndex !== -1) {
    //If there's a newer article, grab it
    if (currentIndex > 0) {
      nextArticle = {
        slug: posts[currentIndex-1].slug,
        title: posts[currentIndex-1].title
      }
    }

    //If there's an older article grab it
    if (currentIndex < posts.length - 1) {
      prevArticle = {
        slug: posts[currentIndex+1].slug,
        title: posts[currentIndex+1].title
      }
    }
  }


	if (content) {
		res.writeHead(200, {
			"Content-Type": "application/json"
		});

		res.end(JSON.stringify({
      ...metadata,
      date: metadata.published ? format(new Date(metadata.published), 'EEEE do MMMM yyyy') : 'n/a',
      readingTime: `${getReadingTime(post)} minute read`,
      content,
      prevArticle,
      nextArticle
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
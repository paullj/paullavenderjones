import blocksToHtml from '@sanity/block-content-to-html';
import { format, parseISO } from 'date-fns';

import sanity from '$utils/sanity';
import { generateImage } from '$utils/image';
import serializers from '$utils/serializers';

const getReadingTime = stringToCheck => {
  const wordCount = stringToCheck
    .trim()
    .replace(/[^\w ]/g, '')
    .split(/\s+/).length;
  const secondsToRead = wordCount / (10 / 3);
  const minsToRead = Math.ceil(secondsToRead / 60);
  return minsToRead;
};

export const get = async ({ params }) => {
  const { slug } = params;
  const query = `*[_type == "post" && slug.current == $slug][0] {
    title,
    publishedAt,
    description,
    author -> {
      ...,
      image { ..., asset-> }
    },
    body[] {
      ...,
      _type == 'image' => {
        ...,
        asset->
      }
    }
  }`;

  const { title, publishedAt, body, description, author } = await sanity
    .fetch(query, { slug })
    .catch(error => console.log(error));
  const content = blocksToHtml({ blocks: body, serializers });

  return {
    body: {
      title,
      publishedAt: format(parseISO(publishedAt), 'EEEE do MMMM yyyy'),
      description,
      readingTime: `${getReadingTime(content)} minute read`,
      author: {
        name: author.name,
        image: author.image ? generateImage(author.image, 64) : null,
      },
      content,
    },
    headers: { 'Content-Type': 'application/json' },
    status: 200,
  };
};

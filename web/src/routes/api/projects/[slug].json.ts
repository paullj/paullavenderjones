import blocksToHtml from '@sanity/block-content-to-html';
import { format, parseISO } from 'date-fns';

import sanity from '$utils/sanity';
import { generateImages, generateImage } from '$utils/image';
import serializers from '$utils/serializers';

export const get = async ({ params }) => {
  const { slug } = params;
  const query = `*[_type == "project" && slug.current == $slug][0] {
    title,
    description,
    publishedAt,
    author -> {
      ...,
      image { ..., asset-> }
    },
    mainImage {..., asset->},
    body[]{
      ...,
      _type == 'image' => {
        ...,
        asset->
      }
    }
  }`;

  const { title, description, publishedAt, mainImage, body, author } = await sanity
    .fetch(query, { slug })
    .catch(error => console.log(error));
  const content = blocksToHtml({ blocks: body, serializers });

  return {
    body: {
      title,
      description,
      publishedAt: format(parseISO(publishedAt), 'MMMM yyyy'),
      author: {
        name: author.name,
        image: author.image ? generateImage(author.image, 64) : null,
      },
      mainImage: mainImage ? generateImages(mainImage) : null,
      content,
    },
    headers: { 'Content-Type': 'application/json' },
    status: 200,
  };
};

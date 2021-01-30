import sanity from '$utils/sanity';
import serializers from '$utils/serializers';
import blocksToHtml from '@sanity/block-content-to-html';

export const get = async ({ params }) => {
  const { slug } = params;
  const query = `*[_type == "project" && slug.current == $slug][0] {
      ...,
      body[]{
        ...,
        children[]{
          ...,
          _type == 'authorReference' => {
            _type,
            author->
          }
        }
      }
    }`;

  const { title, body } = await sanity.fetch(query, { slug }).catch(error => console.log(error));

  return {
    body: {
      title,
      body: blocksToHtml({ blocks: body, serializers }),
    },
    headers: { 'Content-Type': 'application/json' },
    status: 200,
  };
};

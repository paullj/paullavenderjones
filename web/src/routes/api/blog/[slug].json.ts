import sanity from '$utils/sanity';
import blocksToHtml from '@sanity/block-content-to-html';

export const get = async ({ params }) => {
  const { slug } = params;
  const query = `*[_type == "post" && slug.current == $slug][0] {
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

  const post = await sanity.fetch(query, { slug }).catch(error => console.log(error));

  return {
    body: {
      title: post.title,
      body: blocksToHtml({ blocks: post.body }),
    },
    headers: { 'Content-Type': 'application/json' },
    status: 200,
  };
};

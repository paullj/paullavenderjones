import { format, parseISO } from 'date-fns';
import sanity from '$utils/sanity';

export const get = async () => {
  const results: any[] = await sanity.fetch(
    `*[_type == "post" && defined(slug.current) && publishedAt < now()]|order(publishedAt desc) {
        title,
        slug,
        publishedAt,
      }`
  );

  const posts = results.map(({ title, slug, publishedAt }) => ({
    title,
    slug: slug.current,
    publishedAt: format(parseISO(publishedAt), 'MMMM yyyy'),
  }));

  return {
    body: {
      posts,
    },
    headers: { 'Content-Type': 'application/json' },
    status: 200,
  };
};

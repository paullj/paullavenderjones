import { format, parseISO } from 'date-fns';
import sanity from '$utils/sanity';

export async function get() {
  const results: any[] = await sanity.fetch(
    `*[_type == "project" && defined(slug.current) && publishedAt < now()]|order(publishedAt desc) {
        title,
        slug,
        description,
        publishedAt,
        'image': mainImage.asset->metadata.lqip
      }`
  );

  const projects = results.map(({ title, slug, description, publishedAt, image }) => ({
    title,
    slug: slug.current,
    description,
    publishedAt: format(parseISO(publishedAt), 'MMMM yyyy'),
    image,
  }));

  return {
    body: {
      projects,
    },
    headers: { 'Content-Type': 'application/json' },
    status: 200,
  };
}

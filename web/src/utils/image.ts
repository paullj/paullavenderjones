import imageUrlBuilder from '@sanity/image-url';
import client from '$utils/sanity';

const builder = imageUrlBuilder(client);
const urlFor = source => builder.image(source);

export const generateImage = (image, width) => {
  const src = urlFor(image).width(width).url();
  return src;
};

// Code taken from here: https://www.apostrof.co/blog/svelte-sanity-responsive-lazy-loaded-jank-free-images/
export const generateImages = image => {
  // aspectRatio (to prevent jank)
  let aspectRatio;
  if (image.crop) {
    // priority: set aspectRatio equal to content editor’s crop settings
    aspectRatio = getCropFactor(image.crop) * image.asset.metadata.dimensions.aspectRatio;
  } else {
    // else, just set aspectRatio equal to the original image’s
    aspectRatio = image.asset.metadata.dimensions.aspectRatio;
  }

  // LQIP
  const placeholder = image.asset.metadata.lqip;

  // src
  const src = urlFor(image).url();

  // srcset

  // Change these widths as you need
  const widthsPreset = [640, 768, 1024, 1366, 1600, 1920, 2560];

  const srcset = widthsPreset
    // Make srcset url for each of the above widths
    .map(w => urlFor(image).width(w).url() + ' ' + w + 'w')
    .join(',');

  // Return the object shape required by Image.svelte (minus a couple)
  return {
    aspectRatio,
    placeholder,
    src,
    srcset,
  };
};

const getCropFactor = ({ top, bottom, left, right }) => {
  const xFactor = 1 - (left + right);
  const yFactor = 1 - (top + bottom);

  return xFactor / yFactor;
};

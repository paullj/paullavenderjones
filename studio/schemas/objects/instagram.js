import React from 'react';
import InstagramEmbed from 'react-instagram-embed';
import { FaInstagram } from 'react-icons/fa';

const InstagramPreview = ({ value }) => {
  const { url } = value;
  if (!url) {
    return <p>Missing URL for Instagram post</p>;
  }

  return <InstagramEmbed url={url} maxWidth={480} containerTagName="div" injectScript />;
};

export default {
  type: 'object',
  name: 'instagram',
  title: 'Instagram Post',
  icon: FaInstagram,
  fields: [
    {
      name: 'url',
      type: 'url',
      description: 'Visit an Instagram post in a browser and copy the URL.',
    },
  ],
  preview: {
    select: { url: 'url' },
    component: InstagramPreview,
  },
};

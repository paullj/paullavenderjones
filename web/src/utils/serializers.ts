import { h } from '@sanity/block-content-to-html';
import getYouTubeID from 'get-youtube-id';
import fetch from 'node-fetch';
import { generateImages } from './image';

export default {
  types: {
    block: props => {
      const style = props.node.style || 'normal';

      if (/^h\d/.test(style)) {
        return h(style, null, props.children);
      }

      return style === 'blockquote' ? h('blockquote', null, props.children) : h('p', null, props.children);
    },
    youtube: props => {
      const attributes = {
        id: 'player',
        type: 'text/html',
        class: 'lazyload',
        src: `https://www.youtube.com/embed/${getYouTubeID(props.node.url)}`,
        enablejsapi: true,
        frameborder: '0',
      };
      return h('div', { class: 'youtube' }, h('iframe', attributes, props.children));
    },
    instagram: async props => {
      // FIXME: async serializers don't seem to work...
      const token = import.meta['env'].SNOWPACK_PUBLIC_INSTAGRAM_TOKEN;
      const { html } = await fetch(
        `https://graph.facebook.com/v9.0/instagram_oembed?url=${props.node.url}&access_token=${token}`
      ).then(response => response.json());
      return h('div', { class: 'bg-red-500' }, html);
    },
    image: props => {
      if (!props.node.asset) {
        return null;
      }
      const { src, placeholder, srcset, aspectRatio } = generateImages(props.node);
      const attributes = {
        class: 'lazyload',
        style: 'padding-top: ' + aspectRatio,
        src,
        srcset: placeholder,
        'data-srcset': srcset,
        sizes: 'auto',
      };

      const img = h('img', attributes);
      return props.isInline ? img : h('figure', null, img);
    },
  },
  marks: {
    strong: props => h('strong', null, props.children),
    em: props => h('em', null, props.children),
    code: props => h('code', null, props.children),
    underline: props => h('u', null, props.children),
    'strike-through': props => h('del', null, props.children),
    link: props => h('a', { href: props.mark.href, rel: 'external', target: '_blank' }, props.children),
    highlight: props => h('mark', null, props.children),
  },
  // Less common overrides
  // list: ListSerializer,
  // listItem: ListItemSerializer,

  // block: BlockSerializer,
  // span: SpanSerializer,
  // hardBreak: HardBreakSerializer,

  // Container element
  container: 'div',
};

import { h } from '@sanity/block-content-to-html';

export default {
  types: {
    block: props => {
      const style = props.node.style || 'normal';

      if (/^h\d/.test(style)) {
        return h(style, null, props.children);
      }

      return style === 'blockquote' ? h('blockquote', null, props.children) : h('p', null, props.children);
    },
    // image: props => {
    //   if (!props.node.asset) {
    //     return null;
    //   }

    //   const img = h('img', { src: getImageUrl(props) });
    //   return props.isInline ? img : h('figure', null, img);
    // },
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

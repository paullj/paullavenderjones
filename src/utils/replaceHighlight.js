const HIGHLIGHT_REGEX = /(?:~)(.*?)(?:~)/g;

export const replaceHighlight = (markdown) => {
   return markdown.replace(HIGHLIGHT_REGEX, (_match, text) => {
    return `<mark>${text}</mark>`;
  });
}
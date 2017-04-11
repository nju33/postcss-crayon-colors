import postcss from 'postcss';
import crayon from 'crayon/dist/crayon';

export default postcss.plugin('postcss-crayon-colors', () => {
  const re = /([\d\w-]+)-color/g;
  return root => {
    root.replaceValues(re, {fast: '-color'}, (match, name) => {
      const color = crayon.colors[name];
      if (typeof color === 'undefined') {
        return match;
      }
      return color;
    });
  };
});

import fs from 'fs';
import postcss from 'postcss';
import crayonColors from '..';

const css = fs.readFileSync(`${__dirname}/example.css`, 'utf-8');

postcss([crayonColors])
  .process(css)
  .then(result => {
    console.log(result.css);
  });

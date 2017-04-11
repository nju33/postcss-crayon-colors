import test from 'ava';
import postcss from 'postcss';
import crayonColors from '../..';

test('true', async t => {
  const css = '.a{color:absolutezero-color}';
  const result = await postcss([crayonColors]).process(css);
  t.is(result.css, '.a{color:#0048ba}');
});

test('false', async t => {
  const css = '.a{color:foo-color}';
  const result = await postcss([crayonColors]).process(css);
  t.is(result.css, '.a{color:foo-color}');
});

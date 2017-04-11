# postcss-crayon-colors

[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)

Postcss plugin for [crayon.css](https://github.com/riccardoscalco/crayon)

## Install

```bash
yarn add -D postcss-crayon-colors
npm i -D postcss-crayon-colors
```

```js
postcss([crayonColors])
```

## Usage

For color see [here](http://riccardoscalco.github.io/crayon/).
Just add `-color` to the back of the color name.

```css
/* input */
.a {
  color: absolutezero-color;
}

/* output */
.a {
  color: #0048ba;
}
```

Imitating [postcss-brand-colors](https://github.com/postcss/postcss-brand-colors)

## Related

### Crayon.css

> https://github.com/riccardoscalco/crayon
>
> > MIT Copyright (c) 2015 Riccardo Scalco <riccardo.scalco@gmail.com>
> > https://github.com/riccardoscalco/crayon/blob/master/LICENSE#readme

## License

The MIT License (MIT)

Copyright (c) 2017 nju33 <nju33.ki@gmail.com>

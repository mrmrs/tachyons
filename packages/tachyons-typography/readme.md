# tachyons 7.0.1-5

Functional css for humans

### Stats

588 | 24 | 40
---|---|---
bytes | selectors | declarations

## Installation

#### With [npm](https://npmjs.com)

```
npm install --save-dev tachyons
```

Learn more about using css installed with npm:
* https://webpack.github.io/docs/stylesheets.html
* https://github.com/defunctzombie/npm-css

#### With Git

http:
```
git clone https://github.com/tachyons-css/tachyons
```

ssh:
```
git clone git@github.com:tachyons-css/tachyons.git
```

## Usage

#### Using with [Postcss](https://github.com/postcss/postcss)

Import the css module

```css
@import "tachyons";
```

Then process the css using the [`tachyons-cli`](https://github.com/tachyons-css/tachyons-cli)

```sh
$ npm i -g tachyons-cli
$ tachyons path/to/css-file.css > dist/t.css
```

#### Using the css

##### CDN
The easiest and most simple way to use the css is to use the cdn hosted version. Include it in the head of your html with:

```
<link rel="stylesheet" href="http://unpkg.com/tachyons@7.0.1-5/css/tachyons.min.css" />
```

##### Locally
The built css is located in the `css` directory. It contains an unminified and minified version.
You can either cut and paste that css or link to it directly in your html.

```html
<link rel="stylesheet" href="path/to/module/css/tachyons">
```

#### Development

The source css files can be found in the `src` directory.
Running `$ npm start` will process the source css and place the built css in the `css` directory.

## The css

```css
/*!!!

# TYPOGRAPHY

### Docs

http://tachyons.io/docs/typography/measure/

### Base 
- measure = max-width 30em
- measure-wide = max-width 34em
- measure-narrow = max-width 20em
- indent = indent
- small-caps = small caps
- truncate = truncate

### Media Query Extensions

- `-s` = small
- `-m` = medium
- `-l` = large
*/
/* Measure is limited to ~66 characters */
.measure { max-width: 30em; }
/* Measure is limited to ~80 characters */
.measure-wide { max-width: 34em; }
/* Measure is limited to ~45 characters */
.measure-narrow { max-width: 20em; }
/* Book paragraph style - paragraphs are indented with no vertical spacing. */
.indent { text-indent: 1em; margin-top: 0; margin-bottom: 0; }
.small-caps { font-variant: small-caps; }
/* Combine this class with a width to truncate text (or just leave as is to truncate at width of containing element. */
.truncate { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
@media screen and (min-width: 30em) {
 .measure-s { max-width: 30em; }
 .measure-wide-s { max-width: 34em; }
 .measure-narrow-s { max-width: 20em; }
 .indent-s { text-indent: 1em; margin-top: 0; margin-bottom: 0; }
 .small-caps-s { font-variant: small-caps; }
 .truncate-s { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
}
@media screen and (min-width: 48em) {
 .measure-m { max-width: 30em; }
 .measure-wide-m { max-width: 34em; }
 .measure-narrow-m { max-width: 20em; }
 .indent-m { text-indent: 1em; margin-top: 0; margin-bottom: 0; }
 .small-caps-m { font-variant: small-caps; }
 .truncate-m { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
}
@media screen and (min-width: 60em) {
 .measure-l { max-width: 30em; }
 .measure-wide-l { max-width: 34em; }
 .measure-narrow-l { max-width: 20em; }
 .indent-l { text-indent: 1em; margin-top: 0; margin-bottom: 0; }
 .small-caps-l { font-variant: small-caps; }
 .truncate-l { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
}
```

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

## Authors

* [mrmrs](http://mrmrs.io)
* [johno](http://johnotander.com)

## License

ISC


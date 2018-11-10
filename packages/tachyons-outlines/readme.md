# tachyons 7.0.1-5

Functional css for humans

### Stats

287 | 12 | 12
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

# OUTLINES

Set transparent outline on elements.

### Base

- outline = outline

### Modifiers

- `-0` = literal value 0
- `-transparent` = transparent outline

### Media Query Extensions

- `-s` = small
- `-m` = medium
- `-l` = large
*/
.outline { outline: 1px solid; }
.outline-transparent { outline: 1px solid transparent; }
.outline-0 { outline: 0; }
@media screen and (min-width: 30em) {
 .outline-s { outline: 1px solid; }
 .outline-transparent-s { outline: 1px solid transparent; }
 .outline-0-s { outline: 0; }
}
@media screen and (min-width: 48em) {
 .outline-m { outline: 1px solid; }
 .outline-transparent-m { outline: 1px solid transparent; }
 .outline-0-m { outline: 0; }
}
@media screen and (min-width: 60em) {
 .outline-l { outline: 1px solid; }
 .outline-transparent-l { outline: 1px solid transparent; }
 .outline-0-l { outline: 0; }
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


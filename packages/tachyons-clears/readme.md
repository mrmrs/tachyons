# tachyons 7.0.1-5

Functional css for humans

### Stats

413 | 20 | 20
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

# CLEARFIX

### Docs

http://tachyons.io/docs/layout/clearfix/

### Based on

Nicolas Gallagher's clerfix solution
http://nicolasgallagher.com/micro-clearfix-hack/

### Base

- c = clear

### Modifiers

- f = clearfix
- l = left
- r = right
- b = both
- n = none

### Media Query Extensions

- `-s` = small
- `-m` = medium
- `-l` = large
*/
.cf:before, .cf:after { content: " "; display: table; }
.cf:after { clear: both; }
.cf { *zoom: 1; }
.cl { clear: left; }
.cr { clear: right; }
.cb { clear: both; }
.cn { clear: none; }
@media screen and (min-width: 30em) {
 .cl-s { clear: left; }
 .cr-s { clear: right; }
 .cb-s { clear: both; }
 .cn-s { clear: none; }
}
@media screen and (min-width: 48em) {
 .cl-m { clear: left; }
 .cr-m { clear: right; }
 .cb-m { clear: both; }
 .cn-m { clear: none; }
}
@media screen and (min-width: 60em) {
 .cl-l { clear: left; }
 .cr-l { clear: right; }
 .cb-l { clear: both; }
 .cn-l { clear: none; }
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


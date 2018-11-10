# tachyons 7.0.1-5

Functional css for humans

### Stats

713 | 68 | 68
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

# HEIGHTS

### Docs

http://tachyons.io/docs/layout/heights/

### Base

- h = height
- min-h = min-height
- min-vh = min-height vertical screen height
- vh = vertical screen height

### Modifiers

- 1 = 1st step in height scale
- 2 = 2nd step in height scale
- 3 = 3rd step in height scale
- 4 = 4th step in height scale
- 5 = 5th step in height scale

- `-25`   = literal value 25%
- `-50`   = literal value 50%
- `-75`   = literal value 75%
- `-100`  = literal value 100%

- `-auto` = string value of auto
- `-inherit` = string value of inherit

### Media Query Extensions

- `-s` = small
- `-m` = medium
- `-l` = large
*/
/* Height Scale */
.h1 { height: 1rem; }
.h2 { height: 2rem; }
.h3 { height: 4rem; }
.h4 { height: 8rem; }
.h5 { height: 16rem; }
/* Height Percentages - Based off of height of parent */
.h-25 { height: 25%; }
.h-50 { height: 50%; }
.h-75 { height: 75%; }
.h-100 { height: 100%; }
.min-h-100 { min-height: 100%; }
/* Screen Height Percentage */
.vh-25 { height: 25vh; }
.vh-50 { height: 50vh; }
.vh-75 { height: 75vh; }
.vh-100 { height: 100vh; }
.min-vh-100 { min-height: 100vh; }
/* String Properties */
.h-auto { height: auto; }
.h-inherit { height: inherit; }
@media screen and (min-width: 30em) {
 .h1-s { height: 1rem; }
 .h2-s { height: 2rem; }
 .h3-s { height: 4rem; }
 .h4-s { height: 8rem; }
 .h5-s { height: 16rem; }
 .h-25-s { height: 25%; }
 .h-50-s { height: 50%; }
 .h-75-s { height: 75%; }
 .h-100-s { height: 100%; }
 .min-h-100-s { min-height: 100%; }
 .vh-25-s { height: 25vh; }
 .vh-50-s { height: 50vh; }
 .vh-75-s { height: 75vh; }
 .vh-100-s { height: 100vh; }
 .min-vh-100-s { min-height: 100vh; }
 .h-auto-s { height: auto; }
 .h-inherit-s { height: inherit; }
}
@media screen and (min-width: 48em) {
 .h1-m { height: 1rem; }
 .h2-m { height: 2rem; }
 .h3-m { height: 4rem; }
 .h4-m { height: 8rem; }
 .h5-m { height: 16rem; }
 .h-25-m { height: 25%; }
 .h-50-m { height: 50%; }
 .h-75-m { height: 75%; }
 .h-100-m { height: 100%; }
 .min-h-100-m { min-height: 100%; }
 .vh-25-m { height: 25vh; }
 .vh-50-m { height: 50vh; }
 .vh-75-m { height: 75vh; }
 .vh-100-m { height: 100vh; }
 .min-vh-100-m { min-height: 100vh; }
 .h-auto-m { height: auto; }
 .h-inherit-m { height: inherit; }
}
@media screen and (min-width: 60em) {
 .h1-l { height: 1rem; }
 .h2-l { height: 2rem; }
 .h3-l { height: 4rem; }
 .h4-l { height: 8rem; }
 .h5-l { height: 16rem; }
 .h-25-l { height: 25%; }
 .h-50-l { height: 50%; }
 .h-75-l { height: 75%; }
 .h-100-l { height: 100%; }
 .min-h-100-l { min-height: 100%; }
 .vh-25-l { height: 25vh; }
 .vh-50-l { height: 50vh; }
 .vh-75-l { height: 75vh; }
 .vh-100-l { height: 100vh; }
 .min-vh-100-l { min-height: 100vh; }
 .h-auto-l { height: auto; }
 .h-inherit-l { height: inherit; }
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


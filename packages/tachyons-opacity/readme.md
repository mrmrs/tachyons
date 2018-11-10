

# OPACITY

### Docs

http://tachyons.io/docs/themes/opacity/

### Base

- o = opacity

### Modifiers

- `-100` = literal value 1
- `-90`  = literal value .9
- `-80`  = literal value .8
- `-70`  = literal value .7
- `-60`  = literal value .6
- `-50`  = literal value .5
- `-40`  = literal value .4
- `-30`  = literal value .3
- `-20`  = literal value .2
- `-10`  = literal value .1
- `-05`  = literal value .05
- `-025` = literal value .025
- `-0`   = literal value 0


### Stats

277 | 13 | 13
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

# OPACITY

### Docs

http://tachyons.io/docs/themes/opacity/

### Base

- o = opacity

### Modifiers

- `-100` = literal value 1
- `-90`  = literal value .9
- `-80`  = literal value .8
- `-70`  = literal value .7
- `-60`  = literal value .6
- `-50`  = literal value .5
- `-40`  = literal value .4
- `-30`  = literal value .3
- `-20`  = literal value .2
- `-10`  = literal value .1
- `-05`  = literal value .05
- `-025` = literal value .025
- `-0`   = literal value 0
*/
.o-100 { opacity: 1; }
.o-90 { opacity: .9; }
.o-80 { opacity: .8; }
.o-70 { opacity: .7; }
.o-60 { opacity: .6; }
.o-50 { opacity: .5; }
.o-40 { opacity: .4; }
.o-30 { opacity: .3; }
.o-20 { opacity: .2; }
.o-10 { opacity: .1; }
.o-05 { opacity: .05; }
.o-025 { opacity: .025; }
.o-0 { opacity: 0; }
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


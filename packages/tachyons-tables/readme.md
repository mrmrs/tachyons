

# TABLES

### Docs

http://tachyons.io/docs/elements/tables/

### Base

- collapse = border collapse
- striped = striped table

### Modifiers
- `-light` = light stripes
- `-dark` = dark stripes
- `--light-silver` = light-silver stripes
- `--moon-gray` = moon-gray stripes
- `--light-gray` = light-gray stripes
- `--near-white` = near-white stripes


### Stats

291 | 7 | 8
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

# TABLES

### Docs

http://tachyons.io/docs/elements/tables/

### Base

- collapse = border collapse
- striped = striped table

### Modifiers
- `-light` = light stripes
- `-dark` = dark stripes
- `--light-silver` = light-silver stripes
- `--moon-gray` = moon-gray stripes
- `--light-gray` = light-gray stripes
- `--near-white` = near-white stripes
*/
.collapse { border-collapse: collapse; border-spacing: 0; }
.striped--light-silver:nth-child(odd) { background-color: undefined; }
.striped--moon-gray:nth-child(odd) { background-color: undefined; }
.striped--light-gray:nth-child(odd) { background-color: undefined; }
.striped--near-white:nth-child(odd) { background-color: undefined; }
.stripe-light:nth-child(odd) { background-color: undefined; }
.stripe-dark:nth-child(odd) { background-color: undefined; }
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


export const meta = {
  title: 'Images / Elements / Docs / TACHYONS',
  modules: ['tachyons-widths', 'tachyons-max-widths'],
  subNav: 'elements',
  editUrl: 'https://github.com/tachyons-css/tachyons/edit/master/docs/elements/images.md'
}

# Images

Using `width` and `max-width` classes, you can control the sizing of images responsively.

## Examples

### Large image

This photo is more than 3000 pixels wide.
The width is set to 100% to ensure it doesn’t bleed off the viewport and always fills its container.
In some situations, this will make the image stretch to be larger than its actual width.
To avoid the image stretching past its width, set max-width instead.

```.html
<img src="http://tachyons.io/img/over-canvas.jpg" class="w-100" alt="night sky over land">
```

### Smaller image

The image below is 720 pixels wide, it will fill its container until the container is wider than 720 pixels.

```.html
<img src="http://tachyons.io/img/under-canvas.jpg" class="mw-100" alt="night sky over water">
```

## Reference

- [MDN - HTML Images](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img)
- [MDN - Css Images](https://developer.mozilla.org/en-US/docs/Web/CSS/image)

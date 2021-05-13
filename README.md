# THREE.js Pixel Art Experiment 🕹

> A THREE.js renderer that produces pixel art-esque visuals.

## Check out the [demo][demo_url]!

![Demo][demo_gif]

## Technique 🎨

To create this effect, I rendered [THREE.js](https://threejs.org/) geometries on a very small canvas (32 pixels by 32 pixels to be exact).
Then, I scaled up the canvas using CSS.
Using a special CSS property, I scaled the canvas in a way that maintains the sharp edges of the pixels.
The CSS property in question is called [`image-rendering`](https://developer.mozilla.org/en-US/docs/Web/CSS/image-rendering).
When `image-rendering` is set to `pixelated`, the browser scales the rendered image without fuzzing the edges of each source pixel.

## Reference 📚

* [CSS Image Rendering](https://developer.mozilla.org/en-US/docs/Games/Techniques/Crisp_pixel_art_look)
* THREE.js Model Animation: [demo](https://threejs.org/examples/webgl_animation_skinning_blending.html), [code](https://github.com/mrdoob/three.js/blob/dev/examples/webgl_animation_skinning_blending.html)

---

[![Buy me a Coffee](https://img.shields.io/badge/buy%20me%20a-coffee-%23FF813F)][bmac]

Developed with 🧠 by [EthanThatOneKid][creator_site]

[bmac]: http://buymeacoff.ee/etok
[creator_site]: http://ethandavidson.com/
[demo_url]: https://ethanthatonekid.github.io/threejs-pixel-experiment/
[demo_gif]: demo.gif

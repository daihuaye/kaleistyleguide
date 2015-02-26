# Phytoplankton - Living Style Guide

Generate a living style guide with your own CSS!

This project aims at making sure your style sheets are fully documented whilst being synchronized with your project styles.

To do this, it actually uses your style sheets so that, at anytime, you can review how your style guide looks.

## Main goals and benefits

* Fully documented CSS - No need to explain the benefits.
* No dependencies, simply download the repository and run it in your browser.
* Automatic generation of demo UI components.
* Easy access for anyone: designers, developers, managers, users, etc.
* Rapid development of projects by allowing developers to find the correct CSS and HTML for any given UI component.
* Open sourced so that all great ideas can be included.

## Installation

**No** Node.js, **no** Grunt, **no** Gulp, **no** nothing...

Just:

1. [Download](https://github.com/hiulit/kaleistyleguide) the repository or `git clone https://github.com/hiulit/kaleistyleguide.git`
2. Serve it on a HTTP server (or a local environment using [MAMP](http://www.mamp.info/),
 [XAMPP](http://www.apachefriends.org/), etc.)
3. And it should work! :D

## Prepocessors support

* [Sass](http://sass-lang.com/) ([libsass v3.1.0](https://github.com/sass/libsass/releases/tag/3.1.0))
* [Less](http://lesscss.org/) ([v2.3.0](https://github.com/less/less.js/releases/tag/v2.3.0))

So you don't have to ever use again a preprocessor tool ;)

### Notes

Why don't you use the [latest version of Sass](http://sass-lang.com/documentation/file.SASS_CHANGELOG.html)?

Phytoplankton uses [sass.js](https://github.com/medialize/sass.js) for having Sass in the browser
([not a trivial task](http://blog.rodneyrehm.de/archives/33-libsass.js-An-Emscripten-Experiment.html), btw)
which in turn uses [libsass](https://github.com/hcatlin/libsass).

**Update 1**: Here it is the the [State of Libsass (versus Ruby Sass)](http://www.solitr.com/blog/2014/01/state-of-libsass/).

**Update 2**: Here it is [The LibSass Compatibility Plan](https://github.com/sass/libsass/wiki/The-LibSass-Compatibility-Plan).

*It seems that finally, thanks to the effort of a lot of people,  libsass will reach parity with Ruby Sass*.

## Browser support

| 				| IE9 		| IE10+ 	| Firefox 	| Chrome	|
| :--			| :-: 		| :-: 		| :-: 		| :-: 		|
| CSS	 		| &#x2713; 	| &#x2713; 	| &#x2713; 	| &#x2713; 	|
| Sass 			| &#x2717;	| &#x2713; 	| &#x2713; 	| &#x2713; 	|
| Less 			| &#x2713; 	| &#x2713; 	| &#x2713; 	| &#x2713; 	|
| Handlebars 	| &#x2713; 	| &#x2713; 	| &#x2713; 	| &#x2713; 	|
| Prism 		| &#x2713; 	| &#x2713; 	| &#x2713; 	| &#x2713; 	|

Not tested on Opera nor on Safari.

## Changelog

### v0.1.0 (February 18th 2014).

* Not officially released.

## To do

* ~~Handlebars temaplates path configurable.~~
* ~~Handlebars context and helpers paths configurable.~~
* ~~Upgrade to Less 2.0.0 and above.~~
* Improve tabs system
* ~~Add styles tab name dynamically (scss, less, etc).~~
* Fix ZeroClipboard on dynamic content (e.g. <pre data-src="")
* Create tooltips (for ZeroClipboard).
* Fix tabs scroll.
* Fix issue with Prism's File Highlight plugin async loading causing Gumshoe and ZeroClipboard not to work properly.
* RequireJS & Backbone optimization (separate modules, create components, etc.).
* Add a view for showing colors, images (galleries, etc.).
* Add loading state in pages.

## Inspiration and alternatives

Phytoplankton is heavily influenced by the projects found in [http://styleguides.io/](http://styleguides.io/) and [the Style Guide guide](http://vinspee.me/style-guide-guide/).

## Technologies

Mad propz to all the great people behind the software listed below.

* [RequireJS](http://requirejs.org/) - JavaScript file and module loader.
* [Backbone.js](http://backbonejs.org/) - Gives structure to web applications by providing models, collections and views.
* [Underscore.js](http://underscorejs.org/) - JavaScript library that provides a whole mess of useful functional programming helpers without extending any built-in objects.
* [Handlebars.js](http://handlebarsjs.com/) - Minimal templating on steroids.
* [jQuery](http://jquery.com) - Fast, small, and feature-rich JavaScript library.
* [marked.js](https://github.com/chjj/marked) - Full-featured markdown parser and compiler in Javascript.
* [gonzales](https://github.com/css/gonzales) - Fast CSS parser.
* [sass.js](https://github.com/medialize/sass.js) - API for emscripted libsass to run in the browser.
* [Less](http://lesscss.org/) - CSS pre-prepocessor.
* [Prism](http://prismjs.com/) - Lightweight, robust, elegant syntax highlighting.
* [Fixie.js](https://github.com/hiulit/fixie) - Automatically add filler content to HTML documents (featuring the awesome [VeganIpsum - All filler, no killer](http://bengreen.org.uk/veganipsum/)).
* [Gumshoe](https://github.com/cferdinandi/gumshoe) - A simple, framework-agnostic scrollspy script.
* [Smooth Scroll](https://github.com/cferdinandi/smooth-scroll) - A simple vanilla JS script to animate scrolling to anchor links.

### Extras

* [Sassy-Gridlover](https://github.com/hiulit/Sassy-Gridlover) - Super easy to use Sass mixins to establish a typographic system with modular scale and vertical rhythm.
* [Sass Vegan Burger](https://github.com/hiulit/sass-burger) - A Sass mixin for creating (100% vegan) hamburger icons.
* [Stacktable](https://github.com/johnpolacek/stacktable.js/) - jQuery plugin for stacking tables on small screens.
* [ZeroClipboard](https://github.com/zeroclipboard/zeroclipboard) - A library that provides an easy way to copy text to the clipboard.
* [Material Palette](http://www.materialpalette.com/teal/green) - Material design color palette generator.

## Author

* [Xavier Gomez](https://github.com/hiulit) ([@hiulit](https://twitter.com/hiulit)).

## Contributors

Mad propz to this guy:

* [Oriol Torras](https://github.com/otorras) ([@uriusfurius](https://twitter.com/uriusfurius)).

## Credits

* [Thomas Davis](http://thomasdavis.github.com) - For creating the amazing [Kalei - Living Style Guide](https://github.com/thomasdavis/kaleistyleguide/).

## Unlicense

This is free and unencumbered software released into the public domain.

Anyone is free to copy, modify, publish, use, compile, sell, or distribute this software, either in source code form or as a compiled binary, for any purpose, commercial or non-commercial, and by any means.

In jurisdictions that recognize copyright laws, the author or authors of this software dedicate any and all copyright interest in the software to the public domain. We make this dedication for the benefit of the public at large and to the detriment of our heirs and successors. We intend this dedication to be an overt act of relinquishment in perpetuity of all present and future rights to this software under copyright law.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

For more information, please refer to http://unlicense.org/
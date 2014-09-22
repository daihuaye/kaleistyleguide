define({
	// *1*
	// This path is used as a default by the Phytoplankton project itself.
	// This is the preferred way to go!

	css_path: window.location.protocol + '//' +
				window.location.hostname +
				(window.location.port === '' ? '' : ':'+ window.location.port) +
				window.location.pathname +
				'css/imports.css',

	// *2*
	// You can configure any path you want.
	// Not supported yet!!!

	// css_path_url: 'http://localhost/kaleistyleguide/css/imports.css',

	// *3*
	// You can manually list the css files to process by giving a css_paths array:
	// This is option is the least recommended because of its poor UI experience.
	// You don't get the benefits of having the 'imports.css' #Titles rendered as headings.
	// You just get a list of the style sheets, just as it is.
	// And also it's a bit buggy :P

	// css_paths: ['scss/phytoplankton-examples/readme.scss', 'scss/phytoplankton-examples/plugins/prism.scss'],

	// Set configuration for marked.js
	marked_options: {
		sanitize: false,
		gfm: true,
		tables: true,
		langPrefix: 'language-'
	},

	// Enter URLs of any external stylesheets you wish to include with this demo.
	// These will not be parsed as part of the documentation and are simply loaded into the page header.
	external_stylesheets: []

});

# angularjs-es6-webpack
If you want to try Webpack and ES6 with AngularJS, this project will give you minimum config required for setup

~~Testing framework used: Karma with Mocha, Chai~~ *In Progress*

Webpack is an interesting bundler, reduces complexity and have a good documentation with all the configuration required for most of the production ready apps.

**This project demonstrates:**
- AngularJS with Webpack
- AngularJS with ES6
- AngularJS routes with webpack (all the route html templates will be embeded in js files, reduces xhr calls but increases the bundle size)
- Assets Loading (images, fonts)
- CSS Modules: Apply css per page/component basis, generating dynamic selectors and mapping the classes in  templates
- Dynamic Imports
- Webpack production ready performance optimizations
- Generating SourceMaps for JS and CSS files
- Cache busting using content hash in files
- minifying JS, CSS, HTML files for production
- Enabling gzip compression on dev server, also producing gzipped files to be served for deployment on servers which supports compression
- Webpack configuration for development (dev server, hot module replacement, etc.)


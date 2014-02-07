# Bootstrap Quick Startup

Use this as a starting point for a Bootstrap Project.

## Built Using

 - [Bootstrap (version 3.1)](https://github.com/twbs/bootstrap/)
 - Base template from [Initializr](https://github.com/verekia/initializr)
 - [Grunt](http://gruntjs.com/)
 - Gruntfile based off [Roots](https://github.com/roots/roots)
 
## To Use

### Install Grunt

From the command line:

1. Install `grunt-cli` globally with `npm install -g grunt-cli`.
2. Navigate to the root directory (wherever you cloned this repo) directory, then run `npm install`. npm will look at package.json and automatically install the necessary local dependencies listed there.

When completed, you'll be able to run the various Grunt commands provided from the command line.

**Unfamiliar with `npm`? Don't have node installed?** That's a-okay. npm stands for [node packaged modules](http://npmjs.org/) and is a way to manage development dependencies through node.js. [Download and install node.js](http://nodejs.org/download/) before proceeding.

### Building

From the command line:

1. Navigate to the root directory (wherever you cloned this repo)
2. Run `npm install` to setup the dependancies
3. Run `grunt`
4. Run `grunt watch`
5. View your website in your browser.  Enable Livereload if you have it installed.
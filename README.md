[![Build Status](https://travis-ci.org/mikaelkaron/grunt-json-replace.png)](https://travis-ci.org/mikaelkaron/grunt-json-replace)

# grunt-json-replace

> Read, replace and write json files

## Getting Started
This plugin requires Grunt `~0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-json-replace --save-dev
```

One the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-json-replace');
```

## The "json-replace" task

### Overview
In your project's Gruntfile, add a section named `json-replace` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  "json-replace": {
    "options": {
      "space" : "\t",
      "replace" : {
        "node" : {
          "sub" : "value"
        }
      }
    },
    "your_target": {
      "files" : [{
        "src" : "in.json",
        "dest" : "out.json"
      }]
    },
  },
})
```

> Note that since this is a [multi-task](http://gruntjs.com/creating-tasks#multi-tasks) you have to have at least one target defined for `json-replace` (otherwise the task won't run)

### Options

#### options.replace
Type: `Object`
Default value: `undefined`

An object with replacement tokens. Structure should match that of the input file.

#### options.space
Type: `String`
Default value: `'\t'`

A string value that is used to format the output JSON

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
0.1.2 - Added support for removing nodes from the result
0.1.1 - Updated version with better documentation
0.1.0 - Initial release

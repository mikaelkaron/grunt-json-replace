/*
 * grunt-json-replace
 * https://github.com/mikaelkaron/grunt-json-replace
 *
 * Copyright (c) 2013 Mikael Karon
 * Licensed under the MIT license.
 */

"use strict";

module.exports = function (grunt) {
	var UNDEFINED;
	var REPLACE = "replace";
	var SPACE = "space";
	var OBJECT = "object";

	function walk(node, replace) {
		if (grunt.util.kindOf(replace) === OBJECT && grunt.util.kindOf(node) === OBJECT) {
			Object.keys(node).forEach(function(key) {
				if (key in replace) {
					node[key] = walk(node[key], replace[key]);
				}
			});
		}
		else {
			node = replace;
		}

		return node;
	}

	grunt.task.registerMultiTask("json-replace", "Read, replace and write json files", function (replace, space) {
		// Define default options
		var options = {};
		options[SPACE] = "\t";

		// Load cli options (with defaults)
		options = this.options(options);

		// Override options
		space = options[SPACE] = space || options[SPACE];
		replace = options[REPLACE] = replace || options[REPLACE];

		// Log flags (if verbose)
		grunt.log.verbose.writeflags(options);

		try {
			this.files.forEach(function (file) {
				var src = file.src;
				var dest = file.dest;

				grunt.file.write(dest, JSON.stringify(walk(grunt.file.readJSON(src), replace), UNDEFINED, space));

				// Output
				grunt.log.ok("Read " + src + ", wrote " + dest);
			});
		}
		catch (e) {
			// Fail with error
			grunt.fail.warn(e);
		}
	});
};

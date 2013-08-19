/*
 * grunt-json-replace
 * https://github.com/mikaelkaron/grunt-json-replace
 *
 * Copyright (c) 2013 Mikael Karon
 * Licensed under the MIT license.
 */

"use strict";

module.exports = function (grunt) {
	var json_replace = require("json-replace");

	var UNDEFINED;
	var REPLACE = "replace";
	var SPACE = "space";

	var OPTIONS = {};
	OPTIONS[SPACE] = "\t";

	grunt.task.registerMultiTask("json-replace", "Read, replace and write json files", function (replace, space) {
		// Load cli options (with defaults)
		var options = this.options(OPTIONS);

		// Override options
		space = options[SPACE] = space || options[SPACE];
		replace = options[REPLACE] = replace || options[REPLACE];

		// Log flags (if verbose)
		grunt.log.verbose.writeflags(options);

		try {
			this.files.forEach(function (file) {
				file.src.forEach(function (src) {
					var dest = file.dest;

					grunt.file.write(dest, JSON.stringify(json_replace(grunt.file.readJSON(src), replace), UNDEFINED, space));

					// Output
					grunt.log.ok("Read " + src + ", wrote " + dest);
				});
			});
		}
		catch (e) {
			// Fail with error
			grunt.fail.warn(e);
		}
	});
};

/**
 * Copyright 2017 Assertible All Rights Reserved.
 *
 * Licensed under the MIT License
 *
 * Name: `webpack-move-file-loader`.
 * Description: A webpack loader to move a file and return the
 * original contents.
 * Usage: move-file-loader?name=example.json
 */

var loaderUtils = require('loader-utils')

module.exports = function(content) {
    this.cacheable && this.cacheable();

    if(!this.emitFile)
        throw new Error("emitFile is required from module system");

    var options = loaderUtils.getOptions(this);
    var url = loaderUtils.interpolateName(this, options.name || "[hash].[ext]", {
        context: options.context || this.options.context,
        content: content,
        regExp: options.regExp
    });
    this.emitFile(url, content);
    return content
}

module.exports.raw = true

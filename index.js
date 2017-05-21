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

    var query = loaderUtils.parseQuery(this.query);
    var url = loaderUtils.interpolateName(this, query.name || "[hash].[ext]", {
        context: query.context || this.options.context,
        content: content,
        regExp: query.regExp
    });
    this.emitFile(url, content);
    return content
}

module.exports.raw = true

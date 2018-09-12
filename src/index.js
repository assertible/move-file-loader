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

import LoaderUtils from "loader-utils"

export const raw = true

export default function(content) {
    this.cacheable && this.cacheable()

    if (!this.emitFile) throw new Error("emitFile is required from module system")

    const options = LoaderUtils.getOptions(this)
    const url = LoaderUtils.interpolateName(this, options.name || "[hash].[ext]", {
        content,
    })

    this.emitFile(url, content)

    return content
}

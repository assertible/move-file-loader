# move-file-loader for Webpack

> A Webpack loader to move files from one location to another and return the contents.

[![npm version](https://badge.fury.io/js/move-file-loader.svg)](https://www.npmjs.com/package/move-file-loader)

This webpack loader allows you to output required or imported files to
a specific location, and return the contents of the file. Check out the
[blog post](https://assertible.com/blog/npm-package-move-file-loader-for-webpack)
for more examples.

## Install

```sh
$ npm i --save move-file-loader
```

## Usage

Add a loader to your Webpack configuration that describes how and
where to move the file. The contents of the file are returned from the
loader.

```js
module.exports = {
    ...your webpack config,
    module: {
        rules: [{
            test: /.json/,
            /**
             * This will move .json files to the [path]/[name].json
             * location after being processed by json-loader
             */
            use: "move-file-loader?name=[path][name].json!json"
        }]
    },
    ...the rest of your webpack config
}
```

And import a JSON file:

```js
import stuff from 'file.json'

console.log(stuff); // Contents of the JSON file
```

## License

All of the code snippets in this repository are licensed under
MIT. [View the license](https://github.com/assertible/deployments/blob/master/LICENSE)

---

> [assertible.com](http://assertible.com) &nbsp;&middot;&nbsp;
> GitHub [@assertible](https://github.com/assertible) &nbsp;&middot;&nbsp;
> Twitter [@AssertibleApp](https://twitter.com/AssertibleApp)

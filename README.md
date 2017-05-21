# move-file-loader for Webpack

> A Webpack loader to move files from one location to another.

This webpack loader allows you to output required or imported files to
a specific location, and return the contents of the file.

## Install

```sh
$ npm i --save move-file-loader
```

## Usage

Add a loader (or, _rule_ for Webpack 2) to your Webpack configuration
that describes how and where to move the file. The contents of the
file are returned from the loader.

```js
module.exports = {
    ...your webpack config,
    module: {
        loaders: [{
            test: /.json/,
            /**
             * This will move .json files to the [path]/[name].json
             * location after being processed by json-loader
             */
            loader: "move-file-loader?name=[path][name].json!json"
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

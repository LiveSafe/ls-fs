# ls-fs [![Build Status](https://travis-ci.org/LiveSafe/ls-fs.svg?branch=master)](https://travis-ci.org/LiveSafe/ls-fs) [![Circle CI](https://circleci.com/gh/LiveSafe/ls-fs.svg?style=shield&circle-token=ac6bea4e44c3b11564962c131dc315c6090f3147)](https://circleci.com/gh/LiveSafe/ls-fs)

File utils

![Snuffles](http://1.bp.blogspot.com/-xA9Da55eN9s/Up8S5jZzzVI/AAAAAAAAp4s/kJMdPIQblvE/s1600/SNUFFLES+MINE+BENTLEY.png)

## Usage

```js
var lsFs = require('ls-fs');

lsFs.readJson('settings.json').then(function(settings) {
    console.log(settings.prop1);
    console.log(settings.prop2);
});
```

## API

### readJson

```js
lsFs.readJson(path, [opts]).then(function(parsedJsonObj) {
    console.log(parsedJsonObj);
});
```

###### Arguments

1. `path` _(String)_ The path to the JSON file to read


### writeJson

```js
lsFs.writeJson(path, obj, [opts]).then(function(pathToJson) {
    
});
```

###### Arguments

1. `path` _(String)_ The path to the JSON file to write
1. `obj` _(*)_ The thing to JSON.stringify


### readIni

```js
lsFs.readIni(path, [opts]).then(function(parsedIniObj) {
    console.log(parsedIniObj);
});
```

###### Arguments

1. `path` _(String)_ The path to the INI file to read
1. `[opts]` _(Object)_ Identical to `q-io/fs.read ` options


### writeIni

```js
lsFs.writeIni(path, obj, [opts]).then(function(pathToIni) {
    console.log('wrote ' + pathToIni);
});
```

###### Arguments

1. `path` _(String)_ The path to the INI file to write
1. `obj` _(*)_ The thing to stringify into INI format
1. `opts` _(Object)_ Merge of options for `ini` and `q-io/fs.write`


### tmpDir

```js
lsFs.tmpDir([opts]).then(function(pathToTmpDir) {
    // do stuff with my temporary directory
});
```

###### Arguments

1. `[opts]` _(Object)_ Same as https://github.com/raszi/node-tmp#directory-creation


### requireDir

Takes a path to a directory and returns an object containing all the `require`d modules in that directory.

For example, if you have a directory with:

```
some-module.js
other-module.js
static-content.json
```

`requireDir` on that directory would return an object like:

```
{
  someModule: <module.exports of some-module.js>,
  ...
}
```

###### Usage

```js
lsFs.requireDir(pathToDir).then(function(requiredDirObj) {
    // use required modules
});
```

###### Arguments

1. `pathToDir` _(String)_ Path to the directory you would like to recursively require


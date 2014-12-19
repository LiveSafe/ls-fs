# ls-fs

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

### safeMerge

```js
lsFs.readJson(path)
```

###### Arguments

1. `path` _(String)_ The path to the JSON file to read


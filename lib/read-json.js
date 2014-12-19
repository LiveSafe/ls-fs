'use strict';

var qFs = require('q-io/fs'),
    _ = require('ls-lodash');

function readJson(pathToJson, opts) {
    return qFs.read(pathToJson, opts)
        .then(_.bindKey(JSON, 'parse'));
}

module.exports = readJson;

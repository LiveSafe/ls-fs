'use strict';

var qFs = require('q-io/fs'),
    _ = require('ls-lodash');

function writeJson(pathToJson, objToWrite, opts) {
    return qFs.write(pathToJson, JSON.stringify(objToWrite), opts)
        .then(_.constant(pathToJson));
}

module.exports = writeJson;

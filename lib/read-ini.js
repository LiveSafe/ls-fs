'use strict';

var qFs = require('q-io/fs'),
    ini = require('ini'),
    _ = require('ls-lodash');

module.exports = function readIni(pathToIni, opts) {
    return qFs.read(pathToIni, opts).then(_.bindKey(ini, 'parse'));
};

'use strict';

var qFs = require('q-io/fs'),
    ini = require('ini'),
    _ = require('ls-lodash');

module.exports = function writeIni(pathToIni, objToWrite, opts) {
    var iniOptNames = ['section', 'whitespace'],
        qfsOpts = _.omit(opts, iniOptNames),
        iniOpts = _.pick(opts, iniOptNames);

    return qFs.write(pathToIni, ini.stringify(objToWrite, iniOpts), qfsOpts)
        .then(_.constant(pathToIni));
};

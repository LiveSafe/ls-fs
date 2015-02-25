'use strict';

var _ = require('ls-lodash');

module.exports = _.safeMerge(require('./tmp'), {
    requireDir: require('./require-dir'),
    readIni: require('./read-ini'),
    readJson: require('./read-json'),
    writeIni: require('./write-ini'),
    writeJson: require('./write-json')
});

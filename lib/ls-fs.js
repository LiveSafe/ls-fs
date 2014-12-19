'use strict';

var _ = require('ls-lodash');

module.exports = _.safeMerge(require('./tmp'), {
    readJson: require('./read-json'),
    writeJson: require('./write-json')
});

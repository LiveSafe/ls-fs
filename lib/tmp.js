'use strict';

var q = require('q'),
    tmp = require('tmp');

function tmpDir(opts) {
    // return q.nfcall(tmp.dir, opts ? opts : {});
    //
    var deferred = q.defer();

    tmp.dir(opts ? opts : {}, function(err, path) {
        return err ? deferred.reject(err) : deferred.resolve(path);
    });

    return deferred.promise;
}

module.exports = {
    tmpDir: tmpDir
};

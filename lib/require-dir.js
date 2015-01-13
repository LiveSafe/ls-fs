'use strict';

var _ = require('ls-lodash'),
    _str = require('underscore.string'),
    path = require('path'),
    qFs = require('q-io/fs'),
    stack = require('callsite'),
    extRegex = /\.js$|\.json$/;

function filterFiles(path, stat) {
    return extRegex.test(path);
}

function getCamelCasedBasename(filePath) {
    var ext = _.first(extRegex.exec(filePath)),
        dashcaseName = path.basename(filePath, ext);

    return _str.camelize(dashcaseName);
}

function requireDir(dirPath) {
    var callerDir = path.dirname(stack()[1].getFileName()),
        resolvedDirPath = path.resolve(callerDir, dirPath);

    return qFs.listTree(resolvedDirPath, filterFiles).then(function(fileList) {
        var exportNameList = _.map(fileList, getCamelCasedBasename),
            exportsList = _.map(fileList, require);

        return _.zipObject(exportNameList, exportsList);
    });
}

module.exports = requireDir;

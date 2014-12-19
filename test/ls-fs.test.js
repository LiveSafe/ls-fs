'use strict';

var _ = require('ls-lodash'),
    path = require('path'),
    expect = require('chai').expect,
    fs = require('fs'),
    qFs = require('q-io/fs'),
    lsFs = require('..');

describe('readJson', function() {
    it('should read the json', function() {
        var jsonPath = path.join(__dirname, 'fixtures/test.json');

        return lsFs.readJson(jsonPath).then(function(fixtureObj) {
            expect(fixtureObj).to.deep.equal({
                foo: 'bar',
                bar: {
                    baz: 1
                }
            });
        });
    });

    it('should never cache the json like `require`', function() {
        var origObj = {
                foo: 'bar',
                bar: 'baz'
            },
            newObj = {
                bar: 'foo'
            },
            getJsonPath = _.partialRight(path.join, 'test.json');

        return lsFs.tmpDir()
            .then(getJsonPath)
            .then(_.partialRight(lsFs.writeJson, origObj))
            .then(function(jsonPath) {
                return lsFs.readJson(jsonPath)
                    .then(function(firstReadObj) {
                        expect(firstReadObj).to.deep.equal(origObj);
                    })
                    .then(_.constant(jsonPath));
            })
            .then(_.partialRight(lsFs.writeJson, newObj))
            .then(function(jsonPath) {
                return lsFs.readJson(jsonPath)
                    .then(function(readObj) {
                        expect(readObj).to.deep.equal(newObj);
                    })
                    .then(_.constant(jsonPath));
            })
            .then(_.bindKey(qFs, 'remove'));
    });
});

describe('tmp', function() {
    it('should create a directory', function() {
        return lsFs.tmpDir().then(function(tmpDirPath) {
            return qFs.isDirectory(tmpDirPath).then(function(isDir) {
                expect(isDir).to.be.true();
            });
        });
    });
});

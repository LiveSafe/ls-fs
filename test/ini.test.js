'use strict';

var _ = require('ls-lodash'),
    path = require('path'),
    expect = require('./test-helper').expect,
    fs = require('fs'),
    qFs = require('q-io/fs'),
    lsFs = require('..');

describe('readIni', function() {
    it('should read the ini', function() {
        var iniPath = path.join(__dirname, 'fixtures/test.ini');

        return lsFs.readIni(iniPath).then(function(fixtureObj) {
            expect(fixtureObj).to.deep.equal({
                foo: {
                    bar: 'baz',
                    jazz: {
                        snazz: 'paas'
                    }
                }
            });
        });
    });
});

describe('writeIni', function() {
    it('should write the ini file', function() {
        return lsFs.tmpDir().then(function(tmpDirPath) {
            var objToWrite = {
                    foo: {
                        yada: 'yada'
                    }
                },
                iniPath = path.join(tmpDirPath, 'test.ini'),
                iniExpectedString = '[foo]\nyada=yada\n';

            return lsFs.writeIni(iniPath, objToWrite).then(function(iniPath) {
                return expect(qFs.read(iniPath)).to.eventually.equal(iniExpectedString);
            });
        });
    });
});

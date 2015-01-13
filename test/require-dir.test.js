'use strict';

var _ = require('ls-lodash'),
    path = require('path'),
    expect = require('chai').expect,
    fs = require('fs'),
    qFs = require('q-io/fs'),
    requireDir = require('..').requireDir;

describe('require-dir', function() {
    it('should require an entire directory', function() {
        return requireDir('./fixtures/require-this').then(function(reqDirObj) {
            expect(reqDirObj).to.deep.equal({
                dashCaseFilename: 'foo',
                dashCaseFilenameDos: 'bar',
                dashCaseFilenameDrei: {
                    foo: 'bar'
                }
            });
        });
    });
});

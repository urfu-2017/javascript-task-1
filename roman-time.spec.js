/* eslint-env mocha */
'use strict';

var assert = require('assert');
var romanTime = require('./roman-time');

describe('Модуль roman-time', function () {
    it('должен возвращать для 09:10 значение IX:X', function () {
        assert.strictEqual(romanTime('09:10'), 'IX:X');
    });

    it('должен возвращать для 00:00 значение N:N', function () {
        assert.strictEqual(romanTime('00:00'), 'N:N');
    });

    it('должен возвращать для 12:30 значение XII:XXX', function () {
        assert.strictEqual(romanTime('12:30'), 'XII:XXX');
    });

    it('должен выбрасывать исключение TypeError для 0:29', function () {
        assert.throws(romanTime.bind(null, '0:29'), TypeError);
    });
});

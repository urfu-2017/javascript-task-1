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

    it('должен возвращать для 23:59 значение XXIII:LIX', function () {
        assert.strictEqual(romanTime('23:59'), 'XXIII:LIX');
      });

    it('должен выбрасывать исключение TypeError для 24:00', function () {
        assert.throws(romanTime.bind(null, '24:00'), TypeError);
      });

    it('должен возвращать для 19:48 значение XIX:XLVIII', function () {
        assert.strictEqual(romanTime('19:48'), 'XIX:XLVIII');
      });

    it('должен выбрасывать исключение TypeError для 14:67', function () {
        assert.throws(romanTime.bind(null, '14:67'), TypeError);
      });

    it('должен выбрасывать исключение TypeError для NaN', function () {
        assert.throws(romanTime.bind(null, NaN), TypeError);
      });

    it('должен выбрасывать исключение TypeError для undefined', function () {
        assert.throws(romanTime.bind(null, undefined), TypeError);
      });
  });

'use strict';

var romanTime = require('./roman-time');

// Выведет 'IX:X'
console.info(romanTime('09:10'));

// Выведет 'N:N'
console.info(romanTime('00:00'));

// Выведет 'XXIII:LIX'
console.info(romanTime('23:59'));

// Выбросится ошибка [TypeError: Неверное время]
console.info(romanTime('24:00'));

// Выбросится ошибка [TypeError: Неверное время]
console.info(romanTime(null));

// Выбросится ошибка [TypeError: Неверное время]
console.info(romanTime(undefined));

// Выбросится ошибка [TypeError: Неверное время]
console.info(romanTime('krasava'));

// Выбросится ошибка [TypeError: Неверное время]
console.info(romanTime('238:56'));

// Выбросится ошибка [TypeError: Неверное время]
console.info(romanTime('-23:76'));

// Выбросится ошибка [TypeError: Неверное время]
console.info(romanTime('23k:5si6'));

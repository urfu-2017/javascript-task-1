'use strict';

var romanTime = require('./roman-time');

// Выведет 'IX:X'
// console.info(romanTime('09:10'));

// Выведет 'N:N'
// console.info(romanTime('00:00'));

// Выведет 'XXIII:LIX'
// console.info(romanTime('23:59'));
// console.info(romanTime('    23  :  00    '));
// console.info(romanTime('    2   3  :  00    '));

// плохие
// Выбросится ошибка [TypeError: Неверное время]

// console.info(romanTime('24:00'));

// console.info(romanTime('      :     '));

// console.info(romanTime('          :00'));
// console.info(romanTime('24:      '));
// console.info(romanTime('-5,5:1'));
// console.info(romanTime('5,5:1'));
// console.info(romanTime('55:13'));
// console.info(romanTime('NaN:NaN'));

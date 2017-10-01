'use strict';

var romanTime = require('./roman-time');

romanTime('24:00');

// Выведет 'IX:X'
console.info(romanTime('09:10'));

// Выведет 'N:N'
console.info(romanTime('00:00'));

// Выведет 'XXIII:LIX'
console.info(romanTime('23:59'));

// Выбросится ошибка [TypeError: Неверное время]
console.info(romanTime('24:00'));

'use strict';
const zlib = require('zlib');
const timeRegex = /^(\d{2}):(\d{2})$/;
const romanDigitsCompressed = 'eJw1i8kJADEMA//qTGDyDO6/ktWRJdIY4vEBQUe90KOS' +
    '6mOhRyU1LtahW/hXlkO3CGVuyuAxK+spg8cOn2zB8h/d624UukWoi0kZPGa1GMi3HtvyOETMivH2A74sRWM=';

var romanDigits = zlib
    .inflateSync(new Buffer(romanDigitsCompressed, 'base64'))
    .toString()
    .split('\n');

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    var groups = timeRegex.exec(time);
    var hour = (groups || [])[1] - 0;
    var minute = (groups || [])[2] - 0;
    if (!groups || hour > 23 || minute > 59) {
        throw new TypeError();
    }

    return [hour, minute].map(x => romanDigits[x]).join(':');
}

module.exports = romanTime;

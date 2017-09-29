'use strict';

const TIME_PATTERN = /^([01]?[0-9]|2[0-3]):([0-5][0-9])$/;
const ROMAN_TENS = ['', 'X', 'XX', 'XXX', 'XL', 'L'];
const ROMAN_ONES = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 * @throws {TypeError} - если время не корректно (неочевидный текст ошибки)
 */
const romanTime = time => TIME_PATTERN.exec(time)
    .slice(1, 3)
    .map(segment => ROMAN_TENS[Math.floor(segment / 10)] + ROMAN_ONES[segment % 10] || 'N')
    .join(':');

module.exports = romanTime;

'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    checkString(time);
    let re = /(\d\d):(\d\d)/;
    if (!re.test(time)) {
        throw new TypeError();
    }
    let nums = re.exec(time);
    nums[1] = parseInt(nums[1], 10);
    nums[2] = parseInt(nums[2], 10);
    if (nums[1] > 23 || nums[2] > 59) {
        throw new TypeError();
    }
    let hours = decToRom(nums[1]);
    let minutes = decToRom(nums[2]);

    return hours + ':' + minutes;
}

function checkString(str) {
    if (str === undefined || str === null || str.length !== 'HH:MM'.length) {
        throw new TypeError();
    }
}

function decToRom(num) {
    if (num === 0) {
        return 'N';
    }
    let romanDigits = { 1: 'I', 2: 'II', 3: 'III', 4: 'IV', 5: 'V', 6: 'VI', 7: 'VII', 8: 'VIII',
     9: 'IX', 10: 'X', 20: 'XX', 30: 'XXX', 40: 'XL', 50: 'L' };
    if (num <= 10) {
        return romanDigits[num];
    }
    let tens = Math.floor(num / 10) * 10;
    let ones = (num % 10);
    if (ones === 0) {
        return romanDigits[tens];
    }

    return romanDigits[tens] + romanDigits[ones];
}

module.exports = romanTime;

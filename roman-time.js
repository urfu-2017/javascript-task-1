'use strict';

const TIME_REGEX = /^([10][0-9]|2[0-3]):([0-5][0-9])$/;
const ROMAN_NUMS = { 0: 'N', 1: 'I', 4: 'IV', 5: 'V', 9: 'IX', 10: 'X', 40: 'XL', 50: 'L' };

const toRoman = (number) => {
    let closest = Math.max(...Object.keys(ROMAN_NUMS).filter(x => x < number));

    return ROMAN_NUMS[number] || ROMAN_NUMS[closest].concat(toRoman(number - closest));
};

const romanTime = (time) => {
    if (!TIME_REGEX.test(time)) {
        throw new TypeError('Incorrect time format');
    }

    return time
        .split(':')
        .map(Number)
        .map(toRoman)
        .join(':');
};

module.exports = romanTime;

'use strict';

const FORMAT = /^([01]?[0-9]|2[0-3]):([0-5][0-9]|[0-9])$/;
const PATTERN = [['L', 50], ['XL', 40], ['X', 10], ['IX', 9], ['V', 5], ['IV', 4], ['I', 1]];
const ROMAN_ZERO = 'N';

const filter = (time) => {
    let result = FORMAT.exec(time);
    if (result === null) {
        throw new TypeError();
    }

    return { hours: result[1], minutes: result[2] };
};

const convert = (decimal) => {
    if (parseInt(decimal) === 0) {
        return ROMAN_ZERO;
    }

    return PATTERN.reduce((a, b) => {
        const [roman, remainder] = a;
        const [letter, value] = b;

        return [roman + letter.repeat(remainder / value), remainder % value];
    }, ['', decimal])[0];
};


const romanTime = (time) => {
    let data = filter(time);

    return `${convert(data.hours)}:${convert(data.minutes)}`;
};

module.exports = romanTime;

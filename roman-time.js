"use strict";

const options = [
    {
        symbol: "L",
        divider: 50
    },
    {
        symbol: "XL",
        divider: 40
    },
    {
        symbol: "X",
        divider: 10
    },
    {
        symbol: "IX",
        divider: 9
    },
    {
        symbol: "V",
        divider: 5
    },
    {
        symbol: "I",
        divider: 1
    }
];

/**
 * @param {Number} value – количество часов или минут от 0 до 23 и от 0 до 59 соотвественно (16)
 * @returns {String} – время римскими цифрами (XVI)
 */
const toRoman = value => {
    if (value === 0) {
        return "N";
    }

    let amountOfSymbols = [];

    for (let i = value < 24 ? 2 : 0; i < options.length; i++) {
        const { symbol, divider } = options[i];
        let amountOfCopies = Math.floor(value / divider);
        value -= amountOfCopies * divider;
        amountOfSymbols.push({
            symbol,
            amountOfCopies
        });
    }

    let romanValue = "";
    for (var i = 0; i < amountOfSymbols.length; i++) {
        const { symbol, amountOfCopies } = amountOfSymbols[i];
        if (amountOfCopies > 0) {
            romanValue += symbol.repeat(amountOfCopies);
        }
    }

    return romanValue;
};

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    // Немного авторского кода и замечательной магии
    const timeArray = time.split(":");
    const hours = parseInt(timeArray[0], 10);
    const minutes = parseInt(timeArray[1], 10);
    if (hours >= 0 && hours <= 23 && (minutes >= 0 && minutes <= 59)) {
        time = `${toRoman(hours)}:${toRoman(minutes)}`;

        return time;
    }
    throw new TypeError();
}

module.exports = romanTime;

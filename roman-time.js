'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    errorCheck(time);

    var InNumbers = time.split(':');
    var RoNumbers = ['', ''];

    for (var j = 0; j < 2; j++) {
        RoNumbers[j] = сonvertNumbers(InNumbers[j]);
    }

    time = RoNumbers.join(':');

    return time;
}
// Проверяем, правильно ли задано время, если неправильно,
// Возвращаем TypeError с сообщением "Задано неверное время"
function errorCheck(time) {
    var TestTime = time.split(':');
    if ((Number(TestTime[0]) >= 0) && (Number(TestTime[0]) <= 23) &&
    (Number(TestTime[1]) >= 0) && (Number(TestTime[1]) <= 59)) {

        return time;
    }
    throw new TypeError('Задано неверное время');
}

function сonvertNumbers(ArNumbers) {
    var RoNumbers = ['', ''];
    RoNumbers[1] = ArNumbers % 10;
    RoNumbers[0] = parseInt(ArNumbers / 10);

    if ((RoNumbers[0] === 0) && (RoNumbers[1] === 0)) {
        ArNumbers = 'N';

        return ArNumbers;
    }
    if (Number(RoNumbers[1]) <= 4) {
        RoNumbers[1] = convertUnFirst(RoNumbers[1]);
    }
    if (Number(RoNumbers[1] > 4)) {
        RoNumbers[1] = convertUnSecond(RoNumbers[1]);
    }
    if ((RoNumbers[0] === 0) && (RoNumbers[1] !== null)) {

        return RoNumbers[1];
    }
    RoNumbers[0] = convertDe(RoNumbers[0]);
    if ((RoNumbers[1] === 'N') && (RoNumbers[0] !== null)) {
    
        return RoNumbers[0];
    }
    RoNumbers = RoNumbers.join('');

    return RoNumbers;
}

function convertUnFirst(RoNumbers) {
    switch (RoNumbers) {
        case 0:
            RoNumbers = 'N';

            return RoNumbers;
        case 1:
            RoNumbers = 'I';

            return RoNumbers;
        case 2:
            RoNumbers = 'II';

            return RoNumbers;
        case 3:
            RoNumbers = 'III';

            return RoNumbers;
        case 4:
            RoNumbers = 'IV';

            return RoNumbers;
        default:
            throw new TypeError('Неверно задано время');
    }
}

function convertUnSecond(RoNumbers) {
    switch (RoNumbers) {
        case 5:
            RoNumbers = 'V';

            return RoNumbers;
        case 6:
            RoNumbers = 'VI';

            return RoNumbers;
        case 7:
            RoNumbers = 'VII';

            return RoNumbers;
        case 8:
            RoNumbers = 'VIII';

            return RoNumbers;
        case 9:
            RoNumbers = 'IX';

            return RoNumbers;
        default:
            throw new TypeError('Неверно задано время');
    }
}

function convertDe(RoNumbers) {
    switch (RoNumbers) {
        case 1:
            RoNumbers = 'X';
            break;
        case 2:
            RoNumbers = 'XX';
            break;
        case 3:
            RoNumbers = 'XXX';
            break;
        case 4:
            RoNumbers = 'XL';
            break;
        case 5:
            RoNumbers = 'L';
            break;
        default:
            throw new TypeError('');
    }

    return RoNumbers;
}

module.exports = romanTime;

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

    switch (RoNumbers[1]) {
        case 0:
            RoNumbers[1] = 'N';
            break;
        case 1:
            RoNumbers[1] = 'I';
            break;
        case 2:
            RoNumbers[1] = 'II';
            break;
        case 3:
            RoNumbers[1] = 'III';
            break;
        case 4:
            RoNumbers[1] = 'IV';
            break;
        case 5:
            RoNumbers[1] = 'V';
            break;
        case 6:
            RoNumbers[1] = 'VI';
            break;
        case 7:
            RoNumbers[1] = 'VII';
            break;
        case 8:
            RoNumbers[1] = 'VIII';
            break;
        case 9:
            RoNumbers[1] = 'IX';
            break;
        default:
            throw new TypeError('Неверно задано время');
    }

    if ((RoNumbers[0] === 0) && (RoNumbers[1] !== null)) {

        return RoNumbers[1];
    }

    switch (RoNumbers[0]) {
        case 1:
            RoNumbers[0] = 'X';
            break;
        case 2:
            RoNumbers[0] = 'XX';
            break;
        case 3:
            RoNumbers[0] = 'XXX';
            break;
        case 4:
            RoNumbers[0] = 'XL';
            break;
        case 5:
            RoNumbers[0] = 'L';
            break;
        default:
            throw new TypeError('');
    }
    RoNumbers = RoNumbers.join('');

    return RoNumbers;
}

module.exports = romanTime;

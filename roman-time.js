'use strict';

function error() {
    throw new TypeError('Неверный формат времени.');
}

function parseNumber(text, limit) {
    let number = parseInt(text, 10);
    if (Number.isNaN(number)) error();
    if (number < 0 || number > limit) {
        error();
    } else {
        return number;
    }
}

function parseTime(time) {
    if (typeof time !== "string") error();
    let numbersList = time.split(':');
    if (numbersList.length !== 2) error();
    return [23, 59].map((limit, index) => parseNumber(numbersList[index], limit));
}

function convertTime(number) {
    if (number == 0) return 'N';
    let arab = [1, 4, 5, 9, 10, 40, 50];
    let roman = ['I','IV','V','IX','X','XL','L'];
    let result = '';
	let i = arab.length - 1;
    while(number > 0)
	{
		if(number >= arab[i])
		{
			result += roman[i];
			number -= arab[i];
		}
		else
		{
			i--;
		}
	}
	return result;
}

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    // Немного авторского кода и замечательной магии
    return parseTime(time).map(convertTime).join(':');
}

module.exports = romanTime;

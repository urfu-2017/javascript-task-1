'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */

function romanTime(time) {
    // Немного авторского кода и замечательной магии

    var regExp = /^((\b[0-1]+\d)|(\b2([0-3])))\:(\b[0-5]?(\d))$/;
    var rimDigits = ["N", "I", "II", "III", "IV", "V", "VI", "VII", "VIII"]
    
    console.log(time);
    checkIfTimeIsCorrect(time);
    time = time.split(":");
    checkIfNaN(time);
    
    
    time = convertNumberToRim(time[0]) + ":" + convertNumberToRim(time[1]);
    return time;

    function convertNumberToRim(number) {
        var convertedNumber = "";

        if (number == "00") {
            return rimDigits[0];
        } else if (number.charAt(0) === '4') {
            convertedNumber = "XL"
        } else if (number.charAt(0) === '5') {
            convertedNumber = "L"
        } else {
            convertedNumber += "X".repeat(Number(number.charAt(0)));

        }

        if (number.charAt(1) === "9") {
            if (convertedNumber.length > 0) {
                if (number.charAt(0) == 5 || number.charAt(0) == 4) {
                    convertedNumber += "X";
                }

                convertedNumber = convertedNumber.substring(0, convertedNumber.length - 1) + "I" + convertedNumber.substring(convertedNumber.length - 1);
            }
            else {
                convertedNumber = "IX";
            }

        }
        else if (number.charAt(1) === "0") {
            if (convertedNumber.length === 0) {
                convertedNumber += rimDigits[0];
            }
        }
        else {
            convertedNumber += rimDigits[Number(number.charAt(1))];
        }

        return convertedNumber;
    }





    function checkIfTimeIsCorrect(time) {
        if ((time === null) || (time === undefined) || !regExp.test(time)) {
            throw new TypeError();
        }
    }
    function checkIfNaN(splitedTime) {
        if (isNaN(splitedTime[0]) || isNaN(splitedTime[1])) {
            throw new TypeError();
        }
    }
}

module.exports = romanTime;

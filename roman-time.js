'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {

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

    var regExp = /^((\b[0-1]+\d)|(\b2([0-3])))\:(\b[0-5]?(\d))$/;
    var rimDigits = ["N", "I", "II", "III", "IV", "V", "VI", "VII", "VIII"]
    console.log(isNaN(time));

    if ((time === null) || (time === undefined) || !regExp.test(time)) {
        console.log(time);
        throw new TypeError();
    };
    time = time.split(":");
    time = convertNumberToRim(time[0]) + ":" + convertNumberToRim(time[1]);
    return time;
}

module.exports = romanTime;

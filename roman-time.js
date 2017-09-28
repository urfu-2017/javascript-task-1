'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    var arrayOfArab = [1,4,5,9,10,40,50,0];
    var arrayOfRom = ["I","IV","V","IX","X","XL","L","N"];
    var result = ['', ''];
    var timeSplit = time.split(":");
    if (timeSplit.length > 2) throw new TypeError("Слишком много разрядов");
    for (var i = 0; i < timeSplit.length; i++) {
        timeSplit[i] = parseInt(timeSplit[i], 10);
        if (isNaN(timeSplit[i])) throw new TypeError("Введите числа");
        else if (timeSplit[i] > (i==0 ? 23 : 59) || timeSplit[i] < 0) throw new TypeError("Неправильные числа");
        var n = arrayOfArab.length - 1;
        while (timeSplit[i] >= 0) {
            if (timeSplit[i] >= arrayOfArab[n]) {
                result[i] += arrayOfRom[n];
                timeSplit[i] -= arrayOfRom[n] == 0 ? arrayOfRom[n] : 1;
            }
            else n--;
        }
    }
    return timeSplit.join(":");
}


module.exports = romanTime;

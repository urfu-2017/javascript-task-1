'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    var strTime = time.split(":");
        var firstArray = parseInt(strTime[0], 10);
        var secondArray = parseInt(strTime[1], 10);
        var Unit = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
        var Ten = ["", "X", "XX", "XXX", "XL", "L", "LX"];
        var romHours = "";
        var romMinutes = "";
        if (firstArray >= 1 && firstArray <= 23) //25 
        {
            firstArray %= 100; //2,5
            romHours += Ten[Math.floor(firstArray / 10)]; //2 
            firstArray %= 10; // 5 
            romHours += Unit[firstArray];
        } 
        else if (firstArray == 0)
        {romHours += "N";}
        else {throw new TypeError('Неверное время');}
        if (secondArray >= 1 && secondArray <= 60) //25 
        {
            secondArray %= 100; //2,5
            romMinutes += Ten[Math.floor(secondArray / 10)]; //2 
            secondArray %= 10; // 5 
            romMinutes += Unit[secondArray];
        } 
        else if (secondArray == 0)
        {romMinutes += "N";}
        else {throw new TypeError('Неверное время');}
        time = romHours + ":" + romMinutes;
        return time;
    return time;
}

module.exports = romanTime;

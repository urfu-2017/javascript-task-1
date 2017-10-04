'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    // Немного авторского кода и замечательной магии
    var rules = [
        { symbol: 'L', value: 50 },
        { symbol: 'XL', value: 40 },
        { symbol: 'X', value: 10 },
        { symbol: 'IX', value: 9 },
        { symbol: 'V', value: 5 },
        { symbol: 'IV', value: 4 },
        { symbol: 'I', value: 1 }
    ];
    time = time.split(':')
    if ((Number(time[0]) > 23) || (Number(time[1]) > 59) || (time[0].length > 2) || (time[1].length > 2))
    {
        return "Неверное время";
    }
    var line = '';
    for (var e = 0; e<3; e++){
        var num = Number(time[e]);
        if (num == 0)
        {
            line += 'N';
        }

        for (var i = 0; i < rules.length; i++) {
            var value = rules[i].value;
            var symbol = rules[i].symbol;

            if (value <= num) {
                var repeat = Math.floor(num / value);
    
                for (var j = 0; j < repeat; j++) {
                    line += symbol;
                    num -= value;
                }
            }
        }
        line +=':';
    }
    return line.substr(0, line.length - 2);
}

module.exports = romanTime;

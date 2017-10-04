'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    // Немного авторского кода и замечательной магии
    time = time.split(':')
    try {
        if ((time[0] > 23) || (time[1] > 59) || (time[0].length > 2) || (time[1].length > 2))
        {
            throw new TypeError("Неверное время");
        }
    }
    catch (e)
    {
        return e.message;
    }
    var line = '';
    for (var i = 0; i<3; i++){
        if (time[i] == 0)
        {
            line += 'N';
            break;
        }
        if (time[i]>=50)
        {
            line+='L';
        }
        else if (time[i] >= 10)
        {
            if (time[i] == 40)
                {
                    line += 'XL';
                }
                else
                {
                    line += 'X'.repeat(Math.floor(time[i]/10));
                }
        }
        if (time[i] % 10 >= 5)
            {
                if (time[i] % 10 == 9)
                {    line += 'IX';}
                else
                {
                    line = line + 'V' + 'I'.repeat((time[i] % 5));}
                }
        else
        {
            if (time[i] % 10 == 4)
            {  line += 'IV';}
            else
            { line = line + 'I'.repeat(time[i] % 5);}
        }
        line += ':';
    }
    return line.substring(0, line.length - 2);
}

module.exports = romanTime;

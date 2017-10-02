'use strict';
function Roman(time) 
{
    var arab = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 40, 50];
    var roman = ['I', 'II', 'III',  'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XX', 'XL', 'XXX', 'XL'];
    var i = arab.length - 1;
    var result = '';
    if (time == 0) 
    {
        result = 'N';
    }
    do
    {
        if (time >= arab[i]) 
        {
            result += roman[i];
            time -= arab[i];
        } 
        i--;
        
    }
    while (time > 0 && i > 0) 
    return result;
}

function romanTime(time) 
{
    var time12 = time.split(':');
    if (parseInt(time12[0], 10).isNaN || parseInt(time12[1], 10).isNaN || parseInt(time12[0], 10) > 23 || parseInt(time12[1], 10) > 59 ||parseInt(time12[0], 10) < 0 || parseInt(time12[1], 10) < 0 || time.length > 5 )
    {
        throw new TypeError('Неверное время');
    }
    return(Roman(parseInt(time12[0], 10)) + ':' + Roman(parseInt(time12[1], 10)))
}

module.exports = romanTime;

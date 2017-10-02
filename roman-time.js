'use strict';
function romanTime(time) 
{
    var arab = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 40, 50];
    var roman = ['I', 'II', 'III',  'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XX', 'XL', 'XXX', 'XL'];
    var time12 = time.split(':');
    var c1c2 = [parseInt(time12[0], 10), parseInt(time12[1], 10)];
    if (c1c2[0].isNaN || c1c2[1].isNaN || c1c2[0] > 23 || c1c2[1] > 59 || c1c2 [0] < 0 || c1c2 [1] < 0) 
    {
        throw new TypeError('Неверное время');
    }
    var m = [];
    var sum = '';
    for (var i = 0; i < 2; i++)
    {
        m[i] = '';
        var j = arab.length;
        if (c1c2[i] == 0) 
        {
            m[i] = 'N';
        }
        while (c1c2[i] > 0)
        {
            if (c1c2[i] >= arab[j])
            {
                m[i] += roman[j];
                c1c2[i] -= arab[j];
                
            }
            j--; 
        
        }
        sum += m[i] + ':'
    }
return(sum.substring(0, sum.length - 1));
}
module.exports = romanTime;

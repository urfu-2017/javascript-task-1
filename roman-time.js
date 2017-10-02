'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    var numbersNorm = ["1","2","3","4","5","6","7","8","9", "0"];

    var numbersRome = ["I","II","III","IV","V","VI","VII","VIII", "IX","N"];

    
    var numbersDecadeR = ["X", "XX", "XXX", "XL", "L"];
    
    try
    {
        var timeNorm = time.split(':');
        var timeRome = [];
        var done = true;
        if(timeNorm[0] >= 24 || timeNorm [1] > 59 || timeNorm[0] < 0  || timeNorm[1] < 0 || time.length != 5 )
        {
                console.log("TypeError: Неверное время");
                done = false;
        }  
    
        for(var i = 0 ; i <timeNorm.length; i ++)
        {
            var excessN = 0;
            for(var j = 0; j < numbersDecadeR.length; j++)
            {
                if (String(timeNorm[i])[0] == numbersNorm[j])
                {
                    excessN++;
                    timeRome.push(numbersDecadeR[j]);
                }           
            }    
            
            for(var j = 0; j < numbersNorm.length; j++)
            {
                
                if (String(timeNorm[i])[1] == numbersNorm[j])
                {
                    timeRome.push(numbersRome[j]);
                }           
            }
            for(var k = 0; k < excessN;k++ ) 
            {
                delete timeRome[timeRome.indexOf("N")];
            }
            timeRome.push(":");
        }

        delete timeRome[timeRome.length -1];

        time = timeRome.join('');
        // Немного авторского кода и замечательной магии
        }

    catch(err)
    {
        console.log("TypeError: Неверное время");
    }
    time = "error";

    return time;
}

module.exports = romanTime;

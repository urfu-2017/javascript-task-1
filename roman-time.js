'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    // Немного авторского кода и замечательной магии  
    var arrayOfStrings = time.split(":");
    if (Number(arrayOfStrings[0]) > 23 || Number(arrayOfStrings[1]) > 59) {
         
        throw TypeError("Задан не верный формат времени", "index.js");
    }
    time = translation(arrayOfStrings[0]) + ":" + translation(arrayOfStrings[1]);
     
    return time;
}

module.exports = romanTime;

function translation(num) {
    let highOrder = Number(num[0]);
    let lowOrder = Number(num[1]);
    if (Number(num[0]) === 0 & Number(num[1]) === 0) {
        
        return "N";
    }
    switch (highOrder) {
        case 1:
        highOrder = "X";
        break;
        case 2:
        highOrder = "XX";
        break;
        case 3:
        highOrder = "XXX";
        break;
        case 4:
        highOrder = "XL";
        break;
        case 5:
        highOrder = "L";
        break;
        default:
        highOrder = "";
        break;
    }
    switch (lowOrder) {
        case 1:
        lowOrder = "I";
        break;
        case 2:
        lowOrder = "II";
        break;
        case 3:
        lowOrder = "III";
        break;
        case 4:
        lowOrder = "IV";
        break;
        case 5:
        lowOrder = "V";
        break;
        case 6:
        lowOrder = "VI";
        break;
        case 7:
        lowOrder = "VII";
        break;
        case 8:
        lowOrder = "VIII";
        break;
        case 9:
        lowOrder = "IX";
        break;
        default:
        lowOrder = "";
        break;
    }
    
    return highOrder + lowOrder;
}

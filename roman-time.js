/* eslint-disable linebreak-style */
'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    // Немного авторского кода и замечательной магии
    const Roman1to9 = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XL', 'L'];
    const Roman10 = ['', 'X', 'XX', 'XXX', 'XL', 'L'];
    let t = time.split(':', 2);
    let min = parseInt(t[1], 10);
    let hour = parseInt(t[0], 10);
    if (min > 59 || min < 0 || hour > 23 || hour < 0 || min === NaN || hour === NaN) {
        console.log('TypeError: Неверное время');  
    } else {
        let romanMin = Roman10[Math.floor(min / 10)] + Roman1to9[min % 10];
        let romanHour = Roman10[Math.floor(hour / 10)] + Roman1to9[hour % 10];
        
        if (min === 0 && hour !==0){
            romanMin = 'N';
        } else if (hour === 0 && min !==0 ) {
            romanHour = 'N';
        } else if (min === 0 && hour === 0) {
            romanHour = 'N';
            romanMin = 'N';
        }
        console.log(`${romanHour}:${romanMin}`);
    }
    
}

module.exports = romanTime;

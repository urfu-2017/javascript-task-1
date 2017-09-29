'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    try { 
        let ourTime = time.split(':');
        if(ourTime[0]>23||ourTime[0]<0||ourTime[1]>59||ourTime[1]<0||isNaN(ourTime[0])||isNaN(ourTime[1])||ourTime[0]===null||ourTime[1]===null) {
            throw new TypeError('TypeError: Неверное время');
            return;
        }
        time = toRoman(ourTime[0])+":"+toRoman(ourTime[1]);
        return time;
    } catch(e) {
       console.log(e.message); 
    }  
}

function toRoman(num) {

    let Romans = ['','X','XX','XXX','XXXX','L'];
    let smallRomans = ['','I',"II","III",'IV','V','VI','VII','VIII','IX'];
    if(num === '00') return 'N'
    num = Romans[Number(num[0])] + smallRomans[Number(num[1])];

return num;
}

romanTime('24:00');

module.exports = romanTime;

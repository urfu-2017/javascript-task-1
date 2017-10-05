'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    var tim = time.splitsplit(':');
    var hr = parseInt(tim[0], 10);
    hr = String(hr).split("");
    switch (Number(hr[0])) {
        case 0:
            hr[0] = '';
            break;
        case 1:
            hr[0] = 'X';
            break;
        case 2:
            hr[0] = 'XX';
            break;
        default:
            TypeError;
    }
    switch (Number(hr[1])) {
        case 0:
            hr[1] = '';
            break;
        case 1:
            hr[1] = 'I';
            break;
        case 2:
            hr[1] = 'II';
            break;
        case 3:
            hr[1] = 'III';
            break;
        case 4:
            hr[1] = 'IV';
            break;
        case 5:
            hr[1] = 'V';
            break;
        case 6:
            hr[1] = 'VI';
            break;
        case 7:
            hr[1] = 'VII';
            break; 
        case 8:
            hr[1] = 'IIX';
            break; 
        case 9:
            hr[1] = 'IX';
            break;
        
        default:
            TypeError;
    }
    
    var min = parseInt(tim[1], 10)
    min = String(min).split("");
    switch (Number(min[0])) {
        case 0:
            min[0] = '';
            break;
        case 1:
            min[0] = 'X';
            break;
        case 2:
            min[0] = 'XX';
            break;
        case 3:
            min[0] = 'XXX';
            break;
        case 4:
            min[0] = 'XL';
            break;
        case 5:
            min[0] = 'L';
            break;
                
        default:
            TypeError;
    }
    switch (Number(min[1])) {
        case 0:
            min[1] = '';
            break;
        case 1:
            min[1] = 'I';
            break;
        case 2:
            min[1] = 'II';
            break;
        case 3:
            min[1] = 'III';
            break;
        case 4:
            min[1] = 'IV';
            break;
        case 5:
            min[1] = 'V';
            break;
        case 6:
            min[1] = 'VI';
            break;
        case 7:
            min[1] = 'VII';
            break; 
        case 8:
            min[1] = 'IIX';
            break; 
        case 9:
            min[1] = 'IX';
            break;
        
        default:
            TypeError;
    }
    return time;
}

module.exports = romanTime;

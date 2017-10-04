'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function adduct(time) {
    var tdec = time.split(':');
    //  console.log('1) ' + tdec[0] + ':' + tdec[1]);
    for (var i = 0; i < 2; i++) {
        if (tdec[i] === null || tdec[i].length < 2) {
            throw new TypeError('Problems with elemets in massive', 'roman-time.js', 11);
        }
        //  console.log('2.' + i + ') ' + tdec[0] + ':' + tdec[1] + 'w');
        tdec[i] = Number(tdec[i]);
        //  console.log('3.' + i + ') ' + tdec[0] + ':' + tdec[1]);
        if (tdec[i] % 1 !== 0) {
            throw new TypeError('Value HH or MM is frac', 'roman-time.js', 16);
        }
        //  console.log('4.' + i + ') ' + tdec[0] + ':' + tdec[1]);
        tdec[i] = parseInt(tdec[i], 10);
        //  console.log('5.' + i + ') ' + tdec[0] + ':' + tdec[1]);
        if (isNaN(tdec[i]) || tdec[i] < 0) {
            throw new TypeError('Value out of range or NaN', 'roman-time.js', 12);
        }
        //  console.log('6.' + i + ') ' + tdec[0] + ':' + tdec[1]);
    }
    if (tdec[0] > 23 || tdec[1] > 59) {
        throw new TypeError('Value out of range (more)', 'roman-time.js', 12);
    }

    return tdec[0] + ':' + tdec[1];
}
function romanTime(time) {
    var newtime = adduct(time);
    var nt = newtime.split(':');
    var arrtime = ['', ''];
    //  console.log('NEW) ' + nt[0] + ':' + nt[1]);
    for (var i = 0; i < 2; i++) {
        //  console.log(parseInt(nt[i] / 10, 10));
        if (nt[i] == 0) {
            arrtime[i] = 'N';
            continue;
        }
        switch (parseInt(nt[i] / 10, 10)) {
            case 1:
                arrtime[i] = 'X';
                break;
            case 2:
                arrtime[i] = 'XX';
                break;
            case 3:
                arrtime[i] = 'XXX';
                break;
            case 4:
                arrtime[i] = 'XL';
                break;
            case 5:
                arrtime[i] = 'L';
                break;
            default:
                break;
        }
        //  console.log(nt[i] % 10);
        switch (nt[i] % 10) {
            case 1:
                arrtime[i] += 'I';
                break;
            case 2:
                arrtime[i] += 'II';
                break;
            case 3:
                arrtime[i] += 'III';
                break;
            case 4:
                arrtime[i] += 'IV';
                break;
            case 5:
                arrtime[i] += 'V';
                break;
            case 6:
                arrtime[i] += 'VI';
                break;
            case 7:
                arrtime[i] += 'VII';
                break;
            case 8:
                arrtime[i] += 'VIII';
                break;
            case 9:
                arrtime[i] += 'IX';
                break;
            default:
                break;
        }
    }
    time = arrtime[0] + ':' + arrtime[1];

    return time;
}

//  console.log(romanTime('24:00'));

module.exports = romanTime;

'use strict';

/*
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function isnull(q1) {
    if (q1 === null || q1.length < 1) {
        throw new TypeError('HH or MM is null');
    }
    //  console.log('2.' + i + ') ' + tdec[0] + ':' + tdec[1]);

    return q1;
}
function isfrac(q2) {
    if (q2 % 1 !== 0) {
        throw new TypeError('Value HH or MM is frac');
    }
    //  console.log('4.' + i + ') ' + tdec[0] + ':' + tdec[1]);

    return q2;
}
function checknan(q3) {
    if (isNaN(q3) || q3 < 0) {
        throw new TypeError('Value out of range or NaN');
    }
    //  console.log('5.' + i + ') ' + tdec[0] + ':' + tdec[1]);

    return q3;
}
function adduct(time) {
    var tdec = time.split(':');
    //  console.log('1) ' + tdec[0] + ':' + tdec[1] + ':' + tdec[2]);
    tdec[2] = parseInt(tdec[2], 10);
    if (!(isNaN(tdec[2]))) {throw new TypeError('More elenments');}
    for (var i = 0; i < 2; i++) {
        tdec[i] = isnull(tdec[i]);
        tdec[i] = Number(tdec[i]);
        //  console.log('3.' + i + ') ' + tdec[0] + ':' + tdec[1]);
        tdec[i] = isfrac(tdec[i]);
        tdec[i] = parseInt(tdec[i], 10);
        tdec[i] = checknan(tdec[i]);
    }
    if (tdec[0] > 23 || tdec[1] > 59) {
        throw new TypeError('Value out of range (more)');
    }
    //  console.log('6.' + i + ') ' + tdec[0] + ':' + tdec[1]);

    return tdec[0] + ':' + tdec[1];
}

function conversionD(tt) {
    var _tt;
    switch (parseInt(tt / 10, 10)) {
        case 1:
            _tt = 'X';
            break;
        case 2:
            _tt = 'XX';
            break;
        case 3:
            _tt = 'XXX';
            break;
        case 4:
            _tt = 'XL';
            break;
        case 5:
            _tt = 'L';
            break;
        default:
            _tt = '';
            break;
    }

    return _tt;
}
function conversionU(tt) {
    var tt_;
    switch (tt % 10) {
        case 1:
            tt_ = 'I';
            break;
        case 2:
            tt_ = 'II';
            break;
        case 3:
            tt_ = 'III';
            break;
        case 4:
            tt_ = 'IV';
            break;
        default:
            tt_ = '';
            break;
    }

    return tt_;
}
function conversionU2(tt) {
    var tt_;
    switch (tt % 10) {
        case 5:
            tt_ = 'V';
            break;
        case 6:
            tt_ = 'VI';
            break;
        case 7:
            tt_ = 'VII';
            break;
        case 8:
            tt_ = 'VIII';
            break;
        default:
            tt_ = 'IX';
            break;
    }

    return tt_;
}
function romanTime(time) {
    var newtime = adduct(time);
    var nt = newtime.split(':');
    var arrtime = ['', ''];
    //  console.log('NEW) ' + nt[0] + ':' + nt[1]);
    for (var i = 0; i < 2; i++) {
        //  console.log(parseInt(nt[i] / 10, 10));
        if (nt[i] === '0') {
            arrtime[i] = 'N';
            continue;
        }
        arrtime[i] = conversionD(nt[i]);
        if (nt[i] % 10 > 4) {
            arrtime[i] += conversionU2(nt[i]);
        } else {
            arrtime[i] += conversionU(nt[i]);
        }
        //  console.log(nt[i] % 10);
    }
    time = arrtime[0] + ':' + arrtime[1];

    return time;
}

  console.log(romanTime('2:23:34'));

module.exports = romanTime;

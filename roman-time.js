'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) { 
var p; 
p=time.length; 
if (p==5 && time.indexOf(':')==2) 
{ 
time = time.split(":",2); 
var Hour, min; 
Hour = Number(time[0]); 
min = Number(time[1]); 
if (Hour!=time[0] || min!=time[1] || min>=60 || Hour>=24 ) 
{ throw new TypeError('Неверные данные') ; } 
else { 

var Rim = new Array( 'N','I','II','III','IV','V','VI','VII','VIII','IX','X','XI', 
'XII','XIII','XIV','XV','XVI','XVII','XVIII','XIX','XX','XXI','XXII','XXIII','XXIV','XXV','XXVI','XXVII','XXVIII', 
'XXIX','XXX','XXXI','XXXII','XXXIII','XXXIV','XXXV','XXXVI','XXXVII','XXXVIII','XXXIX','XL','XLI','XLII','XLIII','XLIV','XLV','XLVI', 
'XLVII','XLVIII','XLIX','L','LI','LII','LIII','LIV','LV','LVI','LVII','LVIII','LVIX' ) 
Hour = Rim[Hour]; 
min = Rim[min]; 
time = Hour+':'+min; 
return time;} 
} 
else { throw new TypeError('Неверные данные') ;} }


module.exports = romanTime;

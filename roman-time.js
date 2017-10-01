'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
var p;
    p=time.length;
if (p==5){
    time = time.split(':',2); //разделям строку на две части, часы и минуты
var a,b;
    a=time[0];b=time[1];
        if (a==='00') { a = 'NN'; } //перевожу часы из арабских цифр в римские
        if (a==='01') { a ='I'; }
        if (a==='02') { a ='II'; }
        if (a==='03') { a ='III'; }
        if (a==='04') { a ='IV';}
        if (a==='05') { a ='V';}
        if (a==='06') { a ='VI'; }
        if (a==='07') { a ='VII'; }
        if (a==='08') { a ='VIII'; }
        if (a==='09') { a ='IX'; }
        if (a==='10') { a ='X'; }
        if (a==='11') { a ='XI'; }
        if (a==='12') { a ='XII'; }
        if (a==='13') { a ='XIII'; }
        if (a==='14') { a ='XIV'; }
        if (a==='15') { a ='XV'; }
        if (a==='16') { a ='XVI'; }
        if (a==='17') { a ='XVII'; }
        if (a==='18') { a ='XVIII'; }
        if (a==='19') { a ='XIX'; }
        if (a==='20') { a ='XX'; }
        if (a==='21') { a ='XXI'; }
        if (a==='22') { a ='XXII'; }
        if (a==='23') { a ='XXIII'; }
var c,d;
c=b[0];      //беру десятки минут и перевожу в римские цифры

        if (c==='1') { c ='X'; }    
        if (c==='2') { c ='XX'; }
        if (c==='3') { c ='XXX'; }
        if (c==='4') { c ='XL';}
        if (c==='5') { c ='L';}
d=b[1];     //беру числа первого разряда и перевожу в римские цифры
        if (d==='0' && c==='0') {c='N'; d = 'N'; }
        else if (c==='0') {c='';} // убирает значение десяток перед единицами
        if (d==='1') { d ='I'; }
        if (d==='2') { d ='II'; }
        if (d==='3') { d ='III'; }
        if (d==='4') { d ='IV';}
        if (d==='5') { d ='V';}
        if (d==='6') { d ='VI'; }
        if (d==='7') { d ='VII'; }
        if (d==='8') { d ='VIII'; }
        if (d==='9') { d ='IX'; }

time=a+':'+c+d; //склеиваем цифры в одну строку

}
    else {throw new TyoeError('Ошибка, неверные данные.')}
// Немного авторского кода и замечательной магии
return time;
}

module.exports = romanTime;

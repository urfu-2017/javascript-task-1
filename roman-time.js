'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    if (typeof time != 'string') {
        throw new TypeError("время должно быть строкой!");
    }

    var arr= time.split(':');
    if( arr[0]>=24 || arr[1]>=60 || isNaN(parseInt(arr[0],10)) || isNaN(parseInt(arr[1],10)) )
    {
        throw new TypeError("неверное время!");
    } 
    else 
    {
        var flag = false;
        time="";
        var rome = [["I",1], ["IV",4], ["V",5], ["IX",9], ["X",10], ["XL",40], ["L",50]];
        for( var i=0; i<=1;i++){
            if(arr[i]==0)
            {
                time+="N";
            }
             for(var j=rome.length-1;arr[i]>0; j-- ){
             if(arr[i]-rome[j][1]>=0)
             {
                arr[i]-=rome[j][1];
                time+=rome[j][0];
                j=rome.length-1
             }
            }
            if(!flag){
             time+=":";
             flag=true;
            }
            }
            return time;  
    }
}
module.exports = romanTime;

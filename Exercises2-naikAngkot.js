function fee(dari, tujuan){
    var rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    var asal = rute.indexOf(dari);
    var tiba = rute.indexOf(tujuan);
    var fee= (tiba-asal)*2000;
    return fee;
}
  
function naikAngkot(arrPenumpang) {
    var rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    var obj = {};
    var result=[];
    var count=0;
   
    if(arrPenumpang.length===0){
      return result;
    }
    for(var i=0;i<arrPenumpang.length;i++){
      for(var j=0;j<arrPenumpang[i].length;j++){
        if(count===0 && obj[i]===undefined){
          obj["penumpang"] = arrPenumpang[i][j];
          count++;
        }else if(count===1){
          obj["naikDari"] = arrPenumpang[i][j];
          count++;
        } else if (count===2){
          obj["tujuan"] = arrPenumpang[i][j];
          obj["bayar"] = fee(obj["naikDari"],obj["tujuan"]);
          count=0;
        }
      }
      result.push(obj);
      obj={};
    }
    return result;
}
  
//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
 //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
console.log(naikAngkot([])); //[]
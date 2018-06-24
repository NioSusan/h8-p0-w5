//Solution 1 - Using nested for loops
function naikAngkot(arrPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  var result=[];
  if(arrPenumpang.length===0){
    return result;
  }
  var obj={};
  for(var i=0;i<arrPenumpang.length;i++){
    for(var j=0;j<arrPenumpang[i].length;j++){
      if(j===0){
        obj.penumpang = arrPenumpang[i][j];
      } else if(j===1){
        obj.naikDari = arrPenumpang[i][j];
      } else if(j===2){
        var indexDari= rute.indexOf(arrPenumpang[i][1]);
        var indexTujuan= rute.indexOf(arrPenumpang[i][2]);
        var distance = Math.abs(indexTujuan - indexDari);
        var fee = distance * 2000;
        obj.tujuan = arrPenumpang[i][j];
        obj.bayar = fee;
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

/* ============================================================================== */
//Solution 2 - Using a separate function to count the fee (function in function)
// function fee(dari, tujuan){
//     var rute = ['A', 'B', 'C', 'D', 'E', 'F'];
//     var asal = rute.indexOf(dari);
//     var tiba = rute.indexOf(tujuan);
//     var fee= (tiba-asal)*2000;
//     return fee;
// }
  
// function naikAngkot(arrPenumpang) {
//     var rute = ['A', 'B', 'C', 'D', 'E', 'F'];
//     var obj = {};
//     var result=[];
   
//     if(arrPenumpang.length===0){
//       return result;
//     }
//     for(var i=0;i<arrPenumpang.length;i++){
//       for(var j=0;j<arrPenumpang[i].length;j++){
//         if(j===0){
//           obj["penumpang"] = arrPenumpang[i][j];
//         }else if(j===1){
//           obj["naikDari"] = arrPenumpang[i][j];
//         } else if (j===2){
//           obj["tujuan"] = arrPenumpang[i][j];
//           obj["bayar"] = fee(obj["naikDari"],obj["tujuan"]);
//         }
//       }
//       result.push(obj);
//       obj={};
//     }
//     return result;
// }
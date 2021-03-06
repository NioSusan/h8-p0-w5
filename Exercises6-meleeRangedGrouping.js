//Solution 1 - Using for of
function meleeRangedGrouping (str) {
  var result=[];
  if(str.length===0){
    return result;
  }
  //Turn str into arr
  var name="";
  var arr=[];
  for(var letter of str){
    if(letter!==','){
      name+=letter;
    }else{
      arr.push(name);
      name="";
    }
  }
  arr.push(name);//to push the last item
  //remove -Ranged & -Melee from each word before pushing the words to each category
  var ranged=[];
  var melee=[];
  for(var word of arr){
    if(word.includes("Ranged")){
      var indexRange=(word.indexOf("-Ranged"));
      ranged.push(word.slice(0,indexRange));
    } else {
      var indexMelee=(word.indexOf("-Melee"));
      melee.push(word.slice(0,indexMelee));
    }
  }  
  result.push(ranged, melee);
  return result;
}
// TEST CASE
console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
console.log(meleeRangedGrouping('')); // []

/* ======================================================================================================= */
//Solution 2 - Usinf for loops, match(), regex, split(), join()
// function meleeRangedGrouping (str) {
//     var result=[];
//     var ranged=[];
//     var melee=[];
//     var splittedArr=str.split(","); //convert the str into an array and split it by ",".
  
//     if(str.length===0 || !str){
//       return result;
//     }
  
//     var filter="";
//     for(var i=0;i<=splittedArr.length;i++){
//       filter = splittedArr.shift();
//       //if filter has str that match Ranged, it will be pushed to ranged, otherwise it will be pushed to melee
//       if(filter.match(/Ranged/g)){
//         ranged.push(filter);
//         filter="";
//       } else {
//         melee.push(filter);
//         filter="";
//       }
//       i=0; //return i to 0
//     }
      
//     // console.log(ranged);
//       /* [ 'Razor-Ranged', 'Invoker-Ranged', 'Sniper-Ranged' */ 
//     var arrRanged = ranged.join("-").split("-");
//       /* 
//       .join("-"):
//       Razor-Ranged-Invoker-Ranged-Sniper-Ranged
//       .split("-"):
//       [ 'Razor', 'Ranged', 'Invoker', 'Ranged', 'Sniper', 'Ranged' ]
//       */ 
//     var arrMelee = melee.join("-").split("-");
      
//     var finalRanged=[];
//     var finalMelee=[]
  
//       //taking all words except "Ranged" & "Melee"
//     if(arrRanged.length<=1){
//         finalRanged=[];
//     } else {
//         for(var word of arrRanged){
//           if(word!=="Ranged"){
//             finalRanged.push(word);
//           }
//         }
//     }
  
//     if(arrMelee.length<=1){
//         finalMelee=[];
//     } else {
//         for(var word of arrMelee){
//           if(word!=="Melee"){
//             finalMelee.push(word);
//           }
//         }
//     }
    
//     //push the final words to result
//     result.push(finalRanged);
//     result.push(finalMelee);
  
//     return result;
// }

function meleeRangedGrouping (str) {
    var result=[];
    var ranged=[];
    var melee=[];
    var splittedArr=str.split(","); //convert the str into an array and split it by -.
  
    if(str.length===0 || !str){
      return result;
    }
  
    var filter="";
    for(var i=0;i<=splittedArr.length;i++){
      filter = splittedArr.shift();
      //if filter has str that match Ranged, it will be pushed to ranged, otherwise it will be pushed to melee
      if(filter.match(/Ranged/g)){
        ranged.push(filter);
        filter="";
      } else {
        melee.push(filter);
        filter="";
      }
      i=0; //return i to 0
    }
      
    // console.log(ranged);
      /* [ 'Razor-Ranged', 'Invoker-Ranged', 'Sniper-Ranged' */ 
    var arrRanged = ranged.join("-").split("-");
      /* 
      .join("-"):
      Razor-Ranged-Invoker-Ranged-Sniper-Ranged
      .split("-"):
      [ 'Razor', 'Ranged', 'Invoker', 'Ranged', 'Sniper', 'Ranged' ]
      */ 
    var arrMelee = melee.join("-").split("-");
      
    var finalRanged=[];
    var finalMelee=[]
  
      //taking all words except "Ranged" & "Melee"
    if(arrRanged.length<=1){
        finalRanged=[];
    } else {
        for(var word of arrRanged){
          if(word!=="Ranged"){
            finalRanged.push(word);
          }
        }
    }
  
    if(arrMelee.length<=1){
        finalMelee=[];
    } else {
        for(var word of arrMelee){
          if(word!=="Melee"){
            finalMelee.push(word);
          }
        }
    }
    
    //push the final words to result
    result.push(finalRanged);
    result.push(finalMelee);
  
    return result;
}
  
// TEST CASE
console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
console.log(meleeRangedGrouping('')); // []
function graduates (students) {
    var obj={};
    
    if(students.length===0){
      return obj;
    }
  
    var lulus=[];
    var result=[];
    for(var i=0; i<students.length; i++){
      if(students[i].score>= 75){
        lulus.push(students[i]);
      }
    }
    
    var match=[];
    var noMatch=[];
    for(var j=0;j<=lulus.length;j++){
      var currentClass= lulus[0].class;
      for(var k=0;k<lulus.length;k++){
        if(lulus[k].class===currentClass){
          match.push(lulus[k]);
        } else {
          noMatch.push(lulus[k]);
        }
      }
      result.push(match);
      match=[]
      lulus=noMatch;
      noMatch=[];
      j=0;
    }
    //remove the class from each obj in result
    for(var l=0; l<result.length; l++){
      classObj = result[l][0].class //save the class to var classObj first before deleting the class
      for(var elem of result[l]){
        delete elem["class"]; //delete the class
      }
      obj[classObj]= result[l]; //use the classObj to add the class
    }
    
    return obj; //no more class in each obj
   
}
  
console.log(graduates([
    {
      name: 'Dimitri',
      score: 90,
      class: 'foxes'
    },
    {
      name: 'Alexei',
      score: 85,
      class: 'wolves'
    },
    {
      name: 'Sergei',
      score: 74,
      class: 'foxes'
    },
    {
      name: 'Anastasia',
      score: 78,
      class: 'wolves'
    }
  ]));
  
  // {
  //   foxes: [
  //     { name: 'Dimitri', score: 90 }
  //   ],
  //   wolves: [
  //     { name: 'Alexei' , score: 85 },
  //     { name: 'Anastasia', score: 78 }
  //   ]
  // }
  
console.log(graduates([
    {
      name: 'Alexander',
      score: 100,
      class: 'foxes'
    },
    {
      name: 'Alisa',
      score: 76,
      class: 'wolves'
    },
    {
      name: 'Vladimir',
      score: 92,
      class: 'foxes'
    },
    {
      name: 'Albert',
      score: 71,
      class: 'wolves'
    },
    {
      name: 'Viktor',
      score: 80,
      class: 'tigers'
    }
  ]));
  
  // {
  //   foxes: [
  //     { name: 'Alexander', score: 100 },
  //     { name: 'Vladimir', score: 92 }
  //   ],
  //   wolves: [
  //     { name: 'Alisa', score: 76 },
  //   ],
  //   tigers: [
  //     { name: 'Viktor', score: 80 }
  //   ]
  // }
  
  
console.log(graduates([])); //{}
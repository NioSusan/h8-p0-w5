//create a function to sort students.score from the lowest to the highest
function sortObj(obj1, obj2){
    return obj1.score - obj2.score;
}

function highestScore (students) {
    var obj={};

    if(students.length===0){
    return obj;
    }

    students.sort(sortObj);//call the function to sort the score
    // console.log(students);

    var currentHighestScore;
    var currentHighestScoreClass;
    var lowGroup=[];
    var highGroup=[];

    for(var i=0;i<students.length;i++){
        currentHighestScore = students[students.length-1].score;//e.g. 100
        currentHighestScoreClass = students[students.length-1].class//e.g. foxes
        //if same class but lower score, push to lowGroup
        if(students[i].class === currentHighestScoreClass && students[i].score < currentHighestScore){
            lowGroup.push(students[i]);
        //if same class and same score to currentHighestScore & currentHighestScoreClass, add to obj
        } else if (students[i].class === currentHighestScoreClass && students[i].score === currentHighestScore){
            obj[students[i].class]=students[i];
        //if different class, push to highGroup
        } else if (students[i].class !== currentHighestScoreClass){
            if(highGroup[0] === undefined){
                highGroup.push(students[i]);
            } else if (students[i].class ===highGroup[0].class &&students[i].score > highGroup[0].score){
                highGroup[0] = students[i];
            } else if (students[i].class !==highGroup[0].class && highGroup[1]===undefined){
                highGroup.push(students[i]);
            } else if (students[i].class ===highGroup[1].class &&students[i].score > highGroup[1].score){
                highGroup[1] = students[i];
            }
        }
    }

    //add each elem of highGroup to obj
    for(var elem of highGroup){
        obj[elem.class] = elem;
    }

    //remove value of class from every key(such as foxes,wolves,tigers) of obj
    for(var key in obj){
    // console.log(obj[key]);
        delete obj[key].class;
    }
    return obj;
}

// TEST CASE
console.log(highestScore([
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
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }


console.log(highestScore([
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
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }

console.log(highestScore([])); //{}


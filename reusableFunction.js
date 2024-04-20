//Part 1: Thinking Functionally

//Take an array of numbers and return the sum
function sum(numArray) {
    let add = 0;
    for (let a = 0; a < numArray.length; a++) {
        let addIndex = numArray[a];
        add += addIndex;
    }
    return add;
}
console.log(sum([10, 2, 3]));

//Take an array of numbers and return the average

const avg = function (avgArray) {
    let avgAdd = 0;
    for (let i = 0; i < avgArray.length; i++) {
        let avgAddIndex = avgArray[i];
        avgAdd += avgAddIndex;
        avgResult = avgAdd / avgArray.length;
    }
    return avgResult;
}
console.log(avg([10, 6]));

//Take an array of strings and return the longest string.

function longestString(array) {
    
    var longestWord = "";
  
    array.forEach(function(word) {
      if(word.length > longestString.length) {
        longestString = word;
      }
    });
  
    return longestString;
  }
  console.log(longestString(['first string', 'second string is longer', 'third string is the longeeeeeeeeeeeest']));
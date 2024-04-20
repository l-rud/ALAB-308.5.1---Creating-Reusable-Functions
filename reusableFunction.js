//Part 1: Thinking Functionally

//Take an array of numbers and return the sum
function sum(numArray) {
    let add = 0;
    for (let a = 0; a < numArray.length; a++) {
        let Addindex = numArray[a];
        add += Addindex;
    }
    return add;
}
console.log(sum([10, 2, 3]));
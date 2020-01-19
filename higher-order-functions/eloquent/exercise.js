// Challenge 1. Flattening
let arrays = [[1, 2, 3], [4, 5], [6]];

// Your code here.

function singleArray(arrays){
  arrays.reduce((newArray ,array ) =>{
   array.forEach(cv => newArray.push(cv));
    return newArray;
 },newArray = []);
 return newArray;
}

console.log(singleArray(arrays));
// → [1, 2, 3, 4, 5, 6]
//========================================================================
// Challenge 2. Your own loop
// Your code here.
function loop(initValue , terminatingCondition , increment  , operation){
  let i = initValue; 
  while(terminatingCondition(i)){
    operation(i);
    i = increment(i);
  }
}


loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1

//===========================================================================
// Challenge 3. Everything

function every(array, test) {
  
  let bool = true ;
  for(let i = 0;i<array.length;i++){
   bool = test(array[i]) & bool;
  }
  return Boolean(bool);
}


console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true

//==========================================================================
// Challenge 4. Dominant writing direction
function dominantDirection(text) {
  // Your code here.
}

console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl

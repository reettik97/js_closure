## Scope (Where to look for things)

1. Guess the output:

```js
let firstName = "Arya";
const lastName = "Stark";
var knownAs = "no one";

console.log(window.firstName, window.lastName, window.knownAs);

Output:
"undefine"
"undefine"
"no one"

```
============================================================================

2. Guess the output:

```js
let firstName = "Arya";
const lastName = "Stark";
var knownAs = "no one";

function fullName(a, b) {
  return a + b;
}

console.log(window.fullName(firstName, lastName));

Output:
"AryaStark"

```
============================================================================

3. Make a Execution Context Diagram for the following JS and write the output.

```js
function addOne(num){
  return num + 1;
}
var one = addOne(0);
var two = addOne(1);
console.log(one, two);
```

Output:
1
2

//===========================================================================

4. Make a Execution Context Diagram for the following JS and write the output.

```js
var one = addOne(0);
function addOne(num){
  return num + 1;
}
var two = addOne(1);
console.log(one, two);
```
Output:
1
2

//==========================================================================

5. Make a Execution Context Diagram for the following JS and write the output.

```js
console.log(addOne(0));
function addOne(num){
  return num + 1;
}
var two = addOne(1);
console.log(two);
```
Output:
1
2

============================================================================
6. Make a Execution Context Diagram for the following JS and write the output.

```js
var one = addOne(0);
const addOne = num => {
  return num + 1;
};
var two = addOne(1);
console.log(two);
```
Output:
Error
2
============================================================================
7. Make a Execution Context Diagram for the following JS and write the output.

```js
console.log(addOne(0));
const addOne = num => {
  return num + 1;
};
var two = addOne(1);
console.log(two);
```
Output:
error
2

=============================================================================
8. What will be the output of the following

```js
function isAwesome() {
  var awesome;
  if (false) {
    awesome = true;
  }
  console.log(awesome);
}
isAwesome();
```
Output:
undefined
=============================================================================
9. What will be the output of the following

```js
function isAwesome() {
  let awesome;
  if (true) {
    awesome = true;
  }
  console.log(awesome);
}
isAwesome();
```
Output:
error  // you have to initialize the variable awesome
but  output is true why? 
============================================================================
10. What will be the output of the following

```js
function isAwesome() {
  let awesome;
  if (false) {
    awesome = true;
  }
  console.log(awesome);
}
isAwesome();
```
Output:
true

============================================================================
11. What will be the output of the following

```js
let firstName = "Arya";
const lastName = "Stark";
var knownAs = "no one";

function fullName(a, b) {
  return a + b;
}
const name = fullName(firstName, lastName);
console.log(name);
```
Output:
"AryaStark"      //type is different (let + const) 

============================================================================
12. What will be the output of the following

```js
let firstName = "Arya";
const lastName = "Stark";
var knownAs = "no one";

function fullName(a, b) {
  return a + b;
}
const name = fullName(firstName, lastName);
console.log(name);
```
output:
"AryaStark" 

=============================================================================
13. Guess the output of the code below with a reason.

```js
function sayHello() {
  let name = "Arya Stark";
}
sayHello();

console.log(name); 
```
Output:
Error   // let is block scoping 

============================================================================
14. Guess the output of the code below with a reason.

```js
if (true) {
  var name = "Arya Stark";
}
console.log(name);
```
Output:
"Arya Stark"  

=============================================================================
15. Guess the output of the code below with a reason.

```js
if (true) {
  let name = "Arya Stark";
}
console.log(name);
```
output:
error  //let is block scoping 

============================================================================
16. Guess the output of the code below with a reason.

```js
for (var i = 0; i < 20; i++) {
  //
}
console.log(i);
```
Output:  20

=======================================================
17. Guess the output of the code below with a reason.

```js
for (let i = 0; i < 20; i++) {
  //
}
console.log(i);
```
output: i not define outside the for loop

======================================================
18. Guess the output of the code below with a reason.

```js
for (var i = 0; i < 20; i++) {
  setTimeout(() => console.log(i, "first"), 100);
}
console.log(i, "second");
```
output: 

=========================================================================
19. Guess the output of the code below with a reason.

```js
for (let i = 0; i < 20; i++) {
  setTimeout(() => console.log(i, "first"), 100);
}
console.log(i, "second");
```

===========================================================================
20. Guess the output and the reason behind that.

```js
function sample() {
  if (true) {
    var username = "John Snow";
  }
  console.log(username);
}
```
output: "John Snow"

//========================================================================
21. Guess the output and the reason behind that.

```js
function sample() {
  if (true) {
    let username = "John Snow";
  }
  console.log(username);
}
```
output: username is not define outside the if statement 

==========================================================================
22. Guess the output and the reason behind that.

```js
function sample() {
  var username = "Arya Stark";
  if (true) {
    var username = "John Snow";
    console.log(username);
  }
  console.log(username, "second");
}
```
output:
"John Snow"
"Arya Stark"
"second"


============================================================================
23. Guess the output and the reason behind that.

```js
function sample() {
  let username = "Arya Stark";
  if (true) {
    let username = "John Snow";
    console.log(username, "first");
  }
  console.log(username, "second");
}
```
output:
"John Snow"
"first"
"Arya Stark"
"secound"
=========================================================================
24. Guess the output and the reason behind that.

```js
function sample(...args) {
  for (let i = 0; i < args.length; i++) {
    let message = `Hello I am ${args[i]}`;
    console.log(message);
  }
}

sample("First", "Second", "Third");

output:
'Hello I am First'
'Hello I am Second'
'Hello I am Third'
```
==========================================================================
25. Guess the output and the reason behind that.

```js
function sample(...args) {
  for (let i = 0; i < args.length; i++) {
    const message = `Hello I am ${args[i]}`;
    console.log(message);
  }
}

sample("First", "Second", "Third");

output:
'Hello I am First'
'Hello I am Second'
'Hello I am Third'
```
===========================================================================
26. Guess the output and the reason behind that.

```js
if (true) {
  const myFunc = function() {
    console.log(username, "Second");
  };
  console.log(username, "First");
  let username = "Hello World!";
  myFunc();
}
```
output:
username is not define 
"First"
"Hello World!"
"Second"

=========================================================================
27. Guess the output and the reason behind that.

```js
function outer() {
  let movie = "Mad Max: Fury Road";
  function inner() {
    console.log("I love this movie called ${movie.toUpperCase()}");
  }
  inner();
}

outer();
```
output:
'I love this movie called MAD MAX: FURY ROAD'
return undefined
==========================================================================
28. Guess the output and the reason behind that.

```js
function outer() {
  let movie = "Mad Max: Fury Road";
  function inner() {
    let movie = "Before Sunrise";
    console.log("I love this movie called ${movie.toUpperCase()}");
  }
  inner();
}

outer();
```
output:
'I love this movie called BEFORE SUNRISE'
return undefined
==========================================================================
29. Guess the output and the reason behind that.

```js
function outer() {
  let movie = "Mad Max: Fury Road";
  function inner() {
    let movie = "Before Sunrise";
    function extraInner() {
      let movie = "Gone Girl";
      console.log("I love this movie called ${movie.toUpperCase()}");
    }
    extraInner();
  }
  inner();
}

outer();
```
output:
'I love this movie called GONE GIRL'

=====================================================================
30. Execute all the functions inside `allFunctions` variable using any loop. (Hint: use for of loop functions are object)

```js
const add = (a, b) => {
  return a + b;
};
const sub = (a, b) => {
  return a - b;
};
const multiply = (a, b) => {
  return a * b;
};
const divide = (a, b) => {
  return a / b;
};

let allFunctions = [add, sub, multiply, divide];
```
for(fun of allFunctions){
  console.log(fun(10, 5))
}
===========================================================================
31. You have to pass 10 and 12 as initial value and find the final output when you pass the return value of one function as an input to the next function in the array `allFunctions`.

```js
const add = (a, b) => {
  return a + b;
};
const sub = (a, b) => {
  return a - b;
};
const multiply = (a, b) => {
  return a + b;
};
const divide = (a, b) => {
  return a / b;
};

let allFunctions = [add, add, add, add, add, sub, sub, multiply, divide];
```
output

let a = 10;
let b = 12 
for(fun of allFunctions){
  b= fun(a , b);
  let temp = a ;
  a = b;
  b = temp;
}
console.log(a);
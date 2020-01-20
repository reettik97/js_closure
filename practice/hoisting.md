## Hoisting Exercises

1. If the code is `valid` what will be the output and if `invalid` what will be the error. Write the error message.

```js
console.log(animal);
var animal = "monkey";

output: undefined  

// Output or Error Message
```

```js
console.log(animal);
let animal = "monkey";

output: Error 
// Output or Error Message
```

```js
console.log(animal);
const animal = "monkey";

output : 0;
// Output or Error Message
```

```js
function sayHello(msg) {
  alert(msg);
}
sayHello("Hey Everyone");

output: show Hey Everyone in the alert box

// Output or Error Message
```

```js
sayHello("Hey Everyone");
function sayHello(msg) {
  alert(msg);
}

Output: show Hey Everyone in the alert box
// Output or Error Message
```

```js
sayHello("Hey Everyone");
var sayHello = msg => {
  alert(msg);
};
Output: Error

// Output or Error Message

```

```js
sayHello("Hey Everyone");
let sayHello = msg => {
  alert(msg);
};

Output: Error

```

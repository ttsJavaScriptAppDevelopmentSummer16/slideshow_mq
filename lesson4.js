// Parameters - What input does the function need in order to run?
// Body - What will the function do with that information?
// Return - What output will executing the function give back?

function nameOfFunction(list, of, parameters) {
  //body: logic and operations based on parameters or arguments.
  //return: value returned to teh caller of the function.
  return list
}

nameOfFunction(1,2,3)// 1

//scope
//lexical scope/local
function whatever() {
  var mariam = 'im only available inside this scope';
}
console.log(mariam); //wont work outside of the scope, undefined.

//Blocks DO NOT have their own scope
for(var i = 0; i < 10; i++) {
    var x = i;
}
//i dont get this example !Q
console.log(i,x); //9,9

//variables defined without the 'var' keyword are global.
function greet(name) {
  greeting = 'hello';
  return greeting + name;
}
greet('Shane');
greeting //'hello' shane!
//
// //scope chain and closures//
// cHALLENGE WASNT COMPLETED !Q

//Scope, closure, and hoisting, oh my!

function createFunction() {
    var a = "Hans Zimmer Rules!";
    inception = function() { //this is a golbal variable since no var is in front of it. this is the only inception that this function will deal with - not the one below.
        console.log(a);
    }
}

var inception; //because this was declared outside of the function the function doesnt have access to this...
createFunction();
inception(); // "Hans Zimmer Rules!"

//this//

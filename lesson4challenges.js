//EXERCISE1 SCOPE closures
// Start with the following code template. After each step, run the program and see how the output changes.


function outer(){
var a = "mariam";
var b = {name: 'maple', animal: 'dog'};
console.log(a);
console.log(b);
        function inner(a,b) {
          var a = "hello";
          var b = {name: 'bob', animal: 'dog'};
          console.log(a);
          console.log(b);
        };
        inner()
;}

outer();

// Declare two variables, a and b in the outer function's scope and set them to a string and an object respectively. Log their values immediately.
// Log the values of a and b in the inner function.
// Update the inner function to take two parameters named a and b.
// Pass a and b in as arguments when you execute inner().
// Inside the inner function, assign new values to a and b and log them at the end of the function AND after the execution of inner(a,b).
// Inside the inner function, update a property of the b object.

//exericse 2 THIS//

// Create a single object named slideshow that represents the data and functionality of a picture slideshow. There should be NO VARIABLES OUTSIDE THE OBJECT. The object should have properties for:
//
// An array called photoList that contains the names of the photos as strings
// An integer currentPhotoIndex that represents which photo in the photoList is currently displayed
// A nextPhoto() function that moves currentPhotoIndex to the next index ifthere is one, and:
// logs the current photo name.
// Otherwise, log "End of slideshow";
// A prevPhoto() function that does the same thing, but backwards.
// A function getCurrentPhoto() that returns the current photo from the list.

var slideshow = {
  photoList: ['pic1', 'dogpic', 'puppic', 'coffeepic', 'vacation', 'dinner', 'charlotte'],
  currentPhotoIndex = indexOf(photoList),

};

function nextPhoto(){
  if (currentPhotoIndex < photoList.length) {
    console.log(currentPhotoIndex);
  return currentPhotoIndex.shift;
  } else {
    console.log('end of slideshow');
  }
};
function getCurrentPhoto(){
  return currentPhotoIndex;
};

// console.log("Chaliye shuru Karthe hai!!");

//Creation of Object
let rectangle = {
  length: 1,
  breadth: 2,
  draw: function () {
    console.log("Draw Reactangle");
  },
};
// console.log(rectangle);
// console.log(rectangle.draw());

//creation of the Object by Factory function

function createRectangle(len, bre) {
  return (rectangle = {
    length: len,
    breadth: bre,
    draw: function () {
      console.log("Draw Reactangle");
    },
  });
}

let rectangleObj1 = createRectangle(4, 5);
console.log(rectangleObj1);

//creation of the Object by Construtor  function
//In constructor use pascal notaion
function CreateRectangle2(len, bre) {
  this.length = len;
  this.breadth = bre;
  this.draw = function () {
    console.log("Draw with Constructor function!!");
  };
}

let rectangleObj2 = new CreateRectangle2(7, 5);
let rectangleObj3 = new CreateRectangle2(8, 9);
let rectangleObj4 = new CreateRectangle2(10, 15);

console.log(rectangleObj2);
console.log(rectangleObj3);
console.log(rectangleObj4);

//Primitive vs Reference

let a = 10;
b = a; //creates the copy

a++;
console.log(a, b);

let c = { value: 10 };
d = c; //reference of a is copied i.e address is copied

c.value++;
console.log(c.value, d.value);

a = 15;
function incrementA(a) {
  //pass by value
  a++;
}
incrementA(a);
console.log(a);

let obj = { value: 25 };
function incrementObj(obj) {
  //pass by reference
  obj.value++;
}
incrementObj(obj);
console.log(obj.value);

//for in loop

let rectangleLoop = {
  length: 2,
  breadth: 6,
};

for (let key in rectangleLoop) {
  console.log(key, rectangleLoop[key]);
}

//for of loops
for (let key of Object.entries(rectangleLoop)) {
  console.log(key);
}

//check if property eist in object or not
if ("length" in rectangleLoop) {
  console.log("Exist");
}

// Object Cloning
let src = {
  a: 10,
  b: 20,
  c: 30,
};
let dest = {};

//clonning 1 using loops
for (let key in src) {
  dest[key] = src[key];
}
console.log(dest);

//clonning using assign

let dest2 = Object.assign({}, src);
console.log(dest2);
//we can give multiple src too
let src2 = {
  d: 40,
  e: 50,
  f: 60,
};
let dest3 = Object.assign({}, src, src2);
console.log(dest3);

//using spread operator
let dest4 = { ...src };
console.log(dest4);

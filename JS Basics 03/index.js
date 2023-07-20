// console.log("Kya haal Chaal");

//Math Operation - Math object

console.log(Math.random());
console.log(Math.round(1.85));
console.log(Math.round(1.4978));
console.log(Math.round(1.2));
console.log(Math.min(4, 15, 18, 28, 9, 6, 25));
console.log(Math.max(4, 15, 18, 28, 9, 6, 25));

//String and String methods
let firstName = "Samrath"; //STRING AS PRIMITIVE STRING TYPE
console.log(firstName);
console.log(typeof firstName);

let lastName = new String("Nayak"); //STRING AS OBJECT
console.log(lastName);
console.log(typeof lastName);

//String Methods

console.log(firstName.length);
console.log(firstName.includes("ma"));
console.log(firstName.startsWith("Sa"));
console.log(firstName.endsWith("th"));
console.log(firstName.toUpperCase());
console.log(firstName.toLowerCase());
console.log(firstName.indexOf("m"));

let longName = "  ToBeTrimmed  ";
console.log(longName);
console.log(longName.trim());
console.log(longName);

console.log(longName.replace("ToBe", "Is"));

let message = "This is my first message to the comunity";
let words = message.split(" ");
console.log(message, words);

//Esacpe Sequence

let string1 = "hello everyone I'm a software engineer";
let string2 = "Line1 \nline2 \n line3";

console.log(string1, string2);

//Template literals

let string3 = `This is 
a multiline string
created using template literal`;

console.log(string3);

let string4 = `My Name is ${firstName} ${lastName}`;

console.log(string4);

//DateTime in JavScript
let date = new Date();

let date2 = new Date("June 20 1998 07:15");
let date3 = new Date(1998, 11, 20, 7); //2nd parameter i.e month is 0 indexed  0-jan, 1 feb...
let date4 = new Date(1995, 11, 20, 7);
console.log(date4);
date4.setFullYear(1947);

console.log(date);
// console.log(date1);
console.log(date2);
console.log(date3);
console.log(date4);

console.log(date.getDate());
console.log(date.getMonth());
console.log(date.getUTCDate());
console.log(date.getHours());
console.log(date.getUTCHours());

//Arrays
let numbers = [1, 4, 5, 7];
console.log(numbers);

//to add element in the end
numbers.push(9);
console.log(numbers);

//to add in the begining
numbers.unshift(8);
console.log(numbers);

//To add item in the middle
numbers.splice(2, 0, "a", "b", "c", "d");
console.log(numbers);

//to find the element
console.log(numbers.indexOf("a")); //2
console.log(numbers.indexOf("i")); //-1 when element is not found

console.log(numbers.includes(7)); //return true or false which can be used for conditioninal checks
console.log(numbers.indexOf(0, 3)); //return -1 as it check after index 2 and 0 is present at 1

//includes and index of on reference type
let courses = [
  { no: 1, firstName: "Love" },
  { no: 2, firstName: "Rahul" },
];
console.log(courses.includes({ no: 1, firstName: "Love" })); //return  false because here parameter object and object in teh array has different reference value
console.log(courses.indexOf({ no: 1, firstName: "Love" })); //return -1 as  here parameter object and object in teh array has different reference value

//finding the object in the array using the predicate fuction

let course = courses.find(function (course) {
  return course.firstName === "Love"; //if present it will return the object else will return undefined
});
console.log(course);

//Removing the elemnt from the array

let numbers2 = [1, 2, 3, 4, 5, 6, 7];
console.log(numbers2);

//removing at the end
numbers2.pop();
console.log(numbers2);

//removing in the starting
numbers2.shift();
console.log(numbers2);

//removing in the middle
numbers2.splice(2, 1);
console.log(numbers2);

// Emptying the array
let number3 = [1, 2, 3, 4, 5, 6, 7];
let number4 = number3; //here reference is copied

//1st way- Empty array
//number3=[];// assign to empty array but here number 4 will not be empty and this will get new reference old reference is not deleted

//2nd way-Set let 0 by doing so reference will be cleaned or emptied but will be empty
//number3.length=0;

//3rd way-Using slice ,method
number3.slice(0, number3.length);

console.log(number3, number4);

//Combining and slicing the arrays
let first = [1, 2, 3];
let second = [4, 5, 6];

let combined = first.concat(second);
console.log(combined);

//slicing
let marks = [10, 20, 30, 40, 50, 60, 70, 80, 90];
let sliced = marks.slice(3, 6); //3rd position inclusive and 6th position exclusive

console.log(sliced);

//spread operator

let combined2 = [...first, ...second];
console.log(combined2);

//can  add additional elements too

let combined3 = [...first, "a", ...second, "c"];
console.log(combined3);

//we can use this to create copy too
let combined3Copy = [...combined3];
console.log(combined3Copy);

let arr = [10, 20, 30, 40, 50];

//using for of loop
for (let value of arr) {
  console.log(value);
}

//using for each and call back.
arr.forEach(function (number) {
  console.log(number);
});

//samething can be written using arrow function
arr.forEach((number) => console.log(number));

//joining the array
let numberList = [10, 20, 30, 40, 50];
let joined = numberList.join(",");
console.log(joined);
console.log(typeof joined);

//splittng to form the array
let message2 = "Hi hello namskar";
let combinedArr = message2.split(" ");
console.log(combinedArr);

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

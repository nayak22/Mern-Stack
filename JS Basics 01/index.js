//Line below is used to print the string in the console window through external js
console.log("Namaste Dunia Version  from External JS");

//dynamic behaviour
let a = 5;
console.log(a);

a = "World";
console.log(a);

//Double equality and triple equality
console.log(5 == 5);
console.log(5 === 5);
console.log(5 == "5");
console.log(5 === "5");

//Truty and faly values
//falsey value
console.log(Boolean(undefined));
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(NaN));
console.log(Boolean(false));

//Ternary operator
age = 21;
console.log(age >= 18 ? "Eligible to vote" : "Not Eligible to vote");

//if else if
let marks = 84;
if (marks >= 90) {
  console.log("Grade 'A'");
} else if (marks >= 80) {
  console.log("Grade 'B'");
} else if (marks >= 80) {
  console.log("Grade 'C'");
} else if (marks >= 80) {
  console.log("Grade 'D'");
} else {
  console.log("Grade 'F'");
}

//Switch Statement

let day = "Saturday";
switch (day) {
  case "Monday":
    console.log("Its Monday");
    break;
  case "Tuesday":
    console.log("Its Monday");
    break;
  case "Wednesday":
    console.log("Its Wednesday");
    break;
  case "Thursday":
    console.log("Its Thursday");
    break;
  case "Friday":
    console.log("Its Friday");
    break;
  default:
    console.log("Its weekend");
}

//loops

//For Loops

for (let i = 0; i <= 10; i++) {
  console.log(i);
}

//same with while loop
let i = 11;
while (i <= 20) {
  console.log(i);
  i++;
}

//With do while loop
i = 21;
do {
  console.log(i);
  i++;
} while (i <= 30);

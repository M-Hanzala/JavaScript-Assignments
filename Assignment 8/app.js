// // Question 1
// var character = prompt("Enter a number OR character :" + "\n (For detect Number OR UpperCase OR LowerCase)");

// if (character >= "0" && character <= "9") {
//     alert("The input given is a NUMBER");
// } else if (character >= "A" && character <= "Z") {
//     alert("The input given is UpperCase Letters");
// } else if (character >= "a" && character <= "z") {
//     alert("The input given is LowerCase Letters");
// }



// // Question 2
// var num1 = +prompt("Enter first number for comparing :");
// var num2 = +prompt("Enter second number for comparing :");

// if (num1 > num2) {
//     document.write(num1 + " is Greater");
// } else if (num1 < num2) {
//     document.write(num2 + " is Greater");
// } else {
//     document.write("They are equal");
// }



// // Question 3
// var number = +prompt("Enter a number :");
// if (number < 0) {
// console.log("This number is negative");
// } else if (number > 0) {
//     console.log("This number is positive");
// } else {
//     console.log("This is zero !");
// }



// // Question 4
// var char = prompt("Enter a single character :").toLowerCase();

// if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
//     console.log("True. It's a vowel.");
// } else {
//     console.log("False");
// }



// Question 5
// var pass = 1234567890;
// var askPass = prompt("Enter Password:");

// if (askPass == "") {
//     alert("Please enter password.")
// } else if (askPass == pass) {
//     alert("Correct! The password you entered matches the original password.")
// } else {
//     alert("Wrong Password.")
// }




// // Question 6
// var greeting;
// var hour = 13;
// if (hour < 18) {
//     greeting = "Good Day";
// } else {
//     greeting = "Good Evening";
// }
// // ("The Error is curly brackets before else and after else !!!")



// Question 7
var time = prompt("Enter time in 24 hours clock format like 1900 = 7pm");

if (time >= 0 && time < 1200) {
    console.log("Good Morning");
} else if (time >= 1200 && time < 1700) {
    console.log("Good Afternoon")
} else if (time >= 1700 && time < 2100) {
    console.log("Good Evening")
} else if (time >= 2100 && time <= 2359) {
    console.log("Good Night")
}
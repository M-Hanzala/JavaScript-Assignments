// // Question 1
// var character = prompt("Enter a number OR character :" + "\n (For detect Number OR UpperCase OR LowerCase)");

// if (character >= "0" && character <= "9") {
//     alert("The input given is a NUMBER");
// } else if (character >= "A" && character <= "Z") {
//     alert("The input given is UpperCase Letters");
// } else if (character >= "a" && character <= "z") {
//     alert("The input given is LowerCase Letters");
// }



// Question 2
var num1 = +prompt("Enter first number for comparing :");
var num2 = +prompt("Enter second number for comparing :");

if (num1 > num2) {
    document.write(num1 + " is Greater");
} else if (num1 < num2) {
    document.write(num2 + " is Greater")
} else {
    document.write("They are equal")
}
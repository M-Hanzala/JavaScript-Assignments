// Question 1
function currentDate() {
    var date = new Date();
    return date;
}


// Question 2
function greetUser() {
    var firstName = prompt("Enter your first name:");
    var lastName = prompt("Enter your last name:");
    return alert("WELCOME. " + firstName + " " + lastName);
}


// Question 3
function add2Num(a, b) {
    var sum = a + b;
    return sum;
}


// // Question 4
// function calculator(num1, num2, operator) {
//     if (operator === "+") {
//         return num1 + num2;
//     } else if (operator === "-") {
//         return num1 - num2;
//     } else if (operator === "*") {
//         return num1 * num2;
//     } else if (operator === "/") {
//         return num1 / num2;
//     } else {
//         return "Invalid Operator";
//     }
// }

// var opt = prompt("Enter Operator For Calculate:" + "\n+   ,   -   ,   *   ,   /");
// var n1 = +prompt("Enter first value:");
// var n2 = +prompt("Enter second value:");
// var result = calculator(n1, n2, opt);
// document.write(result);


// // Question 5
// function square(val) {
//     var results = val * val;
//     return results;
// }
// var value = 4;
// console.log(square(value));


// // Question 6
// function factorial(num) {
//     var results = 1;
//     for (var i = 1; i <= num; i++) {
//         results = results * i;
//     }
//     return results;
// }
// var facNum = 5;
// console.log(factorial(facNum));


// // Question 7
// function counting(start, end) {
//     for (var i = start; i <= end; i++) {
//         results = console.log(i);
//     }
//     return results;  
// }
// var countStart = +prompt("Enter starting point of counting:");
// var countEnd = +prompt("Enter ending point of counting:");
// counting(countStart, countEnd);
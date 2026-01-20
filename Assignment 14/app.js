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


// // Question 8
// function calculateHypotenuse(base, perpendicular) {
//     function calculateSquare(num) {
//         return num * num;
//     }
//     var hyp2 = calculateSquare(base) + calculateSquare(perpendicular);
//     var hyp = Math.sqrt(hyp2);
//     return console.log("Hypotenuse = " + hyp);
// }

// var b = prompt("Enter base: ");
// var p = prompt("Enter perpendicular: ");
// calculateHypotenuse(b, p);


// // Question 9
// function calculateArea(width, height) {
//     var area = width * height;
//     return console.log(area);
// }

// calculateArea(5, 10);

// var w = 5;
// var h = 10;
// calculateArea(w, h);


// // Question 10
// function isPalindrome(string) {
//     var reverse = "";
//     for (var i = string.length - 1; i >= 0; i--) {
//         reverse += string[i];
//     }
//     if (string === reverse) {
//         return console.log("Given string is Palindrome");
//     } else {
//         return console.log("Given string is not Palindrome");
//     }
// }

// var str = "madam";
// isPalindrome(str);


// // Question 11
// function titleCase(string) {
//     var words = string.toLowerCase().split(" ");
//     var results = "";

//     for (var i = 0; i < words.length; i++) {
//         results += words[i][0].toUpperCase() + words[i].slice(1) + " ";
//     }
//     return results;
// }

// var str = "my name is hanzala";
// console.log(
//     titleCase(str)
// );


// // Question 12
// function longestWord(sentence) {
//     var words = sentence.split(" ");
//     var longestWord = "";

//     for (var i = 0; i < words.length; i++) {
//         if (words[i].length > longestWord.length) {
//             longestWord = words[i];
//         }
//     }
//     return longestWord;
// }

// var str = "Web Development Tutorial";
// console.log(
//     longestWord(str)
// );
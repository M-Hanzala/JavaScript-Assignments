// Question 1
var arr1 = [
    [],
    []
];


// Question 2
var arr2 = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
];


// // Question 3
// for (var i = 1; i <= 10; i++) {
//     console.log(i);
// };


// // Question 4
// var tabelNum = +prompt("Enter the Table Number:");
// var tableLength = +prompt("Enter the Length of Table you want:");

// for (var i = 1; i <= tableLength; i++) {
//     var result = tabelNum * i;
//     document.write(
//         tabelNum + " x " + i + " = " + result + "<br>"
//     );
// }


// // Question 5
// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

// for (var i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
//     document.write(
//         "Element at index " + i + " is " + fruits[i] + "<br>"
//     );

// };



// // Question 6
// document.write("Counting:" + "<br><br>");
// for (var i = 1; i <= 15; i++) {
//     document.write(
//         i + ", "
//     )
// };

// document.write("<br><br>" + "Reverse Counting:" + "<br><br>");
// for (var i = 10; i >= 1; i--) {
//     document.write(
//         i + ", "
//     )
// };

// document.write("<br><br>" + "Even:" + "<br><br>");
// for (var i = 0; i <= 20; i = i+2) {
//     document.write(
//         i + ", "
//     )
// };

// document.write("<br><br>" + "Odd:" + "<br><br>");
// for (var i = 1; i <=20; i = i+2) {
//     document.write(
//         i + ", "
//     )
// };

// document.write("<br><br>" + "Series:" + "<br><br>");
// for (var i = 2; i <= 20; i = i+2) [
//     document.write(
//         i + "k, "
//     )
// ];



// // Question 7
// var whatUWant = prompt("Welcome to Bakery. What do you want to order ?");

// var bakery = ["cake", "cookie", "biscuits", "patties", "chips", "brownie"];
// var found = false;

// for (var i = 0; i < bakery.length; i++) {
//     if (whatUWant === bakery[i]) {
//         alert(whatUWant + " is available at index " + i + " in our Bakery.");
//         found = true;
//         break;
//     }
// };
// if (found === false) {
//     alert("We are sorry. " + whatUWant + " is not available in our bakery.");
// }


// // Question 8
// var num = [24, 53, 78, 91, 12];
// var largest = num[0];

// for (var i = 0; i < num.length; i++) {
//     if(num[i] > largest) {
//         largest = num[i];
//     }
// };
// console.log(largest);


// // Question 9
// var number = [24, 53, 78, 91, 12];
// var smallest = number[0];

// for (var i = 0; i < number.length; i++) {
//     if(number[i] < smallest) {
//         smallest = number[i];
//     }
// };
// console.log(smallest);


// // Question 10
// for (var i = 5; i <= 100; i = i+5) {
//     document.write(
//         i + ", "
//     )
// };
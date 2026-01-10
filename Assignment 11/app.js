// // Question 1
// var firstName = prompt("Enter First Name:");
// var lastName = prompt("Enter Last Name:");
// var fullName = firstName + lastName;
// alert("Welcome " + fullName);


// // Question 2
// var favMobile = prompt("Enter your favourite mobile phone:");
// document.write(
//     "My favourite phone is: " + favMobile + "<br>" +
//     "Length of strings: " + favMobile.length
// )


// // Question 3
// var nationality = "Pakistani";
// document.write(
//     "String: " + nationality + "<br>" +
//     "Index of 'n': " + nationality.indexOf('n')
// )


// // Question 4
// var greet = "Hello World";
// document.write(
//     "String: " + greet + "<br>" +
//     "Last index of 'l': " + greet.lastIndexOf('l')
// )


// Question 5
// var nationality = "Pakistani";
// document.write(
//     "String: " + nationality + "<br>" +
//     "Char at Index 3: " + nationality.charAt(3)
// )


// // Question 6
// var firstName = prompt("Enter First Name:");
// var lastName = prompt("Enter Last Name:");
// var fullName = firstName.concat(" ", lastName);
// alert("Welcome " + fullName);


// // Question 7
// var city = "Hyderabad";
// document.write(
//     "City: " + city + "<br>" +
//     "After replacement: " + city.replace("Hyder" , "Islam")
// )


// // Question 8
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var replace = message.replace(/and/g , "&");
// document.write(
//     "String: " + message + "<br>" +
//     "After replacement: " + replace
// )


// // Question 9
// var str = "472";
// console.log(str , typeof(str));

// var num = +str; 
// console.log(num , typeof(num));


// // Question 10
// var input = prompt("Enter any lowercase input:");
// document.write(
//     "User Input: " + input + "<br>" +
//     "Upper Case: " + input.toUpperCase()
// )


// // Question 11
// var input = prompt("Enter any Character:");

// var firstChar = input[0].toUpperCase();
// var restChars = input.slice(1).toLowerCase();

// var titleCase = firstChar + restChars;

// document.write(
//     "User Input: " + input + "<br>" +
//     "Title Case: " + titleCase
// )


// // Question 12
// var num = 35.36;
// var str = num.toString();
// var str = str.replace("." , "");
// document.write(
//     "Number: " + num + "<br>" +
//     "Result: " + str
// )


// // Question 13
// var userName = prompt("Enter your name:");
// for (var i = 0; i < userName.length; i++) {
//     if (userName.charCodeAt(i) === 33 || userName.charCodeAt(i) === 44 ||
//         userName.charCodeAt(i) === 46 || userName.charCodeAt(i) === 64) {
//         alert("Please enter a valid username");
//         break;
//     }
// }


// // Question 14
// var bakery = ["cake", "cookie", "biscuit", "brownie", "chips", "patties", "chocolate"];
// var order = prompt("Welcome to ABC Bakery. What do you want to order?").toLowerCase();
// var found = false;
// for (var i = 0; i < bakery.length; i++) {
//     if (order === bakery[i]) {
//         alert(order + " is available at index " + i + " in our bakery.");
//         found = true;
//         break;
//     }
// }
// if (found == false) {
// alert("We are sorry, " + order + " is not available in our bakery.");
// }



// // Question 15
// var password = prompt("Enter password:");

// var alphabetFound = false;
// var numberFound = false;
// var isStartWithNum = false;
// var is6CharLong = false;

// for (var i = 0; i < password.length; i++) {
//     if (password[i] >= "A" || password[i] <= "Z") {
//         alphabetFound = true;
//     }

//     if (password[i] >= 0 && password[i] <= 9) {
//         numberFound = true;
//     }
// }

// if (password[0] >= 0 && password[0] <= 9) {
//     isStartWithNum = true;
// }

// if (password.length > 5) {
//     is6CharLong = true;
// }

// if (alphabetFound == true && numberFound == true && isStartWithNum == false && is6CharLong == true) {
//     alert("Login Successfull");
// } else {
//     alert("Please enter a valid password" +
//         "\n1. Password should contains alphabets & numbers" +
//         "\n2. Password should not start with a number" +
//         "\n3. Password must atleast 6 characters long"
//     );
// }


// // Question 16
// var university = "University Of Karachi";
// var split = university.split("");
// for (var i = 0; i < university.length; i++) {
//     document.write(
//         university[i] + "<br>"
//     );
// }


// // Question 17
// var userInput = "Pakistan";
// var lastChar = userInput[userInput.length-1];

// document.write(
//     "User Input: " + userInput + "<br>" +
//     "Last Character Of Input: " + lastChar
// )



// Question 18
var str = "The quick brown fox jumps over the lazy dog".toLowerCase();
var sentence = str.split(" ");
var count = 0;

for (var i = 0; i < str.length; i++) {
    if (sentence[i] == "the") { 
        count++;         
    }
}

document.write(
    "Text: " + str + "<br>" +
    "Number of occurrence(s) of word 'the': " + count
)
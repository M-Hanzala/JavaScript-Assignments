// // Question 1
// var city = prompt("Enter Your City Name :", "Karachi");
// if (city == "Karachi") {
//     alert("Welcome to city of lights");
// }


// // Question 2
// var gender = prompt("Enter Your Gender :");
// if (gender == "Male") {
//     alert("Good Morning Sir !");
// }
// else if (gender == "Female") {
//     alert("Good Morning Ma'am !");
// }
// else {
//     alert("Gender nahi hai kya 😂 !");
// }


// // Question 3
// var signalRed = "Must Stop";
// var signalYellow = "Ready To Move";
// var signalGreen = "Move Now";

// var signal = prompt("Enter Traffic Signal Color :");
// if (signal == "Red") {
//     alert(signalRed);
// }
// else if (signal == "Yellow") {
//     alert(signalYellow);
// }
// else if (signal == "Green") {
//     alert(signalGreen);
// }


// // Question 4
// var fuel = prompt("Enter Your's Remaining Fuel In Car :\n" + "Enter numbers in ltr's");
// if (fuel <= 0.25) {
//     alert("It's low, Please refill the fuel in your car.")
// }



// Question 5

// a. given condition for variable a is true
// b. nothing
// c. condition 1 & 3 (nothing work) , condition 2 & 4 (prints alerts)
// d. The cost equals
// e. Prints "True"
// f. car is smaller than cat



// // Question 6
// var totalMarks = 300;
// var marksObtained = prompt("Enter Your Obtained Marks In 3 Subjects From 300 :");
// var percentage = marksObtained/totalMarks * 100;
// var grade;
// var remarks;

// if (percentage >= 80) {
//     grade = "A1";
//     remarks = "Excellent";
// }
// else if (percentage >= 70) {
//     grade = "A";
//     remarks = "Good";
// }
// else if (percentage >= 60) {
//     grade = "B";
//     remarks = "You Need To Improve";
// }
// else if (percentage < 60) {
//     grade = "Fail";
//     remarks = "Sorry";
// }
// else {
//     alert("Danday 🔪 Khanay Ke Liye Ready Rahoo !")
// }

// document.write("<h1>Marks Sheet</h1>")
// document.write(
//     "Total Marks : " + totalMarks + "<br>" +
//     "Marks Obtained : " + marksObtained + "<br>" +
//     "Percentage : " + percentage + "%" + "<br>" +
//     "Grade : " + grade + "<br>" +
//     "Remarks : " + remarks 
// )



// // Question 7
// var secretNumber = 3;
// var guess = +prompt("Guess the secret number in the range of 1 - 10 :")

// if (guess === secretNumber) {
//     alert("Bingo! Correct Answer")
// }
// else if ( guess === secretNumber+1) {
//     alert("Close enough to the correct answer.")
// }
// else {
//     alert("Try Again")
// }



// // Question 8
// var numDivBy3 = +prompt("Enter a number :")
// if (numDivBy3 % 3 === 0) {
//     alert(numDivBy3 + " is divisible by 3")
// } else {
//     alert(numDivBy3 + " is not divisible by 3")
// }




// // Question 9 
// var num = +prompt("Enter a number :")

// if (num % 2 === 0) {
//     alert(num + " is an even number!")
// } else {
//     alert(num + " is an odd number!")
// }




// // Question 10
// var temprature = prompt("Enter the temprature (In Number)")
// if (temprature >= 40) {
//     alert("It's too hot outside.")
// } else if (temprature >= 30) {
//     alert("The weather today is normal.")
// } else if (temprature >= 20) {
//     alert("Today's weather is cool.")
// } else if (temprature >= 10 || temprature < 10) {
//     alert("OMG! Today's weather is so cool.")
// }




// Question 11
document.write("<h1>Calculator</h1>")

var firstNum = +prompt("Enter first number :");
var secondNum = +prompt("Enter second number:");
var operation = prompt("Select Operation :" + "\n + , - , * , / , %");

if (operation == "+") {
    var result = firstNum + secondNum;
    document.write("The sum of " + firstNum + " and " + secondNum + " is " + result);
} else if (operation == "-") {
    var result = firstNum - secondNum;
    document.write("The subtraction of " + firstNum + " and " + secondNum + " is " + result);
} else if (operation == "*") {
    var result = firstNum * secondNum;
    document.write("The multiplication of " + firstNum + " and " + secondNum + " is " + result);
} else if (operation == "/") {
    var result = firstNum / secondNum;
    document.write("The division of " + firstNum + " and " + secondNum + " is " + result);
} else if (operation == "%") {
    var result = firstNum % secondNum;
    document.write("The modulus of " + firstNum + " and " + secondNum + " is " + result);
} else {
    document.write("Invalid Operation !");
} 
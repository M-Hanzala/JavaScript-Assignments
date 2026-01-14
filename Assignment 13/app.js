// // Question 1
// var currentDate = new Date();
// console.log(currentDate);


// // Question 2
// var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// var now = new Date().getMonth();
// var nameOfMonth = months[now];
// alert("Current Month: " + nameOfMonth);


// // Question 3
// var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// var dayNow = new Date().getDay();
// var nameOfDays = days[dayNow];
// var shortDay = nameOfDays.slice(0 , 3);
// alert("Today is " + shortDay);


// // Question 4
// var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// var dayNow = new Date().getDay();
// var dayName = days[dayNow];
// if (dayName === "Sunday" || dayName === "Saturday") {
//     alert("It's Fun Day 🎉")
// } else {
//     alert("Kaam Pe Jao ! 😢")
// }


// // Question 5
// var date = new Date().getDate();
// if (date < 16) {
//     alert("First fifteen days of the month");
// } else {
//     alert("Last days of the month");
// }


// // Question 6
// var dateNow = new Date();
// var milliSec = dateNow.getTime();
// minutes = Math.floor(dateNow.getTime() / (1000 * 60));
// document.write(
//     "Current Date: " + dateNow + "<br>" +
//     "Elapsed milliseconds since January 1, 1970: " + milliSec + "<br>" +
//     "Elapsed minutes since January 1, 1970: " + minutes
// );


// // Question 7
// var hours = new Date().getHours();
// if (hours < 12) {
//     alert("It's AM");
// } else {
//     alert("It's PM")
// }


// // Question 8
// var laterDate = new Date(2020, 11, 31);
// console.log(laterDate);


// // Question 9
// var dateRamzan = new Date(2025, 1, 28);
// var today = new Date();

// var diffInMilliSec = today.getTime() - dateRamzan.getTime();
// var diffInDays = Math.floor(diffInMilliSec / (1000 * 60 * 60 * 24));
// alert(diffInDays + " days have passed since 1st Ramzan, 2025");


// // Question 10
// var refDate = new Date(2026, 0, 13);
// var beginYear = new Date(2026, 0, 1);

// var diffInMs = refDate.getTime() - beginYear.getTime();
// var diffInSec = diffInMs / 1000;

// document.write(
//     "On reference date " + refDate + ", " + diffInSec + " seconds had passed since beginning of 2026"
// );


// // Question 11
// var currentDate = new Date();
// var hours = currentDate.getHours();
// currentDate.setHours(hours + 1);
// document.write(
//     "Current Date: " + currentDate + "<br>" 
// );
// currentDate.setHours(hours);
// document.write(
//     "1 hour ago, it was " + currentDate
// );


// // Question 12
// var now = new Date();
// var yearGet = now.getFullYear();
// document.write("Current Date: " + now + "<br>");

// now.setFullYear(yearGet - 100);
// document.write("100 years back, it was " + now);


// // Question 13
// var age = +prompt("Enter your age:");
// var now = new Date();
// var getYear = now.getFullYear();
// now.setFullYear(getYear - age);

// document.write(
//     "Your age is " + age + "<br>" + 
//     "Your birth year is " + now.getFullYear()
// );


// Question 14
var customerName = "ABC Customer";
var now = new Date();
var monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var month = monthName[now.getMonth()];
var numberOfUnits = 410;
var chargesPerUnit = 16;
var lateCharges = 350;
var dueDate = new Date();
dueDate.setDate(10);
var date = dueDate.getDate();
var year = dueDate.getFullYear();

var netAmount = numberOfUnits * chargesPerUnit;
var grossAmount = netAmount + lateCharges;

document.write(
    "<h1>K-Electric Bill</h1>" + "<br>" +

    "Customer Name: " + customerName + "<br>" +
    "Month: " + month + "<br>" +
    "Number Of Units: " + numberOfUnits + "<br>" +
    "Charges Per Unit: " + chargesPerUnit + "<br><br>" +

    "Due Date: " + date + " / " + month.slice(0 , 3) + " / " + year + "<br>" +
    "Net Amount Payable (within due date): " + netAmount + "<br>" +
    "Late Payment Charges: " + lateCharges + "<br>" +
    "Gross Amount Payable (after due date): " + grossAmount
);
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


// Question 10
var refDate = new Date(2026, 0, 13);
var beginYear = new Date(2026, 0, 1);

var diffInMs = refDate.getTime() - beginYear.getTime();
var diffInSec = diffInMs / 1000;

document.write(
    "On reference date " + refDate + ", " + diffInSec + " seconds had passed since beginning of 2026"
);
// // Question 1
// var studentsLit = [];

// // Question 2
// var studentsObj = [];

// Question 3
var strings = ["AbuBakar", "Umer", "Usman", "Ali"];

// Question 4
var numbers = [1, 2, 3, 4, 5];

// Question 5
var boolean = [true, false];

// Question 6
var mixed = ["Hanzala", 18, true, "Yaseen", 3, false];

// // Question 7
// var qualificationInPk = ["SSC", "HSC", "BSC", "BS", "BCOM", "MS", "M.Phil.", "PhD"];
// document.write(
//     "<h1>Qualifications:<h1/>" + "<br><br>" +
//     "1. " + qualificationInPk[0] + "<br>" +
//     "2. " + qualificationInPk[1] + "<br>" +
//     "3. " + qualificationInPk[2] + "<br>" +
//     "4. " + qualificationInPk[3] + "<br>" +
//     "5. " + qualificationInPk[4] + "<br>" +
//     "6. " + qualificationInPk[5] + "<br>" +
//     "7. " + qualificationInPk[6] + "<br>" +
//     "8. " + qualificationInPk[7] + "<br>" 
// );


// // Question 8
// var names = ["Sami", "Aammad", "Umer"];
// var score = [400, 460, 350];
// var totalMarks = 500;

// var percentageStd1 = score[0]*100/totalMarks;
// var percentageStd2 = score[1]*100/totalMarks;
// var percentageStd3 = score[2]*100/totalMarks;

// document.write(
//     "Score of " + names[0] + " is " + score[0] + " Percentage Is: " + percentageStd1 + "<br>" +
//     "Score of " + names[1] + " is " + score[1] + " Percentage Is: " + percentageStd2 + "<br>" +
//     "Score of " + names[2] + " is " + score[2] + " Percentage Is: " + percentageStd3 
// )


// // Question 9
// var colorNames = ["blue"];
// document.write(colorNames + "<br><br>");
// var addBeginnig = prompt("Enter what color you wants to add to the beginnig:");
// colorNames.unshift(addBeginnig);
// document.write(colorNames + "<br><br>");

// var addEnding = prompt("Enter what color you wants to add to the end:");
// colorNames.push(addEnding);
// document.write(colorNames + "<br><br>");

// colorNames.unshift("red", "green");
// document.write(colorNames + "<br><br>");

// colorNames.shift();
// document.write(colorNames + "<br><br>");

// colorNames.pop();
// document.write(colorNames + "<br><br>");

// colorNames.splice(1, 0, "purple");
// document.write(colorNames + "<br><br>");

// colorNames.splice(0, 2);
// document.write(colorNames + "<br><br>");


// Question 10
var scoreOfStd = [320, 230, 480, 120];
scoreOfStd.sort();

console.log(scoreOfStd);


// Question 11
var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
var selectedCities = cities.slice(2, 4);

console.log(selectedCities);


// Question 12
var arr = ["This", "is", "my", "cat"];
var str = arr.join(" ");
console.log(str);


// // Question 13
// var emptyArr = [];
// emptyArr.push("keyboard");
// emptyArr.push("mouse");
// emptyArr.push("printer");
// emptyArr.push("monitor");

// document.write(
//     "Devices:" + "<br><br>" +
//     emptyArr + "<br><br>"
// )

// document.write("Out    " + emptyArr[0] + "<br>")
// emptyArr.shift();

// document.write("Out    " + emptyArr[1] + "<br>")
// emptyArr.shift();

// document.write("Out    " + emptyArr[2] + "<br>")
// emptyArr.shift();

// document.write("Out    " + emptyArr[3] + "<br>")
// emptyArr.shift();



// //Question 14
// var emptyArr = [];
// emptyArr.push("keyboard");
// emptyArr.push("mouse");
// emptyArr.push("printer");
// emptyArr.push("monitor");

// document.write(
//     "Devices:" + "<br><br>" +
//     emptyArr + "<br><br>"
// )

// document.write("Out    " + emptyArr[3] + "<br>")
// emptyArr.pop();

// document.write("Out    " + emptyArr[2] + "<br>")
// emptyArr.pop();

// document.write("Out    " + emptyArr[1] + "<br>")
// emptyArr.pop();

// document.write("Out    " + emptyArr[0] + "<br>")
// emptyArr.pop();


// Question 15
var phManufactures = ["Apple", "Samsung", "Nokia", "Motrolla", "Sony"]

document.write(
    "<select>" +
    "<option>" + phManufactures[0] + "</option>" +
    "<option>" + phManufactures[1] + "</option>" +
    "<option>" + phManufactures[2] + "</option>" +
    "<option>" + phManufactures[3] + "</option>" +
    "<option>" + phManufactures[4] + "</option>" +
    "</select>"
)


 
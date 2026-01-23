// // Question 1
// function power(a, b) {
//     var pow = Math.pow(a, b);
//     return pow;
// }
// console.log(
//     power(5, 10)
// );


// // Question 2
// function detLeapYear(year) {
//     if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
//         alert(year + " is a leap year");
//     } else {
//         alert(year + " is not a leap year");
//     }
// }

// var y = +prompt("Enter Year:");
// detLeapYear(y);


// // Question 3
// function areaOfTriangle(a, b, c) {
//     var S = (a + b + c) / 2;
//     var area = S * (S - a) * (S - b) * (S - c);
//     return console.log("Area of triangle is " + area);
// }

// areaOfTriangle(10, 15, 8);


// // Question 4
// function averageFun(obtMarksSub1, obtMarksSub2, obtMarksSub3, numOfSub) {
//     var total = obtMarksSub1 + obtMarksSub2 + obtMarksSub3;
//     var average = total / numOfSub;
//     var prettyavg = average.toFixed(2);
//     return prettyavg;
// }

// function percentageFun(totMarks, obtMarks) {
//     var percentage = (obtMarks / totMarks) * 100;
//     var prettyper = percentage.toFixed(2);
//     return prettyper;
// }

// function mainResultFun() {
//     var res = console.log("You obtained " + obtainedMarks + " from " + totalMarks);
//     var per = console.log("Percentage is " + percentageFun(totalMarks, obtainedMarks));
//     var avg = console.log("Average is " + averageFun(obtainedMarks1, obtainedMarks2, obtainedMarks3, numOfSubjects));

//     return res, per, avg
// }

// var numOfSubjects = 3;
// var totalMarks = 300;
// var obtainedMarks1 = 80;
// var obtainedMarks2 = 60;
// var obtainedMarks3 = 92;
// var obtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
// mainResultFun();


// // Question 5
// function findIndex(variable, letter) {
//     for (var i = 0; i < variable.length; i++) {
//         if (letter == variable[i]) {
//             var indexOf = console.log(i);
//             return indexOf;
//         }
//     }
// }

// var str = "My name is Hanzala";
// findIndex(str, "z");


// // Question 6
// function delVowels(sentence) {
//     var result = "";
//     var ch = sentence.toLowerCase();
//     for (var i = 0; i < sentence.length; i++) {
//         if (ch[i] !== "a" && ch[i] !== "e" &&
//             ch[i] !== "i" && ch[i] !== "o" &&
//             ch[i] !== "u"
//         ) {
//             result += sentence[i];
//         }
//     }
//     return result;
// }

// var str = "My Name Is Hanzala. Abeliolu";
// console.log(
//     delVowels(str)
// );


// // Question 7
// function countVowelPairs(sentence) {
//     var count = 0;
//     sentence = sentence.toLowerCase();

//     for (var i = 0; i < sentence.length - 1; i++) {
//         var pair = sentence[i] + sentence[i + 1];

//         switch (pair) {
//             case "aa": case "ae": case "ai": case "ao": case "au":
//             case "ea": case "ee": case "ei": case "eo": case "eu":
//             case "ia": case "ie": case "ii": case "io": case "iu":
//             case "oa": case "oe": case "oi": case "oo": case "ou":
//             case "ua": case "ue": case "ui": case "uo": case "uu":

//                 count++;
//                 break;
//         }
//     }
//     return count;
// }

// var str = "Pleases read this application and give me gratuity";
// console.log(countVowelPairs(str));


// // Question 8
// function kmToMeter(kmValue) {
//     var km = kmValue;
//     var meter = km * 1000;
//     return meter;
// }

// function kmToFeet(kmValue) {
//     var km = kmValue;
//     var feet = km * 3280.84;
//     return feet;
// }

// function kmToInches(kmValue) {
//     var km = kmValue;
//     var cm = km * 100000;
//     var inches = cm / 2.54;
//     return inches.toFixed(2);
// }

// function kmToCentimeter(kmValue) {
//     var km = kmValue;
//     var cm = km * 100000;
//     return cm;
// }

// var kilometer = prompt("Enter the distance between two cities in Kilometer:");
// console.log(
//     kilometer + "km is equal to " +
//     kmToCentimeter(kilometer) + "cm"
// );


// // Question 9
// function calOvertimePay(hours) {
//     var workHour = 40;
//     var payPerHr = 12;

//     if (hours > workHour) {
//         var overtimeHr = hours - workHour;
//         var overtimePay = overtimeHr * payPerHr;
//     }
//     return overtimePay;
// }

// var empHours = prompt("Enter your total working hours." + "\nRemember hours should not be in fractional part.");
// console.log(
//     "Your overtime pay is " + calOvertimePay(empHours) + " as Rs.12 per hour."
// );


// Question 10
function cashierNotesDenomination(amount) {
    var remainingAmount;
    var hundredNotes = Math.floor(amount / 100);
    remainingAmount = amount % 100;

    var fiftyNotes = Math.floor(remainingAmount / 50);
    remainingAmount = remainingAmount % 50;

    var tenNotes = Math.floor(remainingAmount / 10);

    // These conditions are just for my practice and grip on if else conditions! Not for question.
    if (hundredNotes > 0 && fiftyNotes > 0 && tenNotes > 0) {
        document.write(
            "You will have " + hundredNotes + " hundred notes " +
            fiftyNotes + " fifty notes " + tenNotes + " ten notes."
        )
    } else if (hundredNotes == 0 && fiftyNotes > 0 && tenNotes == 0) {
        document.write(
            "You will have " + fiftyNotes + " fifty notes."
        )
    } else if (hundredNotes == 0 && fiftyNotes == 0 && tenNotes > 0) {
        document.write(
            "You will have " + tenNotes + " ten notes."
        )
    } else if (fiftyNotes == 0 && tenNotes == 0) {
        document.write(
            "You will have " + hundredNotes + " hundred notes."
        )
    } else if (fiftyNotes > 0 && tenNotes == 0) {
        document.write(
            "You will have " + hundredNotes + " hundred notes " +
            fiftyNotes + " fifty notes."
        )
    } else if (fiftyNotes == 0 && tenNotes > 0) {
        document.write(
            "You will have " + hundredNotes + " hundred notes " +
            tenNotes + " ten notes."
        )
    } else if (hundredNotes == 0 && fiftyNotes > 0 && tenNotes > 0) {
        document.write(
            "You will have " + fiftyNotes + " fifty notes " +
            tenNotes + " ten notes."
        )
    }
}

var withdrawl = +prompt("Enter amount to withdraw:");
cashierNotesDenomination(withdrawl);
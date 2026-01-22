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


// Question 7
function countVowelPairs(sentence) {
    var count = 0;
    sentence = sentence.toLowerCase();

    for (var i = 0; i < sentence.length - 1; i++) {
        var pair = sentence[i] + sentence[i + 1];

        switch (pair) {
            case "aa": case "ae": case "ai": case "ao": case "au":
            case "ea": case "ee": case "ei": case "eo": case "eu":
            case "ia": case "ie": case "ii": case "io": case "iu":
            case "oa": case "oe": case "oi": case "oo": case "ou":
            case "ua": case "ue": case "ui": case "uo": case "uu":

                count++;
                break;
        }
    }
    return count;
}

var str = "Pleases read this application and give me gratuity";
console.log(countVowelPairs(str));
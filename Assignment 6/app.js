// var num = 5;
// var newNum = ++a ;

// console.log(a)
// console.log(newNum)

// // Question 1
// var a = 10;
// document.write(
//     "Result: " + "<br><br>" +
//     "The value of a is = " + a + "<br>" +
//     "---------------------------------------" + "<br><br>" 
// )

// // ++a
// document.write(
//     "The value of ++a is = " + ++a + "<br>" +
//     "Now the value of a is = " + a + "<br><br>"
// )

// // a++
// document.write(
//     "The value of a++ is = " + a++ + "<br>" +
//     "Now the value of a is = " + a + "<br><br>"
// )

// // --a
// document.write(
//     "The value of --a is = " + --a + "<br>" +
//     "Now the value of a is = " + a + "<br><br>"
// )

// // a--
// document.write(
//     "The value of a-- is = " + a-- + "<br>" +
//     "Now the value of a is = " + a + "<br><br>"
// )


// Question 2
// var a = 2 , b = 1;
// var result = --a - --b + ++b + b--;

// Explain the output at each stage
// "--a ="   // a becomes 1, prints 1
// "--b ="   // b becomes 0, prints 0
// "++b ="   // b becomes 1, prints 1
// "b-- ="   // prints 1, then b becomes 0

// document.write(
//     "A is => " + a + "<br>" +
//     "B is => " + b + "<br>" +
//     "The result is => " + result 
// )


// // Question 3
// var userName = prompt("Enter Your Good Name")
// var message = "Thanks, "
// var banger = "!"
// var customMess= message + userName + banger
// alert(customMess)


// // Question 4
// var num = prompt("Enter a number which table you wants :" , "5") || 5;

// document.write(
//     num + " x  1 = " + num*1 + "<br>" +
//     num + " x  2 = " + num*2 + "<br>" +
//     num + " x  3 = " + num*3 + "<br>" +
//     num + " x  4 = " + num*4 + "<br>" +
//     num + " x  5 = " + num*5 + "<br>" +
//     num + " x  6 = " + num*6 + "<br>" +
//     num + " x  7 = " + num*7 + "<br>" +
//     num + " x  8 = " + num*8 + "<br>" +
//     num + " x  9 = " + num*9 + "<br>" +
//     num + " x  10 = " + num*10
// )


// Question 5
var sub1 = "English"
var sub2 = "Urdu"
var sub3 = "Maths"
var totalMarks = 100

var obtMarkSub1 = +prompt("Enter Your Obtained Marks Of " + sub1 , "100")
var obtMarkSub2 = +prompt("Enter Your Obtained Marks Of " + sub2 , "100")
var obtMarkSub3 = +prompt("Enter Your Obtained Marks Of " + sub3 , "100")

var totalSubMarks = totalMarks*3
var totalObtMarks = obtMarkSub1 + obtMarkSub2 + obtMarkSub3
var percentage = (totalObtMarks/totalSubMarks)*100

document.write("<pre>")
document.write(
    "Subject   Total    Obt Marks\n" + "<br>" +
    sub1+"    "+totalMarks+"       "+obtMarkSub1 + "<br>" +
    sub2+"       "+totalMarks+"       "+obtMarkSub2 + "<br>" +
    sub3+"      "+totalMarks+"       "+obtMarkSub3 + "<br>" +
    "------------------------------" + "<br>" +
    "Total      " + totalSubMarks + "       " + totalObtMarks + "<br>" +
    "Percentage " + "          " + percentage + "%"
)
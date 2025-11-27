// // Question 1 & 2

// // Addition
// var aNum1 = 3
// var aNum2 = 5
// var aNewNum = aNum1+aNum2

// document.write("Sum of " + aNum1 + " and " + aNum2 + " is " + aNewNum + "<br><br>")

// // Subtraction
// var sNum1 = 5
// var sNum2 = 3
// var sNewNum = sNum1-sNum2
// document.write("Difference of " + sNum1 + " and " + sNum2 + " is " + sNewNum + "<br><br>")

// // Multiplication
// var mNum1 = 3
// var mNum2 = 5
// var mNewNum = mNum1*mNum2
// document.write("Product of " + mNum1 + " and " + mNum2 + " is " + mNewNum + "<br><br>")

// // Division
// var dNum1 = 9
// var dNum2 = 3
// var dNewNum = dNum1/dNum2
// document.write("Quotient of " + dNum1 + " by " + dNum2 + " is " + dNewNum + "<br><br>")

// // Modulus
// var rNum1 = 13
// var rNum2 = 2
// var rNewNum = rNum1%rNum2
// document.write("Remainder of " + rNum1 + " by " + rNum2 + " is " + rNewNum)

// // Question 3

// var x;
// document.write("Value after variable declaration is = undefined" + "<br>")

// x = 5;
// document.write("Initial value = " + x + "<br>")

// x ++;
// document.write("Value after increment is = " + x + "<br>")

// x = x+7;
// document.write("Value after addition is = " + x + "<br>")

// x --;
// document.write("Value after decrement is = " + x + "<br>")

// x = x%3;
// document.write("The remainder is = " + x )

// // Question 4

// var ticketPrice = 600
// var asking = prompt("How many Movie Tickets do you want ?")

// var totalCost = ticketPrice*asking

// document.write("Total cost to buy " + asking + " tickets to a movie is " + totalCost + " PKR.")

// // Question 5
// var table = 5

// document.write("Table of  " + table + "<br><br>")

// document.write(table + "  x 1 = " + (table * 1) + "<br>");
// document.write(table + "  x 2 = " + (table * 2) + "<br>");
// document.write(table + "  x 3 = " + (table * 3) + "<br>");
// document.write(table + "  x 4 = " + (table * 4) + "<br>");
// document.write(table + "  x 5 = " + (table * 5) + "<br>");
// document.write(table + "  x 6 = " + (table * 6) + "<br>");
// document.write(table + "  x 7 = " + (table * 7) + "<br>");
// document.write(table + "  x 8 = " + (table * 8) + "<br>");
// document.write(table + "  x 9 = " + (table * 9) + "<br>");
// document.write(table + "  x 10 = " + (table * 10) + "<br>");

// // Question 6

// var celsiusTemprature = prompt("Give Fahrenheit Temprature For Celsius Temprature :")
// var C = (celsiusTemprature - 32) * 5 / 9

// var fahrenheitTemprature = prompt("Give Celsius Temprature For Fahrenheit Temprature :")
// var F = (fahrenheitTemprature * 9 / 5) + 32

// document.write(celsiusTemprature + "F is " + C + "C." + "<br><br>")
// document.write(fahrenheitTemprature + "C is " + F + "F.")

// // Question 7
// document.write("Shooping Cart" + "<br><br><br>")

// var item1Price = 650
// var item2Price = 100
// var qtyOfItem1 = 3
// var qtyOfItem2 = 7
// var shippingCharges = 150

// document.write(
//     "Price of item1 is " + item1Price + "<br>" +
//     "Quantity of item1 is " + qtyOfItem1 + "<br>" +
//     "Price of item2 is " + item2Price + "<br>" +
//     "Quantity of item2 is " + qtyOfItem2 + "<br>" +
//     "Shipping Charges " + shippingCharges + "<br><br>"
// )

// var totalCost = (item1Price*qtyOfItem1) + (item2Price*qtyOfItem2) + (shippingCharges)
// document.write("Total cost of your order is " + totalCost) 


// // Question 8
// var totalMarks = 550
// var obtainedMarks = prompt("Enter Your Obtained Marks...\nOutof 550:")
// var percentage = obtainedMarks*100/totalMarks

// document.write(
//     "Total Marks : " + totalMarks + "<br>" +
//     "Obtained Marks : " + obtainedMarks + "<br><br>" +
//     "Your Percentage Is : " + percentage + "%"
// )


// // Question 9
// document.write("Currency into PKR")

// var usd = prompt("Enter Your US Dollar Amount :")
// var sar = prompt("Enter Your Saudi Riyal Amount :")

// // Exchange Rates
// var usdToPkr = usd*282.57;
// var sarToPkr = sar*75.17; 
// var totalCurrencyInPkr = usdToPkr+sarToPkr

// document.write(
//     "Your US Dollar Into Pkr = " + usdToPkr + "<br>" +
//     "Your Saudi Riyal Into Pkr = " + sarToPkr + "<br><br>" +

//     "Total Currency In Pkr = " + totalCurrencyInPkr
// )


// // Question 10
// var initValue = 3
// var doingArithemetic = initValue + 5 * 10 / 2

// // Question 11
// document.write("Age Calculator" + "<br><br>")

// var currentYear = prompt("Enter Current Year :")
// var birthYear = prompt("Enter Your Birth Year :")
// var ageIs = currentYear - birthYear

// document.write(
//     "Current Year Is : " + currentYear + "<br>" +
//     "Birth Year Is : " + birthYear + "<br><br>" +
    
//     "Your Age Is : " + ageIs
// )

// // Question 12
// document.write("The Geometrizer" + "<br><br>")

// var r = 20
// var circumOfCircle = 2*(3.142)*r
// var areaOfCircle = (3.142)*r*2

// document.write(
//     "Radius Of Circle : " + r + "<br>" +
//     "The Circumference is : " + circumOfCircle + "<br>" +
//     "The Area is : " + areaOfCircle 
// )


// Question 13
document.write("The Lifetime Supply Calculator" + "<br><br>")

var favSnack = "Unknown"
var currentAge = 18
var maxAge = 65
var estAmountOfPerDay = 3
var daysInYear = 365

var calculatingStuff = estAmountOfPerDay*daysInYear*(maxAge-currentAge)

document.write(
    "Favourite Snack : " + favSnack + "<br>" +
    "Current Age : " + currentAge + "<br>" +
    "Estimated Max Age : " + maxAge + "<br>" +
    "Amount Of Snack Per Day : " + estAmountOfPerDay + "<br><br>" +
    "You will need " + calculatingStuff + " snack to last you until the ripe old age of " + maxAge
)

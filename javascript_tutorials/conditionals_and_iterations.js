// 1. If statement
// syntax
// if(condition){
//     // code to execute if condition is true
// }
// Example1: check if a person is old enough
// var age = 20;
// if(age>=18){
//     console.log("You are eligible to vote");
// }
// Example 2 : Check if a number is even or odd
// var num = 20 ;
// if(num%2 ===0 ){
//     console.log("It is an even number");
// }
// if(num%2 ===1 ){
//     console.log("It is an odd number");
// }
// Example 3: To calculate the grade of a student
// let score = 88;
// let attendance = 89;
// if (score>=90 && attendance>=75){
//     console.log("Grade A - Excellent performance");
// }
// if(score>= 80 && attendance>=75 && score<90){
//     console.log("Grade B - Good performance");
// }
// if(score < 80 || attendance < 75){
//     console.log("Grade C - Need improvement - Please see the teacher");
// }
// Example 4: Ticket Prices Based on the Rules:
// Rules: Child(under 12 years) : $8
// Student (12 to 18 years and is a student) : $10
// Senior Citizen (Over 60 years): $9
// Adult(18-60 years old and not a student)
// Weekend price : $15
// Weekday price : $12
// let age = 15;
// let isStudent = true;
// let isWeekend =true;
//
// if(age<12){
//     console.log("Child ticket price: $8")
// }
// if(age>=12 && age<=18 && !isStudent){
//     console.log("Student ticket price: $10")
// }
// if(age>60){
//     console.log("Senior citizen ticket price: $9")
// }
// if(age>=18 && age<=60 && !isStudent){
//     if(isWeekend){
//         console.log("Weekend ticket price: $15")
//     }
//     if(!isWeekend){
//         console.log("Weekday ticket price: $12")
//     }
// }
// if else statement
//syntax
// if(condition){
//     // code to execute if the condition is true
// }else{
//     // code to execute if the condition is false
// }
// Example 1 : Check if a person is old enough to drive
// var age = 16;
// if(age>=18){
//
//     console.log("You are eligible to drive");
// }else{
//     console.log("You are not eligible to drive");
// }
// Example 2 : Check whether a number is odd or even
// var number = 7;
// if(number % 2 === 0){
//     console.log("Even number");
// }else{
//     console.log("Odd number");
// }
// Example 3 : Movie ticket system
// let customerAge = 12;
// let ticketPrice;
// if (customerAge < 12) {
//     ticketPrice = 8;
//     console.log("Child Ticket price: $"+ticketPrice);
// }else if (customerAge >= 12 && customerAge <= 64) {
//     ticketPrice = 12;
//     console.log("Adult Ticket price: $"+ticketPrice);
// }else{
//     ticketPrice = 10;
//     console.log("Senior Citizen Ticket price: $"+ticketPrice);
// }
// Example 4 : vacation Planner
// let weatherForecast = "Sunny";
// let dayOfWeek = "Saturday";
// if(weatherForecast === "Sunny" && dayOfWeek === "Saturday"){
//     console.log("Its a perfect day to go the beach");
// } else if (weatherForecast === "Sunny" && dayOfWeek !== "Saturday"){
//     console.log("Its a perfect day to go for a walk in the park");
// }else if(weatherForecast === "rainy"){
//     console.log("Its a perfect day to go and visit the museum");
// }else if(weatherForecast === "snowy"){
//     console.log("Its a perfect day to go to a hillstation and hit the skiing and snowboarding");
// }else {
//     console.log("Lets stay indoors");
// }
// Nested if statements
// syntax:
// if (condition){
// //code to execute the if conditional if true
//  if(condition2){
// // code to execute if conditional2 is true
// } }
// check a program that a person's age age to determine their eligibilty for a driver's license, and then checks if they have passed or not
// var age =20;
// var passedTest = true;
// if(age>=18){
//     console.log("You are eligible to get a driver's license");
//     if(passedTest){
//         console.log("You can get your driver's license");
//     }else {
//         console.log("You have to pass the test");
//     }
// }else{
//     console.log("You are not eligible to get a driver's license");
// }
// Example 1: Grading System:
// var score = 85;
// if(score >=90) {
//     console.log("Grade A")
// }else if(score >=80) {
//     console.log("Grade B")
// }else if(score >=70) {
//     console.log("Grade C")
// }else if(score >=60) {
//     console.log("Grade D")
// }else  {
//     console.log("Grade E")
// }
// Seasons based on Months
// let month = 6;
// if(month >=3 && month<=5){
//     console.log("Spring")
// }else if(month>=6 && month<=8){
//     console.log("Summer")
// }else if(month>=9 && month<=11){
//     console.log("Autumn")
// }else{
//     console.log("Winter")
// }
// Iterations
// for loop
// syntax:
// for (initialization;condition;increment/decrement){
//     // code to run in each iteration
// }
// Example 1: Printing numbers
// for (let i = 1; i <=5; i++) {
//     console.log(i);
// }
// Example 2 : Summing numbers
// let sum=0;
// for(let i = 1; i<=10; i++) {
//     sum += i; // add the current value of i
// }
// console.log(sum);
// Example 3: Multiplication Table
// let number = 3;
// console.log("Multiplication Table of "+number);
// for (let i = 1; i <= 10; i++) {
//     console.log(number+"*"+i+"="+(number*i));
// }
// while loop
// Syntax
// while(condition) {
//     // code to run as long as the condition is true
// }
// Example 1: Counting up
// let i =1;
// while(i<=5) {
//     console.log(i);
//     i+=1;
// }
// Example 2: Counting Down
// let i=10;
// while(i>0){
//     console.log(i);
//     i--;
// }
// Infinite loops
// let i=1;
// while(i<=2){
//     console.log(i);
// }
// do-while loop
// syntax
// do{
//     // code to execute at least once
// }while(condition);
// Example 1: Print even numbers till 20
// let i=1;
// do{
//     if(i%2 === 0){
//         console.log(i);
//     }
//     i++;
// }while(i<=20);
// break statement
// Example:
// let content ="";
// for(let i = 0; i < 100000000; i++) {
//     if(i === 6){
//         break;
//     }
//     content=content+"Suman"+i+"\n";
// }
// console.log(content);
// continue statement
// let content ="";
// for (let i = 1; i < 7; i++) {
//     if(i === 4){
//         continue;
//     }
//     content = content + "Suman" + i + "\n";
// }
// console.log(content);
// switch case
// syntax
// switch(expression){
//     case value1:
//         // code to execute === value1
//         break; // Optional
//     case value2:
//         // code to execute === value2
//         break;
//         default:
//             // code to execute if nothing matches
// }
// Example 1 :
// let fruit= "apple";
// switch(fruit){
//     case "banana":
//         console.log("banana is yellow");
//         break;
//         case "apple":
//             console.log("apple is red");
//             break;
//             case "orange":
//                 console.log("orange is orange");
//                 break;
//                 default:
//                     console.log("Invalid choice");
// }

// Example: switch with return
// function getFruitColor(fruit){
//     switch(fruit){
//         case "banana":
//             return "Yellow";
//         case "apple":
//             return "red";
//             case "orange":
//                 return "orange";
//                 default:
//                     return "Unknown";
//     }
// }
// let color = getFruitColor("banana");
// console.log(color);
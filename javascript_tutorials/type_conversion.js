// // type casting
//
// // Note that typeof is a operators use to find the data type of a variable
// const present = true
// console.log(typeof present)   // boolean
//
// const present1 = String(present);
// console.log(typeof present1); // string
//
// // boolean conversion
// const num1 = 0
// const num2 = 1
// console.log( num1);  // 0
// console.log( num2);  //1
// console.log( Boolean(num1)); //  false
// console.log( Boolean(num2)); // true
//
// // Convert String to Numbers
// const numb = Number("3.14")
// console.log(typeof numb); // number
//
// // Convert Numbers to String
// const str = String(3.14)
// console.log(typeof str); // String
// // Convert Dates to Numbers
// const date = Number(new Date());
// console.log(typeof date); // Number
//
// // Convert numbers to dates
// let timestamp = 1640323200000;
// let date1 = new Date(timestamp); // converts to a date object
// console.log(typeof date1); // date object
//
// // Convert Boolean to Numbers
// let bool = true;
// let num = +bool
// console.log( bool);
// console.log(typeof bool); // Number
// // Convert Numbers to boolean
// let book = Boolean(21);// convert to a boolean value true
// console.log( book);
// console.log(typeof book); // false
//
//
//////////////////////////////////////////////////////////////////////////////////
// compatibility and interoperability
// const num = '10';
// const result = num+5;
// console.log(result); // output = 105 number is converted into string and then concatenation takes place
 // User Input and interaction
// const input = '11'
// const num2 = Number(input);
// console.log(num2); // 11 (number)
// Conditional statement and comparison
// const num = 10;
// const num1 = '10';
// console.log(num==num1); // Output : true , (Implicit conversion of strNum to a number for a comparsion
// console.log(num === num1) // Output: false, (Strict equality without type conversion)
// Mathematical Operation
// const input1 = '5';
// const number = Number(input1);
// const result = number *2; // Numeric multiplication requires the number to be of a numeric data type
// console.log(result); // Output: 10 (number)
 // Implicit Conversion
// const number = 5;
// const string = "10";
// const result =  number + string; // "510
// console.log(result);
// Explicit Conversion
// Case 1 : Number()
// const string = "10";
// const numberFromString = Number(string);
// console.log(numberFromString); // 10
// Case 2: String()
// let num =50;
// let str = String(num);
// console.log(str); // output "50"
// Case 3 : Boolean Conversion
// let value = "Aimerz";
// let isTruthy = Boolean(value);
// console.log(isTruthy); // Output: true

// if we consloe log Math then we will came to know that this is an object with lots of properties 
console.log(Math);
/*

these all are the values we can use it wih (.) operator like 

E: 2.718281828459045
LN2: 0.6931471805599453
LN10: 2.302585092994046
LOG2E: 1.4426950408889634
LOG10E: 0.4342944819032518
PI: 3.141592653589793
SQRT1_2: 0.7071067811865476
SQRT2: 1.4142135623730951
*/

// E: Base of natural logarithms, also known as Euler's number
console.log(Math.E); // 2.718281828459045
console.log(Math.exp(1)); // e^1 = 2.718281828459045

// LN2: Natural logarithm of 2
console.log(Math.LN2); // 0.6931471805599453
console.log(Math.log(2)); // Same as LN2: 0.6931471805599453

// LN10: Natural logarithm of 10
console.log(Math.LN10); // 2.302585092994046
console.log(Math.log(10)); // Same as LN10: 2.302585092994046

// LOG2E: Logarithm base 2 of E
console.log(Math.LOG2E); // 1.4426950408889634
console.log(Math.log2(Math.E)); // Same as LOG2E: 1.4426950408889634

// LOG10E: Logarithm base 10 of E
console.log(Math.LOG10E); // 0.4342944819032518
console.log(Math.log10(Math.E)); // Same as LOG10E: 0.4342944819032518

// PI: Ratio of the circumference of a circle to its diameter
console.log(Math.PI); // 3.141592653589793
console.log(2 * Math.PI * 1); // Circumference of a circle with radius 1: 6.283185307179586

// SQRT1_2: Square root of 1/2 (or 1 divided by the square root of 2)
console.log(Math.SQRT1_2); // 0.7071067811865476
console.log(1 / Math.sqrt(2)); // Same as SQRT1_2: 0.7071067811865476

// SQRT2: Square root of 2
console.log(Math.SQRT2); // 1.4142135623730951
console.log(Math.sqrt(2)); // Same as SQRT2: 1.4142135623730951


// print values from 0 to 10 
console.log(Math.random()*10);


// to print all those number in a given range 
 let min = 10 
 let max = 20 

 console.log(Math.floor((Math.random())*(max-min+1))+ min);
 
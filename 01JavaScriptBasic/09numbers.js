const age  = 22;

const newage = new Number(22);

// Operations on primitive numbers and Number objects:

// Arithmetic operations
console.log(age + 5);  // Addition: 27
console.log(age - 5);  // Subtraction: 17
console.log(age * 2);  // Multiplication: 44
console.log(age / 2);  // Division: 11
console.log(age % 5);  // Modulus: 2
console.log(age ** 2); // Exponentiation: 484

// Comparison operations
console.log(age == newage);  // Loose equality: true
console.log(age === newage); // Strict equality: false (number vs object)
console.log(age != 20);      // Loose inequality: true
console.log(age !== newage); // Strict inequality: true
console.log(age > 20);       // Greater than: true
console.log(age < 25);       // Less than: true

// Conversion
console.log(newage.valueOf()); // Converts Number object to primitive: 22
console.log(Number(newage));   // Converts to primitive number: 22
console.log(newage.toString()); // Converts to string: "22"
console.log(age.toString());    // Converts to string: "22"

// Methods available for Number objects:
console.log(newage.toFixed(2));   // Formats to 2 decimal places: "22.00"
console.log(age.toFixed(2));      // Same as above: "22.00"
console.log(newage.toPrecision(3)); // Precision to 3 digits: "22.0"
console.log(age.toPrecision(3));    // Same as above: "22.0"
console.log(newage.toExponential(1)); // Exponential notation: "2.2e+1"
console.log(age.toExponential(1));    // Same as above: "2.2e+1"

// Parsing strings to numbers
console.log(Number("123")); // Converts string to number: 123
console.log(parseInt("123px")); // Parses integer from string: 123
console.log(parseFloat("123.45px")); // Parses float from string: 123.45

// Checking for NaN and Finite numbers
console.log(Number.isNaN(NaN)); // Checks if value is NaN: true
console.log(Number.isFinite(age)); // Checks if number is finite: true

// Type checking
console.log(typeof age); // "number"
console.log(typeof newage); // "object"

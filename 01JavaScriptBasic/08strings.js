// earlier way to add string 

const name = "Ankit"
const age = 20

console.log("my name is "+ name + "and my age is "+ age );


//  insted of this we can use string intrpolation for which we can  have to use ${name if varible }

console.log(`my name is ${name} and my age is ${age}`);
const getName = new String("AnkitPatle");



// also we have lots of methods in string such as 
// Define a sample string
const sampleString = "Hello, JavaScript!";

// Display all the string properties using console.log statements
console.log("Original String:", sampleString);
console.log("Length:", sampleString.length);
console.log("Constructor:", sampleString.constructor);
console.log("Prototype:", sampleString.__proto__);
console.log("Character at Index 0:", sampleString.charAt(0));
console.log("Unicode of character at Index 0:", sampleString.charCodeAt(0));
console.log("Ends With '!':", sampleString.endsWith("!"));
console.log("Includes 'Java':", sampleString.includes("Java"));
console.log("Index Of 'Java':", sampleString.indexOf("Java"));
console.log("Last Index Of 'a':", sampleString.lastIndexOf("a"));
console.log("Lowercase:", sampleString.toLowerCase());
console.log("Uppercase:", sampleString.toUpperCase());
console.log("Trimmed:", sampleString.trim());
console.log("Replaced 'JavaScript' with 'World':", sampleString.replace("JavaScript", "World"));
console.log("Split by ', ':", sampleString.split(", "));
console.log("Substring (7, 17):", sampleString.substring(7, 17));
console.log("Slice (7, 17):", sampleString.slice(7, 17));
console.log("Starts With 'Hello':", sampleString.startsWith("Hello"));
console.log("Match 'Java':", sampleString.match(/Java/));
console.log("Pad Start (20, '*'):", sampleString.padStart(20, '*'));
console.log("Pad End (20, '*'):", sampleString.padEnd(20, '*'));
console.log("Repeat 3 times:", sampleString.repeat(3));




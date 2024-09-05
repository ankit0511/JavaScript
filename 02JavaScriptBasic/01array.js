// array 
const array = [1,2,3,4,5]
// in js we can also add different types of elements with different datatypes 
// array are resizable 


// they follow the principle of shallow copy 
// i.e reference is passed 

// array methods 


// Adding different types of elements with different data types
array.push("string")  // Adds a string to the end
array.push({ key: "value" });  // Adds an object to the end
array.push(true);  // Adds a boolean to the end
array.push([6, 7, 8]);  // Adds an array to the end
console.log(array);  // [1, 2, 3, 4, 5, "string", { key: "value" }, true, [6, 7, 8]]

// Array Methods

// Adding and removing elements
console.log(array.push(9));  // Adds an element to the end: [1, 2, 3, 4, 5, "string", { key: "value" }, true, [6, 7, 8], 9]
console.log(array.pop());  // Removes the last element: 9, array now is [1, 2, 3, 4, 5, "string", { key: "value" }, true, [6, 7, 8]]

console.log(array.unshift(0));  // Adds an element to the beginning: [0, 1, 2, 3, 4, 5, "string", { key: "value" }, true, [6, 7, 8]]
console.log(array.shift());  // Removes the first element: 0, array now is [1, 2, 3, 4, 5, "string", { key: "value" }, true, [6, 7, 8]]

// Accessing elements
console.log(array[0]);  // Accesses the first element: 1
console.log(array[array.length - 1]);  // Accesses the last element: [6, 7, 8]

// Slicing and splicing
console.log(array.slice(1, 4));  // Extracts elements from index 1 to 3: [2, 3, 4]
console.log(array.splice(2, 2));  // Removes elements starting from index 2: [3, 4], array now is [1, 2, 5, "string", { key: "value" }, true, [6, 7, 8]]

console.log(array.concat([10, 11]));  // Concatenates arrays: [1, 2, 5, "string", { key: "value" }, true, [6, 7, 8], 10, 11]

// Searching and sorting
console.log(array.indexOf(5));  // Finds the index of an element: 2
console.log(array.includes("string"));  // Checks if an element exists: true
console.log(array.sort());  // Sorts the array: [1, 2, 5, "string", true, { key: "value" }, [6, 7, 8]]

// Reversing and joining
console.log(array.reverse());  // Reverses the array: [[6, 7, 8], { key: "value" }, true, "string", 5, 2, 1]
console.log(array.join(" - "));  // Joins all elements into a string: "[6, 7, 8] - [object Object] - true - string - 5 - 2 - 1"

// Iterating over arrays
array.forEach((element) => console.log(element));  // Iterates and logs each element

// Mapping and filtering
console.log(array.map((element) => typeof element));  // Maps each element to its type: ["object", "object", "boolean", "string", "number", "number", "number"]
console.log(array.filter((element) => typeof element === "number"));  // Filters elements that are numbers: [5, 2, 1]

// Reducing
console.log(array.reduce((acc, curr) => acc + (typeof curr === "number" ? curr : 0), 0));  // Reduces to sum of numbers: 8

// Checking if an array
console.log(Array.isArray(array));  // Checks if it's an array: true

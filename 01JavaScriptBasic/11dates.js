let currdate = new Date()
console.log(currdate);

// if we convert this into string then we will get 

console.log(currdate.toString());

// then it will give us date in indian standers time 
const date = new Date()

// Date toString methods
console.log(date.toString());        // Converts the Date to a string: "Tue Sep 03 2024 14:52:00 GMT+0000 (Coordinated Universal Time)"
console.log(date.toDateString());    // Converts to a date string: "Tue Sep 03 2024"
console.log(date.toTimeString());    // Converts to a time string: "14:52:00 GMT+0000 (Coordinated Universal Time)"
console.log(date.toISOString());     // Converts to an ISO 8601 string: "2024-09-03T14:52:00.000Z"
console.log(date.toUTCString());     // Converts to a UTC string: "Tue, 03 Sep 2024 14:52:00 GMT"
console.log(date.toLocaleString());  // Converts to a locale-sensitive string: "9/3/2024, 2:52:00 PM"
console.log(date.toLocaleDateString()); // Converts to a locale-sensitive date string: "9/3/2024"
console.log(date.toLocaleTimeString()); // Converts to a locale-sensitive time string: "2:52:00 PM"
console.log(date.valueOf());         // Returns the primitive value of the Date object: 1725807120000

// Date getters
console.log(date.getFullYear());     // Gets the year: 2024
console.log(date.getMonth());        // Gets the month (0-11): 8 (September, since months are 0-indexed)
console.log(date.getDate());         // Gets the day of the month (1-31): 3
console.log(date.getDay());          // Gets the day of the week (0-6): 2 (Tuesday)
console.log(date.getHours());        // Gets the hour (0-23): 14
console.log(date.getMinutes());      // Gets the minutes (0-59): 52
console.log(date.getSeconds());      // Gets the seconds (0-59): 0
console.log(date.getMilliseconds()); // Gets the milliseconds (0-999): 0
console.log(date.getTime());         // Gets the time in milliseconds since Jan 1, 1970: 1725807120000
console.log(date.getTimezoneOffset()); // Gets the time zone offset in minutes: 0

// UTC getters
console.log(date.getUTCFullYear());  // Gets the year using UTC: 2024
console.log(date.getUTCMonth());     // Gets the month using UTC (0-11): 8
console.log(date.getUTCDate());      // Gets the day of the month using UTC (1-31): 3
console.log(date.getUTCDay());       // Gets the day of the week using UTC (0-6): 2
console.log(date.getUTCHours());     // Gets the hour using UTC (0-23): 14
console.log(date.getUTCMinutes());   // Gets the minutes using UTC (0-59): 52
console.log(date.getUTCSeconds());   // Gets the seconds using UTC (0-59): 0
console.log(date.getUTCMilliseconds()); // Gets the milliseconds using UTC (0-999): 0

// Date setters
console.log(date.setFullYear(2023)); // Sets the year to 2023
console.log(date.setMonth(11));      // Sets the month to December (11)
console.log(date.setDate(25));       // Sets the day of the month to 25
console.log(date.setHours(10));      // Sets the hour to 10 AM
console.log(date.setMinutes(30));    // Sets the minutes to 30
console.log(date.setSeconds(45));    // Sets the seconds to 45
console.log(date.setMilliseconds(500)); // Sets the milliseconds to 500

// UTC setters
console.log(date.setUTCFullYear(2023)); // Sets the UTC year to 2023
console.log(date.setUTCMonth(11));      // Sets the UTC month to December (11)
console.log(date.setUTCDate(25));       // Sets the UTC day of the month to 25
console.log(date.setUTCHours(10));      // Sets the UTC hour to 10 AM
console.log(date.setUTCMinutes(30));    // Sets the UTC minutes to 30
console.log(date.setUTCSeconds(45));    // Sets the UTC seconds to 45
console.log(date.setUTCMilliseconds(500)); // Sets the UTC milliseconds to 500

// Additional methods
console.log(Date.now());             // Returns the current time in milliseconds since Jan 1, 1970
console.log(Date.parse("2024-09-03T14:52:00Z")); // Parses a string and returns time in milliseconds: 1725807120000
console.log(Date.UTC(2024, 8, 3, 14, 52, 0)); // Returns the time in milliseconds for a given date: 1725807120000

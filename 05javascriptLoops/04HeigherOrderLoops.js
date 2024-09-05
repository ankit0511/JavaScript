// for of loop 

const arr = [1,2,3,4,5]

for (const val of arr) {
    console.log(val);
    
}

// maps

const map = new Map()

map.set("in","India ")

map.set("usa","america ")

console.log(map);


// loops on map 
for (const key of map) {
    console.log(key);

}

// loops on map 
for (const [key , value] of map) {
    console.log(key ,"and value is ",value);

}



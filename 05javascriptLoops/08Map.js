const arr = [1, 2, 3, 4, 5, 6]


const newArray = arr.map((nums) => {
    return nums + 10
})
console.log(newArray);


// chaining in map 

const newArray1 = arr
    .map((nums) => nums * 10)
        .map((nums) => nums + 1)
           .filter((nums)=>nums>=30)
console.log(newArray1);
const arr = [1,2,3,4,5,6]


arr.forEach( function (index){
    console.log(index);
    
})

arr.forEach(element => {
    console.log(element);
    
});

// pass on the function 

function print( item){
    console.log(item );
    
}

arr.forEach(print)


// also it have access to the all the values of the array 

arr.forEach( (item ,index , arr)=>{
console.log(item, index,arr );
})


const fam = [
    {
        reltn: "father",
        age: 52
    },
    {
        reltn: "mother",
        age: 46
    }
]

fam.forEach(  (key )=>{
console.log(key.reltn);

})
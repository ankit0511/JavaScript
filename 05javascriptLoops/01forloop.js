for (let index = 0; index < 10; index++) {
    const element = index;
    console.log(element);
    
}


for (let index = 0; index < 10; index++) {
    const element = index;

    if (index == 5) {
        console.log(`the elemebt is ${index}`)

        
    }

    console.log(element);
    

}

// break statement 
for (let index = 0; index < 10; index++) {
    const element = index;

    if (index == 5) {
        console.log(`the elemebt is ${index}`);

        break;
    }

    console.log(element);
    

}

// continue statement 

for (let index = 0; index < 10; index++) {
    const element = index;

    if (index == 5) {
        console.log(`the elemebt is ${index}`);

        continue;
    }

    console.log(element);
    

}
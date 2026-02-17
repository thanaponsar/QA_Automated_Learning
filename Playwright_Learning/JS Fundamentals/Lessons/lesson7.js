// Loop

console.log('Hello')
console.log('Hello')
console.log('Hello')
console.log('Hello')
console.log('Hello')

//for(statement1; statement2; statement3){   
//}

// for loop (for i loop)

for(let i=0;i<5;i++){
    console.log('Hello : '+i)
}

var cars = ["Toyota", "Honda", "Benz"]
for(let i=0;i<cars.length;i++){
    console.log(cars[i])
}

for(let car of cars){
    console.log(car)
}

for(let car of cars){
    console.log(car)
    if(car === 'Honda'){
        break
    }
}
// ES6 syntax for each loop
cars.forEach( car=> {
    console.log(car)
})
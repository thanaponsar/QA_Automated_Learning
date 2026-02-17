// Objects

var customer = {
    firstname: 'Thanapon',
    lastname: 'Sarasap',
    age: 31,
    cars: ["Toyota", "Honda", "Benz"]
}
console.log(customer)
console.log(customer.firstname)
console.log(customer.lastname)
console.log(customer.age)   

console.log(customer['firstname'])
console.log(customer['lastname'])
console.log(customer['age'])    

//Dot notation
customer.firstname = 'Karnnop'
console.log(customer)

//Backet notation
customer['lastname'] = 'Oktalard'
console.log(customer['lastname'])
console.log(`${customer.firstname} ${customer.lastname} is ${customer.age} years old.`)


//Arrays
var car = ["Toyota", "Honda", "Benz"]
console.log(car)
console.log(car[0])
console.log(car[1])
console.log(car[2])

car[1] = "BMW"
console.log(car)

console.log(customer.cars)
console.log(customer.cars[0])
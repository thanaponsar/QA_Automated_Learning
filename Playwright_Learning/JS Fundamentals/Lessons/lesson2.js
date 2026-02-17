// Concatination and Interpolation
let firstName = "Thanapon"
let lastName = "Sarasap"
let fullName = firstName + " " + lastName
console.log(fullName)


var price = 50
var itemName = "Cup"
var messageToPrint = "The price for your Cup is 50 dollars"
console.log(messageToPrint)

messageToPrint = "The price for your " + itemName + " is " + price + " dollars" //concatination
console.log(messageToPrint)

messageToPrint = `The price for your ${itemName} is ${price} dollars` //Interpolation
console.log(messageToPrint)
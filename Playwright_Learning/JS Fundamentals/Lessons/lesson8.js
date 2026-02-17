// Declarative function 
function helloOne(){
    console.log('Hello One')
}
helloOne()

// Expression function //Anoymus fuction
var helloTwo = function(){
    console.log('Hello Two')                         
}
helloTwo()

//ES6 function syntax or arrow function 
var hellothree = () => {
    console.log('Hello Three')
}
hellothree()

// Function with argument
function printName(name, latsname){
    console.log(name+ ' ' +latsname)

}
printName('Thanapon','Sarasap')


//Function with return

function multiplyByTwo(number){
    var result = number * 2
    return result
}

var output = multiplyByTwo(5)
console.log(output)


//import function
import {printAge} from '../Lessons/Helper/printHelper.js'
printAge(31)

//import everything
import * as Helper from '../Lessons/Helper/printHelper.js'
Helper.printAge(35)
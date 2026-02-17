// logical 'AND' operator
console.log(true && true)  // all values have to be TRUE for expression to be true
console.log(true && false)
console.log(false && true)
console.log(false && false) 

// logical 'OR' operator    
console.log(true || false) // any value should be TRUE for expression to be true 
console.log(false || true) // any value should be TRUE for expression to be true
console.log(true || true)  // any value should be TRUE for expression to be true
console.log(false || false)

var ageIsMoreThanEighteen
var isThaiCitizen

ageIsMoreThanEighteen = true
isThaiCitizen = false

var eligibleForVote = ageIsMoreThanEighteen && isThaiCitizen
console.log('This person is eligible for vote : ' + eligibleForVote)



// logical 'NOT' operator
console.log(!true)
console.log(!false)     
console.log(6 !== 10 )
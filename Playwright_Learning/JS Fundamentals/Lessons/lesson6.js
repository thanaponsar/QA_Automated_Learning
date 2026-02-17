// Conditional statement

// if hour between 6 and 12 print "Good Morning"
// if hour between 12 and 18 print "Good Afternoon"
// Otherwise: Good Evening

var hour = 1

if (hour >= 6 && hour < 12){
    console.log("Good Morning")
}else if (hour >= 12 && hour < 18){
    console.log("Good Afternoon")
}else{
    console.log("Good Evening")
}   


var ageIsMoreThanEighteen = true
var isThaiCitizen = false


if (ageIsMoreThanEighteen && isThaiCitizen  ){
    console.log('This person is eligible for vote')

}else{
    console.log('This person is not eligible for vote')
}
    

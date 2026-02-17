export function printAge(age){
    console.log(age);
}

class CustomerDetils{
    /**
     * This method will print the first name
     * @param {string} firstname 
     */
    printFirstname(firstname){
        console.log(firstname)
    }
    /**
     * This method will print the last name
     * @param {string} lastname 
     */
    printLastname(lastname){
        console.log(lastname)

    }
}

export var customer = new CustomerDetils()
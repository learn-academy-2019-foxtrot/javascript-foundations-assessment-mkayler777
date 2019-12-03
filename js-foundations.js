// ASSESSMENT 2: JAVASCRIPT FOUNDATIONS
// Coding practical questions

// 1. Write a function that takes a number as an argument and decides if the number is evenly divisble by three or not. Use the test cases 15, 0, 385, -7. Expected output: "15 is divisible by three", "0 is divisible by three", "385 is not divisble by three", "-7 is not divisble by three".
const isDivisible = (num)=> {
    if (num%3 === 0){
        return `${num} is divisible by three.`
    } else {
        return `${num} is not divisible by three.`
     }
    }
console.log(isDivisible(15))
console.log(isDivisible(0))
console.log(isDivisible(385))
console.log(isDivisible(-7))

// 2. Create an object called helloMe. Include your firstName, lastName and TWO OTHER properties of you. Add a method to your object that will return a sentence using the object properties to describe you.

var helloMe = {
    firstName: "Morganne", 
    lastName: "Kayler",
    city:  "Escondido", 
    county: "San Diego",
    getData: function() {
        return this.firstName+" "+this.lastName+" lives in "+this.city+", "+this.county+"."
    }
}

console.log(helloMe.getData())

// ------------------------------------- Consider the variable:

var randomNouns = ["streetlamp", "potato", "teeth", "conclusion", "nephew", "temperature", "database"]

// // 3a. Write a function that returns every other item from the array as one string. Expected output: "streetlamp teeth nephew database"
const getEveryOther = (array) => {
    let everyOther = array.filter((value, index)=>{
        return index%2 ===0
           })
            return everyOther.join(" ")
    }
console.log(getEveryOther(randomNouns))


// 3b. Create a function that takes in the variable and returns the array with all the words capitalized. Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew", "Temperature", "Database"]

function capitalLetter(array){
 let arrayUppercase = []
    for (let i=0; i < array.length; i++) {
        arrayUppercase.push(array[i].charAt(0).toUpperCase() + array[i].substr(1));
    }
    return arrayUppercase;
}
console.log(capitalLetter(randomNouns))

// 3c. STRETCH: Create a function that returns the length of each string from the randomNouns variable. Expected output: [10, 6, 5, 10, 6, 11, 8]




// -------------------------------------- Consider the variables:
var testString1 = "learn"
var testString2 = "academy"
var testString3 = "sandiego"

// 4a. Write a function called alphabetSoup that takes one argument and returns a string with all the letters in alphabetical order. Use each of the varibales as test cases. Expected output: "aelnr" "aacdemy" "adeginos"
const alphabetSoup = (string) =>{
    return string.split("").sort().join("")
    }
    console.log(alphabetSoup(testString1))
    console.log(alphabetSoup(testString2))
    console.log(alphabetSoup(testString3))

// 4b. Write a function that takes in all three variables and returns a string with all the letters in alphabetical order. Expected output: "aaaacddeeegilmnnorsy"

const grandmasAlphabetSoup=(...strings)=>{
    return strings.join("").split("").sort().join("")
    }
    console.log(grandmasAlphabetSoup(testString1, testString2, testString3))

// ------------------------------------- Consider the variables:
var amounts = [9, 1, 8, 16, 5, 1, 42]
var animals = ["ducks", "elephants", "pangolins", "zebras", "giraffes", "penguins", "llamas"]

// 5a. Write a function that takes the two variables and returns a combined string. Expected output: "9 ducks 1 elephants 8 pangolins 16 zebras 5 giraffes 1 penguins 42 llamas"
var animalNum = (array1, array2) => {
    let combinedArrays = array1.map((value,index)=> {
        return `${value} ${array2[index]}`
    })
    return combinedArrays.join("")
}
console.log (animalNum(amounts,animals))


// 5b. STRETCH: Create a function that combines the two variables and updates the animal to be singular if the animal's corresponding number is 1. Expected output: "9 ducks 1 elephant 8 pangolins 16 zebras 5 giraffes 1 penguin 42 llamas"

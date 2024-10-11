// Use `.map()` to iterate over the following array:

const nums = [13, 87, 2, 89, 12, 4, 90, 63];

// Create a new array where each value is multiplied by 2 and log the new array.

// Your code here

let ex1 = nums.map((x)=> x*2)
console.log("ex1 answer " + ex1)

// Given the following array, use destructuring to pull out the first and second values and place them into variables. Log both variables.

const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];

// Your code here

const [topping1, topping2] = pizzaToppings
console.log("ex2 answer " + topping1, topping2)

// Given the following object, use destructuring to create variables `make` and `model` that will hold the respective values.

const car = {
    make: 'Audi',
    model: 'q5',
  };
  
  // Your code here
const {make, model} = car

console.log("ex3 answer "+ make, model)

// Duplicate the following array using the spread operator and assign it to `controversialPizzaToppings`. Then, log the variable.

// const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];

// Your code here

const controversialPizzaToppings = [...pizzaToppings]

console.log ("ex4 answer " + controversialPizzaToppings)

// Duplicate the following object and spread its values into a new variable `myCar`.

// const car = {
//     make: 'Audi',
//     model: 'q5',
//   };
  
  // Change the `model` property of `myCar` to 'q7'. Log both objects.


  // Your code here

  const carClone = {...car}
  carClone.model = 'q7' 
  
  console.log ("ex5 answer: ")
  console.log(car)
  console.log(carClone)
  
// Create an object named userProfile. 
// Define a variable named propertyName and assign a string to it (like a username, age, or email). 
// Use propertyName as a dynamic key in userProfile, assigning a relevant value.

// Your code here
const propertyName = "username"
const userProfile = {
    [propertyName]: "gg"
}

console.log("ex6 answer: ")
console.log(userProfile)

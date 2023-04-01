/*
Challenge 1:
Given an array of numbers, return an array of each number, squared
*/
const nums = [1, 2, 3, 4, 5]
// -->       [1, 4, 9, 16, 25]
// Your code here
const squareOfNums= nums.map(function(num){
    return num*num
})
console.log(squareOfNums)
// let squared 
// for (let i=0; i<nums.length; i++) {
//     let squared= nums[i]*nums[i] // Describe how this code worked : 
    // Teach it like you are teaching a 5 year old
    // Make it more simple enough so that a 5 year old can understand
    //  1.  Create a variable called squared
    //  2.  Set the value of squared to the value of nums[i] * nums[i]
    // What does it mean by nums[i] * nums[i]?
    //  1.  nums[i] is the value of the array at index i
    //  2.  nums[i] * nums[i] is the value of the array at index i multiplied by itself
    //  3.  nums[i] * nums[i] is the value of the array at index i squared  

    // Now lets try to explain it to a 10 year old
    //  1.  Create a variable called squared
    //  2.  Set the value of squared to the value of nums[i] * nums[i]
    //  3.  nums[i] is the value of the array at index i
    //  4.  nums[i] * nums[i] is the value of the array at index i multiplied by itself

//     console.log(squared)

//     // Now let's try to solve this using map function
//     // First we need to create a new array
//     //  1.  Create a new array called newNums
//     const newNums = nums.map
// // Fix the bug on above code: 
//  1.  The code is not working because we are trying to use map function on a variable that is not an array
//  2.  We need to create a new array called newNums
//  3. 


/*
Challenge 2:
Given an array of strings, return an array where 
the first letter of each string is capitalized
*/

const names = ["alice", "bob", "charlie", "danielle"]
// -->        ["Alice", "Bob", "Charlie", "Danielle"]
// Your code here
const capitalizeFirstLetter = names.map((name)=>{
    return name[0].toUpperCase + name.slice(1)
})
console.log(capitalizeFirstLetter)



/*
Challenge 3:
Given an array of strings, return an array of strings that wraps each
of the original strings in an HTML-like <p></p> tag.

E.g. given: ["Bulbasaur", "Charmander", "Squirtle"]
return: ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]
*/

const pokemon = ["Bulbasaur", "Charmander", "Squirtle"]
// -->          ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]
// Your code here



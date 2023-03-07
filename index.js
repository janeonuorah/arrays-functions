// QUESTION 1
 
//(a) MUTATING ARRAY METHOD

// Mutating array uses built in array methods to make changes to an array of objects. 
//The changes made, also changes the sequence of the inital variable declared because it points to the same reference.

// Examples include:

array.reverse()    //Reverses the order of the elements in an array in place.
array.push()       //Adds one or more elements to the end of an array.
array.unshift()    // Adds one or more elements to the beginning of an array
array.pop()        //Removes the last element from an array.
array.fill()       // Fills all the elements of an array from a start index to an end index with a static value


//(b) NON-MUTATING ARRAY METHOD

// This method do not cause a change in the original variable(arrays) declared.

// Examples include;

array.filter()    //Returns a new array that contains only the elements that pass a specified test
array.map()       //Returns a new array with the results of calling a provided function on every element in the original array
array.reduce()    //Applies a function to each element of an array and reduces the array to a single value.
array.concat()    //Combines two or more arrays into a new array.
array.slice()     //Returns a new array that contains a portion of the original array


//  QUESTION 2

let techLanguages = ['C#', 'Javascript', 'Ruby', 'PHP', 'Python']

// (a)  Add "Kotlin" to the end of the array

techLanguages.push('Kotlin');
console.log(techLanguages)

// (b)  Add "Java" after 'Ruby'

techLanguages.splice(3, 0, 'Java');
console.log(techLanguages)

// (c) Remove the first item in the array

let removedElement = techLanguages.shift();
console.log(techLanguages)
console.log(removedElement)


// (d)    Add 'Scala' and 'Swift' to the beginning of the array

techLanguages.unshift('Scala', 'Swift');
console.log(techLanguages)


// (e)    Replace 'PHP' with 'Go' and 'Rust'

let phpIndex = techLanguages.indexOf('PHP');
console.log(phpIndex)
techLanguages.splice(5, 1, 'Go', 'Rust');
console.log(techLanguages)



// QUESTION 3

let fruit = ['apple', 'mango', 'banana'];

function changeFruit(fruit) {
    fruit[2] = "orange";
    return fruit;
}         
//  Output will be Orange
console.log(changeFruit(fruit))




// QUESTION 4

function findMaxNumber(num) {
    let max = num[0];   // Assuming the first value is the highest number

    // using for loop to iterate each value and compare them to the initial maximum number declared.
    for (let i = 1; i < num.length; i++) {
        if (num[i] > max) {      
            max = num[i];    // i.e if the second number in the array is greater than the initial maximium value declared(the first number), it becomes the new maximum number.
        }
    }
    return max;
}

// calling out the function

let myArrayOfNumbers = [2, 6, 4, 3, 5, 1, 8, 9, 10];
let maxValue = findMaxNumber(myArrayOfNumbers);
console.log(maxValue)



// QUESTION 5

function valTimesIndex(array) {
    return array.map((val,index) => val * index);    // the .map() method multiplies each value by it's index in the array
}

let myArray = [3, 4, 5, 6, 7];
let result = valTimesIndex(myArray);
console.log(result);
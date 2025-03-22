// 1. Difference in scope for var, let, and const
function scopeExample() {
    var a = "I am var"; // Function-scoped
    let b = "I am let"; // Block-scoped
    const c = "I am const"; // Block-scoped
    
    if (true) {
        var a = "Var can be redeclared inside block";
        let b = "Let is block scoped";
        const c = "Const is block scoped";
        console.log(a, b, c);
    }
    
    console.log(a); // Var changes globally within the function scope
    //console.log(b); // Error if uncommented
    // console.log(c); // Error if uncommented
}

// 2. Function to return the second fruit
const fruits = ["Apple", "Banana", "Cherry", "Mango", "Orange"];
function getSecondFruit() {
    return fruits[1];
}

// 3. Function to push and pop from an array
function modifyArray(arr) {
    arr.push("New Element");
    arr.pop();
    return arr;
}


// 4. Function to square numbers using map()
const numbers = [1, 2, 3, 4, 5];
function squareNumbers(arr) {
    return arr.map(num => num * num);
}

// 5. Function to filter odd numbers
function filterOdds(arr) {
    return arr.filter(num => num % 2 !== 0);
}

// 6. Function to log a greeting message
const person = {
    name: "John",
    age: 30,
    occupation: "Engineer"
};
function greetPerson(personObj) {
    console.log(`Hello, my name is ${personObj.name}, I am ${personObj.age} years old and I work as a ${personObj.occupation}.`);
}

// 7. Function to calculate the area of a rectangle
function calculateArea(rect) {
    return rect.width * rect.height;
}

// 8. Function to return object keys
function getObjectKeys(obj) {
    return Object.keys(obj);
}

// 9. Function to merge two objects
function mergeObjects(obj1, obj2) {
    return Object.assign({}, obj1, obj2);
}

// 10. Function to calculate the sum using reduce()
function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}

// Example Usage
console.log(getSecondFruit());
console.log(modifyArray(["A", "B", "C"]));
console.log(squareNumbers(numbers));
console.log(filterOdds(numbers));
greetPerson(person);
console.log(calculateArea({ width: 5, height: 10 }));
console.log(getObjectKeys(person));
console.log(mergeObjects({ a: 1 }, { b: 2 }));
console.log(sumArray(numbers));

//PART 1: PRIMITIVE DATA TYPES

// 1. Student name
let studentName = "Hrithik";
console.log(typeof studentName);

// 2. Employee age
let employeeAge = 23;
console.log(typeof employeeAge);

// 3. Is working
let isWorking = true;
console.log(typeof isWorking);

// 4. Undefined variable
let myVariable;
console.log(myVariable);

// 5. Five primitive data types
let myString = "JavaScript";
let myNumber = 100;
let myBoolean = true;
let myUndefined;
let myNull = null;

// 6. Print data types
console.log(typeof myString);
console.log(typeof myNumber);
console.log(typeof myBoolean);
console.log(typeof myUndefined);
console.log(typeof myNull);

// 7. Course name
let courseName = "JavaScript";
console.log(courseName);

// 8. Batch number
let batchNumber = 42;
console.log(typeof batchNumber);


// PART 2: ARRAYS


// 9. Five fruits
let fruits = ["Apple", "Mango", "Orange", "Banana", "Grapes"];
console.log(fruits);

// 10. First element
console.log(fruits[0]);

// 11. Third element
console.log(fruits[2]);

// 12. Last element
console.log(fruits[fruits.length - 1]);

// 13. Personal details array
let personalDetails = ["Hrithik", 23, "Salem", "Web Developer"];
console.log(personalDetails);

// 14. Print each element using index
console.log(personalDetails[0]);
console.log(personalDetails[1]);
console.log(personalDetails[2]);
console.log(personalDetails[3]);

// 15. Strings, numbers and boolean
let mixedArray = ["Hrithik", 23, true, "JavaScript", 100];
console.log(mixedArray);

// 16. Total number of elements
console.log(mixedArray.length);

// 17. Five mobile brands
let mobileBrands = ["Apple", "Samsung", "Vivo", "Oppo", "OnePlus"];
console.log(mobileBrands[1]);

// 18. Six programming languages
let languages = ["JavaScript", "Python", "Java", "C", "C++", "PHP"];
console.log(languages[languages.length - 1]);


// ==========================================
// PART 3: OBJECTS
// ==========================================

// 19. Student object
let student = {
    name: "Hrithik",
    age: 23,
    city: "Salem"
};

// 20. Student name
console.log(student.name);

// 21. Student age
console.log(student.age);

// 22. Employee object
let employee = {
    name: "Hrithik",
    salary: 30000,
    designation: "Web Developer"
};

console.log(employee);

// 23. Object containing array of skills
let person = {
    skills: ["HTML", "CSS", "JavaScript", "Bootstrap", "PHP"]
};

console.log(person.skills[2]);

// 24. Object with different properties
let myObject = {
    fruit: "Apple",
    number: 100,
    boolean: true,
    toy: "Car"
};

// 25. Print toy property
console.log(myObject.toy);

// 26. Company object
let company = {
    companyName: "Stackly",
    location: "Salem",
    employeeCount: 100
};

console.log(company);


// ==========================================
// PART 4: ARITHMETIC OPERATORS
// ==========================================

// 27. Addition
let add = 10 + 20;
console.log(add);

// 28. Subtraction
let subtract = 50 - 20;
console.log(subtract);

// 29. Multiplication
let multiply = 2 * 3 * 4;
console.log(multiply);

// 30. Division
let divide = 100 / 5;
console.log(divide);

// 31. Modulus (Remainder)
let remainder = 25 % 4;
console.log(remainder);

// 32. Exponentiation
let power = 3 ** 4;
console.log(power);

// 33. All six arithmetic operations
let numA = 20;
let numB = 5;

console.log(numA + numB);  // Addition
console.log(numA - numB);  // Subtraction
console.log(numA * numB);  // Multiplication
console.log(numA / numB);  // Division
console.log(numA % numB);  // Modulus
console.log(numA ** numB); // Exponentiation


// ==========================================
// PART 5: INCREMENT AND DECREMENT
// ==========================================

// 34. Pre-increment
let value1 = 10;
console.log(++value1);

// 35. Post-increment
let value2 = 20;
console.log(value2++);
console.log(value2);

// 36. Pre-decrement
let value3 = 30;
console.log(--value3);

// 37. Post-decrement
let value4 = 40;
console.log(value4--);
console.log(value4);


// ==========================================
// 38. PREDICT THE OUTPUT
// ==========================================

let a = 10;
let b = a++;

console.log(a);
console.log(b);

// Output:
// 11
// 10


// ==========================================
// 39. PREDICT THE OUTPUT
// ==========================================

let x = 15;
let y = ++x;

console.log(x);
console.log(y);

// Output:
// 16
// 16


// ==========================================
// 40. FINAL VALUES OF ALL VARIABLES
// ==========================================

let num1 = 25;
let num2 = --num1;
let num3 = num2++;
let num4 = ++num3;

console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);

// Output:
// 24
// 25
// 26
// 26
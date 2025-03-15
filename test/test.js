// write an if-else statement that checks if a number is even or odd
const test_number = 7;
if (test_number % 2 == 0) {
    document.write("The number is an even number.");
    console.log("The number is an even number.");
} else {
    document.write("The number is an odd number");
    console.log("The number is an odd number");
}

// Create an if-else statement that checks if a person is eligible to vote (age 18 or older).
const voter = {
    name: "John",
    age: 25
};
if (voter.age >= 18) {
    document.write("eligible to vote");
    console.log("eligible to vote");
}else{
    document.write("not eligible to vote");
    console.log("not eligible to vote");
}

/* A person gets a discount on a movie ticket if: 
1. They are under 12 years old(age < 12) OR
2. They are a senior citizen (age >= 60) AND it's a weekday (isWeekday === true).

Write an if-else statement to determine if the person gets a discount.
If yes, print "Discount applied". If no, print "No discount".
*/

// Writing and testing the above on a sampled data
const person = {
    name: "John",
    age: 25,
    isWeekday: false,
    discount: false
};

if(person.age < 12 || (person.age >= 60 && isWeekday === true)){
    document.write("Discount applied");
    console.log("Discount applied");
}else{
    document.write("No discount");
    console.log("No discount");
}

/* A person is eligible for a scholarship if:
1. They have a GPA of 3.5 or higher (gpa >= 3.5) OR
2. They have a GPA of at least 3.0 (gpa >= 3.0) AND they have done 50+ hours of community service (hours >= 50).
Write an if-else statement to check if the person qualifies for the scholarship.
*/
const student_details = [];
const student = {
    name: "Aba",
    gpa: 3.5,
    hours: 50
};
if(student.gpa >= 3.5 || (student.gpa >= 3.0 && student.hours >= 50)){
    student_details.push("Qualifies for scholarship");
    console.log("Qualifies for scholarship");
}


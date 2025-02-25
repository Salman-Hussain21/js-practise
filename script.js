// // Task 1

// console.log("Task #1 - JS Loaded.");
// alert("Task #1 - JS Loaded");


// Task 2 - variable declaration.

// var name = "Salman";
// let age = 19;
// const country = "Pakistan";
// console.log("My Name is "+name, "My age is " + age, "I'm from "+country  );

// Task 3 - Data Types

// let firstName = "Ali"; //string
// let age = 18; //int
// let isStudent = true; //boolean
// let job = undefined; //undefined
// let profession = null ; //null
// let person = { name : "Salman" , city : "Karachi"} 

// console.log(name);
// console.log(age);
// console.log(isStudent);
// console.log(job);
// console.log(profession);
// console.log(person);


// Task 4 

// Arithmetic Operations

// let a = 10;
// let b = 5;

// console.log(a+b); // addition
// console.log(a-b); // subtraction
// console.log(a*b); // multiplication
// console.log(a/b); // division
// console.log(a%b); // modulas

// Comparison Operators

// console.log(10>5);
// console.log(10 < 5);
// console.log (10=="10"); // compare both value, if both are neither string nor int it will auto transform data type into coercion & return true.
// console.log (10==="10"); // compare both value strictly, if any one is changes it will return false.
// console.log (10!=="10"); // compare both value, if the value type isnt same it will return true.
// console.log(10>=5);
// console.log(10<=5);

// Logical Operators

// console.log(false && false);
// console.log(true || false);
// console.log(!true);

// Task 5 - Conditions

// let age = prompt("Enter your age");
// age = Number(age);

// if( age >= 18){
//     console.log("Eligible");
// }
// else{
//     console.log("Not eligible");
// }


// let age = prompt("Enter Your Age: ");
// if(age>=18){
//     alert("Eligible");
// }
// else{
//     alert("Not Eligible");
// }

// - Giving Marks from Static Array

// var marks = [12,15,17,18,19,20]

// let TotalMarks = 120;
// let ObtainedMarks = marks.reduce((a,b) => a+b); 
// let percentage = ObtainedMarks / TotalMarks * 100;

// let grade;
// if( percentage >= 70){
//     grade = 'A';
// }
// else if ( percentage >= 60){
//     grade = 'B';
// }
// else if ( percentage >= 50){
//     grade = 'C';
// }
// else if ( percentage >= 40){
//     grade = 'D';
// }
// else{
//     grade = 'F';
// }

// console.log("Obtained Marks are " + ObtainedMarks);
// console.log("Percentage is " + percentage,"%");
// console.log("Grade is "+grade);



// - Getting total obtained marks from user 

// let marks = prompt("Enter your total marks");
// marks = Number(marks);

// let TotalMarks = 550;
// let ObtainedMarks = marks;
// let percentage = (marks / TotalMarks * 100).toFixed(2);

// let grade;
// if(percentage >= 80){
//     grade = 'A+';
// }
// else if ( percentage >= 70){
//     grade = 'A';
// }
// else if ( percentage >= 60){
//     grade = 'B';
// }
// else if ( percentage >= 50){
//     grade = 'C';
// }
// else if ( percentage >= 40){
//     grade = 'D';
// }
// else {
//     grade = 'Fale';
// }

// console.log(percentage);
// console.log(grade);

// Getting each subjects marks from user 

// let subjects = ["Chemistry", "Physics", "Maths", "Urdu", "PST", "English"];
// let marks = [];

// for(let i = 0; i < subjects.length; i++ ){
//     let SubjectMarks = prompt(`Enter marks for ${subjects[i]} `);
//     SubjectMarks = Number(SubjectMarks);
//     marks.push(SubjectMarks);
// }

// let TotalMarks = 550;
// let ObtainedMarks = marks.reduce((a,b) => a+b);
// let percentage = (ObtainedMarks / TotalMarks * 100).toFixed(2);
// let grade;
// if(percentage >= 80){
//     grade = 'A+';
// }
// else if ( percentage >= 70){
//     grade = 'A';
// }
// else if ( percentage >= 60){
//     grade = 'B';
// }
// else if ( percentage >= 50){
//     grade = 'C';
// }
// else if ( percentage >= 40){
//     grade = 'D';
// }
// else {
//     grade = 'Fail';
// }

// console.log("Total Obtained Marks:", ObtainedMarks);
// console.log("Percentage: ",percentage);
// console.log("Grade: ",grade);




let subject = ["chemistry", "maths", "physics"];
let marks = [];


for( let i = 0; i < subject.length; i++){
    let subjectMarks = prompt(`Enter your marks for ${subject[i]}`);
    subjectMarks = Number(subjectMarks);
    marks.push(subjectMarks);
}

let TotalMarks = 120;
let ObtainedMarks = marks.reduce((a,b)=> a+b);
let Percentage = (ObtainedMarks/TotalMarks*100).toFixed(2);

if(ObtainedMarks > TotalMarks){
    console.log("Obtained marks cannot be greater then total marks");
}

else{
    console.log("Total Obtained Marks:", ObtainedMarks);
    console.log("Percentage: ",Percentage);
}




// let subjects = ["Chemistry", "Physics", "Maths", "Urdu", "PST", "English"];
// let marks = [];
// let TotalMarks = 550;

// for (let i = 0; i < subjects.length; i++) {
//     let SubjectMarks;
    
//     // 🔹 Input validation loop
//     do {
//         SubjectMarks = prompt(`Enter marks for ${subjects[i]} (0 - 100)`);
//         SubjectMarks = Number(SubjectMarks);

//         if (SubjectMarks < 0 || SubjectMarks > 100 || isNaN(SubjectMarks)) {
//             alert("❌ Invalid input! Marks should be between 0 and 100.");
//         }
//     } while (SubjectMarks < 0 || SubjectMarks > 100 || isNaN(SubjectMarks)); // Jab tak sahi input na aaye loop chalay ga

//     marks.push(SubjectMarks);
// }

// let ObtainedMarks = marks.reduce((a, b) => a + b, 0);

// // 🔹 Restriction: If obtained marks exceed 550, show error and stop execution
// if (ObtainedMarks > TotalMarks) {
//     console.log("⚠️ Error: Obtained marks cannot be greater than Total Marks (550). Please re-enter valid marks.");
// } else {
//     let percentage = ((ObtainedMarks / TotalMarks) * 100).toFixed(2);
//     let grade;

//     if (percentage >= 80) {
//         grade = 'A+';
//     } else if (percentage >= 70) {
//         grade = 'A';
//     } else if (percentage >= 60) {
//         grade = 'B';
//     } else if (percentage >= 50) {
//         grade = 'C';
//     } else if (percentage >= 40) {
//         grade = 'D';
//     } else {
//         grade = 'Fail';
//     }

//     console.log("Total Obtained Marks:", ObtainedMarks);
//     console.log("Percentage:", percentage + "%");
//     console.log("Grade:", grade);
// }

console.log("Lab 1: Information myself.")
/**
 Bài toán tính tuổi, form:

    Student Information:
    Name:[fullName]
    Age:[age];
    student:[isStudent]

 */

//Varriable Declaration:
const fullName = 'Beck';

const birthYear = 2003;

const today = new Date();
const currentYear = today.getFullYear();


let isStudent = true;
const age = currentYear - birthYear;

//dùng template Strings:

console.log(`
Student Information:
Name: ${fullName}
Age: ${age}
Student: ${isStudent}
    `)


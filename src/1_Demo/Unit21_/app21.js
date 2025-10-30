console.log("Unit 21: ")

/**
 * 
 */

const sv1 = {
    username: "Beck",
    score: 3
}

const sv2 = {
    username: "Bale",
    score: 7
}


const sv3 = {
    username: "Bean",
    score: 10
}

const students = [sv1, sv2, sv3];
console.log("List student: ", students);

//in ra tất cả tên của tất cả student:

students.forEach((item, index) => {
    console.log("StudentName", index + 1, ": ", item.username);
})

//4h10 - 4h20:
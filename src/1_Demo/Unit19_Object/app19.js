console.log("Unit 19: Object");

const scores = [10, 9, 2, 6, 7.8, 6];

/**Object
 * const/let object_Name = {
 *    key : value,
 *    key1 : value1,
 *    ....
 *    keyN: valueN
 * }
 * 
 * key: attribute name + Attribute thì thường đc gọi là property nhé!
 * value: attribute value
 */


const student1 = {
    name: "Beck",
    class: "baby1",
    score: 6.7,
    address: {
        city: "Hà Nội",
        country: "Hoàng Mai"
    }
};

const student2 = {
    name: "Bale",
    class: "baby1",
    score: 9,
    address: {
        city: "Hà Nội",
        country: "Thái Hà"
    }
};


//dùng arr lưu trữ object:

const studentList = [student1, student2];

//in ra student List:
console.log("StudentList:\n", studentList);
console.log(`Student List:${studentList}`);
console.log("Unit 6: Template Strings")
//Cấu trúc: `${tên_biến}`, dùng dấu nháy chéo nhé!


const name = "Cities";
const age = 25;

const introduction = "my name is" + name + " and I'm " + age;

console.log(introduction);

// cách tự nhiên hơn:
const infor = `my name is ${name} and I'm ${age} years old`;
console.log(infor);

//cấu trúc
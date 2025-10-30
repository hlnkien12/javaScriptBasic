console.log("Unit 6: Template Strings")
//Cấu trúc: `${tên_biến}`, dùng dấu nháy chéo nhé!


const name = "Cities";
const age = 25;

const introduction = "my name is" + name + " and I'm " + age;

console.log(introduction);

// cách tự nhiên hơn:
const infor = `my name is ${name} and I'm ${age} years old`;
console.log(infor);



//Bản chất : ép kiểu dữ liệu về kiểu dữ liệu String
// Kết luận:

//-Template String có thực hiện ép kiểu về String khi ghép giá trị.
//-Bản chất không chỉ là ép kiểu,
// mà là một cú pháp nâng cao (template literal) giúp tạo chuỗi động,
// chèn biểu thức, xuống dòng tự nhiên, và đọc dễ hơn nhiều so với phép cộng chuỗi thông thường.
console.log("Unit 5: Comment of javascript, console");


//kí hiệu: //: comment dòng code
//         /*comment*/: comment nhiều dòng
//phím tắt: ctrl + / = //

console.log("Unit 5")//in ra info: thông tin muốn in ra
console.error("oops my mistake")//in ra error: lỗi — tức là có điều gì đó không đúng trong quá trình chạy hoặc system
console.warn("sopt here")//in ra cảnh báo

//Không nên cộng chuối dễ sai
let Name = 'Beck';
let age = 19;
console.log("Name: " + Name + ", Age: " + age);

//cách an toàn hơn trong Javascript:
console.log("Name:", Name, ", Age:", age);


//Tô màu cho console.log() bằng %c
console.log("%cCảnh báo!", "color:red; font-weight:bold;");
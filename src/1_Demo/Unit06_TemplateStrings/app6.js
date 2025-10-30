console.log("Unit 6: Template Strings")
//Cấu trúc: `${tên_biến}`, dùng dấu nháy chéo nhé!


const name = "Cities";
const age = 25;

const introduction = "my name is" + name + " and I'm " + age;

console.log(introduction);

// cách tự nhiên hơn: Temple String:`${string}`
const infor = `my name is ${name} and I'm ${age} years old`;
console.log(infor);



//Bản chất : ép kiểu dữ liệu về kiểu dữ liệu String
// Kết luận:

//-Template String có thực hiện ép kiểu về String khi ghép giá trị.
//-Bản chất không chỉ là ép kiểu,
// mà là một cú pháp nâng cao (template literal) giúp tạo chuỗi động,
// chèn biểu thức, xuống dòng tự nhiên, và đọc dễ hơn nhiều so với phép cộng chuỗi thông thường.

//2, backslash in javaScript:


//3,Kiểm tra độ dài:
let fullName1 = "kdkkdkskdkd";
console.log(fullName1.length)//11

//4, Cách viết String dài
let fullName2 = 'kdkffkkkkkkkkkkkkkk'
    + 'dkdsdddddddddddddddddddddddddddđ'
    + 'kdsssssssssssssssssssssssssssssss'

console.log(fullName2);


//5.hàm sử lý String:
const string = " String JS NOT JS JS  JS JAVA "

//1. length : đo độ dài chuỗi:
console.log(string.length);

//2. Find index: .indexOf("string"): trả về vị trí đầu tiên khi tìm thấy chuỗi
console.log(string.indexOf("JS"));//7 Not 14

//muốn ra 14:
console.log(string.indexOf("JS", 8));// 14
//==> vị trí bắt đầu của chuỗi đầu và vị trí kết thúc cua chuỗi đầu


//3. Cut String: .slice(a,b)// cut từ [a b): trái qua phải
console.log(string.slice(4, 6)) //ng

//cut từ phải qua trái: slice(-b, -a) cut từ [-b, -a)
console.log(string.slice(-6, -4)) //ng


//4.replace:ghi đè/thay thế: .replace('a', 'b'), thay thế a = b
console.log(string.replace('JS', 'Java')) //


//5.Convert to upper Case: toLocaleUpperCase()
console.log(string.toLocaleUpperCase());

//6.Convert to lower Case:
console.log(string.toLocaleLowerCase());

//7.Trim(): Dùng để sử lý string thừa khoảng trắng đầu cuối:
console.log(string.length);
console.log(string.trim().length);
console.log(string.length);


//8.Split(điểm_chung): tách 1 chuỗi thành array(), cần timd điểm chung của string đó
let languages = 'JS, PHP, Ruby';
console.log(languages.split(','));


//9. Get a character by index:
let char = languages.charAt(4);

console.log(char);//r

//10. check typeof

console.log(typeof languages.charAt(35));



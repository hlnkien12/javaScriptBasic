//trong javaScript không cần kháo báo kiểu dữ liệu cho biến
// vì javaScript là ngôn ngữ động (dynamic typing language)
//các từ khoá: var, let, const sẽ tự động xác định kiểu dữ liệu dựa trên giá trị gán cho biến

console.log("this is app3.js in Unit3_DataType");

//I.Các kiểu dữ liệu cơ bản trong javaScript:
//============================================================================
//1.Number

const myAge = 25;
const myScore = 9.5;

console.log(myAge);
console.log(myScore);

//1.2,NaN: not a number: đại diện cho 1 kiểu số ko hợp lệ
let re = 20 / 'ABC';
console.log(re);//NaN

///Cách check number: isNaN()
console.log(isNaN(re));//true

//1.3 Làm việc với Number:
///.toString()
let PI = 3.14;
let PE = 5;
console.log(PE.toString());//chuyển value từ số sang chuỗi.

///.toFixed()
// Nó làm tròn số và chuyển thành chuỗi với n chữ số sau dấu thập phân.
// Nếu không truyền gì (toFixed()), mặc định là n = 0.
console.log(PI.toFixed());

////Bài tập:
// Tạo hàm isNumber, hàm này dùng với mục đích kiểm tra xem một giá trị có phải là 1 số hay không(check cả NaN)
// Hàm isNumber có 1 tham số, hãy đặt tên nó là value
// Khi value có kiểu số, hàm sẽ trả về true, ngược lại trả về false


//============================================================================

//2.String
const myName = "Beck";
const myFirtName = 'David';
console.log(myName + " " + myFirtName);

// Ghép chuỗi:
const myFullName = myFirtName + " " + myName;
console.log("full name is: " + myFullName)


//3.Boolean : true/false

const isMen = true;
const isGay = false;

console.log("isMae: " + isMen);
console.log("isGay: " + isGay);

//4.Undefined : biến chưa được gán giá trị
let myJob;
console.log(myJob); //undefined

//5.Null : biến không có giá trị
const myCar = null;
console.log(myCar);//null

//==> undefined là chưa dc gán giá trị, null là không có giá trị.


//==> Tóm cac kiểu dữ liệu nguyên thuỷ trong javaScript hay dùng khi đi làm:
//Number, String, Boolean, Undefined, Null. NHớ kỹ nhé!

//II.Kiểu dữ liệu phức tạp trong javaScript:
//1.Object: key-value
// lưu trữ dữ liệu theo dạng key-value (thuộc tính - giá trị)
//==> lưu biến số có nhiều thông tin mà ko phải declare nhiều biến riêng l

const personInfo = {
    name: "Kane",
    age: 28,
    address: "bayern",
    Phone: 12345,
}

console.log(personInfo);

//2.Array: lưu trữ dữ liệu theo dạng danh sách (list)
//mảng có thẻ chứa nhiều giá trị bên trong 1 biến
// Cấu trúc: let/const <tên_mảng> = [giá_trị1, giá_trị2, giá_trị3,...];

const NumberList = [1, 2, 3, 4, 5, 6, 7, 8, , 9, 10];
console.log(NumberList);

const stringList = ["Hello", "Hi", "How are you"];
console.log(stringList);


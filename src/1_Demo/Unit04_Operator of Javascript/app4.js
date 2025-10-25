console.log("Unit 4 - Các phép toán cơ bản trong Javascript");
//I.Phép toán số học (Arithmetic Operators)

const a = 5;
const b = 2;

//1.Cộng (Addition), Trừ(Subtraction), Nhân(Multiplication), Chia(Division), chia lấy dư(Modulus)
console.log(a + b); //Cộng: 7
console.log(a - b); //Trừ: 3
console.log(a * b); //Nhân: 10
console.log(a / b); //Chia: 2.5
console.log(a % b); //Chia lấy dư: 1

//==> Phép toán số học cơ bản: +, -, *, /, %
//==> Làm cách khác: tạo ra các biên: Sum, Difference, Product, Quotient, Remainder.


//2.++ (Increment) và -- (Decrement)
//2.1 Increment: tăng giá trị biến lên 1 đơn vị
let i = 10;
i++;
console.log(i); //11

++i;
console.log(i);//12

//=> sự khác nhau giữa i++ và ++i là:

//i++: trả về giá trị ban đầu rồi mới tăng lên 1
//++i: tăng giá trị lên 1 rồi mới trả về giá trị
//i đang là: 12
console.log(i++);//12, trả về giá trị ban đầu là 12 rồi mới tăng lên 1
console.log(i); //13, trả về giá trị sau khi tăng là 13

//i đang là : 13
console.log(++i);//14, tăng lên 1 rồi trả về giá trị là 14
console.log(i);//14, giá trị hiện tại vẫn là 14

//2.2 Decrement: giảm giá trị biến đi 1 đơn vị(tương tự phép tăng tự thân Increment)

//? let y = i++; vậy y có giá trị là bn =? (i = 1)//////
//? let z = ++i; vậy z có giá trị là bn =? (i = 1)//////
//? let p = i++ + ++i; giá trị p = ? (i = 1)/////////////
//? let q = ++i * i++; giá trị q = ? (i = 1)/////////////


//II.Phép toán so sánh (Comparison Operators)
//1. > (Lớn hơn), < (Nhỏ hơn), >= (Lớn hơn hoặc bằng), <= (Nhỏ hơn hoặc bằng)
//2. == (Bằng), != (Khác)
//3. === (Bằng giá trị và kiểu dữ liệu), !== (Khác giá trị hoặc khác kiểu dữ liệu)
//4.!== (Khác giá trị hoặc khác kiểu dữ liệu)

const a1 = 5;
const b1 = '5';

console.log(a1 == b1);// true
console.log(a1 === b1);//false
console.log(a1 !== b1);//true



















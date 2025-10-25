console.log("this is app2.js in Unit2_CachKhaiBaoBien");

//Cách khai báo biến trong javaScript:

// Cấu trúc: <từ khoá> + <tên_biến> = <giá_trị>;

//1.var : ít được sử dụng vì có nhiều hạn chế, ví dụ:
var name = 'Kiên';
console.log(name); // chữ name bị ghi đè vì sử dung var, đây là điểm hạn chế của var


//2.const : biến hằng, không thể thay đổi giá trị sau khi đã khai báo:
const age = 30;
console.log(age);

//3.let : biến có thể thay đổi giá trị, khắc phục được hạn chế của var:
let address = 'Hà Nội';
console.log(address);

//let và const khác nhau:
//- let có thể thay đổi giá trị của biến sau khai báo:
let city = 'Hano';
city = 'HCM';
console.log(city); //HCM;

const country = 'VN';
//country = 'USA';console.log(country); //Lỗi vì const không thể thay đổi giá trị sau khai báo
console.log(country); 

console.log("Unit 15: Truy cập, chỉnh sửa, thêm, xoá phần tử trong mảng")
//================================================================================================

/**
 * I.Truy cập phần tử trong mảng
 * 
 * =>index = 0 ; <arrName>[index]
 */
const names = ["beck", "Hino", "Gusto", "bla bla", "nam", "nữ"];

//dùng console.log()
console.log("0 = ", names[0]);//lấy elm 1
console.log("2 = ", names[2]);//elm 3

//lấy 1 chỉ số ko tồn tại trong array
console.log("10 = ", names[10]);

//==> 10 = undefined.(đối javascript, ngôn ngữ khác thì là exception)

//================================================================================================

/**
 * II.Chỉnh sửa
 * Eidt elm:
 * 
 * <arrName>[index] = "content";
 */
//Eidt elm:

names[2] = "Paulo";
console.log(names);

//================================================================================================

/**
 * III.Thêm, xoá(add, delete)
 *
 * Add:
 * push(): thêm vào cuối mảng
 * unshift(): add đầu mảng
 *
 * Delete:
 * pop(): xoá elmcuối mảng
 * shift(): xoá elm đầu mảng
 *
 * ==> để const vẫn thay đổi đc array(kiểu dữ liệu tham chiếu) nhé,
 *  chỉ có không gán đc mảng mới thôi
 */


//Add:
names.push(true, "Raya");//thêm 2 elm vào cuối Array
console.log(names);

names.unshift("Ricon");//thêm 1 elm vào đầu Array
console.log(names);

//Delete:
names.pop();
console.log(names);//Delete elm ở cuối Array

names.shift();
console.log(names);//Delete elm đầu Array


//================================================================================================

/**
 * IV, Các methods hay dùng:
 * 
 */

//1. toString()
console.log(typeof names.toString());

//2.join('kí tự chung'): biến array thành 1 string:
console.log(names.join('--'));

//3.Splice()
// Dùng để thêm, xóa, hoặc thay thế phần tử trong mảng.
// Làm thay đổi mảng gốc.
//cú pháp: array.splice(start, deleteCount, item1, item2, ...);
// start: vị trí bắt đầu (index)

// deleteCount: số phần tử muốn xóa

// item1, item2, ...: phần tử muốn thêm (nếu có)
console.log(names);
console.log(names.splice(1, 2, 'PHP'));//trả về mảng các phần tử bị xoá:
console.log(names);

//4.Concat()
// Dùng để nối (gộp) nhiều mảng hoặc phần tử lại với nhau.
//Không làm thay đổi mảng gốc → trả về mảng mới.
//cú pháp: array1.concat(array2, array3, ...);
let languages = ['VN', 'ENG', 'UK'];
let games = ['LMTH', 'Valorant'];
console.log(names.concat(languages, games));//trả về mảng gộp
console.log(names);
//5.Slice()
//Dùng để cắt một phần mảng (hoặc chuỗi).
//Không làm thay đổi mảng gốc.
//cú pháp: array.slice(start, end);
// start: vị trí bắt đầu (index)

// end: vị trí kết thúc (không bao gồm end)

console.log(names.slice(1, 3));


//==================================================================================
/**
 * Bìa tập:
 * 1.Cho trước hàm joinWithCharacter có 2 tham số là 
 * array và charactor, hãy hoàn thành phần nội dung 
 * hàm sao cho hàm trả về 1 chuỗi là kết quả của việc nối 
 * từng phần tử của mảng với charactor.
 * 
 * console.log(result); // Expected: "Honda - Mazda - Mercedes"
 * 
 * 
 * 
 * 2.hãy tạo hàm getLastElement có 1 tham số 
 * ( hàm này luôn truyền đối số là 1 array), 
 * hàm này sẽ trả về phần tử cuối cùng trong mảng.
 * 
 * 
 * 
 * 3.Để vượt qua thử thách này, hãy tạo hàm getFirstElement có 1 tham số 
 * ( hàm này luôn truyền đối số là 1 array), 
 * hàm này sẽ trả về phần tử đầu tiên trong mảng.
 * 
 * ==> ko làm thay đổi mảng gốc.
 * 
 * 
 */


/////Spreading:
const numbers = [1, 2, 3, 4, 5, 6];

const result = [a, b, c] = numbers;//ở đây result = numbers

// const result = [a, b, c];

console.log(result);


const person = [
    { nameP: "Kiên", age: 19 },
    { nameP: "Long", age: 21 },
    { nameP: "Laon", age: 23 },
    { nameP: "Nhật", age: 20 },
    { nameP: "Chual", age: 21 }
];

const [a1, b1, c1] = person;
console.log([a1, b1, c1]);
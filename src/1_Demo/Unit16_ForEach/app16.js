console.log("Unit 16: ");


/**
 * hàm .length: trả về chỉ số tự nhiên, đếm thừ 1!
 */
const myClass = ["beck", "Gusto", "Roger", "Raya", "Paulo", "Dzeko"];
console.log(myClass, myClass.length);

//let i = 0:
for (let i = 0; i < myClass.length; i++) {
    console.log("i = ", i, " and value = ", myClass[i]);
}

//let i = 1:
//chỉ số truy cập phải trừ 1 cho đến khi quét hết mảng: i - 1
//ko thì sẽ thiếu elm đầu và undefine ở i = length

for (let i = 1; i <= myClass.length; i++) {
    console.log("i = ", i, " and value = ", myClass[i - 1]);
}

//==================================================================
/**
 * FOR-EACH (READ DATA)
 * -Duyệt qua từng phần tử trong mảng.
 * 
 * -Không  tạo mảng mới,chỉ dùng để thao tác và in ra(nghĩa là không làm thay đổi mảng ban đầu)
 * 
 * -không thẻ dùng đc break, return để dừng giữa chừng
 * 
 * -forEach() nhận một hàm callback ẩn danh (anonymous function).
 */

/**CẤU TRÚC
 * 1.function thường:
 * array.forEach(function(elm, chỉ số){
 *      //code xử lý từng phần tử
 * })
 * 
 * 
 * 2.Viết kiểu Arrow function:
 * array.forEach((element, index) => {
 *  // Code xử lý từng phần tử
 *   });
 *
 * -forEach() nhận một hàm callback ẩn danh (anonymous function).
 * 
 */
//Viết kiểu anonymous function bình thường
myClass.forEach(function (student, index) {
    console.log(`${index}.Value = ${student}`);
});

//viết kiểu Arrow function:
myClass.forEach((student, index) => {
    console.log(`${index + 1}.Value = ${student}`);
});


//Nếu vẫn muốn gọi hàm trong for-each thì phải build ở ngoài

console.log("============================================")
function demStudent(value, index) {
    console.log(`element ${index}.value = ${value}`)
}

myClass.forEach(demStudent);
console.log("Unit 11: Function");

/**I.CẤU TRÚC
 * function + <functionName>(){
 *      state;
 * }
 * 
 * Cách thục thi:
 * gọi tên Function:  <functionName>();
 */

//Ví dụ: Build function calculate sum: a + b;

//1.build:
function calSum(a, b) {
    return a + b;
}

//2.call/invoke:

console.log(calSum(6, 10));//16

// =====================================================================
/**
 * II.Parameters and Arguments
 * 
 * Parameters: tham số build trong hàm
 * Arguments: Đối số giá trị truyền vào hàm
 */

//1.ví dụ:

function fullName(fisrtName, lastName) {
    console.log("Full Name: ", fisrtName + lastName);
}

fullName("Kiên", "Trinh");

//parameter là: (fisrtName, lastName)
//arguments là: ("Kiên", "Trinh").


//===============================================================
/**
 * III.Trong giới hạn data types truyền vào function.
 * 
 * truyền số
 * 
 * truyền string
 * 
 * đều đc
 */

//1.Ví dụ:
console.log(calSum("Beck", "Kham"));//BeckKham
console.log("\n\n")
fullName(1, 2);//Full Name: 3



console.log("Unit 11: Function");

/**I.CẤU TRÚC
 * function + <functionName>(parameter){
 *      state;
 *      return: có thể có hoặc không 
 *      (câu lệnh cuối trong hàm mà là console.log() thì ko nên dùng)
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

//2.call/invoke: lưu ý: gọi hàm bằng console.log() mà ko có return thì sẽ bị underfine nhé!(chú ý)

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


//==================================================================
/**
 * IV. LỆNH return
 *  Xác định hàm trả về giá trị gì: đơn giản, phúc tạp,
 *  Trong hàm mà gặp câu lệnh return ở đâu thì hàm sẽ dừng luôn, muốn dùng lại thì phải gọi lại hàm
 *  
 * 
 * lưu ý:đéo dùng return nếu kết thúc hàm là consolelog()nhé!
 * dùng thì là nó return viod nhé, mà trên tab console sẽ hiện underfine.
 */


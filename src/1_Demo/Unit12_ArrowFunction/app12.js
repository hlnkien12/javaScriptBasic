console.log("Unit 12: Arrow Function");

/**I.Ý NGHĨA
 * Arrow Function: Hàm mũi tên: =>
 * Cách viết viết ngắn gọn hơn hàm thông thường
 * giúp code gọn, dễ đọc và tiện cho các hàm ẩn danh (anonymous function)
 * 
 */

/**II.CẤU TRÚC
 * 
 * const function_name = (parameter) =>{
 *      function_body;
 *      return value;
 * }
 *
 * Cú pháp rút gọn trên 1 dòng:
 * const function_name = (parameter) => value;
 * 
 * chỉ có 1 parameter, có thể bỏ luôn ngoặc ():
 * const square = x => x * x;
 */


//ví dụ:
const information = (name, age, address) => {
    const myInfor = `Name: ${name}\nage:${age}\naddress: ${address}`;
    return myInfor;
};

console.log(information("Kiên", 20, "Hola"));

//gọi bằng chính hàm:
const information2 = (name, age, address) => {
    const myInfor = `Name: ${name}\nage:${age}\naddress: ${address}`;
    console.log(myInfor);
};

information2("Beck", 19, "Mu");





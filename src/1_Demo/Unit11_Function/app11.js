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
 * dùng thì là nó return void() nhé, mà trên tab console sẽ hiện underfine.
 */



//===================================================================
/**
 * V,OverLoad (nạp chồng phương thức), Overide(Ghi đè phương thức)
 * 
 * 1. Overload (Nạp chồng phương thức) ko có thật trong JS
 Khái niệm:

Là việc cùng một tên hàm, nhưng khác danh sách tham số (số lượng, kiểu dữ liệu hoặc thứ tự).

 Diễn ra trong cùng 1 class.

 2. Override (Ghi đè phương thức) có trong javascript
 Khái niệm:

Là việc lớp con định nghĩa lại phương thức của lớp cha, giữ nguyên tên, kiểu trả về, và tham số,
nhưng thay đổi phần thân hàm (logic).

 Diễn ra giữa 2 class có quan hệ kế thừa (extends).
 */

class Animal {
    sound() {
        console.log("Animal sound");
    }
}

class Dog extends Animal {
    sound() {
        console.log("Dog barks");
    }
}

const dog = new Dog();
dog.sound(); // 👉 "Dog barks"

//3.Định nghĩa hàm trong hàm:
function showMessage() {
    function showMessage2() {
        console.log('Message 2');
    }

    showMessage2();
}
showMessage();
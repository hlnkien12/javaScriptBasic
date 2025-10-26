console.log("Unit 10 :Break, Continue")

//I.Break
/**
 * Hỗ trợ thoát Vòng lặp,switch tại 1 thời điểm, 1 điều kiện nào đó và bạn xậy dựng nên
 * Lệnh break; chỉ dùng trong switch-case hoặc vòng lặp,
 * không dùng trong if → sẽ bị lỗi “Illegal break statement”.
 */
console.log("Break:")
for (let i = 1; i < 10; i++) {
    console.log("i = ", i);
    if (i === 5) {//thoát vòng lặp khi i === 5
        console.log("Đã thoát vòng lặp tại i = 5");
        break;
    }
}//value: 1,2,3,4,5


//II.Continue
/**
 * Bỏ qua các câu lệnh bên dưới vào quay lại thực hiện lại các câu lệnh phía trên đã thực hiện rồi
 */
console.log("\nContinue:")
for (let i = 1; i < 10; i++) {
    if (i === 5) {//quay lại vòng lặp khi i === 5, 
        console.log("quay lại vòng lặp tại i = 5");
        continue;
    }
    console.log("i = ", i);
}//value = 1,2,3,4,6,7,8,9
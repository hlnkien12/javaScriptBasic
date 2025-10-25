console.log("Unit 9: For, While, Do-While Loop");

//I.For Loop:

//dùng let nhé, vì const nó không thay đổi value
console.log("For Loop:")
for (let i = 0; i < 5; i++) {
    console.log("i = ", i);
}

//II.While Loop:
//While(true) => vòng lặp vô hạn, chú ý điều kiện và key truyền vào
//vô hạn:
let num1 = 10;
console.log("While Loop:")
while (num1 > 5) {
    console.log("Vô hạn lần = ", num1);
    --num1;//thêm dk này vào để ngắt vòng lặp
} //vì num1 luôn luôn > 5_ chú ý nhé!



//III.Do-While

let score = 20;
console.log("do-while Loop:")
do {
    console.log("Score = ", score);
    score--;
} while (score > 50);//Score = 20;

//==>chạy tối thiểu 1 lần cho dù điều kiện while SAI

do {
    console.log("Score = ", score);
    score--;
} while (score > 15);//Score = 20,19,18,17,16

//IV. For-each.
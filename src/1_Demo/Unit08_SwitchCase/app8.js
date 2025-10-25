console.log("Unit 8: Switch-Case")

/*CẤU TRÚC:
switch(key){
    case 1..:
        state;
        break;
    case 2..:
        state;
        break;
    default:
        state;
}
...kết thức 1 case phải có break; (thoát đk khi đã đc kiểm tra)
...default ko cần break (tự thoát)

*/
//VÍ DỤ:
//Console.log out rank of Score: YEU,TB,KHA,GIOI
const score = 8.123;

if (score < 0 || score > 10 || isNaN(score)) {
    console.log("score is not valid");
} else {
    switch (true) {
        case (score >= 0 && score < 4):
            console.log("YEU");
            break;
        case (score >= 4 && score < 6):
            console.log("TB");
            break;
        case (score >= 6 && score < 8):
            console.log("KHA")
            break;
        case (score >= 8 && score < 10):
            console.log("GIOI");
            break;
        default:
            console.log("bye bye!!");
    }
}

//==> dùng switch case mà trong các case có dùng điều kiện thì key nên để là: true or false, đừng dùng tên biến
//vì trong javascript: 1 case chứa điều kiện khi so sánh với key thì sẽ là so sánh: === nên sẽ trả về true/false

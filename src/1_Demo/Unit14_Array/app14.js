console.log("Unit 14: Array");

/**
 *CẤU TRÚC:

 * const/let <Array_Name> = ["elm1", "elm2", "elm3"]
 * 
 * chạy theo chỉ số index:      0       1       2      => 3 elements
 * 
 * 
 * Mục đích: 
 * - Lưu trữ nhiều giá trị có cùng kiểu dữ liệu trong cùng một biến.
 * - Dễ dàng truy cập, lặp qua, thêm/xoá và sắp xếp dữ liệu.
 * - Giúp xử lý danh sách dữ liệu hiệu quả hơn.
 */
//KHỞI TẠO:
const names = ["Beck", "Garna", "Messi"];


//In Array bằng console.log
console.log(names);
//on element:
console.log(names[0]);

//Viết array có nhiều kiểu dữ liệu và viết array trong array:
const others = ["bale", true, [1, 2, 3], "bla bla"];

console.log(others);

//==> cách viết này rất vô nghĩa, mặc dù trong Javascript vẫn cho phép
//viết như vậy(đọc lại mục đích cuả array)
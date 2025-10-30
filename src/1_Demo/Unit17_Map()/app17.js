console.log("Unit 17: Map()");


const scores = [1, 2, 3, 4, 5];

scores.forEach((value, index) => {
    console.log(`index=${index}.value=${value}`);
});




/**MAP(): MODIFY DATA
 * 
 * 
 * -Không làm giá trị của array/biến số ban đầu thay đổi
 * -Nó trả về một mảng mới với các giá trị được “biến đổi” từ mảng cũ
 * -Thường dùng để chuyển đổi dữ liệu
 */

/**Cấu Trúc:
 * 
 * arr.map((elm,index){
 *      //code xử lý element
 *      return <giá trị mới>;(dùng element để truy cập)
 * })
 * 
 *-element: giá trị hiện tại trong mảng
 *
 *-index: chỉ số (vị trí) của phần tử
 *
 *-return: bắt buộc là giá trị sẽ được thêm vào mảng mới
 * 
 * Map: Duyệt qua mảng + gọi hàm callBack để xử lý các elm trong arr + trả ra arr mới
 * callBack ko cần có tên, nếu muốn tái sửu dụng có thể tạo 1 function bình thường or Arrow Function để sử dụng
 */

scores.map((value, index) => {
    console.log(`index = ${index}. value = ${value}`)
});


const scores2 = scores.map((value, index) => {
    return value * 2;
})

console.log("scores:\n", scores);
console.log("scores2:\n", scores2);
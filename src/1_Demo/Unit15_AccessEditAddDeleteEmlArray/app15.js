console.log("Unit 15: Truy cập, chỉnh sửa, thêm, xoá phần tử trong mảng")

/**
 * I.Truy cập phần tử trong mảng
 * 
 * =>index = 0 ; <arrName>[index]
 */
const names = ["beck", "Hino", "Gusto", "bla bla", "nam", "nữ"];

//dùng console.log()
console.log("0 = ", names[0]);//lấy elm 1
console.log("2 = ", names[2]);//elm 3

//lấy 1 chỉ số ko tồn tại trong array
console.log("10 = ", names[10]);

//==> 10 = undefined.(đối javascript, ngôn ngữ khác thì là exception)



/**
 * II.Chỉnh sửa
 * Eidt elm:
 * 
 * <arrName>[index] = "content";
 */
//Eidt elm:

names[2] = "Paulo";
console.log(names);

/**
 * III.Thêm, xoá(add, delete)
 *
 * Add:
 * push(): thêm vào cuối mảng
 * unshift(): add đầu mảng
 *
 * Delete:
 * pop(): xoá elmcuối mảng
 * shift(): xoá elm đầu mảng
 *
 * ==> để const vẫn thay đổi đc array(kiểu dữ liệu tham chiếu) nhé,
 *  chỉ có không gán đc mảng mới thôi
 */


//Add:
names.push(true, "Raya");//thêm 2 elm vào cuối Array
console.log(names);

names.unshift("Ricon");//thêm 1 elm vào đầu Array
console.log(names);

//Delete:
names.pop();
console.log(names);//Delete elm ở cuối Array

names.shift();
console.log(names);//Delete elm đầu Array



/**
 * 
 */






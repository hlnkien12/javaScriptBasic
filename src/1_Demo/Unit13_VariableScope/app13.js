console.log("Unit 13: Variable Scope!");

/**
 * Code chạy từ trên xuống dưới.
 * 
 * Global: dùng đc mọi nơi
 * Function Scope: chỉ dùng đc trong hàm đó
 * Block Scope: chỉ trong khối block đó: if/else, loops
 * 
 * lưu ý không nên dùng var để tạo 1 biến global: vì
 * phạm vi của nó rộng đến mức, câu lệnh: console.log()
 * ở file js trong folder này có thể gọi đc biến var đó trong
 * 1 file js ở trong folder khác(rộng vkl, lần đầu t thấy có cái
 * ngôn có acess modify rộng như thế cho Variable đấy)
 * 
 * Tóm lại là trong Javascript hiện ko dùng luôn : var cho an toàn
 */
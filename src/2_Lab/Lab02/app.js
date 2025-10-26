console.log("LAB 02: Calculator Average Score!");

/**
 * I. FUNCTION
 * author: KiênPC
 */

//create 3 variables: math, van, anh
const math = 9;
const van = 6.5;
const anh = 3.5;

//create function calAverage():
function calAverage(math, van, anh) {
    const averageScore = (math + van + anh) / 3;
    return averageScore;
}


//create function classifyStudent(average):
function classifyStudent(average) {
    if (average < 0 || average > 10 || isNaN(average) || average === "") {
        console.log("Not valid!");
    } else {
        if (9 < average && average <= 10) {
            console.log("\nĐiểm trung bình:", average, "xếp loại: Xuất Sắc");
        } else if (8 < average && average <= 9) {
            console.log("\nĐiểm trung bình:", average, "xếp loại: Giỏi");
        } else if (6.5 < average && average <= 8) {
            console.log("\nĐiểm trung bình:", average, "xếp loại: Khá");
        } else {
            console.log("\nĐiểm trung bình:", average, "xếp loại: Trung bình");
        }
    }
}


// function Call/Invoke
//C1:
console.log("I,function:");
console.log("Cách 1:");
classifyStudent(calAverage(math, van, anh));
//C2:
console.log("Cách 2:")
const avg = calAverage(math, van, anh);
classifyStudent(avg);




/**
 * II.Arrow Function + switch case
 * author KiênPC
 */
const calAvg = (math, van, anh) => {
    return (math + van + anh) / 3;
}

const classifyStudent2 = (avg) => {
    if (avg < 0 || avg > 10 || isNaN(avg)) {
        return "Not Valid!";
    } else {
        switch (true) {
            case (9 < avg && avg <= 10):
                return (`\nĐiểm trung bình:${avg} \nxếp loại: Xuất Sắc`);
            case (8 < avg && avg <= 9):
                return (`\nĐiểm trung bình:${avg} \nxếp loại: Giỏi`);
            case (6.5 < avg && avg <= 8):
                return (`\nĐiểm trung bình:${avg} \nxếp loại: Khá`);
            case (0 <= avg && avg < 6.5):
                return (`\nĐiểm trung bình:${avg} \nxếp loại: Trung bình`);
            default:
                return "\nBye bye!";
        }
    }
}

console.log("\nII,Arrow function:");
console.log(classifyStudent2(calAvg(math, van, anh)));

/**
 * III. version 3 classifyStudent():
 */

const classifyStudent3 = (avg) => {
    if (avg < 0 || avg > 10 || isNaN(avg)) {
        return "Not Valid!";
    } else {
        switch (true) {
            case (9 < avg && avg <= 10):
                return "Xuất sắc";
            case (8 < avg && avg <= 9):
                return "Giỏi";
            case (6.5 < avg && avg <= 8):
                return "Khá";
            case (0 <= avg && avg < 6.5):
                return "Trung Bình";
            default:
                return "Bye bye!";
        }
    }
}

console.log("\nVersion 3:");
const avg3 = calAverage(math, van, anh);
console.log(
    `Average Score:${avg3}\nXếp loại: ${classifyStudent3(avg3)}`
);

/*
switch (true) {
    case (9 < avg && avg <= 10):
        return ("\nĐiểm trung bình:", avg, "xếp loại: Xuất Sắc");
    case (8 < avg && avg <= 9):
        return ("\nĐiểm trung bình:", avg, "xếp loại: Giỏi");
    case (6.5 < avg && avg <= 8):
        return ("\nĐiểm trung bình:", avg, "xếp loại: Khá");
    case (0 <= avg && avg < 6.5):
        return ("\nĐiểm trung bình:", avg, "xếp loại: Trung bình");
    default:
        return "\nBye bye!";
}
    }
    Trong JavaScript, dấu phẩy( ,) không nối chuỗi mà chỉ trả về giá trị cuối cùng.
    return("\nĐiểm trung bình:", avg, "xếp loại: Xuất Sắc");
    → Dòng này chỉ trả về "xếp loại: Xuất Sắc", vì avg và chuỗi đầu tiên bị bỏ qua.
    Cách sửa đúng:

Dùng template string (`) hoặc chuỗi cộng (+) để ghép nội dung.
(đã sửa ở version 2 và 3)*/
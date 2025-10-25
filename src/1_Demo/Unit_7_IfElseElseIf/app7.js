
console.log("Unit 7: if/else/else if")


//Cách viết: if-else

/* if(condition){
        state
    }
    else{

    }
*/

//else-if
/* if(condition){
        state
    }
    else if(condition){
        state
    }
    else{
        state
    }
 */

//VÍ DỤ:
//Console.log out rank of Score
//NaN: not a number
const score = '100';
if (score >= 0 && score !== "" && !isNaN(score) && score <= 10) {
    if (0 <= score && score <= 4) {
        console.log("YEU");
    } else if (4 < score && score <= 6) {
        console.log("TB");
    } else if (6 < score && score < 8) {
        console.log("Kha")
    } else {
        console.log("Gioi");
    }
} else {
    console.log("score not invalid");
}

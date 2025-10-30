console.log("Unit 18: Filter");

const ages = [10, 20, 30, 4, 2, 12, 19, 5];

const agesX2 = ages.map((item, index) => {
    return item * 2;
})

console.log("ages:\n", ages);
console.log("agesX2:\n", agesX2);


/**Filter
 * 
 */

const agesGreatThan18 = ages.filter((item, index) => {
    return item > 18;
})

console.log("Filter ages Great Than 18:\n", agesGreatThan18);
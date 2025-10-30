console.log("Unit 20: AccessUpdateAttribute OF Object")


const person = {
    name: "Raya",
    age: 30,
    address: "Arsenal"
}
//print out bằng console.log(), Object.attribute:

//get data(Access):
//hay dùng:
console.log("person: ", person);
console.log("age: ", person.age);
console.log("address: ", person.address);
console.log("name: ", person.name);

//Cách khác: object["attribute"](ít dùng):
console.log("age:", person["age"]);


//set data(Update):
console.log("Before update:\n", person);
//1. add attribute:
person.language = "English";
person.gender = "Female";
console.log("Person infor after added: ", person);

//2. edit attribute:
person.age = 24;
console.log("\nPerson infor after edited: ", person);

//3. delete attribute:
delete person.gender;
console.log("\nPerson infor after delete: ", person);


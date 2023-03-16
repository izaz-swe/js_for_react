const person = {
    name: "Izaz Ahmmed Tuhin",
    age: 22,
    isMarried: false,
};

const {name, age, isMarried} = person;

const person2 = {
    ...person,
    name:"Jack",
}
console.log(name);

console.log(person2.name);

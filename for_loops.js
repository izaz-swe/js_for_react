const person = {name:"izaz", id:"201-35-634"};
let text ="";
for (let x in person){
    text+=person[x]+" ";
}

const cars = ['Audi','volvo'];
for(let x of cars){
    console.log(x);
}
console.log(text);
//in object method -- refer to obj

const person = {
    firstName:"izaz",
    lastName:"Ahmmed",
    fullName:function(){
        console.log(this.firstName+" "+this.lastName);
    }
}

person.fullName();
// alone ---global
let x = this;

console.log(x);

//in a function --global
function myFunction(){
  return this;   
}


//in a function strict mode (this is undefined)


//in event handlers -- the element that recived the event


//function binding
const person1 = {
    printName: function (){
        console.log(this.firstName+" "+this.lastName);
    }
}


const person2 = {
    firstName:"izaz",
    lastName:"Ahmmed Tuhin",
}

person1.printName.call(person2);
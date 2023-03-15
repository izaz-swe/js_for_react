const person={
    firstName:"Izaz",
    lastName:"Ahmmed",
    printName: function(){
        return this.firstName+ " "+ this.lastName;
    }
}

const member = {
    firstName: "Akash",
    lastName: "Ahmmed"
}

//member object borrows printName method from person obj.
let fullName = person.printName.bind(member);

//and this returns a new method
console.log(fullName());
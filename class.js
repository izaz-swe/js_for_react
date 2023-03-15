class Employee{
    constructor(name, designation){
        this.name = name;
        this.designation = designation;
    }

    printName(){
        console.log(this.name + " " + this.designation);
    }
}


let izaz = new Employee("Izaz Ahmmed Tuhin", "Lecturer");

izaz.printName();
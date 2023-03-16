let names = ["Izaz","Akash", "Tuhin", "Tuhin"];

for (let name of names){
    console.log(name);
}


let edit = names.map((name)=> "joe");

edit.map((name)=>{console.log(name)});


let filterd = names.filter((name)=> name!=="Tuhin");

filterd.map((name)=>{console.log(name)});
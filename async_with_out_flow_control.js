const processOrder = () => {
    console.log(`Processing order for customer 1`);

    var currentTime = new Date().getTime();
    
//working asyn but there is no flow control
    setTimeout(()=>{
        console.log(`cooking completed`);
    },3000);

    console.log(`oreder processed for customer 1`);
}


console.log(`take order for customer 1`);
processOrder();
console.log(`Completed order for customer 1`);
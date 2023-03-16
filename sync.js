const processOrder = () => {
    console.log(`Processing order for customer 1`);

    var currentTime = new Date().getTime();
    
// total process for 3 sec because of sync while loop
    while(currentTime+3000>= new Date().getTime());

    console.log(`oreder processed for customer 1`);
}


console.log(`take order for customer 1`);
processOrder();
console.log(`Completed order for customer 1`);
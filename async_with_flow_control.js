const takeOrder = (customer,callback)=>{
    console.log(`take order for ${customer}`);
    callback(customer);
};



const processOrder = (customer,callback) => {
    console.log(`Processing order for customer 1`);
    
    setTimeout(()=>{
        console.log(`cooking completed for ${customer}`);
        console.log(`oreder processed for ${customer}`);
        callback(customer);

    },3000);
    
    console.log("check");
};

const completeOrder = (customer)=>{
    console.log(`Completed order for ${customer}`);
};


takeOrder('customer 1', (customer)=>{
    processOrder(customer,(customer)=>{
        completeOrder(customer);
    });
});


takeOrder('customer 2', (customer)=>{
    processOrder(customer, (customer)=>{
        completeOrder(customer);
    })
});
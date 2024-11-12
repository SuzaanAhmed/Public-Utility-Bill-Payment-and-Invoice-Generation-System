const {bills,total_budget}=require("./constants");
const Bill_requests=require("./requests_queue");

const biller=new Bill_requests();

const EventEmitter=require('events');
const eventEmitter=new EventEmitter();

/*Below is how to take inputs, readline module from node.js allows us to read inputs.*/
const readline=require('node:readline')
const user_input=readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

/*Below are Triggers. Fixes the bug in "userPrompt", Switch case 5, where the menu re-prints before 
taking in "Number of Undo's". No idea why it works, but it works.*/
eventEmitter.on("getRequests",()=>{
    bills.forEach((bill)=>{
        biller.Enque_PaymentRequests(bill);
    });
    console.log("Payment Requests enqued.")
    userPrompt();
});

eventEmitter.on("viewRequests",()=>{
    console.log("Current payment requests:");
    biller.View_PaymentRequests_Queue();
    userPrompt();
});

eventEmitter.on("makePayment",()=>{
    console.log("Making payments: ")
    biller.Deque_Payments();
    userPrompt();
});

eventEmitter.on("viewHistory",()=>{
    console.log("Transaction History: ");
    console.log(biller.Stack_CheckHistory());
    userPrompt();
});

eventEmitter.on("undoTransactions",()=>{
    user_input.question("Number of transactions to refund: ",(undo_Point)=>{
        console.log(`${undo_Point} transactions refunded, utilities retracted.`)
        biller.Stack_undoTransactions(parseInt(undo_Point));
            userPrompt();
    });

});

eventEmitter.on('prioritiseQueue', () => {
    console.log("Sorting the payment requests as per the priority.")
    biller.Sort_Queue_byPriority();
    userPrompt();
});

eventEmitter.on('exit', () => {
    console.log("Exiting now.");
    process.exit(0);
});


/*Used while loop initially, before deciding to go recursive with userPrompt function.
The main functionality of our mini-project recursively takes place in here. */
function userPrompt(){
    console.log("1: Get payment requests");
    console.log("2: View Payment requests");
    console.log("3: Make payment");
    console.log("4: Check Transaction history");
    console.log("5: Undo transactions");
    console.log("6: Prioritise payment queue");
    console.log("7: Exit");

    /*Thanks to readline we can take inputs.*/
    user_input.question("Enter selection: ",(selection)=>{
        switch (parseInt(selection)) {
            case 1: eventEmitter.emit('getRequests');
            case 2: eventEmitter.emit('viewRequests');
            case 3: eventEmitter.emit('makePayment');
            case 4: eventEmitter.emit('viewHistory');
            case 5: eventEmitter.emit('undoTransactions');
            case 6: eventEmitter.emit('prioritiseQueue');
            case 7: eventEmitter.emit('exit');
            default:
                console.log("Invalid selection. Please try again.");
                userPrompt();         
        }
    });
}

userPrompt();
/*Initial call*/


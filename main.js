const {bills,total_budget}=require("./constants");
const Bill_requests=require("./requests_queue");

/*Below is how to take inputs, readline module from node.js allows us to read inputs.*/
const readline=require('node:readline')
const user_input=readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const biller=new Bill_requests();

/*Used while loop initially, before deciding to go recursive with userPrompt function.
The main functionality of our mini-project recursively takes place in here. */
function userPrompt(){
    console.log("1: Get payment requests\n");
    console.log("2: View Payment requests\n");
    console.log("3: Make payment\n");
    console.log("4: Check Transaction history\n");
    console.log("5: Undo transactions\n");
    console.log("6: Prioritise payment queue\n");
    console.log("7: Exit\n");

    /*Thanks to readline we can take inputs.*/
    user_input.question("Enter selection: ",(selection)=>{
        switch (parseInt(selection)) {
            case 1:
                bills.forEach((bill)=>{
                    biller.Enque_PaymentRequests(bill);
                })
                break;

            case 2:
                console.log(biller.View_PaymentRequests_Queue());
                break;

            case 3:
                const message = biller.Deque_Payments();

                if (message) 
                    console.log(message);
                
                break;

            case 4:
                console.log(biller.Stack_CheckHistory());          
                break;

            case 5:
                user_input.question("Number of undos: ", (undo_point) => {
                    const undoMessage = biller.Stack_undoTransactions(parseInt(undo_point));

                    if (undoMessage) 
                        console.log(undoMessage);
                    
                    userPrompt();  // Recursive call after undo
                });
                break;
            
            case 6:
                biller.Sort_Queue_byPriority();
                break;    

            case 7:
                console.log("Exiting now.");
                process.exit(0);
        }
        userPrompt();
        /*Recursive call to the user instead of having to worry about looping difficluties*/
    });
}

userPrompt();
/*Initial call*/
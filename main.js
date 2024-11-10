const {bills,total_budget}=require("./constants");

const Bill_requests=require("./requests_queue");
const readline=require('node:readline')
const r1=readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const biller=new Bill_requests();

/*Used while loop initially, before deciding to go recursive with userPrompt function*/
function userPrompt(){
    console.log("1: Enque Payment requests\n2: View Payment request queue\n3: Make payment\n4: Check Transaction history\n5: Exit");

    r1.question("Enter selection: ",(selection)=>{
        switch (parseInt(selection)) {
            case 1:
                console.log("Enque check");
                bills.forEach((bill)=>{
                    biller.enque(bill);
                })
                break;
            case 2:
                console.log("Queue check");
                console.log(biller.checkQueue());
                break;

            case 3:
                const message = biller.deque();

                if (message) 
                    console.log(message);
                
                break;

            case 4:
                console.log("Stack check");  
                console.log(biller.checkStack());          
                break;

            case 5:
                r1.question("Number of undos: ", (undo_point) => {
                    const undoMessage = biller.undoStack(parseInt(undo_point));

                    if (undoMessage) 
                        console.log(undoMessage);
                    
                    userPrompt();  // Recursive call after undo
                });
                break;

            case 6:
                console.log("Exiting now.");
                process.exit(0);
                break;
        }
        userPrompt();
        /*Recursive call to the user instead of having to worry about looping difficluties*/
    });
}

userPrompt();
/*Initial call*/
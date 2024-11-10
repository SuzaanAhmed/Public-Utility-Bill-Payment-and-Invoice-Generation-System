const bills = [
    { 
        id: 1,
        utility: 'Water',
        amount: 100
    },

    { 
        id: 2,
        utility: 'Electricity',
        amount: 200
    },

    { 
        id: 3,
        utility: 'Gas',
        amount: 150
    },

    { 
        id: 4,
        utility: 'Internet',
        amount: 300
    },

    { 
        id: 5,
        utility: 'Phone',
        amount: 250
    },

    { 
        id: 6,
        utility: 'Trash',
        amount: 50
    },

    { 
        id: 7,
        utility: 'Sewage',
        amount: 75
    },

    { 
        id: 8,
        utility: 'Heating',
        amount: 400
    },

    { 
        id: 9,
        utility: 'Cable',
        amount: 350
    },

    { 
        id: 10,
        utility: 'Security',
        amount: 500
    }
]

const Bill_requests=require("./requests_queue");
const readline=require('node:readline')
const r1=readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const biller=new Bill_requests();

function userPrompt(){
    console.log("1: View Payment request queue\n2: Make payment\n3: Check Transaction history\n4: Exit");
    r1.question("Enter selection: ",(selection)=>{
    switch (parseInt(selection)) {
        case 1:
            console.log("Queue check");
            
            break;

        case 2:
            console.log("Deque check");            
            break;
        case 3:
            console.log("Stack check");            
            break;
        case 4:
            console.log("Exit check");
            process.exit(0);
            break;

        default:
            break;
    }
    userPrompt();
});
}

userPrompt();
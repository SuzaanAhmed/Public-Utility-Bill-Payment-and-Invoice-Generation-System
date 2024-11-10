const {bills,total_budget}=require("./constants");
class Bill_requests{
    constructor(){
        this.stackIterator=-1;
        this.req=[];
        this.payments=[];
        this.total_budget = total_budget;
    }
    
    Enque_PaymentRequests(bill){
        this.req.push(bill);
    }

    Deque_Payments(){     
        if (this.req.length === 0) 
            return ("No bills in the queue to process.");

        let amnt=Number(this.req[0].amount);
        
        if (this.req.length === 0) 
            return ("No bills in the queue to process.");
        
    
        if (this.total_budget < amnt) 
            return (`${this.total_budget} is not sufficient to pay ${amnt} for ${this.req[0].utility}`);
        
        this.total_budget-=amnt;
        console.log(`Paid ${amnt} for ${this.req[0].utility}`);
        console.log(`${this.total_budget} remaining in the budget`);
        this.stackIterator++;
        this.payments.push(this.req[0]);
        this.req.shift();
    }

    View_PaymentRequests_Queue(){
        if (this.req.length === 0) {
            console.log("The queue is currently empty.");
            return;
        }

        return this.req.forEach((r)=>{
            console.log(`${r.utility}: ${r.amount}`);
        });
    }

    Sort_Queue_byPriority() {
        if (this.req.length === 0) {
            console.log("The queue is empty, nothing to sort.");
            return;
        }

        this.req.sort((a, b) => a.priority - b.priority); // Sorting by ascending priority
        console.log("Queue sorted by priority:");
        this.Sort_Queue_byPriority();
    }

    Stack_CheckHistory(){
        if (this.payments.length === 0) {
            console.log("No transactions in the history.");
            return;
        }

        return this.payments;
    }

    Stack_undoTransactions(undo_point){
        if (this.payments.length === 0) {
            console.log("No transactions to undo.");
            return;
        }

        let target_point = this.stackIterator - undo_point;
        /*To ensure that target point exists in the history*/
        if (target_point < -1) {
            console.log("Undo point exceeds available payment history.");
            return;
        }

        while(this.stackIterator>target_point){
            const lastPayment = this.payments[this.stackIterator];

            this.total_budget+=Number(lastPayment.amount);
            console.log(`${lastPayment.amount} refunded and ${lastPayment.utility} utility cancelled.`)
            this.req.unshift(lastPayment);
            this.payments.pop();
            this.stackIterator--;
        }
        return;
    }
}

module.exports=Bill_requests;
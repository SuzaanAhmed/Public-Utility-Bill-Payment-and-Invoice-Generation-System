const {bills,total_budget}=require("./constants");
class Bill_requests{
    constructor(){
        this.queueIterator=0;
        this.req=[];
        this.payments=[];
        this.total_budget = total_budget;
    }
    
    enque(bill){
        let amnt=Number(bill.amount);
        this.req.push(bill);
    }

    deque(){     
        let amnt=Number(this.req[0].amount);
        
        if (this.req.length === 0) 
            return ("No bills in the queue to process.");
        
    
        if (this.total_budget < amnt) 
            return (`${this.total_budget} is not sufficient to pay ${amnt} for ${this.req[0].utility}`);
        
        this.total_budget-=amnt;
        console.log(`Paid ${amnt} for ${this.req[0].utility}`);
        console.log(`${this.total_budget} remaining in the budget`);
        this.payments.push(this.req[0]);
        this.req.shift();
    }

    checkQueue(){
        return this.req.forEach((r)=>{
            console.log(`${r.utility}: ${r.amount}`);
        });
    }
}

module.exports=Bill_requests;
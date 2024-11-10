class Bill_requests{
    constructor(){
        this.req=[];
        this.payments=[];
    }
    
    enque(bill){
        let amnt=Number(bill.amount);
        this.req.push(bill);
        console.log(`Payment request: ${amnt} for ${bill.utility}`)
    }
    deque(bill){        
        let amnt=Number(bill.amount);
        if(total_budget<amnt){
            console.log(`${total_budget} not sufficient to pay ${amnt} for ${bill.utility}`)
            paid=false;
            return 
        }
        total_budget-=amnt;
        console.log(`Paid ${amnt} for ${bill.utility}`)
        console.log(`${total_budget} remaining in the budget`)
        this.payments.push(bill);
        paid=true;
    }
}

module.exports=Bill_requests;
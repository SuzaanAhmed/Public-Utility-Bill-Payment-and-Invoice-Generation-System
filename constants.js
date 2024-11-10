//Seperate file for all constants really helps a lot.
const bills = [
    { 
        id: 1,
        utility: 'Water',
        amount: 100,
        priority: 2 
    },

    { 
        id: 2,
        utility: 'Electricity',
        amount: 200,
        priority: 4
    },

    { 
        id: 3,
        utility: 'Gas',
        amount: 150,
        priority: 7
    },

    { 
        id: 4,
        utility: 'Internet',
        amount: 300,
        priority: 10
    },

    { 
        id: 5,
        utility: 'Phone',
        amount: 250,
        priority: 5
    },

    { 
        id: 6,
        utility: 'Trash',
        amount: 50,
        priority: 5
    },

    { 
        id: 7,
        utility: 'Sewage',
        amount: 75,
        priority: 5
    },

    { 
        id: 8,
        utility: 'Heating',
        amount: 400,
        priority: 3
    },

    { 
        id: 9,
        utility: 'Cable',
        amount: 350,
        priority: 10
    },

    { 
        id: 10,
        utility: 'Security',
        amount: 500,
        priority: 10
    }
];

total_budget=1000;

module.exports={bills, total_budget};
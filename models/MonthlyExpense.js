const mongoose =  require('mongoose')

const ExpenseSchema = new  mongoose.Schema({
    ExpenseDescription: {
        type:String,
        required: true,
    }, 
    ExpenseAmount:{
        type:String,
        required:true, 
        
    },

    DueDate:{
        type:Date,
        required:true,
    },

    Statusofpayment:{
        type:String,
        
    },
    
});

module.exports = mongoose.model('MonthlyExpense' , ExpenseSchema);
const mongoose =  require('mongoose')

const MonthlySchema = new  mongoose.Schema({
    ClientName: {
        type:String,
        required: true,
    }, 
    Amount:{
        type:Number,
        
    },

    IncomeDate:{
        type:Date,
    },
    
});

module.exports = mongoose.model('MonthlyIncome' , MonthlySchema);
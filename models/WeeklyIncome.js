const mongoose =  require('mongoose')

const IncomeSchema = new  mongoose.Schema({
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

module.exports = mongoose.model('WeeklyIncome' , IncomeSchema);
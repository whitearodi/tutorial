const mongoose =  require('mongoose')

const UnavailableStockSchema = new  mongoose.Schema({
    ProductName: {
        type:String,
        required: true,
    }, 
    Quantity:{
        type:String,
        
    },
    Price:{
        type:Number,
    }
    
});

module.exports = mongoose.model('UnavailableStock' , UnavailableStockSchema);
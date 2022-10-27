const mongoose =  require('mongoose')

const PurchasedSchema = new  mongoose.Schema({
    ProductName: {
        type:String,
        required:true,  
    }, 
    Price:{
        type:Number,
        
    },
    PaymentStatus:{
        type:String,
        required:true,
    },
    Quantity:{
        type:String,
    },
    PurchasedDate:{
        type:Date,
    }
    
});

module.exports = mongoose.model('Purchased' , PurchasedSchema);
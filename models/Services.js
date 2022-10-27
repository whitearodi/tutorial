const mongoose =  require('mongoose')

const ServicesSchema = new  mongoose.Schema({
    ClientName: {
        type:String,
        required: true,
    }, 
    ServicesDone:{
        type:String,
        required:true,
    },
    PaymentForm:{
        type:String,
        required: true,
    },
    Amount:{
        type:Number,
    },
});

module.exports = mongoose.model('Services' , ServicesSchema);
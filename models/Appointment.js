const mongoose =  require('mongoose')

const AppointmentSchema = new  mongoose.Schema({
    ClientName: {
        type:String,
        required: true,
    }, 
    Scheduleddate:{
        type:Date,
        
    },
    
});

module.exports = mongoose.model('Appointment' , AppointmentSchema);
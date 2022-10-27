const Employee = require('../models/Employee')

//Show the list of Employees 
const index = (req, res, next) => {
    Employee.find()
    .then(response =>{
        res.json({
            response

        })
    })
    .catch(error => {
        res.json({
            message:'An error Occured!'
        })
    
})
}

//Show single employee
const show = (req, res, next)=>{
    let employeeID = req.body.employeeID
    Employee.findById(employeeID)
    .then(response =>{
        res.json({
         response    
        })
    })
    .catch(error => {
        res.json({
            message:'An error Occured!'
        })

    })

}
//add an employee
const store = (req, res, next)=>{
    let employee = new Employee({
        name: req.body.name,
        designation: req.body.designation,
        email: req.body.email, 
        phone: req.body.phone,
        age: req.body.age
    })
    employee.save()
    .then(response=>{
        res.json({
            message:'Employee Added Successfully!'
        })
    })
    .catch(error=>{
        res.json({
            message:'An error Occured!'
        })
    })
  
}

//Update an employee
const update = (req, res, next)=>{
    let employeeID = req.body.employeeID

    let updatedData = {
        name:req.body.name,
        designation:req.body.designation,
        email:req.body.email,
        phone:req.body.phone,
        age: req.body.age 
    }
    Employee.findByIdAndUpdate(employeeID, {$set:updatedData})
    .then(() =>{
        res.json({
            message:'Employee updated successfully!'
        })
    })
    .catch(error=>{
        res.json({
            message:'An error occurred!'
        })
    })
}

//delete an employee
const destory = (req, res, next) =>{
    let employeeID = req.body.employeeID
    Employee.findByIdAndRemove(employeeID)
    .then(() =>{
        res.json({
            message: 'Employee deleted successfully!'
        })
    })
    .catch(error =>{
        res.json({
            message: 'An error occurred!'
    })
    })
}

module.exports = {
    index, show, store, update, destory
}
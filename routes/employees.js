const express = require('express')
const router = express.Router()

const EmployeeContoller = require('../controllers/EmployeeController')

router.get('/', EmployeeContoller.index)
router.post('/show' , EmployeeContoller.show)
router.post('/store',EmployeeContoller.store)
router.post('/update',EmployeeContoller.update)
router.post('/delete',EmployeeContoller.destory)

module.exports = router




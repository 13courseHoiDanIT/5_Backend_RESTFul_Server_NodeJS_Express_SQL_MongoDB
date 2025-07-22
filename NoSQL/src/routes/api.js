const express = require('express')
const routerAPI = express.Router()
const { getUsersAPI, postCreateUserAPI, putUpdateUserAPI,
    deleteRemoveUser, postUploadSingleFileAPI, postUploadMultipleFileAPI } = require('../controllers/apiController')
const { postCreateCustomer, postCreateArrayCustomer, getAllCustomer, putUpdateCustomer } = require('../controllers/customerController')
routerAPI.get('/', (req, res) => {
    res.send("hello world with apis")
})

routerAPI.get('/abc', (req, res) => {
    res.status(200).json({
        data: 'hello world first API'
    })
})

routerAPI.get('/users', getUsersAPI)
routerAPI.post('/users', postCreateUserAPI)
routerAPI.put('/users', putUpdateUserAPI)
routerAPI.delete('/users', deleteRemoveUser)

routerAPI.post('/file', postUploadSingleFileAPI)
routerAPI.post('/files', postUploadMultipleFileAPI)

routerAPI.post('/customers', postCreateCustomer)
routerAPI.post('/customers-many', postCreateArrayCustomer)
routerAPI.get('/customers', getAllCustomer)
routerAPI.put('/customers', putUpdateCustomer)


module.exports = routerAPI;

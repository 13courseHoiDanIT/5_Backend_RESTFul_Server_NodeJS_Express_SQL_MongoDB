const { uploadSingleFile } = require("../services/fileServices");
const { createCustomerService, createArrayCustomerService } = require('../services/customerServices');
const Customer = require("../models/customers");

// {key: value}
module.exports = {
    postCreateCustomer: async (req, res) => {
        let { name, address, phone, email, description } = req.body;
        let imageUrl = "";
        //             image: String,
        if (!req.files || Object.keys(req.files).length === 0) {
            //do nothing
        } else {
            let result = await uploadSingleFile(req.files.image)
            imageUrl = result.path;
        }
        let customerData = {
            name,
            address,
            phone,
            email,
            description,
            imageUrl
        }

        let user = await createCustomerService(customerData);

        return res.status(200).json({
            EC: 0,
            data: user
        })
    },

    postCreateArrayCustomer: async (req, res) => {
        let customers = await createArrayCustomerService(req.body.customers)
        if (customers) {
            return res.status(200).json({
                EC: 0,
                data: customers
            })
        } else {
            return res.status(200).json({
                EC: -1,
                data: customers
            })
        }

    },
    getAllCustomer: async (req, res) => {
        try {
            let results = await Customer.find();
            return res.status(200).json({
                EC: 0,
                data: results
            })
        } catch (error) {
            return null
        }

    },
    putUpdateCustomer: async (req, res) => {
        try {
            let { name, address, phone, email, description, id } = req.body;
            let customer = await Customer.updateOne({ _id: id }, {
                name: name,
                address: address,
                phone: phone,
                email: email,
                description: description
            })
            return res.status(200).json({
                EC: 0,
                data: customer
            })
        } catch (error) {
            return null
        }


    }
}
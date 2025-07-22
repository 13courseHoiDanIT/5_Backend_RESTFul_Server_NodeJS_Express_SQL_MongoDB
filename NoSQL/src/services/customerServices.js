const Customer = require('../models/customers')

module.exports = {
    createCustomerService: async (customerData) => {
        try {
            let result = await Customer.create({
                name: customerData.name,
                address: customerData.address,
                phone: customerData.phone,
                email: customerData.email,
                description: customerData.description,
                image: customerData.imageUrl
            })
            return result

        } catch (error) {
            console.log(error)
            return null;
        }
    },

    createArrayCustomerService: async (arr) => {
        try {
            let result = await Customer.insertMany(arr);
            return result
        } catch (error) {
            console.log("error", error)
            return null;
        }
    },

    putUpdateCustomerService: async (name, address, phone, email, description, id) => {
        try {
            let customer = await Customer.updateOne({ _id: id }, {
                name: name,
                address: address,
                phone: phone,
                email: email,
                description: description
            })
            return customer
        } catch (error) {
            return null
        }
    }
}
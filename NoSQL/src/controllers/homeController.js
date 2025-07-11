const connection = require('../config/database')



const getHomePage = (req, res) => {
    return res.render('home.ejs')

}

const getABC = (req, res) => {
    res.send('check abc')
}
const getHoiDanIT = (req, res) => {
    res.render('sample.ejs')
}

const postCreateUser = (req, res) => {
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;


    connection.query(
        `insert into
        Users (email,name,city)  
        values(?,?,?)`,
        [email, name, city],
        function (err, results) {
            res.send("Created user succed!")
        }
    )

}

module.exports = { getHomePage, getABC, getHoiDanIT, postCreateUser }
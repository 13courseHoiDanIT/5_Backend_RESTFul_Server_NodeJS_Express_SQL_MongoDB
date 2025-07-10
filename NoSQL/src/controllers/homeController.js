const connection = require('../config/database')



const getHomePage = (req, res) => {
    //process data
    //call model
    let users = [];
    connection.query(
        'SELECT * FROM Users u',
        function (err, results, fields) {
            users = results;
            console.log("resukts>>", results); // results contains rows returned by server
            console.log("check users", users)
            res.send(JSON.stringify(users))
        }
    );

}

const getABC = (req, res) => {
    res.send('check abc')
}
const getHoiDanIT = (req, res) => {
    res.render('sample.ejs')
}

module.exports = { getHomePage, getABC, getHoiDanIT }
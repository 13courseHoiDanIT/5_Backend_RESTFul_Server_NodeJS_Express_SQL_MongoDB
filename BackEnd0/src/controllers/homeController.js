const connection = require('../config/database')


const getHomepage = (req, res) => {
    return res.render('home.ejs')
}

const getABC = (req, res) => {
    res.send('check ABC!');
}
const getQuocToan = (req, res) => {
    res.render('sample.ejs')
}

const postCreateUser = (req, res) => {
    console.log("check req.body", req.body);
    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city;

    console.log(">> check =", email, name, city)

    // let{email, name,city} = req.body;

    connection.query(
        `INSERT INTO
        Users  (email, name, city)
        VALUES(?, ?, ?)`,
        [email, name, city],
        function (err, results) {
            console.log(results);
            res.send("succeed!")
        }
    )
}

module.exports = {
    getHomepage,
    getABC,
    getQuocToan,
    postCreateUser
}
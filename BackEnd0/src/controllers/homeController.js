const connection = require('../config/database')
const { getAllUsers } = require('../services/CRUDServices')


const getHomepage = async (req, res) => {
    let results = await getAllUsers();
    return res.render('home.ejs', { listUsers: results })
}

const getABC = (req, res) => {
    res.send('check ABC!');
}
const getQuocToan = (req, res) => {
    res.render('sample.ejs')
}

const postCreateUser = async (req, res) => {
    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city;

    let [results, fields] = await connection.query(
        `INSERT INTO Users (email, name, city)VALUES(?, ?, ?)`, [email, name, city]);

    res.send("succeed");
}

const getCreatePage = (req, res) => {
    res.render('create.ejs')
}

const getUpdatePage = (req, res) => {
    const userID = req.params.id;
    console.log("param", userID)
    res.render('edit.ejs')
}

module.exports = {
    getHomepage,
    getABC,
    getQuocToan,
    postCreateUser,
    getCreatePage,
    getUpdatePage
}
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

const getUpdatePage = async (req, res) => {
    const userID = req.params.id;
    let [results, fields] = await connection.query('select * from Users where id = ?', [userID])

    let user = results && results.length > 0 ? results[0] : {};

    res.render('edit.ejs', { user: user }); // x <- y
}

module.exports = {
    getHomepage,
    getABC,
    getQuocToan,
    postCreateUser,
    getCreatePage,
    getUpdatePage
}
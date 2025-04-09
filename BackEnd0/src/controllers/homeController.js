const connection = require('../config/database')
const { getAllUsers, getUserByID, updateUserById } = require('../services/CRUDServices')


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

    let user = await getUserByID(userID);

    res.render('edit.ejs', { user: user }); // x <- y
}
const postUpdateUser = async (req, res) => {
    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city;
    let userId = req.body.userId;

    await updateUserById(email, name, city, userId)

    // res.send("Updated succeed");
    res.redirect('/')
}

const postDeleteUser = async (req, res) => {
    const userID = req.params.id;

    let user = await getUserByID(userID);
    res.render('delete.ejs', { user: user })
}

const postHandleRemoveUser = (req, res) => [
    res.send("ok delete")
]

module.exports = {
    getHomepage,
    getABC,
    getQuocToan,
    getCreatePage,
    getUpdatePage,



    postCreateUser,
    postUpdateUser,
    postDeleteUser,
    postHandleRemoveUser
}
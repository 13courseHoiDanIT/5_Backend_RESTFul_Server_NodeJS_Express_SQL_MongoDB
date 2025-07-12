const connection = require('../config/database')
const { getAllUsers, getUserById, updateUserById, deleteUserById } = require('../services/CRUDService')

const User = require('../models/user')


const getHomePage = async (req, res) => {
    let results = await User.find();
    return res.render('home.ejs', { listUsers: results })

}

const getABC = (req, res) => {
    res.send('check abc')
}
const getHoiDanIT = (req, res) => {
    res.render('sample.ejs')
}

const postCreateUser = async (req, res) => {
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;

    await User.create({
        email: email,
        name: name,
        city: city
    })

    res.send("Created user succed!")
}

const getCreatePage = (req, res) => {
    res.render('create.ejs')
}

const getUpdatePage = async (req, res) => {
    const userId = req.params.id;
    let user = await getUserById(userId)
    res.render('edit.ejs', { userEdit: user })
}

const postUpdateUser = async (req, res) => {
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;
    let userId = req.body.userId;

    await updateUserById(email, name, city, userId);

    res.redirect('/');
}

const postDeleteUser = async (req, res) => {
    const userId = req.params.id;
    let user = await getUserById(userId)
    res.render('delete.ejs', { userDelete: user })
}

const postRemoveUser = async (req, res) => {
    let userId = req.body.userId;
    await deleteUserById(userId)
    res.redirect('/')
}

module.exports = {
    getHomePage, getABC, getHoiDanIT,
    postCreateUser, getCreatePage, getUpdatePage,
    postUpdateUser, postDeleteUser, postRemoveUser
}
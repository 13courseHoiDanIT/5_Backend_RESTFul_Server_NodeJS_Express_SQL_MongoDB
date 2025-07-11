const connection = require('../config/database')
const { getAllUsers } = require('../services/CRUDService')


const getHomePage = async (req, res) => {
    let results = await getAllUsers();
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


    // connection.query(
    //     `insert into
    //     Users (email,name,city)  
    //     values(?,?,?)`,
    //     [email, name, city],
    //     function (err, results) {
    //         res.send("Created user succed!")
    //     }
    // )

    let [results, fields] = await connection.query(
        `insert into Users (email,name,city)  
        values(?,?,?)`, [email, name, city],
    );
    console.log("checkresu", results)

    res.send("Created user succed!")


    // const [results, fields] = await connection.query('SELECT * FROM User u');

}

const getCreatePage = (req, res) => {
    res.render('create.ejs')
}

module.exports = { getHomePage, getABC, getHoiDanIT, postCreateUser, getCreatePage }
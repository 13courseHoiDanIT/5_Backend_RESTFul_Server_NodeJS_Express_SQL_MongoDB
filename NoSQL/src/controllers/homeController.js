


const getHomePage = (req, res) => {
    //process data
    //call model
    res.send('Hello World! check check')
}

const getABC = (req, res) => {
    res.send('check abc')
}
const getHoiDanIT = (req, res) => {
    res.render('sample.ejs')
}

module.exports = { getHomePage, getABC, getHoiDanIT }
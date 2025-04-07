
const getHomepage = (req, res) => {
    //process data
    //call model
    res.send('Hello World! Quoc Toan')
}

const getABC = (req, res) => {
    res.send('check ABC!');
}
const getQuocToan = (req, res) => {
    res.render('sample.ejs')
}

module.exports = {
    getHomepage,
    getABC,
    getQuocToan
}
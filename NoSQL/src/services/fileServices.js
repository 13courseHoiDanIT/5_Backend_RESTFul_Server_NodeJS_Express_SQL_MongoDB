

const uploadSingleFile = async (fileObject) => {
    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    let uploadPath = __dirname + '/abv/' + fileObject.name;

    try {
        await fileObject.mv(uploadPath)
        return {
            status: 'success',
            path: 'link-image',
            error: null
        }
    } catch (err) {
        console.log("check err", __dirname)
        return {
            status: 'failed',
            path: 'link-image',
            error: JSON.stringify(err)
        }
    }

    // Use the mv() method to place the file somewhere on your server

}

const uploadMultiFiles = () => {

}

module.exports = {
    uploadSingleFile,
    uploadMultiFiles
}
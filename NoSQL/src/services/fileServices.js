const { error } = require('console');
const path = require('path');
const { json } = require('stream/consumers');

const uploadSingleFile = async (fileObject) => {
    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    const uploadDir = path.join(__dirname, '..', 'public', 'images', 'uploads')

    console.log("check", uploadDir)
    // Lấy phần mở rộng của file (vd: .png, .jpg)
    const extName = path.extname(fileObject.name);
    const baseName = path.basename(fileObject.name, extName)
    const finalName = `${baseName}${Date.now()}${extName}`;
    // Tạo tên mới theo định dạng abc-timestamp.ext
    const uploadPath = path.join(uploadDir, finalName);
    try {
        await fileObject.mv(uploadPath)
        return {
            status: 'success',
            path: finalName,
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

const uploadMultipleFiles = async (filesArr) => {
    try {
        const uploadDir = path.join(__dirname, '..', 'public', 'images', 'uploads')
        let resultArr = [];
        let countSuccess = 0;
        for (let i = 0; i < filesArr.length; i++) {
            const extName = path.extname(filesArr[i].name);
            const baseName = path.basename(filesArr[i].name, extName)
            const finalName = `${baseName}${Date.now()}${extName}`;
            // Tạo tên mới theo định dạng abc-timestamp.ext
            const uploadPath = path.join(uploadDir, finalName);
            try {
                await filesArr[i].mv(uploadPath);
                resultArr.push({
                    status: 'success',
                    path: uploadPath,
                    fileName: filesArr[i].name,
                    error: null
                })
                countSuccess++;
            } catch (err) {
                resultArr.push({
                    status: 'failed',
                    path: null,
                    fileName: filesArr[i].name,
                    error: json.stringify(err)
                })
            }
        }

        return {
            countSuccess: countSuccess,
            detail: resultArr
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    uploadSingleFile,
    uploadMultipleFiles
}
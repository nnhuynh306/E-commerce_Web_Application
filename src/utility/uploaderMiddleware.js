const { cloudinary } = require('./cloudinary');

const middleware = {}

middleware.uploadImage = async function (req, res, next) {
    const fileNames = Object.keys(req.files);
    const urlListAsFilesName = {};
    try {
        new Promise(function(resolveForloop, rejectForloop) {
            let i = 0;
            for (const fname of fileNames) {
                uploadStream(
                    req.files[fname].data, 
                    { upload_preset: 'dangshop' }
                ).then (
                    resolve => {
                        urlListAsFilesName[fname] = resolve.secure_url
                        i++;
                
                        if (i === fileNames.length) {
                            console.log("ok");
                            resolveForloop(200);
                        }
                    },
                    reject => {
                        return res.status(500).json({ message: reject });
                    }
                )
                
            }
            
        }).then(
            resolveForloop => {
                res.urls = urlListAsFilesName;
                return next();
            }
        )
    } catch (err) {
        return res.status(err.status || 500).json({ message: err.message });
    }
}

function uploadStream(fileBuffer, options) {
    return new Promise((resolve, reject) => {
        // Sadly, this method does not support async/await
        cloudinary.uploader.upload_stream(options, (error, result) => {
        if (error) {
            reject(error);
        } else {
            resolve(result);
        }
        }).end(fileBuffer);
    });
}

middleware.uploadBase64 = cloudinary.uploader.upload;

module.exports = middleware;
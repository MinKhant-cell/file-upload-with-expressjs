const path = require('node:path')
const fileUpload = (req,res) => {
    const files = req.files
    Object.keys(files).map(key => {
        const filePath = path.join(__dirname,'files',files[key].name)
        files[key].mv(filePath, (err) => {
            if(err) res.status(500).json({status: 500,message: err})
        })
    })
    res.json({status: 200,message: Object.keys(files).toString()})
}

module.exports = fileUpload 
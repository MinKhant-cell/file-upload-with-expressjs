const isFileExist = (req,res,next) => {
    if(!req.files) res.status(400).json({status: 400,message: "Missing Files"})
    next()
}
module.exports = isFileExist
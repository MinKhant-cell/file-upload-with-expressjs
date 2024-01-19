const express = require('express')
const getHome = require('../Controllers/HomeController')
const fileUpload = require('../Controllers/FileUploadController')
const expressFileUpload = require('express-fileupload')
const isFileExist = require('../Middlewares/IsFileExist')

const router = express.Router()

router.route('/')
.get(getHome)

router.route('/upload')
.post(expressFileUpload({ createParentPath: true}),
isFileExist,
fileUpload)
module.exports = router
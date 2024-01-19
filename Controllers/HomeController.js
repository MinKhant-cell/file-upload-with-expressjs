const path = require('node:path')
const getHome = (req,res)=> {
    res.sendFile(path.join(__dirname,'..','views','index.html'))
    
    // console.log(path.join(__dirname,'../..','views','index.html'))
}

module.exports = getHome
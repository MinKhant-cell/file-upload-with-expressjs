const express = require('express')
const app = express()
const PORT = process.env.PORT || 3500;

app.use('/',require('./routes/web'))

app.listen(PORT,()=>{
    console.log(`Serving on port ${PORT}`)
})
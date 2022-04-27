const express = require('express')
const path = require('path')

const app = express()

//this is when browser is looking for file path
//setting up endpt to the slash 
//send file path and using path.join joins two filepaths together
//__dirname is the file path of the current file you are in

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'))
})

//
const port = process.env.PORT || 4005

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})

console.log(__dirname)
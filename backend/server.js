const express = require('express')
const app = express()
const {router} = require('./routes/task.router.js')

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use(router)

app.listen(3001, ()=>{
    console.log('run on port 3001')
})
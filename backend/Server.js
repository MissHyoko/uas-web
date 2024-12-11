const express=require('express')
const app=express()
const PostRouter=require("./router/PostRouter")
const cors=require('cors')
const bodyParser = require('body-parser')
require('dotenv').config()
const bcrypt=require('bcrypt')

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use('/post', PostRouter)

const userpassword="Michelle"
const salt=10

bcrypt.hash(userpassword, salt, (err, hash)=>{
    if (err){
        return
    }
    console.log("Hashed password", userpassword, hash)
})

app.listen(process.env.SERVER_PORT,()=>{
    console.log('Server jalan', process.env.SERVER_PORT)
})
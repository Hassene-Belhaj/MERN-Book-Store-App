const express = require('express');
const connectDB = require('./Config/DB')
require('dotenv').config();
const cors = require('cors');
const router = require('./Routes/routes')


const app = express()
app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(cors())


const Start =async () => {
    try {
        await connectDB(process.env.DATABASE || 3000 , console.log('connected to database'))
        app.listen(process.env.PORT || 3000 , ()=>console.log('server is running ! '))
    } catch (error) {
        console.log(error);
    }
} 

Start()

app.use('/api/v1/books' , router)
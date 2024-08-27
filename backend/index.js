const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const connectDB= require('./config/Db')
const userRoutes = require('./routes/Users')

const app = express()
connectDB()
app.use(cors())
app.use(bodyParser.json())

app.use('/api/users',userRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
})
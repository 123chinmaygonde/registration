const mongoose= require("mongoose")
const dotenv= require("dotenv")
dotenv.config()

const connectDB=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        })
        console.log("mongodb connected")
        
    } catch (error) {
        console.log("failed to connect")
        process.exit(1)
        
    }

   
}
module.exports=connectDB
const express = require("express")
const router = express.Router()
const User = require('../models/User')

router.post('/',async(req,res)=>{
    const{name,age,dob,password,gender,about}= req.body

    if(!name||!age||!dob||!password||!gender){
        return res.status(400).json({message:'All fields are required'})
    }
    try {
        const existingUser= await User.findOne({namee})
        if(existingUser){
            return res.status(400).json({message:'user already exists'})
        }
        const user = new User({
            name,
            age,
            dob,
            password,
            gender,
            about
        })
        await user.save()
        return res.status(201).json(user)
    } catch (error) {
        return res.status(500).json({message:'server error'})
        
    }
})

router.get('/',async(req,res)=>{
    try {
        const users =await User.find()
        return res.json(users)
        
    } catch (error) {
        return res.status(500).json({message:'server error'})
        
    }
})

router.put('/:id',async(req,res)=>{
    const{name,age,dob,password,gender,about}= req.body
    try {
        const user = await User.findByIdAndUpdate(req.params.id,{
            name,
            age,
            dob,
            password,
            gender,
            about,
        },{new:true})
        if(!user){
            return res.status(404).json({message:'user not found'})

        }
        return res.json(user)
        
    } catch (error) {
        return res.status(500).json({message:'server error'})
        
    }
})

router.delete('/:id',async(req,res)=>{
    try {
        const user = await User.findByIdAndDelete(req.params.id)
        if(!user){
            return res.status(404).json({message:'user not found'})
        }
        return res.json({message:'user deleted'})
        
    } catch (error) {
        return res.status(500).json({message:'server error'})
        
    }
})

module.exports=router
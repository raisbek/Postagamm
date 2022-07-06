import { Router } from "express";
import { createUser, findUser } from "../service/user.service.js";
import md5 from "md5";
const router = Router()




router.post("/register", async (req,res) => {
   const {username,password,firstName,lastName, age} = req.body
   const exitUser = await findUser(username)

   if(exitUser){
    res.status(400).json({
        message: `User with username ${usename} already exists.`
    })
   }else {
    const token = md5(username+password) 
    const newUser = await createUser(username,password,firstName,lastName, +age,token)
    res.status(201).json({
        message: "User creted",
        user: {
            username,
            token
        }
    })
    }
})


router.post("/login", async (req,res) => {
   const { username,password } = req.body
   const exitUser = await findUser(username) 
   if(!exitUser){
    res.status(400).json({
        message: `User with username ${username} not found`
    })
   }else if (exitUser.password !== password){
    res.status(400).json({
        message: "Wrong usename or password"
    })
   }else {
    res.status(201).json({
        message: "Succesful logged in.",
        user: {
            username: exitUser.username,
            token: exitUser.token
        }
    })
   }
})


export default router











































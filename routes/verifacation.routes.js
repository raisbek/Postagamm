import { Router } from "express";
import { findUserByToken } from "../service/user.service";

const router = Router()

router.get('/verify', (req,res) => {
  if(req.header(Authorization)){
    return res.status(401).json({
      message: "Token not provided"
    })
  }
  const token = req.header(Authorization).split()[1]
 const user = findUserByToken(token)
  if(user === null){
    return res.status(401).json({
      message:"Invalid token "
    })
  }
  res.json(
    {
      message: "Succesfully token",
      user: {
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
        age: user.age
      }
    }
  )
})



export default router
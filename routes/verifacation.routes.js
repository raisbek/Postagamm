import { Router } from "express";
import middleware from "../middlewares/middleware.js";

const router = Router()

router.get('/verify',  middleware, async  (req,res) => {
 
  
  res.json(
    {
      message: "Succesfully token",
      user: {
        username: res.locals.user.username,
        firstName: res.locals.user.firstName,
        lastName: res.locals.user.lastName,
        avatar : res.locals.user.avatar,
        age: res.locals.user.age
      }
    }
  )
})



export default router
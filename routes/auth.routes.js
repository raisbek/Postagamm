import { Router } from "express";


const router = Router()


router.post("/login", (req,res) => {
    res.send('Hello')
})

router.post("/register", (req,res) => {
    res.send("Good bye")
})



export default router
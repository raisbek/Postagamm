import express from "express";
import cors from "cors"
import dotenv from  "dotenv"
import authRoutes from "./routes/auth.routes.js"

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.use(authRoutes)



app.listen(process.env.PORT || 8080, () => {
    console.log("Good");
})

import express from "express";
import cors from "cors"
import dotenv from  "dotenv"
import authRoutes from "./routes/auth.routes.js"
import verificationRoutes from './verifacation.routes.js'


dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.use(authRoutes)
app.use(verificationRoutes)



app.listen(process.env.PORT || 8080, () => {
    console.log(`http://localhost:${process.env.PORT}`);
})

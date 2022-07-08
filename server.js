import express from "express";
import cors from "cors"
import dotenv from  "dotenv"
import authRoutes from "./routes/auth.routes.js"
import verificationRoutes from './routes/verifacation.routes.js'
import uploadRoutes  from "./routes/upload.routes.js"

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.use(authRoutes)
app.use(verificationRoutes)
app.use(uploadRoutes)


app.listen(process.env.PORT || 8080, () => {
    console.log(`http://localhost:${process.env.PORT}`);
})

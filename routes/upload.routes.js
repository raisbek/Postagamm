import {Router}  from "express"
import multerUpload from "../middlewares/multer-upload.js"

const router = Router()

// router.post("/upload", multerUpload.single('') , (req,res) => {
//  res.send('GoOd')
// } )

router.get("/download/:filename", (req,res)=>{
  res.sendFile(req.params.filename,{root : './storage'})
} )

export default router
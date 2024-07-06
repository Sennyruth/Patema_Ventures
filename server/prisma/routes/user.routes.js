import {Router} from 'express'
const router = Router();

router.post("/api/user/register",(req,res)=>{
    res.send("register all users")
})
export default router
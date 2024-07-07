import {Router} from 'express'
import {createUser} from "../Controllers/user.controllers.js"
import {loginUser} from "../Controllers/user.controllers.js"

const router = Router();

router.post("/register",createUser);
router.post("/login",loginUser)

export default router
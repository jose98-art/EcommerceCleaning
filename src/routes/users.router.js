import { Router } from 'express'
import {getAllUsers, createUser} from '../controllers/users.controller.js'
// import {validationDateLoGIN} from '../middlewares/validationDate.middleware.js';


const router = Router()

router.get('/',getAllUsers)
router.post('/registro',createUser)

export default router 
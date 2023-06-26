import { Router } from 'express'
import {getAllUsers, createUser,loginUser,logout, deleteU} from '../controllers/users.controller.js'


const router = Router()

router.get('/',getAllUsers)
router.post('/registro',createUser)
router.post('/login',loginUser)
router.get('/deleteUser/:_id',deleteU)
router.get('/logout',logout)

export default router 
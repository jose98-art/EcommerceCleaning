import { Router } from 'express'
import { getAllProducts, createProduct,deleteP } from '../controllers/products.controller.js'
import session from 'express-session';

const router = Router()
const product = await getAllProducts()
// console.log(product)
router.get('/',(req,res)=>{
    res.json(product)
})
router.post('/create',createProduct)
router.get('/deleteProduct/:id',deleteP)

export default router 
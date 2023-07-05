import { Router } from "express";
import {getCartById, createCart,addProductCart, deleteProd} from '../controllers/cart.controller.js';

const router = Router()

router.get('/',createCart)

router.get('/cartById/:idCart',getCartById)

router.post(':idc/productList/:idp',addProductCart)

router.delete(':idc/productList/:dip',deleteProd)



// router.post('/product/:pid',addProducToCart)


export default router 
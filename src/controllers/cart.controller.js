import { CartsDao } from "../persistencias/DAOs/factory.js";

export const createCart = async (req,res)=>{
	const createNewCart = await CartsDao.createCart()
	if(createNewCart){
		res.redirect('/cart')
		console.log(createNewCart)
	}else{
		res.redirect('/errorCart')
	}
}
export const getCartById = async (req,res)=>{
	const {idCart} = req.params
	const prodCart = await CartsDao.getCartById(idCart)
	return prodCart
}

export const addProductCart = async(req,res)=>{
	const {idc, idp} = req.params
	const {quantity}= req.body
	const prodCart = await CartsDao.addProductCarts(idc,idp, quantity)
	res.json({message:prodCart})
	return prodCart
}

export const deleteProd = async (req,res)=>{
	const {idp} = req.params
    const deleteProd = await CartsDao.deleteProd(idp)
    res.json({message: 'producto eliminado', deleteProd})
}

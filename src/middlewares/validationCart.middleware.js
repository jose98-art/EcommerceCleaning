import { CartsDao, UsersDao } from "../persistencias/DAOs/factory.js";

export async function validationCart(req,res,next){
    const {email} = req.session.userInfo
    if(!req.session.userInfo.hasOwnProperty("associatedCard")){
        const cartCread = await CartsDao.createCart()
        const user = await UsersDao.updateUserCartId(email, cartCread.id)
        req.session.userInfo = user
    }
    next()
}
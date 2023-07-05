import { cartsModel } from "../../mongoDB/models/cart.model.js"
import { productsModel } from "../../mongoDB/models/Product.model.js"
export default class CartMongo {
    async createCart(){
        try {
            const createCart = await cartsModel.create({
                cart:[]
            })
            return createCart
        } catch (error) {
            console.log(error)
        }
    }

    async getCartsBaid(id){
        try {
            const getCart = await cartsModel.findById(id)
            return getCart
        } catch (error) {
            console.log(error)
        }
    }

    async addProductsCarts(idc, idp, quantity){
        try {
            const getCart = await cartsModel.findById(idc)
            const getProd = await productsModel.findById(idp)
            if(getCart){
                const identify = getCart.productList.find(prod => prod.productId === idp)
                if(identify){
                    const addQuantity = getCart.productList.map(prod => {
                        if(prod.productId == idp){
                            prod.quantity += quantity
                        }
                        return prod
                    })
                    return await cartsModel.findByIdAndUpdate(idc,{
                        productList: addQuantity
                    })
                }else{
                    const addToCart = await cartsModel.findByIdAndUpdate({'_id':idc},{$push:{productList:{productId:idp, productName: getProd.name,
                    quantity: quantity}}})
                    return addToCart
                }
            }
        } catch (error) {
            console.log(error)
        }
    }

    async deleteProd(idp){
        try {
            const deleteProd = await cartsModel.deleteOne({'_id':idp})
            return deleteProd
        } catch (error) {
            console.log(error)
        }
    }
}

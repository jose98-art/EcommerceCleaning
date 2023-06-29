import { productsModel } from "../../mongoDB/models/Product.model.js";

export default class ProductsMongo {
    async getAll(){
        try {
            const products = await productsModel.find().lean()
            return products
        } catch (error) {
            console.log(error)
            throw new Error(error)
        }
    }

    async create(objProduct){
        const {code} = objProduct
        try {
            const existeProduct = await productsModel.find({code})
            if(existeProduct.length === 0){
                const newProducts = await productsModel.create(objProduct)
                return newProducts
            }
        } catch (error) {
            console.log(error)
            throw new Error(error)
        }
    }

    async deleteProduct(id){
        try {
            const deleteProduct = await productsModel.findByIdAndDelete(id)
            return deleteProduct
        } catch (error) {
            console.log(error)
            throw new Error(error)        
        }
    }
}
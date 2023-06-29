import { ProductsDao } from "../persistencias/DAOs/factory.js";

export const getAll = async()=>{
    const products = await ProductsDao.getAll()
    return products
}

export const create = async(productObj)=>{
    const newProduct = await ProductsDao.create(productObj)
    return newProduct
}

export const productDelete = async(id) =>{
    const deleteProd = await ProductsDao.deleteProduct(id)
    return deleteProd
}
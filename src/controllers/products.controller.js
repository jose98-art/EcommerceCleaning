import { getAll, create, productDelete } from "../services/products.service.js";

export const getAllProducts = async(req,res)=>{
    const products =  await getAll()
    return products
}

export const createProduct = async(req, res)=>{
    const productObj = req.body
    const newProduct = await create(productObj)
    if(newProduct){
        res.redirect('/admin')
    }else{
        res.json({message:'hubo un error '})
    }
}

export const deleteP = async(req,res)=>{
    const {id} = req.params
    const product = await productDelete(id)
    if(product){
        res.redirect('/admin')
        // res.json({message:'producto eliminado'})
    }else{
        res.redirect('/errorDelete')
    }
}
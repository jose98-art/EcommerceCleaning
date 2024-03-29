import { userModel } from "../../mongoDB/models/user.model.js";
import { hashDate, compareHashDate } from "../../../utils.js";
import usersResponsDTO from "../../DTOs/usersResp.dto.js";

export default class UsersMongo {
    async getAll(){
        try {
            const users = await userModel.find().lean()
            return users 
        } catch (error) {
            console.log(error)
        }
        
    }

    async create(objUser){
        const { email, password} = objUser

        try {
            const existUser = await userModel.find({email, password})

            if(existUser.length === 0){
                const hashNewPassword = await hashDate(password)
                const newUserAndPassword = {...objUser, password:hashNewPassword}
                const newUser = await userModel.create(newUserAndPassword)
                const usersRespDTO = new usersResponsDTO(newUser)
                return usersRespDTO//solo muestra datos limitados por el DTOs
            }else{
                return null
            }

        } catch (error) {
            console.log(error)
            throw new Error(error)
        }
    }

    async loginUser(user){
        try {
            const {email, password} = user
            const usuario = await userModel.findOne({email})
            if(usuario){
                const isPassword = compareHashDate(password, usuario.password)
                if(isPassword){
                    return usuario
                }
                return null
            }else{
                return null
            }
        } catch (error) {
            console.log(error)
            throw new Error(error)
        }
       
    }

    async updateUserCartId(email, updateId){
        const response = await userModel.findOneAndUpdate(
            {email},
            {associatedCart: updateId},
            {new: true}
        ).lean()
        return response
    }

    async deleteUser(id){
        try {
            const deleteUser = await userModel.findByIdAndDelete(id)
            return deleteUser
        } catch (error) {
            console.log(error)
            throw new Error(error)
        }
    }

}
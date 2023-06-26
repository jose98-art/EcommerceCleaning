import { userModel } from "../../mongoDB/models/user.model.js";
import UsersDBDTO from "../../DTOs/usersDB.dto.js";
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
                const userDTO = new UsersDBDTO(objUser)
                const newUser = await userModel.create(userDTO)
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
                if(password === usuario.password){
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

    async deleteUser(_id){
        try {
            const deleteUser = await userModel.findByIdAndDelete(_id)
            return deleteUser
        } catch (error) {
            console.log(error)
            throw new Error(error)
        }
    }

}
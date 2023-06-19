import { userModel } from "../../mongoDB/models/user.model.js";
import UsersDBDTO from "../../DTOs/usersDB.dto.js";
import usersResponsDTO from "../../DTOs/usersResp.dto.js";

export default class UsersMongo {
    async getAll(){
        try {
            const users = await userModel.find()
            return users 
        } catch (error) {
            console.log(error)
        }
        
    }

    async create(objUser){
        try {
            const userDTO = new UsersDBDTO(objUser)
            // console.log(userDTO)
            const newUser = await userModel.create(userDTO)
            const usersRespDTO = new usersResponsDTO(newUser)
            return usersRespDTO//solo muestra datos limitados por el DTOs
        } catch (error) {
            console.log(error)
        }
    }

}
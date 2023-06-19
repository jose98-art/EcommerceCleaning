import fs from "fs";
import { __dirname } from "../../../utils.js";

const path = __dirname + '/Users.json'
export default class UsersFile {
  async getAll() {
    try {
      if (fs.existsSync(path)) {
        const usersFile = await fs.promises.readFile(path, "utf-8");
        return JSON.parse(usersFile);
      } else {
        return [];
      }
    } catch (error) {
      console.log(error);
    }
  }

  async create(objUser){
    try {
      const userFile = await this.getAll()
      let id
      if(userFile.length !== 0){
        id = userFile[userFile.length-1].id+1
      }else{
        id = 1
      }
      const newUser = {id, ...objUser}
      userFile.push(newUser)
      await fs.promises.writeFile(path, JSON.stringify(userFile))
      return newUser
    } catch (error) {
      console.log(error)
    }
  }
}

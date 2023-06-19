// factory nos permitira hacer swtich en la persistencia
import config from "../../config.js";
import UsersFile from "./usersDAOS/usersFile.js";
import UsersMongo from "./usersDAOS/usersMongo.js";

let UsersDao
console.log(config.persistencia)
switch(config.persistencia){
    case 'MONGO':
        await import('../mongoDB/configDB.js')
        UsersDao = new UsersMongo()
        break
    case 'FILE':
        UsersDao = new UsersFile()
        break
}

export default UsersDao
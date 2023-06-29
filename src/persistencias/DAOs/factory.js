// factory nos permitira hacer swtich en la persistencia
import config from "../../config.js";
import UsersFile from "./usersDAOS/usersFile.js";
import UsersMongo from "./usersDAOS/usersMongo.js";

import ProductsMongo from "./productsDAOS/productsMongo.js";

let UsersDao
let ProductsDao
switch(config.persistencia){
    case 'MONGO':
        await import('../mongoDB/configDB.js')
        UsersDao = new UsersMongo()
        ProductsDao = new ProductsMongo()
        break
    case 'FILE':
        UsersDao = new UsersFile()
        break
}

export  {UsersDao,ProductsDao}
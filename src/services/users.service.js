// se importa factory
import UsersDao from "../persistencias/DAOs/factory.js";

export const getAll = async () => {
  const users = await UsersDao.getAll();
  return users;
};

export const create = async(objUser) =>{
  const newUser = await UsersDao.create(objUser)
  return newUser
}

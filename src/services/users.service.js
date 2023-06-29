// se importa factory
import {UsersDao} from "../persistencias/DAOs/factory.js";

export const getAll = async () => {
  const users = await UsersDao.getAll();
  return users;
};

export const create = async(objUser) =>{
  const newUser = await UsersDao.create(objUser)
  return newUser
}

export const login = async (user) =>{
  const loginUser = await UsersDao.loginUser(user)
  return loginUser
}

export const userDelet = async (id) =>{
  const deleteUser = await UsersDao.deleteUser(id)
  return deleteUser
}
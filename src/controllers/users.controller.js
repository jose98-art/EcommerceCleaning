//importamos desde users.services
import { getAll, create, login,userDelet } from "../services/users.service.js";

export const getAllUsers = async (req, res) => {
  const products = await getAll();
  return products
  
};

export const createUser = async (req, res) => {
  const usersObj = req.body;
  const newUser = await create(usersObj);
  if (newUser) {
    res.redirect("/login");
  } else {
    res.redirect("/errorRegistro");
  }
};

export const loginUser =  async(req,res)=>{
  const userLogin =  await login(req.body)
  if(userLogin){
    req.session.userInfo = userLogin
    res.redirect('/homeClient')
  }else{
    res.redirect('/errorLogin')
  }
}

export const deleteU = async(req,res)=>{
  const {id} = req.params
  const users = await userDelet(id)
  if(users){
    res.redirect('/admin')
  }else{
    res.redirect('/errorDelete')
  }
}

export const logout = async (req, res) => {
  req.session.destroy((error) => {
    if (error) {
      console.log(error);
      res.json({ message: error });
    } else {
      res.redirect("/");
    }
  });
};

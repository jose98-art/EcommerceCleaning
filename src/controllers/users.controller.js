//importamos desde users.services
import { getAll, create, login,userDelet } from "../services/users.service.js";

export const getAllUsers = async (req, res) => {
  return await getAll();
  
};

export const createUser = async (req, res) => {
  const usersObj = req.body;
  console.log(usersObj,'controller')
  const newUser = await create(usersObj);
  if (newUser) {
    res.redirect("/login");
  } else {
    res.redirect("/errorRegistro");
  }
};

export const loginUser =  async(req,res)=>{
  const userLogin =  await login(req.body)
  console.log(userLogin,'controller')
  if(userLogin){
    req.session.userInfo = userLogin
    res.redirect('/homeClient')
  }else{
    res.redirect('/errorLogin')
  }
}

export const deleteU = async(req,res)=>{
  const {_id} = req.params
  console.log(_id,'controller')
  const users = await userDelet(_id)
  res.json({message:'usuario eliminado', users})
  return users
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

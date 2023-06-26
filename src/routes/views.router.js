//para el siguiente nivel usaremos la clase de arquitectura del servidor y de persistencias
import { Router } from "express";
import { validationRol } from "../middlewares/validationDate.middleware.js";
import { getAllUsers } from "../controllers/users.controller.js";

const users = await getAllUsers()

const router = Router();

router.get("/", (req, res) => {
  res.render("home");
});

router.get("/registro", (req, res) => {
  res.render("registro");
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/errorRegistro", (req, res) => {
  res.render("errorRegistro");
});

router.get("/errorLogin", (req, res) => {
  res.render("errorLogin");
});

//verificar con un middleware si es admin o user
router.get("/homeClient",validationRol, (req, res) => {
  const name = req.session.userInfo
  console.log(name.first_name,'views')
  res.render("homeClient", { userDate: req.session.userInfo });
});

router.get('/admin',(req,res)=>{
  res.render('admin',{users})
})

export default router;

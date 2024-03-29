//para el siguiente nivel usaremos la clase de arquitectura del servidor y de persistencias
import { Router } from "express";
import { validationRol } from "../middlewares/validationDate.middleware.js";
import { getAllUsers } from "../controllers/users.controller.js";
import { getAllProducts } from "../controllers/products.controller.js";
import { validationCart } from "../middlewares/validationCart.middleware.js";

const users = await getAllUsers()
const products = await getAllProducts()

const router = Router();

router.get("/", (req, res) => {
  res.render("home");
});

router.get("/registro",validationCart, (req, res) => {
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
  console.log( req.session.userInfo,'views')
  res.render("homeClient", { userDate: req.session.userInfo });
});

router.get('/admin',(req,res)=>{
  res.render('admin',{users,products})
})

router.get('/errorDelete',(req,res)=>{
  res.render('errorDelete')
})

router.get('/cart',(req,res)=>{
  res.render('cart')
})

router.get('/errorCart',(req,res)=>{
  res.render('errorCart')
})
export default router;

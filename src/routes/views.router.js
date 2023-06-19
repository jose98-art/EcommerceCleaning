//para el siguiente nivel usaremos la clase de arquitectura del servidor y de persistencias
import { Router } from 'express'

const router = Router()

router.get('/',(req,res)=>{
    res.render('home')
})

router.get('/registro',(req,res)=>{
    res.render('registro')
})

router.get('/errorRegistro',(req,res)=>{
    res.render('errorRegistro')
})

export default router 
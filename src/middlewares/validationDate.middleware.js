import config from "../config.js"

export function validationRol(req,res,next){
    const objUser = req.session.userInfo
    const {email, password} = objUser
    // console.log(objUser.email, 'middleware')

    const emailAdmin = config.emailAdmin
    const passwordAdmin = config.passwordAdmin

    if(emailAdmin === email && passwordAdmin === password ){
        res.redirect('/admin')
    }
    next()
}
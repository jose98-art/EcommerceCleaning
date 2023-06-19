// import Swal from 'sweetalert2'

export function validationDateLoGIN(req,res,next){
    const objUser = req.body
    const {first_name, last_name, email, age, password} = objUser
    if(!first_name || !last_name || !email || !age || !password){
        res.send('campos vacios')
    }else{
        res.send('validado')
    }
    next()
}
// una vez modificada en dto se remodifica aqui para que sea limitado los datos que se le mande al FRONT
export default class usersResponsDTO {
    constructor(user){
        this.fullName = user.first_name
        this.email = user.email
    }
}

//PODEMOS USAR ESTA INFORMACION PARA MOSTRAR EL PERFIL DE REGISTRO DE USER
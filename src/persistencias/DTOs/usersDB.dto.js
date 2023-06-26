// DTO DATA TRANSFER OBJECT es para que pueda ser modificado de lo entra en body antes de mandarlo a DAO 
export default class UsersDTO{
    constructor(user){
        this.full_name = `${user.first_name} ${user.last_name}`
        this.first_name = user.first_name
        this.last_name = user.last_name
        this.email = user.email
        this.password = user.password
        this.dni = user.dni
    }

}
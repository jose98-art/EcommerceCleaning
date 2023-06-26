import dotenv from 'dotenv'
dotenv.config()

export default{
    port: process.env.PORT,
    uri: process.env.URI,
    persistencia: process.env.PERSISTENCIA || 'FILE',
    cookiekey: process.env.COOKIE_KEY,

    emailAdmin: process.env.EMAIL_ADMIN,
    passwordAdmin: process.env.PASSWORD_ASMIN
}
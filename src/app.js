import express from 'express'
import handlebars from 'express-handlebars'
import cookieParser from 'cookie-parser'
import session from 'express-session'
// import  FileStore  from 'session-file-store'
import MongoStore from 'connect-mongo'

import config from './config.js'
import { __dirname } from './utils.js'
import usersRouter from './routes/users.router.js'
import viewsRouter from './routes/views.router.js'
import productRouter from './routes/products.router.js'
import cartRouter from './routes/carts.router.js'


const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(__dirname+'/public'))
app.use(cookieParser(config.cookiekey))


// Configuracion de handlebars
//set = setting (configuracion)
app.engine('handlebars', handlebars.engine())//todas las funcionalidades de handlebars y solo en caso de usar handlebars
app.set('views',__dirname+'/views')//directorio de donde estaran las views
app.set('view engine', 'handlebars')

//file session
// const fileStore = FileStore(session)
app.use(session({
    secret: ' sessionKey',
    resave: false,
    saveUninitialized: false,
    name:"sessionID",
    store: new MongoStore({
        mongoUrl: config.uri
    })
}))
//views (Ruta raiz)
app.use('/',viewsRouter)

//routes
app.use('/users',usersRouter)
app.use('/products',productRouter)
app.use('/carts',cartRouter)






const PORT = config.port
app.listen(PORT,()=>{
    console.log(`Listening on PORT ${PORT}`)
})


//para no tener problemas al realizar el test y duplicar keys usamos mongoose.connection.collections.users.drop()
import express from 'express'
import handlebars from 'express-handlebars'

import config from './config.js'
import { __dirname } from './utils.js'
import usersRouter from './routes/users.router.js'
import viewsRouter from './routes/views.router.js'


const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(__dirname+'/public'))

// Configuracion de handlebars
//set = setting (configuracion)
app.engine('handlebars', handlebars.engine())//todas las funcionalidades de handlebars y solo en caso de usar handlebars
app.set('views',__dirname+'/views')//directorio de donde estaran las views
app.set('view engine', 'handlebars')

//views (Ruta raiz)
app.use('/',viewsRouter)


//routes
app.use('/users',usersRouter)

const PORT = config.port
app.listen(PORT,()=>{
    console.log(`Listening on PORT ${PORT}`)
})



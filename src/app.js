//? DEPENCIES
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

//? IMPORT FILES
const config = require('./config')
const userRoutes = require('./users/user.routes').router
const customerRoutes = require('./customers/customer.routes').router

//! INITIAL CONFIGURATION
const app = express()


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
if (config.node_env === 'development') {
    app.use(morgan('dev'))
} else {
    app.use(morgan('combined'))
}

//*ROUTES
app.get('/', (req, res) => {
    res.status(200).json({message: 'Funciona'})
})
app.use('/api/v1/users', userRoutes);
// app.use('/api/v1/auth')

app.use('/api/v1/customer', customerRoutes);
app.listen(config.port, () => {
    console.log(`Sever has started in port ${config.port}`)
})

module.exports = {
    app
}

/*
//? get /users/:id ADMIN
//? delete /users/me CLIENTE
//? delete /users/:id ADMIN
 */